import { useDarkMode } from "../hooks/contex/DarkModeContex";
import { useLangContex } from "../hooks/contex/LangContex";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";

const ModalLoading = ({ open }) => {
    const { darkMode } = useDarkMode();
    const { lang } = useLangContex();

    return (
        <Dialog open={open} keepMounted aria-describedby="loading-info">
            <DialogTitle>
                {lang.sys.sys_events.modal_loading.loading}
            </DialogTitle>
            <DialogContent>
                <div className="flex space-x-2 items-center">
                    <CircularProgress
                        color={darkMode ? "inherit" : "primary"}
                    />
                    <DialogContentText id="loading-info-text">
                        {lang.sys.sys_events.modal_loading.loading_description}
                    </DialogContentText>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ModalLoading;
