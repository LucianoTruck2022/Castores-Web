import * as yup from "yup";

export const formPageOneSchema = yup.object().shape({
    name: yup.string().required().min(2).max(100),
    age: yup.number().required().min(5).max(100),
    nationality: yup.string().required().min(2).max(100),
    birth_date: yup.date().required(),
    work_or_study: yup.string().required().min(2).max(100),
    playing_time: yup.date().required(),
    recruiter: yup.string().required().min(2).max(256)
});

export const formPageTwoSchema = yup.object().shape({
    truckersmp_link_profile: yup.string().url().required().min(2).max(256),
    discord_username: yup.string().required().min(2).max(256),
    steam_link_profile: yup.string().url().required().min(2).max(256),
});

export const nameSchema = yup.object().shape({
    name: yup.string().required().min(2).max(100)
});

export const ageSchema = yup.object().shape({
    age: yup.number().required().min(5).max(100)
});

export const nationalitySchema = yup.object().shape({
    nationality: yup.string().required().min(2).max(100)
});

export const birthDateSchema = yup.object().shape({
    birth_date: yup.date().required()
});

export const workOrStudySchema = yup.object().shape({
    work_or_study: yup.string().required().min(2).max(100)
});

export const playingTimeSchema = yup.object().shape({
    playing_time: yup.date().required()
});

export const recruiterSchema = yup.object().shape({
    recruiter: yup.string().required().min(2).max(256)
});

export const truckersmpLinkProfileSchema = yup.object().shape({
    truckersmp_link_profile: yup.string().url().required().min(2).max(256)
});

export const discordUsernameSchema = yup.object().shape({
    discord_username: yup.string().required().min(2).max(256)
});

export const steamLinkProfileSchema = yup.object().shape({
    steam_link_profile: yup.string().url().required().min(2).max(256)
});
