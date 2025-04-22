const searchTerms = [
  "how to",
  "why does",
  "what is",
  "interesting fact",
  "curious fact",
  "learn quick",
  "did you know",
];

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "";

export const getRandomVideo = async () => {
  try {
    const randomTerm =
      searchTerms[Math.floor(Math.random() * searchTerms.length)];

    // Search for videos
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${randomTerm}&type=video&videoDuration=short&key=${YOUTUBE_API_KEY}`
    );

    const searchData = await searchResponse.json();

    if (!searchData.items?.length) {
      throw new Error("No videos found");
    }

    // Get random video from results
    const randomVideo =
      searchData.items[Math.floor(Math.random() * searchData.items.length)];

    // Get video details including duration
    const videoResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${randomVideo.id.videoId}&key=${YOUTUBE_API_KEY}`
    );

    const videoData = await videoResponse.json();
    const videoDetails = videoData.items[0];
    console.log("video details =", videoDetails);

    // Convert duration to mm:ss
    const duration = videoDetails.contentDetails.duration;
    const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);

    const minutes = match && match[1] ? parseInt(match[1]) : 0;
    const seconds = match && match[2] ? parseInt(match[2]) : 0;

    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    // Only return if under 3 minutes
    if (seconds <= 180) {
      return {
        id: randomVideo.id.videoId,
        title: videoDetails.snippet.title,
        duration: formattedTime,
        thumbnail: videoDetails.snippet.thumbnails.high.url,
      };
    }

    // Try again if video is too long
    return getRandomVideo();
  } catch (error) {
    throw new Error(`Failed to fetch video: ${error}`);
  }
};
