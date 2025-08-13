import { Request, Response } from "express";
import { Role } from "../types/api/discordTypes";
import { setCache } from "../helpers/cache";
import { DISCORD_ID_SERVER, DISCORD_ROLES_ID } from "../helpers/configs";
import { discordBot, getRoleInfoAndMembers } from "../helpers/discordBot";

const getHallOfFame = async (req: Request, res: Response) => {
    const guildPreview = await discordBot.guilds.fetch(DISCORD_ID_SERVER);
    const roleRest = await getRoleInfoAndMembers(
        guildPreview,
        DISCORD_ROLES_ID.roles_id
    );

    if (!roleRest) {
        res.sendStatus(404);
        return;
    }
    if (roleRest.length === 0) {
        res.sendStatus(404);
        return;
    }

    const roleMembers: { response: Role[] } = { response: roleRest };

    setCache("hallOfFame", {
        data: roleMembers,
    });
    res.send(roleMembers);
};

export default getHallOfFame;
