import { Typography } from "@mui/material";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import { useLangContex } from "../hooks/contex/LangContex";
import Divider from "@mui/material/Divider";

// icons
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";

const AttributesCard = () => {
    const { themeTatailwind } = useDarkMode();
    const { lang } = useLangContex();

    const Atributes = [
        {
            atribute: lang.sys.vtc_page.atributes.card1.title,
            description: lang.sys.vtc_page.atributes.card1.content,
            icon: <PeopleRoundedIcon fontSize="large" />,
        },
        {
            atribute: lang.sys.vtc_page.atributes.card2.title,
            description: lang.sys.vtc_page.atributes.card2.content,
            icon: <AdminPanelSettingsRoundedIcon fontSize="large" />,
        },
        {
            atribute: lang.sys.vtc_page.atributes.card3.title,
            description: lang.sys.vtc_page.atributes.card3.content,
            icon: <FlagRoundedIcon fontSize="large" />,
        },
        {
            atribute: lang.sys.vtc_page.atributes.card4.title,
            description: lang.sys.vtc_page.atributes.card4.content,
            icon: <EmojiEventsRoundedIcon fontSize="large" />,
        },
        {
            atribute: lang.sys.vtc_page.atributes.card5.title,
            description: lang.sys.vtc_page.atributes.card5.content,
            icon: <HandshakeRoundedIcon fontSize="large" />,
        },
    ];

    const AttributeCard = (id, atribute, description, icon) => {
        return (
            <div
                key={id}
                className={`flex flex-col ${themeTatailwind.secundary.main} max-w-lg rounded-lg border-2 border-transparent ${themeTatailwind.primary.border_color} shadow-2xl gap-3 m-4 p-4`}
            >
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

    const renderAttributesP1 = () => {
        const divAtributes = Atributes.slice(0, 3);
        return (
            <div className="grid grid-cols-1 md:grid-cols-3">
                {divAtributes.map((atribute, index) => {
                    return AttributeCard(
                        index,
                        atribute.atribute,
                        atribute.description,
                        atribute.icon
                    );
                })}
            </div>
        );
    };

    const renderAttributesP2 = () => {
        const divAtributes = Atributes.slice(3, 5);
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {divAtributes.map((atribute, index) => {
                    return AttributeCard(
                        index,
                        atribute.atribute,
                        atribute.description,
                        atribute.icon
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center">
            {renderAttributesP1()}
            {renderAttributesP2()}
        </div>
    );
};

export default AttributesCard;
