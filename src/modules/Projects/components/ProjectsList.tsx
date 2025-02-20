import { CheckIcon } from '@heroicons/react/20/solid';
import { Project } from '../types';

interface ProjectsListProps {
  projects: Project[];
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects, selectedProject, setSelectedProject }) => {
  return (
    <div className='mb-20'>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className='list-items'>
        {
          projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="item project-item"
            >
              <h2 className="text-lg font-medium text-gray-800 mr-2">{project.name}</h2>
              {selectedProject?.id === project.id
                ? <CheckIcon className="w-6 h-6 text-green-500" />
                : <CheckIcon className="w-6 h-6 text-gray-300" />
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsList
