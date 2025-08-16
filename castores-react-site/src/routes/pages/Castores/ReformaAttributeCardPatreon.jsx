/* eslint-disable react/prop-types */
import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import { useLangContex } from "../../../hooks/contex/LangContex";
import { Typography, Divider, Button, Chip, Avatar } from "@mui/material";

// icons
import MapIcon from "@mui/icons-material/Map";
import UpdateIcon from "@mui/icons-material/Update";
import BrandPatreonIcon from "../../../static/img/icons/BrandPatreonIcon";
import BrandPayPalIcon from "../../../static/img/icons/BrandPayPalIcon";

// images
import ats from "../../../static/img/reforma/ats.webp";

const ReformaAttributeCardPatreon = ({
    title,
    description,
    image,
    gameVersion,
    reformaVersion,
    lastUpdate,
    patreonLink,
    paypalLink,
}) => {
    const { themeTatailwind } = useDarkMode();
    const { lang } = useLangContex();

    return (
        <div
            className={`relative flex flex-col ${themeTatailwind.secundary.main} max-w-md w-full rounded-lg shadow-xl gap-3 m-4 p-4`}
        >
            <div className="absolute top-6 right-6">
                <div className="flex flex-col gap-1">
                    <Chip
                        className="shadow-xl"
                        color="success"
                        label={<b>v{gameVersion}</b>}
                        avatar={<Avatar src={ats} alt="ats-game-icon" />}
                    />
                    <Chip
                        className="shadow-xl"
                        color="info"
                        label={<b>v{reformaVersion}</b>}
                        avatar={<MapIcon />}
                    />
                </div>
            </div>
            <img
                className="max-h-64 min-h-64 object-center object-cover rounded-xl shadow-lg"
                src={image}
                alt="intro"
            />
            <Typography
                className="flex justify-center"
                color={themeTatailwind.primary.color}
                variant="h6"
            >
                {title}
            </Typography>
            <Chip
                color="default"
                size="small"
                label={
                    <b>
                        {lang.downloads.atribute_card_exclusive.last_update}{" "}
                        <i>{lastUpdate}</i>
                    </b>
                }
                avatar={<UpdateIcon />}
            />
            <Divider />
            <div className="flex text-left h-full">
                <Typography
                    color={themeTatailwind.primary.color}
                    variant="subtitle2"
                >
                    {description}
                </Typography>
            </div>

            <div className="flex justify-center gap-5">
                <Button
                    startIcon={<BrandPatreonIcon />}
                    variant="contained"
                    color="success"
                    href={patreonLink}
                    target="_blank"
                >
                    {lang.downloads.atribute_card_exclusive.patreon_btn}
                </Button>
                <Button
                    startIcon={<BrandPayPalIcon />}
                    variant="contained"
                    color="info"
                    href={paypalLink}
                    target="_blank"
                >
                    {lang.downloads.atribute_card_exclusive.paypal_btn}
                </Button>
            </div>
        </div>
    );
};

export default ReformaAttributeCardPatreon;
