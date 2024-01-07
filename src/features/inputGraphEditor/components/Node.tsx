import React, { useState } from 'react';
import { Typography, Paper, IconButton } from '@mui/material';
import { ZoomOutMap } from '@mui/icons-material';
import NodeEditor from './NodeEditor';
interface NodeProps {
    title: string;
}

const Node: React.FC<NodeProps> = ({ title }) => {
    const [editorOpen, setEditorOpen] = useState(false);
    const [editorPosition, setEditorPosition] = useState({ x: 0, y: 0 });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setEditorOpen(true);
        const rect = event.currentTarget.getBoundingClientRect();
        setEditorPosition({
            x: rect.left + 175, // Adjust the X position as needed
            y: rect.top + rect.height / 2 - 225 // Adjust the Y position as needed
        });
    };

    const handleClose = () => {
        setEditorOpen(false);
    };


    return (
        <>
            <Paper
                onClick={handleClick}
                sx={{
                    position: 'relative',
                    zIndex: 10,
                    // transform: 'translate(45%, 172%)',
                    width: 125,
                    height: 125,
                    borderRadius: '50%',
                    backgroundColor: '#1C4C82',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover .subtag': {
                        opacity: 0.75,
                    },
                    '&:hover': {
                        opacity: 0.95,
                    },
                    '&:hover .expandIcon': {
                        top: '-10px',
                        right: '-20px',
                        opacity: 1
                    }
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: '#fff',
                        fontSize: '1rem',
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                    }}
                >
                    {title}
                </Typography>
                {!editorOpen && (<><Typography
                    variant="subtitle2"
                    className="subtag"
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: '#fff',
                        padding: 1,
                        borderRadius: 5,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        fontFamily: 'Poppins',
                        fontSize: '0.7rem',
                        fontWeight: 'light',
                        zIndex: 10
                    }}
                >
                    Click
                </Typography>
                    <IconButton
                        className='expandIcon'
                        sx={{
                            position: 'absolute',
                            top: '25%',
                            right: '25%',
                            backgroundColor: '#1C4C82',
                            zIndex: -10,
                            opacity: 0,
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <ZoomOutMap sx={{ fontSize: 'large', color: 'white' }} />
                    </IconButton></>)}
            </Paper>
            {editorOpen && (
                <NodeEditor
                    title={title}
                    onClose={handleClose}
                    position={{ top: editorPosition.y, left: editorPosition.x }}
                />
            )}        </>
    );
};

export default Node;
