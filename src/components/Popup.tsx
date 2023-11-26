import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography, InputAdornment, FormControl, OutlinedInput } from '@mui/material';
import EditableText from './EditableText';

interface Props {
  setPopupToFalse: (minWidth?: number, maxWidth?: number, minHeight?: number, maxHeight?: number, label?: string, dlt?: boolean) => void;
  label?: string;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}

function Popup({ setPopupToFalse, label, minWidth, maxWidth, minHeight, maxHeight }: Props) {
  interface WidthValues {
    widthMin?: number;
    widthMax?: number;
  }
  interface HeightValues {
    heightMin?: number;
    heightMax?: number;
  }

  const [widthValues, setWidthValues] = useState<WidthValues>({ widthMin: minWidth, widthMax: maxWidth });
  const [heightValues, setHeightValues] = useState<HeightValues>({ heightMin: minHeight, heightMax: maxHeight });
  const [open, setOpen] = useState(true);

  const handleWidthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setWidthValues({
      ...widthValues,
      [name]: value,
    });
  };
  const handleHeightChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setHeightValues({
      ...heightValues,
      [name]: value,
    });
  };

  const labelCallback = (newLabel?: string) => {
    label = newLabel;
  }

  const handleClose = () => {
    setOpen(false);
    setPopupToFalse(widthValues.widthMin, widthValues.widthMax, heightValues.heightMin, heightValues.heightMax, label);
  };
  
  const handleDelete = () => {
    setOpen(false);
    setPopupToFalse(widthValues.widthMin, widthValues.widthMax, heightValues.heightMin, heightValues.heightMax, label, true);
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose} PaperProps={{ style: { border: 8, borderColor: "#1C4C82", borderRadius: 10, borderStyle: 'solid' } }}>
        <DialogTitle bgcolor="#1C4C82" color="white" sx={{ pt: 0.5, pb: 1, px: 2 }}>
          <EditableText initialText={label} setLabel={labelCallback} />
        </DialogTitle>
        <DialogContent sx={{ py: 0 }}>
          <DialogContentText mt={2} color={"#879FBA"}>
            Width
          </DialogContentText>
          <Box display="flex" alignItems="center">
            <Box
              component="form"
              display="flex"
              alignItems="center"
              gap={2}
              autoComplete="off">
              <Typography>
                Max
              </Typography>
              {/* <TextField
                id="max-width"
                name="widthMax"
                type="number"
                variant="outlined"
                size='small'
                value={widthValues.widthMax}
                sx={{ width: '80px', bgcolor: '#F2F2F2' }}
                onChange={handleWidthChange}
              /> */}
              <FormControl
                variant="outlined"
                sx={{ width: '6rem', bgcolor: '#F2F2F2' }}
              >
                <OutlinedInput
                  size='small'
                  id="max-width"
                  name="widthMax"
                  type="number"
                  value={widthValues.widthMax}
                  onChange={handleWidthChange}
                  endAdornment={<InputAdornment position="end">ft</InputAdornment>}
                />
              </FormControl>
            </Box>
            <Box component="form" display="flex" alignItems="center" gap={2} mx={2} autoComplete="off">
              <Typography>
                Min
              </Typography>
              <FormControl 
                variant="outlined"
                sx={{ width: '6rem', bgcolor: '#F2F2F2' }}
                >
                <OutlinedInput
                  id="min-width"
                  name="widthMin"
                  type="number"
                  size='small'
                  value={widthValues.widthMin}
                  onChange={handleWidthChange}
                  endAdornment={<InputAdornment position="end">ft</InputAdornment>}
                />
              </FormControl>
            </Box>
          </Box>
          <DialogContentText mt={2} color={"#879FBA"}>
            Height
          </DialogContentText>
          <Box display="flex" alignItems="center">
            <Box component="form" display="flex" alignItems="center" gap={2} autoComplete="off">
              <Typography>
                Max
              </Typography>
              <FormControl 
                sx={{ width: '6rem', bgcolor: '#F2F2F2' }}
                variant="outlined">
                <OutlinedInput
                  id="max-height"
                  name="heightMax"
                  type="number"
                  onChange={handleHeightChange}
                  size='small'
                  value={heightValues.heightMax}
                  endAdornment={<InputAdornment position="end">ft</InputAdornment>}
                />
              </FormControl>
            </Box>
            <Box component="form" display="flex" alignItems="center" gap={2} mx={2} autoComplete="off">
              <Typography>
                Min
              </Typography>
              <FormControl 
                sx={{ width: '6rem', bgcolor: '#F2F2F2' }}
                variant="outlined">
                <OutlinedInput
                  id="min-height"
                  name="heightMin"
                  type="number"
                  size='small'
                  value={heightValues.heightMin}
                  onChange={handleHeightChange}
                  endAdornment={<InputAdornment position="end">ft</InputAdornment>}
                />
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} sx = {{
            color: 'red',
            p: '10px 0 0 0'
          }}>Delete Node</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Popup;