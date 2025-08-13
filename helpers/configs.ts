import dotenv from "dotenv";
import { DiscordRoles, TruckersMPStaff } from "../types/configsTypes";
dotenv.config();

const roles = process.env.DISCORD_ROLES_ID!.split(",");
const AUTHORIZED_DOMAINS_SPLIT = process.env.AUTHORIZED_DOMAINS!.split(",");
const TRUCKERSMP_STAFF_ID_SPLIT = process.env.TRUCKERSMP_STAFF_ID!.split(",");
export const ROLES_VTC_STAFF =
    process.env.DISCORD_ROLES_VTC_STAFF!.split(",");

export const ROLES_VTC_STAFFTeam =
    process.env.DISCORD_ROLES_VTC_STAFFTeam!.split(",");

export const ROLES_VTC_CEVENTS =
    process.env.DISCORD_ROLES_CEVENTS!.split(",");

export const ROLES_VTC_StaffTrial =
    process.env.DISCORD_ROLES_StaffTrial!.split(",");

export const PORT: string = process.env.PORT!;
export const CACHE_TIME: string = process.env.CACHE_TIME!;
export const SECRET_CAPCHA = process.env.SECRET_CAPCHA;

export const TRUCKERSMP_API_URL: string = process.env.TRUCKERSMP_API_URL!;
export const TRUCKERSMP_VTC_ID: string = process.env.TRUCKERSMP_VTC_ID!;
export const TRUCKERSMP_STAFF_ID: TruckersMPStaff = {
    staff_id: TRUCKERSMP_STAFF_ID_SPLIT,
};

export const DISCORD_WEBHOOK_URL_CONTACT: string =
    process.env.DISCORD_WEBHOOK_URL_CONTACT!;
export const DISCORD_WEBHOOK_URL_VTC_APPLY: string =
    process.env.DISCORD_WEBHOOK_URL_CONTACT_VTC_APPLY!;
export const DISCORD_WEBHOOK_REFORMA_CONTACT: string =
    process.env.DISCORD_WEBHOOK_REFORMA_CONTACT!;
export const DISCORD_BOT_TOKEN: string = process.env.DISCORD_BOT_TOKEN!;
export const DISCORD_ID_SERVER: string = process.env.DISCORD_ID_SERVER!;
export const DISCORD_ROLES_ID: DiscordRoles = {
    roles_id: roles,
};
export const DISCORD_ROLES_VTC_STAFF: DiscordRoles = {
    roles_id: ROLES_VTC_STAFF,
};
export const DISCORD_ROLES_VTC_STAFFTeam: DiscordRoles = {
    roles_id: ROLES_VTC_STAFFTeam,
};
export const DISCORD_ROLES_CEVENTS: DiscordRoles = {
    roles_id: ROLES_VTC_CEVENTS,
};
export const DISCORD_ROLES_StaffTrial: DiscordRoles = {
    roles_id: ROLES_VTC_StaffTrial,
};
export const DISCORD_INVITE_CODE: string = process.env.DISCORD_INVITE_CODE!;

export const AUTHORIZED_DOMAINS: string[] = AUTHORIZED_DOMAINS_SPLIT;
export const ALLOWEDHEADERS: string = process.env.ALLOWEDHEADERS!;
export const ALLOWEDORIGIN: string = process.env.ALLOWEDORIGIN!;
