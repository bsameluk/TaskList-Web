import { Project } from "../../types";

const ListView: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col gap-4">
      {project.tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => {}}
          className="item task-item"
        >
          <h2 className="text-lg font-medium text-gray-800">{task.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default ListView;
