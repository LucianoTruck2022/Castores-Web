import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import { useLangContex } from "../../../hooks/contex/LangContex";
import { Typography } from "@mui/material";
import ReformaAttributeCardPatreon from "./ReformaAttributeCardPatreon";

// images
import intro_altos from "../../../static/img/reforma/intro-altos.webp";
import intro_pacifico from "../../../static/img/reforma/intro-pacifico.webp";
import intro_noreste from "../../../static/img/reforma/intro-noreste.webp";
import intro_extremo from "../../../static/img/reforma/intro-extremo.webp";

const DownloadPatreon = () => {
    const { themeTatailwind } = useDarkMode();
    const { lang } = useLangContex();

    const patreonDownloads = [
        {
            name: lang.downloads.exclusive_downloads.card1.title,
            description: lang.downloads.exclusive_downloads.card1.content,
            image: intro_extremo,
            gameVersion: "1.50",
            reformaVersion: "1.0.4",
            lastUpdate: "2024-05-20",
            patreonLink: "http://patreon.com/eblem",
            paypalLink:
                "https://www.paypal.com/donate/?hosted_button_id=6ELN4TV87HJF4",
        },
        {
            name: lang.downloads.exclusive_downloads.card2.title,
            description: lang.downloads.exclusive_downloads.card2.content,
            image: intro_noreste,
            gameVersion: "1.50",
            reformaVersion: "3.7",
            lastUpdate: "2024-05-20",
            patreonLink: "http://patreon.com/eblem",
            paypalLink:
                "https://www.paypal.com/donate/?hosted_button_id=6ELN4TV87HJF4",
        },
        {
            name: lang.downloads.exclusive_downloads.card3.title,
            description: lang.downloads.exclusive_downloads.card3.content,
            image: intro_pacifico,
            gameVersion: "1.50",
            reformaVersion: "3.1",
            lastUpdate: "2024-07-13",
            patreonLink: "http://patreon.com/marcomapper",
            paypalLink:
                "https://www.paypal.com/donate/?hosted_button_id=3Y9STB8TZGANW",
        },
        {
            name: lang.downloads.exclusive_downloads.card4.title,
            description: lang.downloads.exclusive_downloads.card4.content,
            image: intro_altos,
            gameVersion: "1.50",
            reformaVersion: "3.4",
            lastUpdate: "2024-05-27",
            patreonLink: "http://patreon.com/eblem",
            paypalLink:
                "https://www.paypal.com/donate/?hosted_button_id=DDQ8F2B8346NG",
        },
    ];

    return (
        <div className="flex flex-col mt-12">
            <Typography
                className="flex justify-center"
                color={themeTatailwind.primary.color}
                variant="h5"
            >
                <b>{lang.downloads.exclusive_downloads.title}</b>
            </Typography>
            <Typography
                className="flex justify-center"
                color={themeTatailwind.primary.color}
                variant="body2"
            >
                {lang.downloads.exclusive_downloads.description}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
                {patreonDownloads.slice(0, 3).map((atribute, index) => {
                    return (
                        <ReformaAttributeCardPatreon
                            key={`${index}patreonDownload`}
                            title={atribute.name}
                            description={atribute.description}
                            image={atribute.image}
                            gameVersion={atribute.gameVersion}
                            reformaVersion={atribute.reformaVersion}
                            lastUpdate={atribute.lastUpdate}
                            patreonLink={atribute.patreonLink}
                            paypalLink={atribute.paypalLink}
                        />
                    );
                })}
            </div>
            <div className="grid grid-cols-1 gap-5 justify-items-center">
                {patreonDownloads.slice(3).map((atribute, index) => {
                    return (
                        <ReformaAttributeCardPatreon
                            key={`${index}patreonDownload`}
                            title={atribute.name}
                            description={atribute.description}
                            image={atribute.image}
                            gameVersion={atribute.gameVersion}
                            reformaVersion={atribute.reformaVersion}
                            lastUpdate={atribute.lastUpdate}
                            patreonLink={atribute.patreonLink}
                            paypalLink={atribute.paypalLink}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DownloadPatreon;
