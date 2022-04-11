export interface About {
  name: string;
  position: string;
  status: string;
  previously: string[];
  school: string;
  interests: string[];
  email: string;
  phone: string;
}

interface Link {
  linkName: string;
  linkUrl: string;
}

export interface Links {
  LinkedIn: Link;
  GitHub: Link;
}
