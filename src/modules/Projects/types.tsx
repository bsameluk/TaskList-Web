export interface Task {
  id: string;
  name: string;
  }

export interface Project {
  id: string;
  name: string;
}

export interface ProjectsData {
  projects: Project[];
}

export interface TaskData {
  tasks: Task[];
}
