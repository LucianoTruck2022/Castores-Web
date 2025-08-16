import { Typography } from "@mui/material";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import { useLangContex } from "../hooks/contex/LangContex";
import Divider from "@mui/material/Divider";

const ErrorData = ({ msj }) => {
    const { themeTatailwind, darkMode } = useDarkMode();
    const { lang } = useLangContex();

    return (
        <div className="flex justify-center w-full">
            <div
                className={`flex flex-col items-center ${
                    darkMode ? "bg-red-900" : "bg-red-600"
                }  rounded-xl gap-2 m-10 p-3`}
            >
                <Typography variant="h4" color={themeTatailwind.primary.color}>
                    <b>{lang.sys.sys_events.error_data_message.title}</b>
                </Typography>
                <Divider sx={{ mr: 1 }} variant="middle" flexItem />
                <Typography variant="h6" color={themeTatailwind.primary.color}>
                    {msj}
                </Typography>

                <Typography
                    className="max-w-lg mt-3"
                    variant="caption"
                    color={themeTatailwind.primary.color}
                >
                    {lang.sys.sys_events.error_data_message.description}
                </Typography>
            </div>
        </div>
    );
};

export default ErrorData;
