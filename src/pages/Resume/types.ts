export interface Education {
  institution: string;
  degree: string;
  program: string;
  duration: string;
}

export interface Experience {
  position: string;
  duration: string;
  location: string;
  team: string;
  techStack: string[];
}

export interface Skills {
  [key: string]: string[];
}
