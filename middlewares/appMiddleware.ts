import { Request, Response, NextFunction } from "express";
import checkCapcha from "./checkCapcha";
import { getCache } from "../helpers/cache";
import { checkHash } from "../helpers/hash";
import { AUTHORIZED_DOMAINS } from "../helpers/configs";
import { applyVtcSchema } from "../schemas/VtcApplySch";

// types
import { CacheTypes } from "../types/cacheTypes";
import { BodyGetTypesNull, BodyGetTypes } from "../types/bodyGetTypes";
import {
    ContactBodyNotValid,
    ContactBodyValid,
} from "../types/contactBodyTypes";
import { ApplyVtc } from "../types/VtcApplyTypes";

const checkValuesApiResponse = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Function | void> => {
    const bodyData: BodyGetTypesNull = req.body;
    if (
        !(
            bodyData.url === undefined ||
            bodyData.headers === undefined ||
            bodyData === undefined
        )
    ) {
        try {
            new URL(bodyData.url!);
        } catch (error) {
            res.status(500);
            res.send({ error: "url not valid" });
            return;
        }
        return next();
    }
    res.status(500);
    res.send({ error: "need more data" });
};

const checkAuthorizedDomains = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Function | void> => {
    const bodyData: BodyGetTypes = req.body;
    const url = new URL(bodyData.url);
    const domain = url.hostname;
    if (AUTHORIZED_DOMAINS.includes(domain)) return next();

    res.status(404);
    res.send(JSON.stringify({ error: 404 }));
};

const checkValuesContact = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Function | any> => {
    const bodyData: ContactBodyNotValid = req.body;
    if (
        !(
            bodyData.name === undefined ||
            bodyData.email === undefined ||
            bodyData.reason === undefined ||
            bodyData.message === undefined ||
            bodyData.captcha === undefined
        )
    ) {
        return next();
    }
    res.status(500);
    res.send({ error: "need more data" });
};

const checkValuesVtcApply = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Function | any> => {
    const bodyData = req.body;
    const { error } = applyVtcSchema.validate(bodyData);

    if (error) {
        res.status(500);
        res.send({ error: "need more data" });
        return;
    }
    return next();
};

const capchaCheck = async (req: Request, res: Response, next: NextFunction) => {
    const bodyData: ContactBodyValid | ApplyVtc = req.body;
    const capchaResult = await checkCapcha(bodyData.captcha);
    if (capchaResult) return next();
    res.sendStatus(401);
};

const checkIdUrl = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Function | any> => {
    const id = req.params.id;

    if (id === undefined) {
        res.status(404);
        res.json({ error: "need more data" });
        return;
    }
    return next();
};

const isCached = async (
    req: Request,
    res: Response,
    next: NextFunction,
    cacheKey: string
): Promise<Function | any> => {
    const cachedData: CacheTypes | undefined = getCache(cacheKey);

    if (!cachedData) return next();

    res.send(cachedData.data);
};

export {
    checkValuesApiResponse,
    checkAuthorizedDomains,
    checkValuesContact,
    checkValuesVtcApply,
    capchaCheck,
    checkIdUrl,
    isCached,
};
