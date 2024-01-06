import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface NodeEditorProps {
    title: string;
    onClose: () => void;
    position: { top: number; left: number };
}

const NodeEditor: React.FC<NodeEditorProps> = ({ title, onClose, position }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                padding: 2,
                backgroundColor: '#1C4C82',
                border: '1px solid #1C4C82',
                borderRadius: 5,
                // display: showSettings ? 'block' : 'none',
                fontFamily: 'Poppins',
                // scale: '.85'
            }}
        >
            <Typography variant="h1" sx={{ marginBottom: 1, marginX: 1, color: '#fff', fontSize: '1.75rem' }}>
                {title}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 1, marginX: 1, color: '#879FBA', fontSize: '.75rem', fontWeight: '500', leadingTrim: 'both', textEdgde: 'cap' }}>
                Double Click to Rename
            </Typography>
            <Box sx={{
                backgroundColor: '#fff',
                padding: 2,
                zIndex: 10,
                position: 'relative'
            }}>
                <Typography variant="h2" sx={{ marginTop: 1, color: '#7794B4', fontSize: '1rem', fontWeight: '500' }}>
                    Width
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontSize: '1.35rem', fontWeight: '600', color: '#333' }}>Max</Typography>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        InputProps={{
                            // inputProps: {
                            //     pattern: '^\\d*\\.?\\d*$',
                            // },
                            // endAdornment: <span>ft</span>,
                            style: { backgroundColor: '#f2f2f2', fontSize: '1rem', border: 'none', width: '70px', height: '35px', textAlign: 'center' },
                        }}
                    />
                    <Typography variant="subtitle1" sx={{ fontSize: '1.35rem', fontWeight: '600', color: '#333', marginLeft: '2rem' }}>Min</Typography>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        InputProps={{
                            // inputProps: {
                            //     pattern: '^\\d*\\.?\\d*$',
                            // },
                            // endAdornment: <span>ft</span>,
                            style: { backgroundColor: '#f2f2f2', fontSize: '1rem', border: 'none', width: '70px', height: '35px', textAlign: 'center' },
                        }}
                    />
                </Box>
                <Typography variant="h2" sx={{ marginTop: 1, color: '#7794B4', fontSize: '1rem', fontWeight: '500' }}>
                    Height
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontSize: '1.35rem', fontWeight: '600', color: '#333' }}>Max</Typography>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        InputProps={{
                            // inputProps: {
                            //     pattern: '^\\d*\\.?\\d*$',
                            // },
                            // endAdornment: <span>ft</span>,
                            style: { backgroundColor: '#f2f2f2', fontSize: '1rem', border: 'none', width: '70px', height: '35px', textAlign: 'center' },
                        }}
                    />
                    <Typography variant="subtitle1" sx={{ fontSize: '1.35rem', fontWeight: '600', color: '#333', marginLeft: '2rem' }}>Min</Typography>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        InputProps={{
                            // inputProps: {
                            //     pattern: '^\\d*\\.?\\d*$',
                            // },
                            // endAdornment: <span>ft</span>,
                            style: { backgroundColor: '#f2f2f2', fontSize: '1rem', border: 'none', width: '70px', height: '35px', textAlign: 'center' },
                        }}
                    />
                </Box>
                <Typography variant="h2" sx={{ marginTop: 1, color: '#7794B4', fontSize: '1rem', fontWeight: '500' }}>
                    Ratio
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontSize: '1.35rem', fontWeight: '600', color: '#333' }}>Max</Typography>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        InputProps={{
                            // inputProps: {
                            //     pattern: '^\\d*\\.?\\d*$',
                            // },
                            // endAdornment: <span>ft</span>,
                            style: { backgroundColor: '#f2f2f2', fontSize: '1rem', border: 'none', width: '70px', height: '35px', textAlign: 'center' },
                        }}
                    />
                    <Typography variant="subtitle1" sx={{ fontSize: '1.35rem', fontWeight: '600', color: '#333', marginLeft: '2rem' }}>Min</Typography>
                    <TextField
                        variant="outlined"
                        margin="dense"
                        InputProps={{
                            // inputProps: {
                            //     pattern: '^\\d*\\.?\\d*$',
                            // },
                            // endAdornment: <span>ft</span>,
                            style: { backgroundColor: '#f2f2f2', fontSize: '1rem', border: 'none', width: '70px', height: '35px', textAlign: 'center' },
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center', marginTop: 2, justifyContent: 'space-between' }}>
                    <Button onClick={onClose} variant="text" sx={{
                        color: '#1C4C82', textTransform: 'none', fontSize: '1rem', fontFamily: "Poppins", letterSpacing: '.25px', padding: 0
                    }}>Hide Dimensions</Button>
                    <Button variant="text" sx={{
                        color: '#ED4337', textTransform: 'none', fontSize: '1rem', fontFamily: "Poppins", letterSpacing: '.25px', padding: 0
                    }}>Delete Node</Button>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '50px',
                    height: '50px',
                    rotate: '45deg',
                    position: 'absolute',
                    backgroundColor: '#1C4C82',
                    borderRadius: '5px',
                    top: '50%',
                    left: '-5%',
                    zIndex: 2,
                    // transform: 'translate(235%, 35%)',
                }}
            />
        </Box>
    );
};

export default NodeEditor;
