import { useEffect, useRef, useState } from "react";
import { TITLE, REST_API_URL } from "../../../helpers/configs";
import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import { useLangContex } from "../../../hooks/contex/LangContex";
import { Typography } from "@mui/material";
import useFetch from "../../../hooks/useFetch";
import ErrorData from "../../../components/ErrorData";
import EmptyData from "../../../components/EmptyData";
import MemberCard from "../../../components/MemberCard";
import ModalLoading from "../../../components/ModalLoading";

const CastoresStaffTeam = () => {
    document.title = TITLE + " | VTC Staff | Team";
    const { themeTatailwind } = useDarkMode();
    const { lang } = useLangContex();
    const [Response, setResponse] = useState(null);
    const loaded = useRef(false);
    const cdnDiscordAvatar = "https://cdn.discordapp.com/avatars/";

    // eslint-disable-next-line
    const [loading, error, succes, bodyResponse] = useFetch(
        `${REST_API_URL}/getCastoresDiscordSTeam`,
        "GET",
        {
            "Content-Type": "application/json",
        }
    );

    const apiResponse = async () => {
        const fetchResponse = await bodyResponse();

        if (fetchResponse.status === 200) {
            setResponse((await fetchResponse.json()).response);
        }
    };

    useEffect(() => {
        if (!loaded.current) {
            apiResponse();
            loaded.current = true;
        } // eslint-disable-next-line
    }, []);

    const renderMembers = () => {
        if (!Response) return <></>;

        return Response.map((role) => {
            const colorHex = role.color.toString(16);

            return (
                <div
                    key={role.id}
                    style={{ borderColor: `#${colorHex}` }}
                    className={`rounded-lg border-2 p-2 mx-2 mb-5 md:mx-10`}
                >
                    <Typography
                        className="text-center"
                        color={themeTatailwind.primary.color}
                        variant="h5"
                    >
                        <b>{role.name}</b>
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center m-4 gap-8 p-2">
                        {role.members.map((member) => {
                            return (
                                <MemberCard
                                    key={member.id + "card" + role.name}
                                    id={member.id}
                                    username={member.nick}
                                    roleName={role.name}
                                    imgLink={`${cdnDiscordAvatar}${member.id}/${member.avatar}`}
                                    dateJoin={member.joined_at}
                                />
                            );
                        })}
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            <div className="flex justify-center m-2">
                <Typography color={themeTatailwind.primary.color} variant="h4">
                    <b>{lang.sys.castores_staff_team_page.title}</b>
                </Typography>
            </div>
            {!Response && !loading && (
                <ErrorData
                    msj={lang.sys.sys_events.error_data_message.description}
                />
            )}
            {succes && !loading && !Response && (
                <EmptyData
                    key={"contenHallEmpty"}
                    msj={lang.sys.sys_events.empty_data_message.description}
                />
            )}
            <ModalLoading open={loading} />
            {renderMembers()}
        </>
    );
};

export default CastoresStaffTeam;
