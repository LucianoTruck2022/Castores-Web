import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import { useLangContex } from "../../../hooks/contex/LangContex";
import { useNavigate } from "react-router-dom";
import { TITLE } from "../../../helpers/configs";
import { Typography, Button, Divider } from "@mui/material";
import ReformaVtcCard from "./ReformaVtcCard";
import "../../../static/css/reformaGradient.css";

// images
import introImg from "../../../static/img/reforma/intro.webp";
import atribute1 from "../../../static/img/reforma/atribute1.webp";
import atribute2 from "../../../static/img/reforma/atribute2.webp";
import atribute3 from "../../../static/img/reforma/atribute3.webp";

// icons
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import BrandPatreonIcon from "../../../static/img/icons/BrandPatreonIcon";
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExploreIcon from "@mui/icons-material/Explore";
import DetailsIcon from "@mui/icons-material/Details";
import TerrainIcon from "@mui/icons-material/Terrain";
import CollectionsIcon from "@mui/icons-material/Collections";


const Reforma = () => {
    document.title = TITLE;
    const { themeTatailwind, darkMode } = useDarkMode();
    const { lang } = useLangContex();
    const navigate = useNavigate();
    const backGroud = darkMode ? "bg-[#2d4539]" : "bg-[#cefee6]";

    const Atributes = [
        {
            atribute: lang.home.info_cards.card1.title,
            description: lang.home.info_cards.card1.content,
            icon: <ExploreIcon fontSize="large" />,
            image: atribute1,
        },
        {
            atribute: lang.home.info_cards.card2.title,
            description: lang.home.info_cards.card2.content,
            icon: <DetailsIcon fontSize="large" />,
            image: atribute2,
        },
        {
            atribute: lang.home.info_cards.card3.title,
            description: lang.home.info_cards.card3.content,
            icon: <TerrainIcon fontSize="large" />,
            image: atribute3,
        },
    ];

    const AttributeCard = (id, atribute, description, icon, image) => {
        return (
            <div
                key={id}
                className={`flex flex-col ${themeTatailwind.secundary.main} max-w-lg rounded-lg border-2 border-transparent ${themeTatailwind.primary.border_color} shadow-2xl gap-3 p-4`}
            >
                <img
                    className="max-h-64 min-h-64 object-center object-cover rounded-xl shadow-lg"
                    src={image}
                    alt="intro"
                />
                <Typography
                    className="flex justify-center"
                    color={themeTatailwind.primary.color}
                >
                    {icon}
                </Typography>
                <Typography
                    className="flex justify-center"
                    color={themeTatailwind.primary.color}
                    variant="h6"
                >
                    {atribute}
                </Typography>
                <Divider />
                <div className="flex text-left gap-3">
                    <Typography
                        color={themeTatailwind.primary.color}
                        variant="subtitle2"
                    >
                        {description}
                    </Typography>
                </div>
            </div>
        );
    };

    const renderAtributes = () => {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {Atributes.map((atribute, index) => {
                    return AttributeCard(
                        index,
                        atribute.atribute,
                        atribute.description,
                        atribute.icon,
                        atribute.image
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center p-5 gap-5 mb-10">
            <div className="relative flex flex-col md:flex-row justify-center max-w-6xl w-full p-12 gap-4 m-5">
                <div
                    className={`absolute z-0 w-full h-full top-0 left-0 rounded-2xl ${backGroud} drop-shadow-2xl`}
                ></div>
                <img
                    className="max-h-64 z-10 rounded-xl shadow-lg"
                    src={introImg}
                    alt="intro"
                />
                <div className="flex z-10 flex-col justify-between">
                    <div className="flex flex-col gap-5">
                        <Typography
                            variant="h4"
                            color={themeTatailwind.primary.color}
                        >
                            <b>{lang.home.presentation.title}</b>
                        </Typography>
                        <Typography
                            variant="body1"
                            color={themeTatailwind.primary.color}
                        >
                            {lang.home.presentation.content}
                        </Typography>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-3 mt-2">
                        <Button
                            startIcon={<CollectionsIcon />}
                            variant="contained"
                            color="info"
                            size="large"
                            onClick={() => navigate("/gallery")}
                        >
                            {lang.home.presentation.gallery_btn}
                        </Button>
                        <div className="opacity-0 hidden md:inline col-span-1"></div>
                        <Button
                            startIcon={<PersonSearchIcon />}
                            variant="contained"
                            color="error"
                            size="large"
                            onClick={() => navigate("/reforma-staff")}
                        >
                            {lang.home.presentation.staff_btn}
                        </Button>
                        <Button
                            startIcon={<InstallDesktopIcon />}
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => navigate("/downloads")}
                        >
                            {lang.home.presentation.download_btn}
                        </Button>
                        <Button
                            startIcon={<BrandPatreonIcon />}
                            variant="contained"
                            color="secondary"
                            size="large"
                            href="https://www.patreon.com/eblem"
                            target="_blank"
                        >
                            {lang.home.presentation.patreon_btn}
                        </Button>
                        <Button
                            startIcon={<HelpOutlineIcon />}
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => navigate("/how-to-use")}
                        >
                            {lang.home.presentation.how_to_use_btn}
                        </Button>
                    </div>
                </div>
            </div>
            {renderAtributes()}
            <ReformaVtcCard />
        </div>
    );
};

export default Reforma;
