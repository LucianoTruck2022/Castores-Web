import { Request, Response } from "express";
import { dataPost } from "../helpers/dataFetch";
import { DISCORD_WEBHOOK_URL_VTC_APPLY } from "../helpers/configs";

// types
import { ApplyVtc, Ets2Dlc, AtsDlc, DiscordFild } from "../types/VtcApplyTypes";

const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
};

const getTimesTamp = (date: Date) => {
    return Math.floor(date.getTime() / 1000);
};

const renderDlcEts2ToString = (dlcs: Ets2Dlc): string => {
    let dlcString: string = "";
    const keys = Object.keys(dlcs);

    keys.forEach((key) => {
        const value = dlcs[key as keyof Ets2Dlc];
        if (value) {
            dlcString += `- ${key} \n`;
        }
    });

    return dlcString;
};

const renderDlcAtsToString = (dlcs: AtsDlc): string => {
    let dlcString: string = "";
    const keys = Object.keys(dlcs);

    keys.forEach((key) => {
        const value = dlcs[key as keyof AtsDlc];
        if (value) {
            dlcString += `- ${key} \n`;
        }
    });

    return dlcString;
};

const gameFiles = (bodyObj: ApplyVtc): DiscordFild[] => {
    const fields: DiscordFild[] = [];

    if (bodyObj.ets2_play) {
        fields.push({
            name: "DLCs de ETS2",
            value: renderDlcEts2ToString(bodyObj.ets2_dlc),
            inline: true,
        });
    }
    if (bodyObj.ats_play) {
        fields.push({
            name: "DLCs de ATS",
            value: renderDlcAtsToString(bodyObj.ats_dlc),
            inline: true,
        });
    }
    return fields;
};

const postVtcApply = async (req: Request, res: Response) => {
    const bodyData: ApplyVtc = req.body;
    const ip_address: string | string[] = req.headers["x-forwarded-for"]
        ? req.headers["x-forwarded-for"]
        : req.socket.remoteAddress
        ? req.socket.remoteAddress
        : "None";

    const ip_address_to_send: string = ip_address.toString().split(",")[0];
    const nowTimestamp = getTimesTamp(new Date());

    const payload = {
        username: "Aplication VTC System",
        avatar_url: "https://i.imgur.com/0G4Xkp9.png",
        embeds: [
            {
                title: `Informacion personal`,
                color: 2829617,
                author: {
                    name: bodyData.name,
                    url: bodyData.truckersmp_link_profile,
                    icon_url: "https://i.imgur.com/NCVmFul.png",
                },
                fields: [
                    {
                        name: "Edad",
                        value: bodyData.age,
                        inline: true,
                    },
                    {
                        name: "Nacionalidad",
                        value: bodyData.nationality,
                        inline: true,
                    },
                    {
                        name: "Fecha de nacimiento",
                        value: `<t:${getTimesTamp(
                            new Date(bodyData.birth_date)
                        )}:D>`,
                        inline: true,
                    },
                    {
                        name: "Hora de juego",
                        value: `<t:${getTimesTamp(
                            new Date(bodyData.playing_time)
                        )}:t>`,
                        inline: true,
                    },
                    {
                        name: "Estudia o trabaja",
                        value: bodyData.work_or_study,
                        inline: true,
                    },
                    {
                        name: "Reclutador",
                        value: bodyData.recruiter,
                        inline: false,
                    },
                ],
            },
            {
                title: `Perfiles`,
                color: 2829617,
                fields: [
                    {
                        name: "Perfil de TruckersMP",
                        value: `[Perfil TruckersMP](${bodyData.truckersmp_link_profile})`,
                        inline: true,
                    },
                    {
                        name: "Perfil de Steam",
                        value: `[Perfil Steam](${bodyData.steam_link_profile})`,
                        inline: true,
                    },
                    {
                        name: "Usuario en Discord",
                        value: bodyData.discord_username,
                        inline: true,
                    },
                ],
            },
            {
                title: `Juegos en pocesion`,
                color: 2829617,
                description: `- **ATS**: ${
                    bodyData.ats_play ? "Si" : "No"
                } \n- **ETS 2**: ${bodyData.ets2_play ? "Si" : "No"}`,
                fields: [...gameFiles(bodyData)],
            },
            {
                title: `Metadata`,
                color: 2829617,
                fields: [
                    {
                        name: "Fecha de envio",
                        value: `<t:${nowTimestamp}:F> - <t:${nowTimestamp}:R>`,
                        inline: false,
                    },
                ],
                footer: {
                    text: `IP: ${ip_address_to_send}`,
                },
            },
        ],
    };

    const apiResponse = await dataPost(
        { headers },
        JSON.stringify(payload),
        DISCORD_WEBHOOK_URL_VTC_APPLY
    );
    try {
        if (!apiResponse) throw new Error("Error");
        if (apiResponse.status >= 300 || apiResponse.status < 200) {
            throw new Error("Error");
        }
        res.status(200);
        res.send("ok");
    } catch (e) {
        res.status(404);
        res.send(JSON.stringify({ error: 404 }));
    }
};

export default postVtcApply;
