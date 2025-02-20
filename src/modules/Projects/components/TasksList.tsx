import { useState } from "react";
import { Project } from "../types"
import ListView from "./TasksViews/ListView";
import GridView from "./TasksViews/GridView";

interface ViewModeComponentProps {
  viewMode: 'grid' | 'list';
  setViewMode: (viewMode: 'grid' | 'list') => void;
}
interface TaskItemsProps {
  project: Project | null;
  viewMode: 'grid' | 'list';
}

const TasksList: React.FC<{ project: Project | null }> = ({ project }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  return (
    <div className='tasks-list'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Tasks</h2>
        <ViewModeComponent viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      <TaskItems project={project} viewMode={viewMode} />
    </div>
  )
}

const ViewModeComponent: React.FC<ViewModeComponentProps> = ({ viewMode, setViewMode }) => {
  return (
    <div className='flex items-center gap-2'>
      <button
        onClick={() => setViewMode('list')}
        className={`${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'} px-4 py-2 rounded-md`}
      >
        List
      </button>
      <button
        onClick={() => setViewMode('grid')}
        className={`${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'} px-4 py-2 rounded-md`}
      >
        Grid
      </button>
    </div>
  )
}

const TaskItems: React.FC<TaskItemsProps> = ({ project, viewMode }) => {
  if (!project) return (
    <div>Please select a project</div>
  );
  if (project.tasks.length === 0) return (
    <div>No tasks</div>
  );
  return (
    viewMode === 'list'
      ? <ListView project={project} />
      : <GridView project={project} />
  )
}

export default TasksList
