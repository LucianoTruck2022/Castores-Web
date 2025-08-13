import { Request, Response as apiResponse } from "express";
import { setCache } from "../../helpers/cache";
import { TMPDataGet } from "../../helpers/TMPDataFetch";
import { Event, EventResponse } from "../../types/api/tmp/events";
import { TRUCKERSMP_API_URL, TRUCKERSMP_VTC_ID } from "../../helpers/configs";

const getNextEvent = async (req: Request, res: apiResponse): Promise<any> => {
    const url = `${TRUCKERSMP_API_URL}vtc/${TRUCKERSMP_VTC_ID}/events`;

    const response: Event | undefined = await TMPDataGet(url);

    if (!response) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
    try {
        const lastEvent = await getLastEvent(response);

        setCache("nextEvent", {
            data: lastEvent,
        });
        res.send(lastEvent);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export default getNextEvent;

const getLastEvent = async (event: Event): Promise<EventResponse> => {
    const eventsList: Event = JSON.parse(JSON.stringify(event));
    let empyEvents: EventResponse[] = [];
    eventsList.response.map((event) => {
        if (new Date() < new Date(event.start_at)) {
            empyEvents.push(event);
        }
        return event;
    });
    empyEvents.sort((a, b) => {
        const aDate = new Date(a.start_at).getTime();
        const bDate = new Date(b.start_at).getTime();
        return aDate - bDate;
    });
    return empyEvents[0];
};
