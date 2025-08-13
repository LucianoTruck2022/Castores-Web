import Joi from "joi";
import { ApplyVtc, Ets2Dlc, AtsDlc } from "../types/VtcApplyTypes";

const atsDlcSchema = Joi.object<AtsDlc>({
    any_dlcs: Joi.boolean().required(),
    new_mexico: Joi.boolean().required(),
    oregon: Joi.boolean().required(),
    washington: Joi.boolean().required(),
    utah: Joi.boolean().required(),
    idaho: Joi.boolean().required(),
    colorado: Joi.boolean().required(),
    wyoming: Joi.boolean().required(),
    montana: Joi.boolean().required(),
    texas: Joi.boolean().required(),
    oklahoma: Joi.boolean().required(),
    kansas: Joi.boolean().required(),
    nebraska: Joi.boolean().required(),
    arkansas: Joi.boolean().required(),
    classic_stripes_Paint_jobs_pack: Joi.boolean().required(),
    base_game: Joi.boolean().required(),
});

const ets2DlcSchema = Joi.object<Ets2Dlc>({
    any_dlcs: Joi.boolean().required(),
    going_east: Joi.boolean().required(),
    scandinavia: Joi.boolean().required(),
    vive_la_france: Joi.boolean().required(),
    italia: Joi.boolean().required(),
    beyond_the_baltic_sea: Joi.boolean().required(),
    road_to_the_black_sea: Joi.boolean().required(),
    iberia: Joi.boolean().required(),
    west_balcans: Joi.boolean().required(),
    greece: Joi.boolean().required(),
    modern_lines_paint_jobs_pack: Joi.boolean().required(),
    base_game: Joi.boolean().required(),
});

export const applyVtcSchema = Joi.object<ApplyVtc>({
    name: Joi.string().required(),
    age: Joi.string().required(),
    nationality: Joi.string().required(),
    birth_date: Joi.date().required(),
    work_or_study: Joi.string().required(),
    playing_time: Joi.date().required(),
    recruiter: Joi.string().required(),
    truckersmp_link_profile: Joi.string().required(),
    discord_username: Joi.string().required(),
    steam_link_profile: Joi.string().required(),
    ets2_play: Joi.boolean().required(),
    ats_play: Joi.boolean().required(),
    ats_dlc: atsDlcSchema,
    ets2_dlc: ets2DlcSchema,
    captcha: Joi.string().required(),
});
