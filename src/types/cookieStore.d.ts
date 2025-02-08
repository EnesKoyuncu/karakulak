export interface Cookie {
  name: string;
  value: string;
  expires?: Date;
  sameSite?: "lax" | "strict" | "none";
  secure?: boolean;
}

export interface CookieStore {
  get(name: string): Promise<Cookie | undefined>;
  set(cookie: Cookie): Promise<void>;
}

declare global {
  interface Window {
    cookieStore?: CookieStore;
  }
}
