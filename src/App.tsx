import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import { Box, Typography, Paper, IconButton, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Header from '@/components/common/header';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

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

interface ColumnMap {
    [key: string]: Column;
}

interface TaskMap {
    [key: string]: Task;
}

// Initial data structure
const initialColumns: ColumnMap = {
    'todo': {
        id: 'todo',
        title: 'To Do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'doing': {
        id: 'doing',
        title: 'Doing',
        taskIds: [],
    },
    'done': {
        id: 'done',
        title: 'Done ✅',
        taskIds: [],
    },
};

const initialTasks: TaskMap = {
    'task-1': { id: 'task-1', content: 'Kéo thả card' },
    'task-2': { id: 'task-2', content: 'Đa ngôn ngữ' },
    'task-3': { id: 'task-3', content: 'React Query' },
    'task-4': { id: 'task-4', content: 'OneSignal (React-Onesignal)' },
};

const TodoBoard: React.FC = () => {
    const [tasks, setTasks] = useState<TaskMap>(initialTasks);
    const [columns, setColumns] = useState<ColumnMap>(initialColumns);
    const [newTaskText, setNewTaskText] = useState<string>('');
    const [addingToColumn, setAddingToColumn] = useState<string | null>(null);

    const handleDragEnd = (result: DropResult): void => {
        const { destination, source, draggableId } = result;

        // If there's no destination or if dropped in the same place
        if (!destination ||
            (destination.droppableId === source.droppableId &&
                destination.index === source.index)) {
            return;
        }

        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];

        // Moving within the same column
        if (sourceColumn === destColumn) {
            const newTaskIds = Array.from(sourceColumn.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...sourceColumn,
                taskIds: newTaskIds,
            };

            setColumns({
                ...columns,
                [newColumn.id]: newColumn,
            });
            return;
        }

        // Moving from one column to another
        const sourceTaskIds = Array.from(sourceColumn.taskIds);
        sourceTaskIds.splice(source.index, 1);
        const newSourceColumn = {
            ...sourceColumn,
            taskIds: sourceTaskIds,
        };

        const destTaskIds = Array.from(destColumn.taskIds);
        destTaskIds.splice(destination.index, 0, draggableId);
        const newDestColumn = {
            ...destColumn,
            taskIds: destTaskIds,
        };

        setColumns({
            ...columns,
            [newSourceColumn.id]: newSourceColumn,
            [newDestColumn.id]: newDestColumn,
        });
    };

    const deleteTask = (taskId: string): void => {
        // First find which column contains this task
        const updatedColumns = { ...columns };

        // Remove the task from any column that has it
        Object.keys(updatedColumns).forEach(columnId => {
            const column = updatedColumns[columnId];
            const taskIndex = column.taskIds.indexOf(taskId);

            if (taskIndex >= 0) {
                const newTaskIds = Array.from(column.taskIds);
                newTaskIds.splice(taskIndex, 1);
                updatedColumns[columnId] = {
                    ...column,
                    taskIds: newTaskIds,
                };
            }
        });

        // Remove the task from tasks object
        const updatedTasks = { ...tasks };
        delete updatedTasks[taskId];

        setColumns(updatedColumns);
        setTasks(updatedTasks);
    };

    const addNewTask = (columnId: string): void => {
        if (!newTaskText.trim()) return;

        // Create new task
        const newTaskId = `task-${Date.now()}`;
        const newTask = {
            id: newTaskId,
            content: newTaskText,
        };

        // Add task to tasks object
        const updatedTasks = {
            ...tasks,
            [newTaskId]: newTask,
        };

        // Add task to column
        const column = columns[columnId];
        const updatedColumn = {
            ...column,
            taskIds: [...column.taskIds, newTaskId],
        };

        setTasks(updatedTasks);
        setColumns({
            ...columns,
            [columnId]: updatedColumn,
        });
        setNewTaskText('');
        setAddingToColumn(null);
    };

    const getColumnColor = (columnId: string): string => {
        switch (columnId) {
            case 'todo':
                return '#4a2728';
            case 'doing':
                return '#513d1d';
            case 'done':
                return '#1d3b29';
            default:
                return '#333';
        }
    };

    const getHeaderColor = (columnId: string): string => {
        switch (columnId) {
            case 'todo':
                return '#c94848';
            case 'doing':
                return '#d8a13f';
            case 'done':
                return '#4caf50';
            default:
                return '#888';
        }
    };

    return (
        <>
            <Header/>
            <Box sx={{ display: 'flex', p: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                <DragDropContext onDragEnd={handleDragEnd}>
                    {Object.values(columns).map(column => (
                        <Box
                            key={column.id}
                            sx={{
                                width: 300,
                                m: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: getColumnColor(column.id),
                                borderRadius: 2,
                                overflow: 'hidden',
                            }}
                        >
                            <Box
                                sx={{
                                    p: 1,
                                    bgcolor: getHeaderColor(column.id),
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography variant="subtitle1" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    {column.id === 'done' ? (
                                        <>
                                            <LibraryAddCheckIcon fontSize="small" />
                                            Done
                                        </>
                                    ) : (
                                        column.title
                                    )}
                                    {column.taskIds.length > 0 && ` ${column.taskIds.length}`}
                                </Typography>
                            </Box>

                            <Droppable droppableId={column.id}>
                                {(provided) => (
                                    <Box
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        sx={{
                                            flexGrow: 1,
                                            minHeight: 100,
                                            p: 1
                                        }}
                                    >
                                        {column.taskIds.map((taskId, index) => {
                                            const task = tasks[taskId];
                                            return task ? (
                                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                                    {(provided) => (
                                                        <Paper
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            sx={{
                                                                p: 2,
                                                                mb: 1,
                                                                bgcolor: '#333333',
                                                                color: '#fff',
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center'
                                                            }}
                                                        >
                                                            <Typography>{task.content}</Typography>
                                                            <IconButton
                                                                size="small"
                                                                onClick={() => deleteTask(task.id)}
                                                                sx={{ color: '#ff5252' }}
                                                            >
                                                                <DeleteIcon fontSize="small" />
                                                            </IconButton>
                                                        </Paper>
                                                    )}
                                                </Draggable>
                                            ) : null;
                                        })}
                                        {provided.placeholder}
                                    </Box>
                                )}
                            </Droppable>

                            {addingToColumn === column.id ? (
                                <Box sx={{ p: 1 }}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={newTaskText}
                                        onChange={(e) => setNewTaskText(e.target.value)}
                                        placeholder="Enter task title"
                                        variant="outlined"
                                        sx={{
                                            mb: 1,
                                            '& .MuiOutlinedInput-root': {
                                                color: '#fff',
                                                '& fieldset': {
                                                    borderColor: '#555',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#777',
                                                },
                                            },
                                        }}
                                    />
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            onClick={() => addNewTask(column.id)}
                                        >
                                            Add
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            onClick={() => setAddingToColumn(null)}
                                        >
                                            Cancel
                                        </Button>
                                    </Box>
                                </Box>
                            ) : (
                                <Button
                                    startIcon={<AddIcon />}
                                    sx={{
                                        m: 1,
                                        color: '#aaa',
                                        justifyContent: 'flex-start',
                                        '&:hover': {
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                        }
                                    }}
                                    onClick={() => setAddingToColumn(column.id)}
                                >
                                    New page
                                </Button>
                            )}
                        </Box>
                    ))}
                </DragDropContext>
            </Box>
        </>
    );
};

export default TodoBoard;
