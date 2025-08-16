import { forwardRef } from "react";
import { useLangContex } from "../hooks/contex/LangContex";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AlertModal = ({ title, description, handleClose, open }) => {
    const { lang } = useLangContex();

    return (
        <Dialog
            open={open === undefined ? false : open}
            TransitionComponent={Transition}
            onClose={handleClose}
            aria-describedby="alertInfo"
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alertInfo">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={handleClose}>
                    {lang.sys.sys_events.alert_modal.close_btn}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AlertModal;
