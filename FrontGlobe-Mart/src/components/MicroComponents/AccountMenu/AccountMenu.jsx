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
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import RoofingIcon from '@mui/icons-material/Roofing';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { mainTheme } from '../../../themes/mainTheme';
import { darkTheme } from '../../../themes/darkTheme';



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

                        <Box
                            sx={{
                                width: 32, // ancho de la miniatura
                                height: 32, // alto de la miniatura
                                borderRadius: '50%',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {profileInfo.image ?
                                <img
                                    src={profileInfo.image}
                                    alt="URL"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                /> : <Avatar sx={{ width: 32, height: 32 }}>{accountNameLetter()}</Avatar>}
                        </Box>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => {
                    handleClose()
                    setMainData(prevData => ({
                        ...prevData,
                        themeMode: prevData.themeMode === mainTheme ? darkTheme : mainTheme
                    }))
                }}>

                    <ListItemIcon>

                        {mainData.themeMode === mainTheme ? <Brightness4Icon fontSize='small' /> : <Brightness7Icon />}

                    </ListItemIcon>

                    {mainData.themeMode === mainTheme ? "Light mode" : "Dark mode"}

                </MenuItem>


                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <RocketLaunchIcon />
                    </ListItemIcon>
                    <Link to="/CustomerPage" style={{ textDecoration: 'none', color: 'inherit' }}>
                        My Orders </Link>
                </MenuItem>

                {profileInfo.role === "seller" &&
                    < MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <RoofingIcon />
                        </ListItemIcon>
                        <Link to={`/SellerHome/${profileInfo.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Seller Dashboard </Link>
                    </MenuItem>
                }

                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <ManageAccountsIcon />
                    </ListItemIcon>
                    <Link to="/Profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                        My Profile </Link>
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