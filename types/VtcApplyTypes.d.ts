export interface ApplyVtc {
    name: string;
    age: string;
    nationality: string;
    birth_date: Date;
    work_or_study: string;
    playing_time: Date;
    recruiter: string;
    truckersmp_link_profile: string;
    discord_username: string;
    steam_link_profile: string;
    ets2_play: boolean;
    ats_play: boolean;
    ats_dlc: AtsDlc;
    ets2_dlc: Ets2Dlc;
    captcha: string;
}

export interface AtsDlc {
    any_dlcs: boolean;
    new_mexico: boolean;
    oregon: boolean;
    washington: boolean;
    utah: boolean;
    idaho: boolean;
    colorado: boolean;
    wyoming: boolean;
    montana: boolean;
    texas: boolean;
    oklahoma: boolean;
    kansas: boolean;
    nebraska: boolean;
    arkansas: boolean;
    classic_stripes_Paint_jobs_pack: boolean;
    base_game: boolean;
}

export interface Ets2Dlc {
    any_dlcs: boolean;
    going_east: boolean;
    scandinavia: boolean;
    vive_la_france: boolean;
    italia: boolean;
    beyond_the_baltic_sea: boolean;
    road_to_the_black_sea: boolean;
    iberia: boolean;
    west_balcans: boolean;
    greece: boolean;
    modern_lines_paint_jobs_pack: boolean;
    base_game: boolean;
}

export interface DiscordFild {
    name: string;
    value: string;
    inline: boolean;
}
