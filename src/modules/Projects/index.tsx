import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS, GET_TASKS_BY_PROJECT } from './queries';
import { Project, ProjectsData, TaskData } from './types';
import ProjectsList from './components/ProjectsList';
import TasksList from './components/TasksList';

const Projects: React.FC = () => {
  // State
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Queries
  const { loading, data } = useQuery<ProjectsData>(GET_PROJECTS);
  const { loading: tasksLoading, data: tasksData } = useQuery<TaskData>(GET_TASKS_BY_PROJECT, {
    variables: { project_id: selectedProject?.id },
    skip: !selectedProject?.id
  });

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
      <TasksList
        tasksLoading={tasksLoading}
        tasksData={tasksData}
      />
    </>
  )
};

export default Projects;
