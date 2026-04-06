const DEFAULT_BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL =
  'https://selecttime.appointy.com/appointy85l?service=srv_01KJCES1E93X3KBEW3GS7MHBRB';

export const BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL =
  import.meta.env.VITE_Book_an_Enterprise_Discovery_Call_Redirect_URL?.trim() ||
  DEFAULT_BOOK_AN_ENTERPRISE_DISCOVERY_CALL_REDIRECT_URL;
