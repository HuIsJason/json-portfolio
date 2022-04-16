export interface Education {
  institution: string;
  degree: string;
  program: string;
  duration: string;
}

export interface Skills {
  [skillCategory: string]: string[];
}
