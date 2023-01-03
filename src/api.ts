export const GET_GOOGLE_TOKEN = (code: string) => `/auth/google?code=${code}`;
export const POST_MARKER = () => `/marker`;
export const DELETE_MARKER = (id: number) => `/marker/${id}`;
export const GET_MARKER_LIST = () => `/marker`;
export const GET_MARKER = (id: number) => `/marker/${id}`;
export const PUT_MARKER = (id: number) => `/marker/${id}`;

export const SEARCH_MARKER = (keyword: string) =>
  `https://ezoz-trip.com/marker/?keyword=${keyword}`;
