import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Button } from '@mui/base';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../../../contexts/mainContext';
import { useContext, useEffect, useState } from 'react';
import { getOwnProfile } from '../../../services/userService'

export default function AccountMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()
    const { mainData, setMainData } = useContext(mainContext)
    const [profileInfo, setProfileInfo] = useState([])

    const loggingOut = () => {
        setMainData(prevData => ({
            ...prevData,
            logged: false
        }))
        navigate('/Login')
    }
    const accountNameLetter = () => {

        if (profileInfo.username) {
            return profileInfo.username[0].toUpperCase()
        }

    }

    useEffect(() => {

        const fetchData = async () => {

            const profileData = await getOwnProfile();
            setProfileInfo(profileData)
            console.log(profileData)
        }

        fetchData()

    }, [mainData.logged])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logOut = async () => {
        localStorage.removeItem("token")
        await loggingOut()

    }

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', alignContent: 'center', mr: 4 }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>{accountNameLetter()}</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar /> <Link to="/Profile" style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>

                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>

                    <Button
                        onClick={logOut}

                        style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            font: 'inherit',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}>
                        Log Out
                    </Button>


                </MenuItem>
            </Menu>
        </React.Fragment >
    );
}