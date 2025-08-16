import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    FormGroup,
    FormHelperText,
    Typography,
    Checkbox,
} from "@mui/material/";

const PageThree = ({
    FormValues,
    setFormValues,
    refFunctionValidatePageOne,
}) => {
    const { themeTatailwind } = useDarkMode();

    const handleChangeText = (value, id) => {
        setFormValues({
            ...FormValues,
            payload: {
                ...FormValues.payload,
                ats_dlc: {
                    ...FormValues.payload.ats_dlc,
                    [id]: value,
                },
            },
        });
    };

    const validateForm = () => {
        const isValid = Object.values(FormValues.payload.ats_dlc).some(
            (value) => value === true
        );

        setFormValues({
            ...FormValues,
            error: {
                ...FormValues.error,
                ats_dlc: !isValid,
            },
        });

        return isValid;
    };

    refFunctionValidatePageOne.current = validateForm;

    return (
        <>
            <div className="flex flex-col justify-center md:flex-row gap-4">
                <FormControl
                    required
                    error={FormValues.error.ats_dlc}
                    component="fieldset"
                    sx={{ m: 3 }}
                    variant="standard"
                >
                    <FormLabel color="info" component="legend">
                        DLC que tienes en American Truck Simulator
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.base_game}
                            disabled={FormValues.payload.ats_dlc.any_dlcs}
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "base_game");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Solo tengo mapa base (Arizona, California y
                                    Nevada)
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.any_dlcs}
                            disabled={FormValues.payload.ats_dlc.base_game}
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "any_dlcs");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Tengo todos los DLC
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.new_mexico}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(
                                    e.target.checked,
                                    "new_mexico"
                                );
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    New México
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.oregon}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "oregon");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Oregon
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.washington}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(
                                    e.target.checked,
                                    "washington"
                                );
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Washington
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.utah}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "utah");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Utah
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.idaho}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "idaho");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Idaho
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.colorado}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "colorado");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Colorado
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.wyoming}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "wyoming");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Wyoming
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.montana}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "montana");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Montana
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.texas}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "texas");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Texas
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.oklahoma}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "oklahoma");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Oklahoma
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.kansas}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "kansas");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Kansas
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.nebraska}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "nebraska");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Nebraska
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ats_dlc.arkansas}
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "arkansas");
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Arkansas
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={
                                FormValues.payload.ats_dlc
                                    .classic_stripes_Paint_jobs_pack
                            }
                            disabled={
                                FormValues.payload.ats_dlc.any_dlcs ||
                                FormValues.payload.ats_dlc.base_game
                            }
                            onChange={(e) => {
                                handleChangeText(
                                    e.target.checked,
                                    "classic_stripes_Paint_jobs_pack"
                                );
                            }}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Classic Stripes Paint Jobs Pack
                                </Typography>
                            }
                        />
                    </FormGroup>
                    <FormHelperText>
                        {FormValues.error.ats_dlc
                            ? "Selecciona una opción"
                            : ""}
                    </FormHelperText>
                </FormControl>
            </div>
        </>
    );
};

export default PageThree;
