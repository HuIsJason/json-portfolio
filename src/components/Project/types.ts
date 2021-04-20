export default interface ProjectProps {
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
  projectLink?: string;
  isLast?: boolean;
}
