import { IconButton } from "@mui/material";

// icons
import CancelIcon from "@mui/icons-material/Cancel";

const ModalGallery = ({ imageSrc, setOpen }) => {
    const showImage = imageSrc ? "fixed inset-0" : "hidden";
    const animtion =
        "animate-fade animate-once animate-duration-[120ms] animate-ease-linear";

    return (
        <div
            id="modal-gallery"
            onClick={(event) =>
                event.target.id === "modal-gallery" && setOpen(null)
            }
            className={`${showImage} ${animtion} flex z-20 align-middle items-center justify-center backdrop-blur-md`}
        >
            <div className="max-w-full md:max-w-[58%] w-max m-4">
                <div id="modal-gallery" className="flex w-full justify-end">
                    <IconButton
                        onClick={() => setOpen(null)}
                        aria-label="close image"
                        color="error"
                        size="large"
                    >
                        <CancelIcon />
                    </IconButton>
                </div>
                <img
                    className="aspect-video shadow-xs rounded-xl"
                    src={imageSrc}
                    alt="image opened in modal"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default ModalGallery;
