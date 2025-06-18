import type { ColumnMap, TaskMap } from '@/types/todo';
// Initial data structure
export const initialColumns: ColumnMap = {
    todo: {
        id: 'todo',
        title: 'To Do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    doing: {
        id: 'doing',
        title: 'Doing',
        taskIds: [],
    },
    done: {
        id: 'done',
        title: 'Done',
        taskIds: [],
    },
};

export const initialTasks: TaskMap = {
    'task-1': { id: 'task-1', content: 'Clean home' },
    'task-2': { id: 'task-2', content: 'Do homework' },
    'task-3': { id: 'task-3', content: 'Go shopping' },
    'task-4': { id: 'task-4', content: 'Cooking' },
};
