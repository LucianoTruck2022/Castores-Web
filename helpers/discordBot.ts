import { DISCORD_BOT_TOKEN } from "./configs";
import { Role } from "../types/api/discordTypes";
import { Client, Guild } from "discord.js";

const discordBot = new Client({
    intents: ["GuildMembers", "GuildPresences", "Guilds"],
});
discordBot.login(DISCORD_BOT_TOKEN);

const getRoleInfoAndMembers = async (
    guild: Guild,
    rolesId: string[]
): Promise<null | Role[]> => {
    const roleMembers: Role[] = [];

    try {
        for (const role of rolesId) {
            const roleFetch = await guild.roles.fetch(role);
            if (!roleFetch) continue;

            const roleObj: Role = {
                id: roleFetch.id,
                name: roleFetch.name,
                color: roleFetch.color,
                members: [],
            };

            roleFetch.members.map((member) => {
                roleObj.members.push({
                    id: member.user.id,
                    nick: member.user.displayName,
                    avatar: member.user.avatar,
                    joined_at: member.joinedAt,
                    rolesNames: member.roles.cache.map((role) => role.name),
                });
            });

            if (roleObj.members.length === 0) continue;
            roleMembers.push(roleObj);
        }

        return roleMembers;
    } catch (e) {
        return null;
    }

    return null;
};

export { discordBot, getRoleInfoAndMembers };
