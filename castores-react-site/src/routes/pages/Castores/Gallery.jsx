import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLangContex } from "../../../hooks/contex/LangContex";
import {
    Typography,
    Button,
    ImageList,
    ImageListItem,
    useMediaQuery,
} from "@mui/material";
import { useDarkMode } from "../../../hooks/contex/DarkModeContex";
import ModalGallery from "../../../components/ModalGallery";

// icons
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

// images
import img1 from "../../../static/img/reforma/gallery/1.webp";
import img2 from "../../../static/img/reforma/gallery/2.webp";
import img3 from "../../../static/img/reforma/gallery/3.webp";
import img4 from "../../../static/img/reforma/gallery/4.webp";
import img5 from "../../../static/img/reforma/gallery/5.webp";
import img6 from "../../../static/img/reforma/gallery/6.webp";
import img7 from "../../../static/img/reforma/gallery/7.webp";
import img8 from "../../../static/img/reforma/gallery/8.webp";
import img9 from "../../../static/img/reforma/gallery/9.webp";
import img10 from "../../../static/img/reforma/gallery/10.webp";
import img11 from "../../../static/img/reforma/gallery/11.webp";
import img12 from "../../../static/img/reforma/gallery/12.webp";
import img13 from "../../../static/img/reforma/gallery/13.webp";
import img14 from "../../../static/img/reforma/gallery/14.webp";
import img15 from "../../../static/img/reforma/gallery/15.webp";
import img16 from "../../../static/img/reforma/gallery/16.webp";
import img17 from "../../../static/img/reforma/gallery/17.webp";
import img18 from "../../../static/img/reforma/gallery/18.webp";
import img19 from "../../../static/img/reforma/gallery/19.webp";
import img20 from "../../../static/img/reforma/gallery/20.webp";

const Gallery = () => {
    const { themeTatailwind } = useDarkMode();
    const { lang } = useLangContex();

    const [OpenImage, setOpenImage] = useState(null);

    const navigate = useNavigate();
    const matchesMd = useMediaQuery("(min-width: 768px)");

    const galleryImagesList = [
        {
            id: 1,
            src: img1,
        },
        {
            id: 2,
            src: img2,
        },
        {
            id: 3,
            src: img3,
        },
        {
            id: 4,
            src: img4,
        },
        {
            id: 5,
            src: img5,
        },
        {
            id: 6,
            src: img6,
        },
        {
            id: 7,
            src: img7,
        },
        {
            id: 8,
            src: img8,
        },
        {
            id: 9,
            src: img9,
        },
        {
            id: 10,
            src: img10,
        },
        {
            id: 11,
            src: img11,
        },
        {
            id: 12,
            src: img12,
        },
        {
            id: 13,
            src: img13,
        },
        {
            id: 14,
            src: img14,
        },
        {
            id: 15,
            src: img15,
        },
        {
            id: 16,
            src: img16,
        },
        {
            id: 17,
            src: img17,
        },
        {
            id: 18,
            src: img18,
        },
        {
            id: 19,
            src: img19,
        },
        {
            id: 20,
            src: img20,
        },
    ];

    return (
        <>
            <ModalGallery imageSrc={OpenImage} setOpen={setOpenImage} />
            <div className="flex flex-col items-center m-5">
                <div className="relative flex max-w-7xl w-full">
                    <div className="absolute z-0 w-full h-full max-w-lg top-0 left-0 right-0 bottom-0 m-auto reformaSection rounded-2xl blur-2xl drop-shadow-xs"></div>
                    <Typography
                        className="flex justify-center w-full z-10"
                        color={themeTatailwind.primary.color}
                        variant="h4"
                    >
                        <b>{lang.sys.gallery.title}</b>
                    </Typography>
                </div>
                <div className="flex justify-start max-w-7xl w-full mt-5 z-10">
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ArrowBackRoundedIcon />}
                        onClick={() => navigate("/")}
                    >
                        {lang.sys.gallery.back_btn}
                    </Button>
                </div>

                <ImageList
                    className="z-0 max-w-7xl mt-5"
                    variant="masonry"
                    cols={matchesMd ? 2 : 1}
                    gap={10}
                >
                    {galleryImagesList.map((item) => (
                        <ImageListItem className="z-0 hover:z-10" key={item.id}>
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    className="aspect-video shadow-xs transition duration-500 hover:scale-105 hover:cursor-pointer"
                                    src={item.src}
                                    onClick={() => setOpenImage(item.src)}
                                    alt={`gallery item ${item.id}`}
                                    loading="lazy"
                                />
                            </div>
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </>
    );
};

export default Gallery;
