// Define proper type interfaces
interface Task {
    id: string;
    content: string;
}

interface Column {
    id: string;
    title: string;
    taskIds: string[];
}

export interface ColumnMap {
    [key: string]: Column;
}

export interface TaskMap {
    [key: string]: Task;
}
