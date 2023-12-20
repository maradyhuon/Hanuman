import { StringLiteral } from "typescript";

export interface HeaderProps {
  title: string;
  url: string;
}

export interface SearchDropProps {
  title: string;
  url: string;
}

export interface ArchiveProps {
  image: string;
  title: string;
  version: string;
  date: string;
  collections: String;
  reference: String;
  duration: string;
  type: string;
}

export interface ThemasProps {
  title: string;
  url: string;
  image: string;
  description: string;
  content: string;
}

export interface FocusProps {
  title: string;
  url: string;
  image: string;
  description: string;
  content: string;
}
