export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  color?: string; // gradient color
}


export interface ProjectCardProps {
  project: ProjectProps;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}
