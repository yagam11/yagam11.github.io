export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  intro: string;
  bio: string;
  interests: string[];
  experiences: Experience[];
  projects: Project[];
  contacts: ContactLink[];
  resumeUrl: string;
};
