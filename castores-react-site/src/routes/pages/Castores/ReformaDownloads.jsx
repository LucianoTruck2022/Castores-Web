import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import { useLangContex } from "../../../hooks/contex/LangContex";
import { TITLE } from "../../../helpers/configs";
import { Typography, Button } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import DownloadFree from "./DownloadFree";
import DownloadPatreon from "./DownloadPatreon";
import DownloadOther from "./DownloadOther";

const ReformaDownloads = () => {
    document.title = TITLE + " | Downloads";
    const navigate = useNavigate();
    const { themeTatailwind } = useDarkMode();
    const { lang } = useLangContex();

    return (
        <div className="flex flex-col items-center mr-3 ml-3 mb-10">
            <div className="relative flex flex-col items-center max-w-7xl w-full">
                <div className="absolute z-0 w-full h-full max-w-lg top-0 left-0 right-0 bottom-0 m-auto reformaSection rounded-2xl blur-2xl drop-shadow-xs"></div>
                <Typography
                    className="z-10"
                    color={themeTatailwind.primary.color}
                    variant="h4"
                >
                    <b>{lang.downloads.title}</b>
                </Typography>
                <Typography
                    className="z-10"
                    color={themeTatailwind.primary.color}
                    variant="body1"
                >
                    {lang.downloads.description}
                </Typography>
            </div>
            <div className="flex justify-start max-w-5xl w-full mt-5">
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<ArrowBackRoundedIcon />}
                    onClick={() => navigate("/")}
                >
                    {lang.downloads.back_btn}
                </Button>
            </div>
            <DownloadFree />
            <DownloadPatreon />
            <DownloadOther />
        </div>
    );
};

export default ReformaDownloads;
