import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import { useLangContex } from "../../../hooks/contex/LangContex";
import { Typography } from "@mui/material";
import ReformaAttributeCard from "./ReformaAttributeCard";

// images
import ReformaIcon from "../../../static/img/reforma/reformaMods.webp";
import intro2 from "../../../static/img/reforma/intro2.webp";
import intro3 from "../../../static/img/reforma/intro2.webp";
import promods_canada from "../../../static/img/reforma/promods-canada.webp";

const DownloadOther = () => {
    const { themeTatailwind } = useDarkMode();
    const { lang } = useLangContex();

    const otherDownloads = [
        {
            name: lang.downloads.other_download.card1.title,
            description: lang.downloads.other_download.card1.content,
            image: intro2,
            gameVersion: "1.49",
            reformaVersion: "2.6.6",
            lastUpdate: "2024-01-26",
            downloadLink:
                "https://truckymods.io/american-truck-simulator/map-assets/reforma-sierra-nevada",
        },
        {
            name: lang.downloads.other_download.card2.title,
            description: lang.downloads.other_download.card2.content,
            image: ReformaIcon,
            gameVersion: "1.50",
            reformaVersion: "2.7.4",
            lastUpdate: "2024-05-20",
            downloadLink:
                "https://sharemods.com/2lybu18v3kbu/Reforma_OtherMaps_Patch_v21_149.scs.html",
        },
        {
            name: lang.downloads.other_download.card3.title,
            description: lang.downloads.other_download.card3.content,
            image: promods_canada,
            gameVersion: "1.50",
            reformaVersion: "12",
            lastUpdate: "2024-05-28",
            downloadLink:
                "https://truckymods.io/american-truck-simulator/ui/reforma-promods-background-fix",
        },
        {
            name: lang.downloads.other_download.card4.title,
            description: lang.downloads.other_download.card4.content,
            image: intro3,
            gameVersion: "1.50",
            reformaVersion: "1.6.2",
            lastUpdate: "2024-05-20",
            patreonLink: "http://patreon.com/eblem",
            downloadLink:
                "https://truckymods.io/american-truck-simulator/maps/reforma-esterlon",
        },
    ];

    return (
        <div className="flex flex-col mt-12">
            <Typography
                className="flex justify-center"
                color={themeTatailwind.primary.color}
                variant="h5"
            >
                <b>{lang.downloads.other_download.title}</b>
            </Typography>
            <Typography
                className="flex justify-center"
                color={themeTatailwind.primary.color}
                variant="body2"
            >
                {lang.downloads.other_download.description}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
                {otherDownloads.slice(0, 3).map((atribute, index) => {
                    return (
                        <ReformaAttributeCard
                            key={`${index}patreonDownload`}
                            title={atribute.name}
                            description={atribute.description}
                            image={atribute.image}
                            gameVersion={atribute.gameVersion}
                            reformaVersion={atribute.reformaVersion}
                            lastUpdate={atribute.lastUpdate}
                            downloadLink={atribute.downloadLink}
                            patreonLink={atribute.patreonLink}
                        />
                    );
                })}
            </div>
            <div className="grid grid-cols-1 gap-5 justify-items-center">
                {otherDownloads.slice(3).map((atribute, index) => {
                    return (
                        <ReformaAttributeCard
                            key={`${index}patreonDownload`}
                            title={atribute.name}
                            description={atribute.description}
                            image={atribute.image}
                            gameVersion={atribute.gameVersion}
                            reformaVersion={atribute.reformaVersion}
                            lastUpdate={atribute.lastUpdate}
                            downloadLink={atribute.downloadLink}
                            patreonLink={atribute.patreonLink}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DownloadOther;
