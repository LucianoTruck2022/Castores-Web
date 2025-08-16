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

const PageFour = ({
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
                ets2_dlc: {
                    ...FormValues.payload.ets2_dlc,
                    [id]: value,
                },
            },
        });
    };

    const validateForm = () => {
        const isValid = Object.values(FormValues.payload.ets2_dlc).some(
            (value) => value === true
        );

        setFormValues({
            ...FormValues,
            error: {
                ...FormValues.error,
                ets2_dlc: !isValid,
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
                    component="fieldset"
                    sx={{ m: 3 }}
                    variant="standard"
                >
                    <FormLabel color="info" component="legend">
                        DLC que tienes en Euro Truck Simulator 2
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            checked={FormValues.payload.ets2_dlc.base_game}
                            onChange={(e) => {
                                handleChangeText(e.target.checked, "base_game");
                            }}
                            disabled={FormValues.payload.ets2_dlc.any_dlcs}
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Solo tengo mapa base
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ets2_dlc.any_dlcs}
                            disabled={FormValues.payload.ets2_dlc.base_game}
                            onChange={(e) =>
                                handleChangeText(e.target.checked, "any_dlcs")
                            }
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
                            checked={FormValues.payload.ets2_dlc.going_east}
                            disabled={
                                FormValues.payload.ets2_dlc.any_dlcs ||
                                FormValues.payload.ets2_dlc.base_game
                            }
                            onChange={(e) =>
                                handleChangeText(e.target.checked, "going_east")
                            }
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Going East!
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ets2_dlc.scandinavia}
                            disabled={
                                FormValues.payload.ets2_dlc.any_dlcs ||
                                FormValues.payload.ets2_dlc.base_game
                            }
                            onChange={(e) =>
                                handleChangeText(
                                    e.target.checked,
                                    "scandinavia"
                                )
                            }
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Scandinavia
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ets2_dlc.vive_la_france}
                            disabled={
                                FormValues.payload.ets2_dlc.any_dlcs ||
                                FormValues.payload.ets2_dlc.base_game
                            }
                            onChange={(e) =>
                                handleChangeText(
                                    e.target.checked,
                                    "vive_la_france"
                                )
                            }
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Vive la France!
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ets2_dlc.italia}
                            disabled={
                                FormValues.payload.ets2_dlc.any_dlcs ||
                                FormValues.payload.ets2_dlc.base_game
                            }
                            onChange={(e) =>
                                handleChangeText(e.target.checked, "italia")
                            }
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Italia
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={
                                FormValues.payload.ets2_dlc
                                    .beyond_the_baltic_sea
                            }
                            disabled={
                                FormValues.payload.ets2_dlc.any_dlcs ||
                                FormValues.payload.ets2_dlc.base_game
                            }
                            onChange={(e) =>
                                handleChangeText(
                                    e.target.checked,
                                    "beyond_the_baltic_sea"
                                )
                            }
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Beyond the Baltic Sea
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={
                                FormValues.payload.ets2_dlc
                                    .road_to_the_black_sea
                            }
                            disabled={
                                FormValues.payload.ets2_dlc.any_dlcs ||
                                FormValues.payload.ets2_dlc.base_game
                            }
                            onChange={(e) =>
                                handleChangeText(
                                    e.target.checked,
                                    "road_to_the_black_sea"
                                )
                            }
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Road to the Black Sea
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ets2_dlc.iberia}
                            disabled={
                                FormValues.payload.ets2_dlc.any_dlcs ||
                                FormValues.payload.ets2_dlc.base_game
                            }
                            onChange={(e) =>
                                handleChangeText(e.target.checked, "iberia")
                            }
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Iberia
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ets2_dlc.west_balcans}
                            disabled={
                                FormValues.payload.ets2_dlc.any_dlcs ||
                                FormValues.payload.ets2_dlc.base_game
                            }
                            onChange={(e) =>
                                handleChangeText(
                                    e.target.checked,
                                    "west_balcans"
                                )
                            }
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    West Balkans
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={FormValues.payload.ets2_dlc.greece}
                            disabled={
                                FormValues.payload.ets2_dlc.any_dlcs ||
                                FormValues.payload.ets2_dlc.base_game
                            }
                            onChange={(e) =>
                                handleChangeText(e.target.checked, "greece")
                            }
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Greece
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            checked={
                                FormValues.payload.ets2_dlc
                                    .modern_lines_paint_jobs_pack
                            }
                            disabled={
                                FormValues.payload.ets2_dlc.any_dlcs ||
                                FormValues.payload.ets2_dlc.base_game
                            }
                            onChange={(e) =>
                                handleChangeText(
                                    e.target.checked,
                                    "modern_lines_paint_jobs_pack"
                                )
                            }
                            control={<Checkbox color="info" />}
                            label={
                                <Typography
                                    color={themeTatailwind.primary.color}
                                >
                                    Modern Lines Paint Jobs Pack
                                </Typography>
                            }
                        />
                    </FormGroup>
                    <FormHelperText>
                        {" "}
                        {FormValues.error.ets2_dlc
                            ? "Selecciona una opción"
                            : ""}
                    </FormHelperText>
                </FormControl>
            </div>
        </>
    );
};

export default PageFour;
