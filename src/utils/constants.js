const YOUTUBE_API_KEY = "AIzaSyBYA8-5t8c7yzotPeD7S2bJIoIDC3jPshk";

export const POPULAR_VIDEO_URL =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUTUBE_API_KEY;

export const QUERY_SEARCH_DATA =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  YOUTUBE_API_KEY +
  "&q=";

export const VIDEO_SUGGESTION_URL =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const VIDEO_SUGGESTION_URL =
//   "https://serpapi.com/search.json?engine=google_autocomplete&api_key=acb4d9f4b082110a4b857beab73132159811e6dee52545f49296aec5fcef319f&q=";

export const LIVE_CHAT_MSG_OFFSET = 10;
