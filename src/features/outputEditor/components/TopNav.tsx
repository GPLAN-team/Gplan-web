import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Logo from '../../../assets/logo-svg.svg';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ShowInputIcon from '../../../assets/ShowInputIcon.svg'
const TopNav: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isComponentVisible, setComponentVisible] = useState(false);
    const [isRenameMode, setRenameMode] = useState(false);
    const [documentTitle, setDocumentTitle] = useState('Untitled Document 1');

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleComponentButtonClick = () => {
        setComponentVisible(true);
    };

    const handleRenameClick = () => {
        setRenameMode(true);
    };

    const handleDocumentTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDocumentTitle(event.target.value);
    };

    const handleTitleDoubleClick = () => {
        setRenameMode(true);
    };

    const handleTitleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' && documentTitle !== "") {
            setRenameMode(false);
        }
    };

    const handleTitleComplete = () => {
        if (documentTitle !== '') {
            setRenameMode(false);
        }
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{ backgroundColor: "white", borderRadius: '1px', boxShadow: "0px 0px 24.883197784423828px 0px #03222C1A" }}>
                <IconButton sx={{ backgroundColor: "#1C4C82", padding: '.5rem 1rem', borderRadius: '6px', '&:hover': { backgroundColor: "#1C4C82" } }} onClick={handleMenuOpen}>
                    <img src={Logo} alt="GPlan" />
                    <ExpandMoreIcon sx={{ color: 'white', marginLeft: '8px', fontWeight: 200 }} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>Go To All Files</MenuItem>
                    <MenuItem onClick={handleMenuClose}>New File</MenuItem>
                </Menu>
                <Button sx={{
                    backgroundColor: 'inherit', color: '#333333', fontFamily: "Montserrat", fontSize: '1rem', fontWeight: 600, textTransform: 'none', marginLeft: '36px', padding: '.5rem 1rem'
                }
                } onClick={handleComponentButtonClick}>
                    Assets
                </Button>
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', color: 'black', fontFamily: 'Montserrat', fontSize: 16, fontWeight: 600 }} onDoubleClick={handleTitleDoubleClick}>
                    {isRenameMode ? (
                        <>
                            <input type="text" value={documentTitle} onChange={handleDocumentTitleChange} onKeyPress={handleTitleKeyPress} onBlur={handleTitleComplete} style={{ border: 'none', outline: 'none', minWidth: '150px', borderBottom: '2px solid black', color: 'black', fontFamily: 'Montserrat', fontSize: 16, fontWeight: 600 }} />
                            <DoneRoundedIcon sx={{ marginLeft: '8px', verticalAlign: 'middle', cursor: 'pointer' }} onClick={handleTitleComplete} />
                        </>
                    ) : (
                        <>
                            {documentTitle}
                            <EditOutlinedIcon sx={{ marginLeft: '8px', verticalAlign: 'middle', cursor: 'pointer' }} onClick={handleTitleDoubleClick} />
                        </>
                    )}
                </Typography>
                <Button sx={{ backgroundColor: '#1C4C82', padding: '.75rem 1rem', borderRadius: '5px', '&:hover': { backgroundColor: '#1C4C82' } }} onClick={() => console.log('Button on the right clicked')}>
                    <img src={ShowInputIcon} alt="Show Input" />
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default TopNav;
