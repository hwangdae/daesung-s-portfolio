export interface ProjectType {
  id: string;
  title: string;
  description: string;
  tags: string[];
  detail?: ProjectDetailType;
}

export interface ProjectDetailType {
  features: {
    title: string;
    items: string[];
  }[];
  techStacks: { title: string; description: string }[];
  works: {
    title: string;
    thinking: string;
    description: string;
  }[];
  troubleShooting: {
    title: string;
    trouble: {
      title: string;
      content: string[];
    };
    cause: {
      title: string;
      content: string[];
    };
    solution: {
      title: string;
      content: string[];
    };
  }[];
}
