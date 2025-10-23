export const BASE_URL: string;
export const XVIDEOS_PATTERN: RegExp;

export interface XVideosInfo {
  url: string;
  title: string;
  dlink?: string;
  thumbnail?: string;
  duration?: string;
  views?: number;
  rating?: string;
  likes?: string;
}

export interface XVideosResult {
  title: string;
  url: string;
}

export function xInfo(url: string): Promise<XVideosInfo>;
export function xsearch(query: string, page?: number): Promise<XVideosResult[]>;