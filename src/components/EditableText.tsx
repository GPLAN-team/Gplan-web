import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

interface Props{
  initialText?: string,
  setLabel: (text?: string) => void,
}

function EditableText({initialText, setLabel} : Props) {
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
    setLabel(text);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Box onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <TextField
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          InputProps={{ style: { color: 'white' } }}
        />
      ) : (<>
        <Box display="flex" alignItems="space-around" flexDirection="column"><Typography variant='h4'>{text}</Typography>
          <Typography variant='caption'>{'Double click to edit'}</Typography>
        </Box>
      </>
      )}
    </Box>
  );
};

export default EditableText;
