import { Draggable } from '@hello-pangea/dnd';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Paper, Typography } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import React from 'react';

interface TaskCardProps {
    task: {
        id: string;
        content: string;
    };
    index: number;
    onDelete: (_: string) => void;
    backgroundColor: {
        light: string;
        dark: string;
    };
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  index,
  onDelete,
  backgroundColor,
}) => {
  const { mode } = useColorScheme();
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            p: 2,
            mb: 1,
            bgcolor: () => {
              if (mode == 'dark') return backgroundColor.dark;
              else if (mode == 'light')
                return backgroundColor.light;
            },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography fontWeight="bold">{task.content}</Typography>
          <IconButton size="small" onClick={() => onDelete(task.id)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Paper>
      )}
    </Draggable>
  );
};

export default TaskCard;
