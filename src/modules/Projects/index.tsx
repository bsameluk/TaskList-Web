import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from './queries';
import { Project, ProjectsData } from './types';
import ProjectsList from './components/ProjectsList';
import TasksList from './components/TasksList';

const Projects: React.FC = () => {
  const { loading, data } = useQuery<ProjectsData>(GET_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!data && loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  return (
    <>
      <ProjectsList
        projects={data?.projects || []}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <TasksList project={selectedProject} />
    </>
  )
};

export default Projects;
