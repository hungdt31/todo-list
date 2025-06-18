import React, { useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import { Box, Typography, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import TaskCard from '@/components/todo/task';
import type { ColumnMap, TaskMap } from '@/types/todo';
import { todoHelper } from '@/helpers/todo';
import { initialTasks, initialColumns } from '@/constants/todo';
import { useColorScheme } from '@mui/material/styles';

const TodoBoard: React.FC = () => {
    const { mode } = useColorScheme();
    const [tasks, setTasks] = useState<TaskMap>(initialTasks);
    const [columns, setColumns] = useState<ColumnMap>(initialColumns);
    const [newTaskText, setNewTaskText] = useState<string>('');
    const [addingToColumn, setAddingToColumn] = useState<string | null>(null);

    const handleDragEnd = (result: DropResult): void => {
        const { destination, source, draggableId } = result;

        // If there's no destination or if dropped in the same place
        if (
            !destination ||
            (destination.droppableId === source.droppableId &&
                destination.index === source.index)
        ) {
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
        Object.keys(updatedColumns).forEach((columnId) => {
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

    return (
        <Box
            sx={{
                display: 'flex',
                p: 1,
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'baseline',
            }}
        >
            <DragDropContext onDragEnd={handleDragEnd}>
                {Object.values(columns).map((column) => (
                    <Box
                        key={column.id}
                        sx={{
                            width: 300,
                            m: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            bgcolor: (_) => {
                                if (mode == 'light')
                                    return todoHelper.getLightColumnColor(
                                        column.id
                                    );
                                else if (mode == 'dark')
                                    return todoHelper.getDarkColumnColor(
                                        column.id
                                    );
                            },
                            borderRadius: 2,
                            overflow: 'hidden',
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                p: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    bgcolor: (_) =>
                                        mode == 'light'
                                            ? todoHelper.getSecondaryColor(
                                                  column.id
                                              )
                                            : todoHelper.getPrimaryColor(
                                                  column.id
                                              ),
                                    paddingX: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: 1,
                                    gap: 1,
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.id === 'done' ? (
                                    <LibraryAddCheckIcon fontSize="small" />
                                ) : null}
                                {column.title}
                            </Box>
                            <Typography
                                sx={{
                                    color: todoHelper.getPrimaryColor(
                                        column.id
                                    ),
                                }}
                            >
                                {column.taskIds.length > 0 &&
                                    ` ${column.taskIds.length}`}
                            </Typography>
                        </Typography>

                        <Droppable droppableId={column.id}>
                            {(provided) => (
                                <Box
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    sx={{
                                        flexGrow: 1,
                                        minHeight: 100,
                                        p: 1,
                                    }}
                                >
                                    {column.taskIds.map((taskId, index) => {
                                        const task = tasks[taskId];
                                        const backgroundColor = {
                                            dark: todoHelper.getPrimaryColor(
                                                column.id
                                            ),
                                            light: '#ffff',
                                        };
                                        return task ? (
                                            <TaskCard
                                                key={task.id}
                                                task={task}
                                                index={index}
                                                onDelete={deleteTask}
                                                backgroundColor={
                                                    backgroundColor
                                                }
                                            />
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
                                    onChange={(e) =>
                                        setNewTaskText(e.target.value)
                                    }
                                    placeholder="Enter task title"
                                    variant="outlined"
                                    sx={{
                                        mb: 1,
                                        '& .MuiOutlinedInput-root': {
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
                                variant="outlined"
                                sx={{
                                    m: 1,
                                    mt: 0,
                                    color: todoHelper.getPrimaryColor(
                                        column.id
                                    ),
                                    justifyContent: 'flex-start',
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                    },
                                    borderRadius: 2,
                                    textTransform: 'capitalize',
                                    borderColor: todoHelper.getPrimaryColor(
                                        column.id
                                    ),
                                }}
                                onClick={() => setAddingToColumn(column.id)}
                            >
                                New task
                            </Button>
                        )}
                    </Box>
                ))}
            </DragDropContext>
        </Box>
    );
};

export default TodoBoard;
