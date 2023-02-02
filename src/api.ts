const HOST = "https://ezoz-trip.com";

export const GET_GOOGLE_TOKEN = (code: string) =>
  `${HOST}/auth/google?code=${code}`;
export const POST_MARKER = `${HOST}/marker`;
export const DELETE_MARKER = (id: number) => `/marker/${id}`;
export const GET_MARKER_LIST = () => `/marker`;
export const GET_MARKER = (id: number) => `/marker/${id}`;
export const PUT_MARKER = (id: number) => `/marker/${id}`;

export const SEARCH_MARKER = (keyword: string) =>
  `${HOST}/marker/?keyword=${keyword}`;

export const GET_S3_URL = `${HOST}/upload`;
