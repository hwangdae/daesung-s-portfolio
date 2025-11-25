import { StaticImageData } from "next/image";

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  subDescription: string;
  preview?: { src: string }[];
  tags: string[];
  github: string;
  site?: string;
  detail: ProjectDetailType;
}

export interface ProjectDetailType {
  description?: string;
  features: {
    title: string;
    items: string[];
  }[];
  techStacks: { title: string; description: string }[];
  works: {
    title: string;
    thinking: string[];
    description: string[];
    blog?: string;
  }[];
  troubleShooting?: {
    id: string;
    title: string;
    trouble: {
      title: string;
      contents: string[];
    };
    cause: {
      title: string;
      contents: string[];
    };
    solution: {
      title: string;
      contents: string[];
    };
  }[];
}
