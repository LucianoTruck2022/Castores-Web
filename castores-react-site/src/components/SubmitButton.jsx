import { useState } from "react";
import { useLangContex } from "../hooks/contex/LangContex";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

import useFetch from "../hooks/useFetch";
import AlertModal from "./AlertModal";
import SnakeBarInfo from "./SnakeBarInfo";

const SubmitButton = ({
    checkTextError,
    data,
    recaptchaRef,
    resetForm,
    url,
}) => {
    const { lang } = useLangContex();
    const [openEmpyData, setOpenEmpyData] = useState(false);
    const [loading, error, succes, bodyResponse, setError, setSucces] =
        useFetch(url, "POST", {
            "Content-Type": "application/json",
        });

    const dataEmpyToSend = async () => {
        if (checkTextError()) {
            return setOpenEmpyData(true);
        }
        const fetchResponse = await bodyResponse(data);
        if (fetchResponse.ok) {
            recaptchaRef.current.reset();
            resetForm();
        }
    };

    return (
        <div className="mt-3">
            <AlertModal
                title={lang.contact.form.alert_modal.complete_form.title}
                description={
                    lang.contact.form.alert_modal.complete_form.description
                }
                handleClose={() => setOpenEmpyData(false)}
                open={openEmpyData}
            />
            <AlertModal
                title={lang.contact.form.alert_modal.network_error.title}
                description={
                    lang.contact.form.alert_modal.network_error.description
                }
                handleClose={() => setError(false)}
                open={error}
            />
            <SnakeBarInfo
                msj={lang.contact.form.alert_modal.success_snackbar.title}
                severity="success"
                open={succes}
                setOpen={setSucces}
            />
            <LoadingButton
                endIcon={<SendIcon />}
                color="success"
                loading={loading}
                loadingPosition="end"
                variant="contained"
                size="large"
                onClick={dataEmpyToSend}
            >
                {lang.contact.form.send_btn}
            </LoadingButton>
        </div>
    );
};

export default SubmitButton;
