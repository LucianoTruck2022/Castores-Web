import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import { Typography, Divider, Link, Paper } from "@mui/material";
import PRIVACY from "../PRIVACY.md";
import TERMS from "../TERMS.md";
import ModalMessage from "./ModalMessage";
import FooterCastores from "./FooterCastores";
//import FooterReforma from "./FooterReforma";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    const { themeTatailwind } = useDarkMode();

    const [openPrivacyPolicies, setopenPrivacyPolicies] = useState(false);
    const [openTermsConditions, setopenTermsConditions] = useState(false);
    const [setTermsAndPrivacy, setsetTermsAndPrivacy] = useState({
        Terms: false,
        Privacy: false,
    });

    const upodateTermsAndPrivacy = async () => {
        const responseTerms = await fetch(TERMS);
        const responsePrivacy = await fetch(PRIVACY);
        const dataTerms = await responseTerms.text();
        const dataPrivacy = await responsePrivacy.text();
        setsetTermsAndPrivacy({
            Terms: dataTerms,
            Privacy: dataPrivacy,
        });
    };

    useEffect(() => {
        upodateTermsAndPrivacy();
    }, []);

    return (
        <div className="mt-auto mb-4">
            <>
                <ModalMessage
                    open={openPrivacyPolicies}
                    title="Privacy Policies"
                    setError={setopenPrivacyPolicies}
                    msj={
                        setTermsAndPrivacy.Privacy
                            ? setTermsAndPrivacy.Privacy
                            : "Loading..."
                    }
                />
                <ModalMessage
                    open={openTermsConditions}
                    title="Terms and Conditions"
                    setError={setopenTermsConditions}
                    msj={
                        setTermsAndPrivacy.Terms
                            ? setTermsAndPrivacy.Terms
                            : "Loading..."
                    }
                />
            </>
            <Paper
                elevation={24}
                sx={{
                    backgroundColor: "secundary.main",
                }}
            >
                <div className="flex flex-col items-center">
                    <div className="flex flex-col w-full gap-5 justify-between md:flex-row">
                        <FooterCastores />
                    </div>
                    <div className="flex justify-center gap-1 items-center p-2">
                        <Link
                            color="white"
                            component="button"
                            underline="none"
                            onClick={() => {
                                setopenPrivacyPolicies(true);
                            }}
                        >
                            <Typography
                                color={themeTatailwind.primary.color}
                                variant="caption"
                            >
                                Política de Privacidad
                            </Typography>
                        </Link>
                        <Divider
                            orientation="vertical"
                            flexItem
                            variant="middle"
                        />
                        <Link
                            color={themeTatailwind.primary.color}
                            component="button"
                            underline="none"
                            onClick={() => {
                                setopenTermsConditions(true);
                            }}
                        >
                            <Typography
                                color={themeTatailwind.primary.color}
                                variant="caption"
                            >
                                Términos y Condiciones
                            </Typography>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center mb-2">
                        <Link
                            color={themeTatailwind.primary.color}
                            className="flex justify-center gap-1 items-center p-2"
                            href="https://github.com/Castores-Trucking"
                            target="_blank"
                            underline="none"
                        >
                            <Typography variant="caption">
                                by: <b>Castores Trucking</b>
                            </Typography>
                            <GitHubIcon />
                        </Link>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default Footer;
