import { useState, useEffect, useRef } from "react";
import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import useFetch from "../../../hooks/useFetch";
import { REST_API_URL } from "../../../helpers/configs";
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    TextField,
} from "@mui/material/";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import {
    formPageOneSchema,
    nameSchema,
    ageSchema,
    nationalitySchema,
    birthDateSchema,
    workOrStudySchema,
    playingTimeSchema,
    recruiterSchema,
} from "../../../schemas/schApplyVtc";
import dayjs from "dayjs";
import ModalLoading from "../../../components/ModalLoading";
import ErrorData from "../../../components/ErrorData";

const PageOne = ({ FormValues, setFormValues, refFunctionValidatePageOne }) => {
    const { themeTatailwind } = useDarkMode();

    // eslint-disable-next-line
    const [loading, error, succes, bodyResponse] = useFetch(
        `${REST_API_URL}/getMembers/`,
        "GET",
        {
            "Content-Type": "application/json",
        }
    );
    const [Response, setResponse] = useState(false);
    const loaded = useRef(false);

    const validateForm = async () => {
        const validName = await nameSchema.isValid({
            name: FormValues.payload.name,
        });
        const validAge = await ageSchema.isValid({
            age: FormValues.payload.age,
        });
        const validNationality = await nationalitySchema.isValid({
            nationality: FormValues.payload.nationality,
        });
        const validBirthDate = await birthDateSchema.isValid({
            birth_date: FormValues.payload.birth_date,
        });
        const validWorkOrStudy = await workOrStudySchema.isValid({
            work_or_study: FormValues.payload.work_or_study,
        });
        const validPlayingTime = await playingTimeSchema.isValid({
            playing_time: FormValues.payload.playing_time,
        });
        const validRecruiter = await recruiterSchema.isValid({
            recruiter: FormValues.payload.recruiter,
        });

        setFormValues({
            ...FormValues,
            error: {
                ...FormValues.error,
                name: !validName,
                age: !validAge,
                nationality: !validNationality,
                birth_date: !validBirthDate,
                work_or_study: !validWorkOrStudy,
                playing_time: !validPlayingTime,
                recruiter: !validRecruiter,
            },
        });

        return await formPageOneSchema.isValid(FormValues.payload);
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

    const getByRankMembers = (memebrs) => {
        const rolesIds = [
            74134, 186466, 187235, 146949
        ];
        /*const rolesIds = [
            74134, 119278, 74375, 146949, 187235, 192659, 187240, 187239,
            187237, 187236,
        ];*/

        const members = memebrs.filter((member) => {
            return rolesIds.includes(member.role_id);
        });

        setResponse(members);
    };

    const getMembers = async () => {
        const fetchResponse = await bodyResponse();
        if (fetchResponse.status === 200) {
            const responseFetch = await fetchResponse.json();
            getByRankMembers(responseFetch.response.members);
        }
    };

    const formJSX = () => {
        return (
            <>
                <div className="flex flex-col justify-center m-4 md:m-0 md:flex-row gap-4">
                    <TextField
                        fullWidth
                        required
                        color="info"
                        inputProps={{ maxLength: 150 }}
                        id="name"
                        label="Tu nombre"
                        variant="outlined"
                        error={FormValues.error.name}
                        helperText={
                            FormValues.error.name
                                ? "El nombre es requerido o no es valido"
                                : null
                        }
                        onChange={(e) =>
                            handleChangeText(e.target.value, "name")
                        }
                        value={FormValues.payload.name}
                    />
                </div>
                <div className="flex flex-col justify-center m-4 md:m-0 md:flex-row gap-4">
                    <TextField
                        required
                        color="info"
                        inputProps={{ maxLength: 150 }}
                        id="age"
                        label="Edad"
                        variant="outlined"
                        error={FormValues.error.age}
                        helperText={
                            FormValues.error.age
                                ? "La edad es requerida o no es valida"
                                : null
                        }
                        onChange={(e) =>
                            handleChangeText(e.target.value, "age")
                        }
                        value={FormValues.payload.age}
                    />
                    <TextField
                        required
                        color="info"
                        inputProps={{ maxLength: 150 }}
                        id="nationality"
                        label="Nacionalidad"
                        variant="outlined"
                        error={FormValues.error.nationality}
                        helperText={
                            FormValues.error.nationality
                                ? "La nacionalidad es requerida o no es valida"
                                : null
                        }
                        onChange={(e) =>
                            handleChangeText(e.target.value, "nationality")
                        }
                        value={FormValues.payload.nationality}
                    />
                    <DatePicker
                        label="Fecha de nacimiento"
                        helperText={
                            FormValues.error.birth_date
                                ? "La fecha de nacimiento es requerida o no es valida"
                                : null
                        }
                        onChange={(e) => {
                            handleChangeText(dayjs(e).toDate(), "birth_date");
                        }}
                        views={["day", "month", "year"]}
                        format="DD-MM-YYYY"
                        value={dayjs(FormValues.payload.birth_date)}
                    />
                </div>
                <div className="flex justify-center m-4 md:m-0">
                    <FormControl
                        error={FormValues.error.work_or_study}
                        color="info"
                    >
                        <FormLabel>¿Trabajas o estudias?</FormLabel>
                        <RadioGroup
                            onChange={(e) =>
                                handleChangeText(
                                    e.target.value,
                                    "work_or_study"
                                )
                            }
                            value={FormValues.payload.work_or_study}
                            row
                        >
                            <FormControlLabel
                                value="Trabajar"
                                control={<Radio color="info" />}
                                label={
                                    <Typography
                                        color={themeTatailwind.primary.color}
                                    >
                                        Trabajar
                                    </Typography>
                                }
                            />
                            <FormControlLabel
                                value="Estudiar"
                                control={<Radio color="info" />}
                                label={
                                    <Typography
                                        color={themeTatailwind.primary.color}
                                    >
                                        Estudiar
                                    </Typography>
                                }
                            />
                            <FormControlLabel
                                value="Otro"
                                control={<Radio color="info" />}
                                label={
                                    <Typography
                                        color={themeTatailwind.primary.color}
                                    >
                                        Otro
                                    </Typography>
                                }
                            />
                        </RadioGroup>
                        <FormHelperText>
                            {FormValues.error.work_or_study
                                ? "Esta opcion es requerida"
                                : null}
                        </FormHelperText>
                    </FormControl>
                </div>
                <div className="flex justify-center m-4 md:m-0 gap-4">
                    <TimePicker
                        label="Hora a la que juegas"
                        error={FormValues.error.playing_time}
                        helperText={
                            FormValues.error.playing_time
                                ? "La hora a la que juegas es requerida o no es valida"
                                : null
                        }
                        value={dayjs(FormValues.payload.playing_time)}
                        onChange={(e) => {
                            handleChangeText(dayjs(e).toDate(), "playing_time");
                        }}
                        format="hh:mm a"
                    />
                    <FormControl color="info" fullWidth className="max-w-64">
                        <InputLabel>Quien te recluto</InputLabel>
                        <Select
                            label="Quien te recluto"
                            onChange={(e) => {
                                handleChangeText(e.target.value, "recruiter");
                            }}
                            value={FormValues.payload.recruiter}
                            error={FormValues.error.recruiter}
                        >
                            {Response &&
                                Response.map((member) => (
                                    <MenuItem
                                        key={member.id}
                                        value={member.username}
                                    >
                                        {member.username}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </div>
            </>
        );
    };

    useEffect(() => {
        if (!loaded.current) {
            getMembers();
            loaded.current = true;
        } // eslint-disable-next-line
    }, []);

    return (
        <>
            <ModalLoading open={loading} />
            {error ? (
                <ErrorData
                    msj={"No fue posible obtener la lista de Administradores"}
                />
            ) : (
                formJSX()
            )}
        </>
    );
};

export default PageOne;
