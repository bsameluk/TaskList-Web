import { useState } from "react";
import { TaskData } from "../types"
import ListView from "./TasksViews/ListView";
import GridView from "./TasksViews/GridView";

interface TasksListProps {
  tasksLoading: boolean;
  tasksData?: TaskData;
}
interface ViewModeComponentProps {
  viewMode: 'grid' | 'list';
  setViewMode: (viewMode: 'grid' | 'list') => void;
}
interface TaskItemsProps {
  tasksLoading: boolean;
  tasksData?: TaskData;
  viewMode: 'grid' | 'list';
}

const TasksList: React.FC<TasksListProps> = ({ tasksLoading, tasksData }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className='tasks-list'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Tasks</h2>
        <ViewModeComponent viewMode={viewMode} setViewMode={setViewMode} />
      </div>
      <TaskItems tasksLoading={tasksLoading} tasksData={tasksData} viewMode={viewMode} />
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

const TaskItems: React.FC<TaskItemsProps> = ({ tasksLoading, tasksData, viewMode }) => {
  if (!tasksData) return (
    <div>Please select a project</div>
  );
  if (tasksLoading) return (
    <div>Loading...</div>
  );
  if (tasksData?.tasks.length === 0) return (
    <div>No tasks</div>
  );
  return (
    viewMode === 'list'
      ? <ListView tasks={tasksData?.tasks || []} />
      : <GridView tasks={tasksData?.tasks || []} />
  )
}

export default TasksList
