import { useState, useRef } from "react";
import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import { REST_API_URL } from "../../../helpers/configs";
import { Button, StepLabel, Step, Stepper, Typography } from "@mui/material/";
import SubmitButton from "../../../components/SubmitButton";
import ReCaptchaCom from "../../../components/ReCaptchaCom";

// pages
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";

// icons
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const FormsApplyVTC = () => {
    const { themeTatailwind } = useDarkMode();
    const steps = [
        "Tus datos",
        "Informacion en el juego",
        "DLC ATS",
        "DLC ETS2",
    ];
    const baseData = {
        payload: {
            name: "",
            age: "",
            nationality: "",
            birth_date: "",
            work_or_study: "",
            playing_time: "",
            recruiter: "",
            truckersmp_link_profile: "",
            discord_username: "",
            steam_link_profile: "",
            ets2_play: false,
            ats_play: false,
            ats_dlc: {
                any_dlcs: false,
                new_mexico: false,
                oregon: false,
                washington: false,
                utah: false,
                idaho: false,
                colorado: false,
                wyoming: false,
                montana: false,
                texas: false,
                oklahoma: false,
                kansas: false,
                nebraska: false,
                arkansas: false,
                classic_stripes_Paint_jobs_pack: false,
                base_game: false,
            },
            ets2_dlc: {
                any_dlcs: false,
                going_east: false,
                scandinavia: false,
                vive_la_france: false,
                italia: false,
                beyond_the_baltic_sea: false,
                road_to_the_black_sea: false,
                iberia: false,
                west_balcans: false,
                greece: false,
                modern_lines_paint_jobs_pack: false,
                base_game: false,
            },
            captcha: "",
        },
        error: {
            name: false,
            age: false,
            nationality: false,
            birth_date: false,
            work_or_study: false,
            playing_time: false,
            recruiter: false,
            truckersmp_link_profile: false,
            discord_id: false,
            steam_link_profile: false,
            game_played: false,
            ats_dlc: false,
            ets2_dlc: false,
            captcha: false,
        },
    };
    const recaptchaRef = useRef();
    const refFunctionValidatePageOne = useRef(null);
    const [activeStep, setActiveStep] = useState(0);
    const [FormValues, setFormValues] = useState(baseData);

    const onClickCheckAndNext = async () => {
        if (refFunctionValidatePageOne.current) {
            const isValid = await refFunctionValidatePageOne.current();
            if (isValid) {
                setActiveStep(activeStep + 1);
            }
        }
    };

    const checkExistCapchaKey = () => {
        if (FormValues.payload.captcha === "") {
            //if (false) {
            setFormValues({
                ...FormValues,
                error: {
                    ...FormValues.error,
                    captcha: true,
                },
            });
            return true;
        }
        setFormValues({
            ...FormValues,
            error: {
                ...FormValues.error,
                captcha: false,
            },
        });
        return false;
    };

    const resetAllData = () => {
        setActiveStep(4);
        setFormValues(baseData);
    };

    const handleChangeText = (value, id) => {
        setFormValues({
            ...FormValues,
            payload: {
                ...FormValues.payload,
                [id]: value,
            },
        });
    };

    const JSXCompletedAllSteps = () => {
        return (
            <div className="flex flex-col items-center gap-5">
                <Typography
                    color={themeTatailwind.primary.color}
                    variant="h4"
                    className="text-center"
                >
                    <b>Gracias por aplicar a la VTC</b>
                </Typography>
                <Typography
                    color={themeTatailwind.primary.color}
                    variant="body1"
                    className="text-center"
                >
                    Tu formulario fue enviado a nuestro equipo de Staff los
                    cuales se encargaran de contactarte en caso de ser. Mucha
                    suerte!!!
                </Typography>
            </div>
        );
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-full max-w-2xl gap-5">
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === 0 && (
                    <PageOne
                        FormValues={FormValues}
                        setFormValues={setFormValues}
                        refFunctionValidatePageOne={refFunctionValidatePageOne}
                    />
                )}
                {activeStep === 1 && (
                    <PageTwo
                        FormValues={FormValues}
                        setFormValues={setFormValues}
                        refFunctionValidatePageOne={refFunctionValidatePageOne}
                    />
                )}
                {activeStep === 2 && (
                    <PageThree
                        FormValues={FormValues}
                        setFormValues={setFormValues}
                        refFunctionValidatePageOne={refFunctionValidatePageOne}
                    />
                )}
                {activeStep === 3 && (
                    <PageFour
                        FormValues={FormValues}
                        setFormValues={setFormValues}
                        refFunctionValidatePageOne={refFunctionValidatePageOne}
                    />
                )}
                {activeStep === 4 && <JSXCompletedAllSteps />}
                <div className="flex justify-center gap-3 mb-5">
                    {activeStep > 0 && activeStep <= 3 && (
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<NavigateBeforeIcon />}
                            onClick={() => setActiveStep(activeStep - 1)}
                        >
                            Back
                        </Button>
                    )}
                    {activeStep < 3 && (
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<NavigateNextIcon />}
                            onClick={() => onClickCheckAndNext()}
                        >
                            Next
                        </Button>
                    )}
                </div>
                /*{activeStep === 3 && (
                    <div className="flex flex-col items-center gap-5 mb-5">
                        <ReCaptchaCom
                            handleChangeSelect={handleChangeText}
                            recaptchaRef={recaptchaRef}
                            error={FormValues.error.captcha}
                        />
                        <SubmitButton
                            checkTextError={checkExistCapchaKey}
                            data={FormValues.payload}
                            recaptchaRef={recaptchaRef}
                            resetForm={resetAllData}
                            url={`${REST_API_URL}/postvtcApply`}
                        />
                    </div>
                )}*/
            </div>
        </div>
    );
};

export default FormsApplyVTC;
