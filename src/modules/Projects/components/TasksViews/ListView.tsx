import { Task } from "../../types";

interface ListViewProps {
  tasks: Task[];
}

const ListView: React.FC<ListViewProps> = ({ tasks }) => {
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
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
