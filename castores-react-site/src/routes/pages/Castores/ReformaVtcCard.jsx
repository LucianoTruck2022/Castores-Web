import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import { useLangContex } from "../../../hooks/contex/LangContex";
import { Typography, Divider, Button } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MuiMarkdown from "mui-markdown";
import "../../../static/css/markdown.css";

// image
import intro from "../../../static/img/vtcCard.webp";

const ReformaVtcCard = () => {
    const navigate = useNavigate();
    const { themeTatailwind } = useDarkMode();
    const { lang } = useLangContex();

    return (
        <div
            className={`flex flex-col md:flex-row ${themeTatailwind.secundary.main} max-w-7xl w-full rounded-lg shadow-xl gap-3 m-4 p-4`}
        >
            <div className="flex justify-center items-center">
                <img
                    className="align-middle min-w-40 max-w-md w-max object-cover rounded-xl shadow-lg"
                    src={intro}
                    alt="Castores Trucking VTC"
                />
            </div>
            <div className="flex flex-col w-full gap-3">
                <Typography
                    className="flex justify-center"
                    color={themeTatailwind.primary.color}
                    variant="h6"
                >
                    {lang.home.join_vtc.title}
                </Typography>
                <Divider />
                <div
                    className={`${themeTatailwind.primary.text} markdown-body`}
                >
                    <MuiMarkdown>{lang.home.join_vtc.content}</MuiMarkdown>
                </div>
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<AccountBoxIcon />}
                    onClick={() => navigate("/")}
                >
                    {lang.home.join_vtc.join_btn}
                </Button>
            </div>
        </div>
    );
};

export default ReformaVtcCard;
