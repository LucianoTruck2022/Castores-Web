import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import { useLangContex } from "../hooks/contex/LangContex";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import TextField from "@mui/material/TextField";

// icons
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CollectionsIcon from "@mui/icons-material/Collections";
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
//

// img
import logo from "../static/img/icons/logo_castores.webp";

import MovileHeaderOptions from "./MovileHeaderOptions";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { darkMode, setDarkMode } = useDarkMode();
    const { lang, changeLang, langCode } = useLangContex();
    const navigate = useNavigate();

    const HeaderOptions = [
        {
            icon: HomeRoundedIcon,
            text: lang.sys.header.home,
            url: "/",
        },
        {
            text: lang.sys.header.events,
            icon: EventAvailableRoundedIcon,
            url: "/events",
        },
        {
            text: lang.sys.header.company_options.news,
            icon: NewspaperRoundedIcon,
            url: "/news",
        },
        {
            text: lang.sys.header.gallery,
            icon: CollectionsIcon,
            url: "/gallery",
        },
        {
            text: lang.sys.header.company_options.partners,
            icon: HandshakeRoundedIcon,
            url: "/news/43357",
        },
        {
            text: lang.sys.header.company_options.aplly,
            icon: HowToRegRoundedIcon,
            url: "/news/43354",
        },
        {
            text: lang.sys.header.contact,
            icon: AlternateEmailRoundedIcon,
            url: "/contact",
        },
    ];

    const BusineOptions = [
        {
            text: lang.sys.header.company_options.about_us,
            icon: InfoRoundedIcon,
            url: "/news/28042",
        },
        {
            text: lang.sys.header.company_options.employees,
            icon: AssignmentIndRoundedIcon,
            url: "/employees",
        },
        {
            text: lang.sys.header.company_options.hall_of_fame,
            icon: FavoriteRoundedIcon,
            url: "/hall-of-fame",
        },
        {
            text: lang.sys.header.company_options.staff_vtc,
            icon: BadgeRoundedIcon,
            url: "/staff-gerencia-manager",
        },/*
        {
            text: lang.sys.header.company_options.how_to_use,
            icon: InfoIcon,
            url: "/how-to-reforma",
        },*/
    ];

    const [anchorElCompany, setAnchorElCompany] = useState(null);
    const openCompany = Boolean(anchorElCompany);

    const handleClickCompany = (event) => {
        setAnchorElCompany(event.currentTarget);
    };
    const handleCloseCompany = () => {
        setAnchorElCompany(null);
    };

    //////////////////////////////////////////

    const [AnchorElSettings, setAnchorElSettings] = useState(null);
    const openSettings = Boolean(AnchorElSettings);

    const handleClickSettings = (event) => {
        setAnchorElSettings(event.currentTarget);
    };
    const handleCloseSettings = () => {
        setAnchorElSettings(null);
    };

    return (
        <nav
            className={`pb-28 sm:pb-28 md:pb-28 ${
                darkMode ? "bg-neutral-900" : "bg-white"
            }`}
        >
            <AppBar position="fixed">
                <div className="flex absolute justify-center top-3 w-full">
                    <img
                        className="drop-shadow-2xl w-32"
                        src={logo}
                        alt="Los Andes VTC logo"
                    />
                </div>
                <MovileHeaderOptions
                    options={HeaderOptions}
                    openDrawer={menuOpen}
                    setOpenDrawer={setMenuOpen}
                    drawerOptions={BusineOptions}
                />
                <Toolbar disableGutters>
                    <div className="flex md:hidden">
                        <IconButton
                            aria-label="Menu"
                            color="inherit"
                            size="large"
                            onClick={() => setMenuOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Divider
                            sx={{ mr: 1 }}
                            orientation="vertical"
                            variant="middle"
                            flexItem
                        />
                    </div>
                    <div className="md:flex ml-5 hidden justify-start w-full">
                        {HeaderOptions.slice(0, 4).map((option, index) => (
                            <div className="flex" key={index}>
                                <Button
                                    startIcon={<option.icon />}
                                    color="inherit"
                                    onClick={() => navigate(option.url)}
                                >
                                    {option.text}
                                </Button>
                                <Divider
                                    sx={{ mr: 1 }}
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />
                            </div>
                        ))}
                        <Button
                            color="inherit"
                            id="basic-button"
                            aria-controls={
                                openCompany ? "basic-menu" : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={openCompany ? "true" : undefined}
                            onClick={handleClickCompany}
                            onMouseEnter={(event) => handleClickCompany(event)}
                            startIcon={<BusinessRoundedIcon />}
                            endIcon={<KeyboardArrowDownRoundedIcon />}
                        >
                            {lang.sys.header.company}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorElCompany}
                            open={openCompany}
                            onClose={handleCloseCompany}
                        >
                            <div onMouseLeave={() => handleCloseCompany()}>
                                {BusineOptions.map((option, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            navigate(option.url);
                                            handleCloseCompany();
                                        }}
                                    >
                                        <ListItemIcon>
                                            {<option.icon />}
                                        </ListItemIcon>
                                        <ListItemText primary={option.text} />
                                    </MenuItem>
                                ))}
                            </div>
                        </Menu>
                        <Divider
                            sx={{ mr: 1 }}
                            orientation="vertical"
                            variant="middle"
                            flexItem
                        />
                    </div>

                    <div className="md:flex hidden justify-end w-full">
                        <Divider
                            sx={{ mr: 1 }}
                            orientation="vertical"
                            variant="middle"
                            flexItem
                        />
                        {HeaderOptions.slice(4).map((option, index) => (
                            <div className="flex" key={index}>
                                <Button
                                    startIcon={<option.icon />}
                                    color="inherit"
                                    onClick={() => navigate(option.url)}
                                >
                                    {option.text}
                                </Button>
                                <Divider
                                    sx={{ mr: 1 }}
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full mr-5 justify-end md:w-auto">
                        <IconButton
                            onClick={handleClickSettings}
                            color="inherit"
                            aria-label="settings"
                        >
                            <SettingsIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={AnchorElSettings}
                            open={openSettings}
                            onClose={handleCloseSettings}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                        >
                            <MenuItem onClick={() => setDarkMode(!darkMode)}>
                                <ListItemIcon>
                                    {darkMode ? (
                                        <LightModeIcon />
                                    ) : (
                                        <DarkModeIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText>
                                    {darkMode
                                        ? lang.sys.general_settings
                                              .switch_lightmode
                                        : lang.sys.general_settings
                                              .switch_darkmode}
                                </ListItemText>
                            </MenuItem>
                            <Divider variant="middle" />
                            <MenuItem className="flex flex-col gap-2">
                                <TextField
                                    value={langCode}
                                    select
                                    onChange={(event) =>
                                        changeLang(event.target.value)
                                    }
                                    fullWidth
                                    label={
                                        lang.sys.general_settings.lenguage.title
                                    }
                                    color="info"
                                >
                                    <MenuItem value="es">
                                        <ListItemText>
                                            {
                                                lang.sys.general_settings
                                                    .lenguage.spanish
                                            }
                                        </ListItemText>
                                    </MenuItem>
                                    <MenuItem value="en">
                                        <ListItemText>
                                            {
                                                lang.sys.general_settings
                                                    .lenguage.english
                                            }
                                        </ListItemText>
                                    </MenuItem>
                                </TextField>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </nav>
    );
};

export default Header;
