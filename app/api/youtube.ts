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

    // Convert duration to seconds
    const duration = videoDetails.contentDetails.duration;
    const match = duration.match(/PT(\d+)M(\d+)S/);
    const seconds = match ? parseInt(match[1]) * 60 + parseInt(match[2]) : 0;

    // Only return if under 3 minutes
    if (seconds <= 180) {
      return {
        id: randomVideo.id.videoId,
        title: videoDetails.snippet.title,
        duration: seconds,
        thumbnail: videoDetails.snippet.thumbnails.high.url,
      };
    }

    // Try again if video is too long
    return getRandomVideo();
  } catch (error) {
    throw new Error(`Failed to fetch video: ${error}`);
  }
};
