import { useState, useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { useDarkMode } from "../hooks/contex/DarkModeContex";
import useFetch from "../hooks/useFetch";
import { REST_API_URL } from "../helpers/configs";
import EventCard from "./EventCard";

const NextEvent = () => {
    const { themeTatailwind } = useDarkMode();

    const [EventResponse, setEventResponse] = useState(false);
    const loaded = useRef(false);

    // eslint-disable-next-line
    const [loading, error, succes, bodyResponse] = useFetch(
        `${REST_API_URL}/getNextEvent/`,
        "GET",
        {
            "Content-Type": "application/json",
        }
    );

    const getEvent = async () => {
        const fetchResponse = await bodyResponse();
        if (fetchResponse.status === 200) {
            setEventResponse(await fetchResponse.json());
            return true;
        }
        return false;
    };

    useEffect(() => {
        if (!loaded.current) {
            getEvent();
            loaded.current = true;
        } // eslint-disable-next-line
    }, []);

    return (
        <div className="flex justify-center mb-10">
            <div
                className={`flex flex-col justify-center ${themeTatailwind.secundary.background} rounded-lg shadow-xs w-full max-w-sm gap-4 m-5 p-5`}
            >
                {EventResponse ? (
                    <EventCard
                        key={EventResponse.id}
                        img={EventResponse.banner}
                        rute_img={EventResponse.map}
                        description={EventResponse.description}
                        name={EventResponse.name}
                        date={EventResponse.start_at}
                        game={EventResponse.game}
                        server={EventResponse.server.name}
                        atendence={EventResponse.attendances.confirmed}
                        atendenceVtc={EventResponse.attendances.vtcs}
                        url={`https://truckersmp.com${EventResponse.url}`}
                    />
                ) : (
                    <Typography
                        color={themeTatailwind.primary.color}
                        variant="caption"
                        className="text-center"
                        component="div"
                    >
                        No se encontraron estadisticas 😢
                    </Typography>
                )}
            </div>
        </div>
    );
};

export default NextEvent;
