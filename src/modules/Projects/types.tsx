export interface Task {
  id: string;
  name: string;
  }

export interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

export interface ProjectsData {
  projects: Project[];
}
