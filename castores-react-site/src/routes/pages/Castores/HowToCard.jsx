import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import { Typography, Divider } from "@mui/material";
import MuiMarkdown from "mui-markdown";
import "../../../static/css/markdown.css";

const HowToCard = ({ title, description, image }) => {
    const { themeTatailwind } = useDarkMode();

    return (
        <div
            className={`flex flex-col md:flex-row ${themeTatailwind.secundary.main} max-w-7xl w-full rounded-lg shadow-xl gap-3 m-4 p-4`}
        >
            <div className="flex justify-center items-center">
                <img
                    className="align-middle min-w-44 max-w-md w-max object-cover rounded-xl shadow-lg"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="flex flex-col w-full">
                <Typography
                    className="flex justify-center"
                    color={themeTatailwind.primary.color}
                    variant="h6"
                >
                    {title}
                </Typography>
                <Divider />
                <div
                    className={`${themeTatailwind.primary.text} markdown-body`}
                >
                    <MuiMarkdown>{description}</MuiMarkdown>
                </div>
            </div>
        </div>
    );
};

export default HowToCard;
