import { useDarkMode } from "../hooks/contex/DarkModeContex";
import { useLangContex } from "../hooks/contex/LangContex";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import Button from "@mui/material/Button";
import my_welcome from "../static/img/my_welcome.webp";

const JoinCard = () => {
    const { themeTatailwind } = useDarkMode();
    const { lang } = useLangContex();
    const navigate = useNavigate();

    return (
        <div className="flex justify-center w-full">
            <div className="flex flex-col max-w-(--breakpoint-2xl) md:flex-row">
                <div className="flex justify-center p-2">
                    <img
                        className="object-cover rounded-lg drop-shadow-lg aspect-video"
                        style={{ width: "1000px", height: "auto" }}
                        src={my_welcome}
                        alt="welcome_image_card"
                    />
                </div>

                <div
                    className={`flex flex-col ${themeTatailwind.secundary.main} rounded-lg border-2 border-[#2E3192] shadow-2xl m-4 p-4`}
                >
                    <div className="flex flex-col text-left h-full gap-5 pb-2">
                        <Typography
                            color={themeTatailwind.primary.color}
                            variant="h4"
                        >
                            <b>{lang.sys.vtc_page.welcome_message.title}</b>
                        </Typography>
                        <Typography
                            color={themeTatailwind.primary.color}
                            variant="subtitle1"
                        >
                            {lang.sys.vtc_page.welcome_message.description}
                        </Typography>
                        <div className="grid content-end h-full">
                            <div className="flex justify-center">
                                <Button
                                    startIcon={<HowToRegRoundedIcon />}
                                    variant="contained"
                                    onClick={() => navigate("/news/43354")}
                                >
                                    {
                                        lang.sys.vtc_page.welcome_message
                                            .apply_btn
                                    }
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinCard;
