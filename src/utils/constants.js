const YOUTUBE_API_KEY = "AIzaSyBYA8-5t8c7yzotPeD7S2bJIoIDC3jPshk";

export const POPULAR_VIDEO_URL =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUTUBE_API_KEY;

export const VIDEO_SUGGESTION_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";