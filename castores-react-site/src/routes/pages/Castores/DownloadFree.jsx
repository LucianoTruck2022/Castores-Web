import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import { useLangContex } from "../../../hooks/contex/LangContex";
import { Typography } from "@mui/material";
import ReformaAttributeCard from "./ReformaAttributeCard";

// images
import reformaMods from "../../../static/img/reforma/reformaMods.webp";

const DownloadFree = () => {
    const { themeTatailwind } = useDarkMode();
    const { lang } = useLangContex();

    const freeDownloads = [
        {
            name: lang.downloads.free_downloads.card1.title,
            description: lang.downloads.free_downloads.card1.content,
            image: reformaMods,
            gameVersion: "1.50",
            reformaVersion: "2.7.4",
            lastUpdate: "2024-05-20",
            downloadLink:
                "https://truckymods.io/american-truck-simulator/maps/reforma",
        },
        {
            name: lang.downloads.free_downloads.card2.title,
            description: lang.downloads.free_downloads.card2.content,
            image: reformaMods,
            gameVersion: "1.50",
            reformaVersion: "2.7.4",
            lastUpdate: "2024-05-20",
            downloadLink:
                "https://truckymods.io/american-truck-simulator/map-assets/reforma-mega-resources",
        },
    ];

    return (
        <div className="flex flex-col mt-12">
            <Typography
                className="flex justify-center"
                color={themeTatailwind.primary.color}
                variant="h5"
            >
                <b>{lang.downloads.free_downloads.title}</b>
            </Typography>
            <Typography
                className="flex justify-center"
                color={themeTatailwind.primary.color}
                variant="body2"
            >
                {lang.downloads.free_downloads.description}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
                {freeDownloads.map((atribute, index) => {
                    return (
                        <ReformaAttributeCard
                            key={`${index}freeDownload`}
                            title={atribute.name}
                            description={atribute.description}
                            image={atribute.image}
                            gameVersion={atribute.gameVersion}
                            reformaVersion={atribute.reformaVersion}
                            lastUpdate={atribute.lastUpdate}
                            downloadLink={atribute.downloadLink}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default DownloadFree;
