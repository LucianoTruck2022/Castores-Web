import { Express, Request, Response, NextFunction } from "express";
import {
    //checkValuesApiResponse,
    //checkAuthorizedDomains,
    checkValuesContact,
    checkValuesVtcApply,
    capchaCheck,
    checkIdUrl,
    isCached,
} from "../middlewares/appMiddleware";

// POST
//import getApiResponse from "./getApiResponse";
import postContact from "./postContact";
import postVtcApply from "./postVtcApply";

// GET
import getEvents from "./tmp_queries/getEvents";
import getNews from "./tmp_queries/getNews";
import getMembers from "./tmp_queries/getMembers";
import getNew from "./tmp_queries/getNew";
import getMemberInfo from "./tmp_queries/getMemberInfo";
import getPartnerLogo from "./getPartnerLogo";
import getHallOfFame from "./getHallOfFame";
import getSummary from "./getSummary";
import getNextEvent from "./tmp_queries/getNextEvent";
import getCastoresDiscordStaff from "./getCastoresDiscordStaff";
import getCastoresDiscordSTeam from "./getCastoresDiscordSTeam";
import getReformaDiscordStaffCEvents from "./getCastoresDiscordStaffCEvents";
import getReformaDiscordStaffTrial from "./getCastoresDiscordStaffTrial";

export default function (app: Express) {
    // POST
    /*
    app.post(
        "/getApiResponse/",
        checkValuesApiResponse,
        checkAuthorizedDomains,
        (req, res, next) => isCached(req, res, next, req.body.url),
        getApiResponse
    );
    */
    app.post("/postContact/", checkValuesContact, capchaCheck, postContact);
    app.post("/postvtcApply/", checkValuesVtcApply, capchaCheck, postVtcApply);

    // GET
    app.get("/getPartnerLogo/:name", getPartnerLogo);
    app.get(
        "/getEvents/",
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, "events"),
        getEvents
    );
    app.get(
        "/getNews/",
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, "news"),
        getNews
    );
    app.get(
        "/getMembers/",
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, "members"),
        getMembers
    );
    app.get(
        "/getNew/:id",
        checkIdUrl,
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, `new/${req.params.id}`),
        getNew
    );
    app.get(
        "/getMemberInfo/:id",
        checkIdUrl,
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, `member/${req.params.id}`),
        getMemberInfo
    );
    app.get(
        "/getSummary/",
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, "summary"),
        getSummary
    );
    app.get(
        "/getNextEvent/",
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, "nextEvent"),
        getNextEvent
    );
    app.get(
        "/getHallOfFame/",
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, "hallOfFame"),
        getHallOfFame
    );
    app.get(
        "/getCastoresDiscordStaff/",
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, "reformaDiscordStaff"),
        getCastoresDiscordStaff
    );
    app.get(
        "/getCastoresDiscordSTeam/",
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, "reformaDiscordStaffTeam"),
        getCastoresDiscordSTeam
    );
    app.get(
        "/getReformaDiscordStaffCEvents/",
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, "reformaDiscordStaffCEvents"),
        getReformaDiscordStaffCEvents
    );
    /*app.get(
        "/getReformaDiscordStaffTrial/",
        (req: Request, res: Response, next: NextFunction) =>
            isCached(req, res, next, "reformaDiscordStaffTrial"),
        getReformaDiscordStaffTrial
    );*/
}
