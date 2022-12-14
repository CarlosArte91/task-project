import React from 'react';
import { Task } from '../../models/task.class';
import { LEVEL } from '../../models/level.enum';
import TaskComponent from '../pure/task';

function TaskList() {
  const defaultTask = new Task('Example', 'default description', false, LEVEL.NORMAL);

  return (
    <div>
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskList;
