import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Typography,
    TextField,
} from "@mui/material/";

import {
    formPageTwoSchema,
    truckersmpLinkProfileSchema,
    discordUsernameSchema,
    steamLinkProfileSchema,
} from "../../../schemas/schApplyVtc";

const PageTwo = ({ FormValues, setFormValues, refFunctionValidatePageOne }) => {
    const { themeTatailwind } = useDarkMode();

    const validateForm = async () => {
        const validTruckersmpLinkProfile =
            await truckersmpLinkProfileSchema.isValid({
                truckersmp_link_profile:
                    FormValues.payload.truckersmp_link_profile,
            });
        const validDiscordUsername = await discordUsernameSchema.isValid({
            discord_username: FormValues.payload.discord_username,
        });
        const validSteamLinkProfile = await steamLinkProfileSchema.isValid({
            steam_link_profile: FormValues.payload.steam_link_profile,
        });

        setFormValues({
            ...FormValues,
            error: {
                ...FormValues.error,
                truckersmp_link_profile: !validTruckersmpLinkProfile,
                discord_username: !validDiscordUsername,
                steam_link_profile: !validSteamLinkProfile,
                game_played: checkPlayedGameError(),
            },
        });

        return (
            (await formPageTwoSchema.isValid(FormValues.payload)) &&
            !checkPlayedGameError()
        );
    };

    refFunctionValidatePageOne.current = validateForm;

    const handleChangeText = (value, id) => {
        setFormValues({
            ...FormValues,
            payload: {
                ...FormValues.payload,
                [id]: value,
            },
        });
    };

    const setPlayedGame = (value) => {
        if (value === "ets2") {
            setFormValues({
                ...FormValues,
                payload: {
                    ...FormValues.payload,
                    ets2_play: true,
                    ats_play: false,
                },
            });
        }

        if (value === "ats") {
            setFormValues({
                ...FormValues,
                payload: {
                    ...FormValues.payload,
                    ets2_play: false,
                    ats_play: true,
                },
            });
        }

        if (value === "both") {
            setFormValues({
                ...FormValues,
                payload: {
                    ...FormValues.payload,
                    ets2_play: true,
                    ats_play: true,
                },
            });
        }
    };

    const getPlayedGame = () => {
        if (FormValues.payload.ets2_play && FormValues.payload.ats_play) {
            return "both";
        }

        if (FormValues.payload.ets2_play) {
            return "ets2";
        }

        if (FormValues.payload.ats_play) {
            return "ats";
        }

        return "";
    };

    const checkPlayedGameError = () => {
        return !FormValues.payload.ets2_play && !FormValues.payload.ats_play;
    };

    return (
        <>
            <div className="flex flex-col m-4 md:m-0 justify-center gap-4">
                <TextField
                    required
                    color="info"
                    helperText="Ejemplo: https://truckersmp.com/user/3661787"
                    inputProps={{ maxLength: 150 }}
                    id="tmpprofile"
                    label="Perfil de TruckersMP"
                    variant="outlined"
                    value={FormValues.payload.truckersmp_link_profile}
                    onChange={(e) =>
                        handleChangeText(
                            e.target.value,
                            "truckersmp_link_profile"
                        )
                    }
                    error={FormValues.error.truckersmp_link_profile}
                />
                <TextField
                    required
                    color="info"
                    helperText="Ejemplo: lucianotruck"
                    inputProps={{ maxLength: 150 }}
                    id="dcprofile"
                    label="Perfil de Discord"
                    variant="outlined"
                    value={FormValues.payload.discord_username}
                    onChange={(e) =>
                        handleChangeText(e.target.value, "discord_username")
                    }
                    error={FormValues.error.discord_username}
                />
                <TextField
                    required
                    color="info"
                    helperText="Ejemplo: https://steamcommunity.com/id/luciano_truck_Castores/"
                    inputProps={{ maxLength: 150 }}
                    id="steamprofile"
                    label="Perfil de Steam"
                    variant="outlined"
                    value={FormValues.payload.steam_link_profile}
                    onChange={(e) =>
                        handleChangeText(e.target.value, "steam_link_profile")
                    }
                    error={FormValues.error.steam_link_profile}
                />
                <div className="flex m-4 md:m-0 justify-center">
                    <FormControl
                        error={FormValues.error.game_played}
                        color="info"
                    >
                        <FormLabel>Que juegos tienes</FormLabel>
                        <RadioGroup
                            value={getPlayedGame()}
                            onChange={(e) => setPlayedGame(e.target.value)}
                            row
                        >
                            <FormControlLabel
                                value="ets2"
                                control={<Radio color="info" />}
                                label={
                                    <Typography
                                        color={themeTatailwind.primary.color}
                                    >
                                        ETS 2
                                    </Typography>
                                }
                            />
                            <FormControlLabel
                                value="ats"
                                control={<Radio color="info" />}
                                label={
                                    <Typography
                                        color={themeTatailwind.primary.color}
                                    >
                                        ATS
                                    </Typography>
                                }
                            />
                            <FormControlLabel
                                value="both"
                                control={<Radio color="info" />}
                                label={
                                    <Typography
                                        color={themeTatailwind.primary.color}
                                    >
                                        Ambos
                                    </Typography>
                                }
                            />
                        </RadioGroup>
                        <FormHelperText>
                            {FormValues.error.game_played
                                ? "Debes seleccionar una opcion"
                                : null}
                        </FormHelperText>
                    </FormControl>
                </div>
            </div>
        </>
    );
};

export default PageTwo;
