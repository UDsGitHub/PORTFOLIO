export enum SelectedPage {
  Home = "home",
  About = "about",
  Experience = "experience",
  Projects = "projects",
  Contact = "contact",
}

export type ProjectType = {
  img: string;
  title: string;
  desc: string;
  tech: string[];
  git: string;
  external: string;
};