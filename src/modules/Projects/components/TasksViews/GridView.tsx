import { Project } from "../../types";

const GridView: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {project.tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => {}}
          className='item task-item'
      >
          <h2 className="text-lg font-medium text-gray-800">{task.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default GridView;
