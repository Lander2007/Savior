import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";

export type GallerySlide = {
  src: string;
  alt: string;
  title: string;
};

type GalleryLightboxProps = {
  open: boolean;
  index: number;
  slides: GallerySlide[];
  onClose: () => void;
};

export default function GalleryLightbox({
  open,
  index,
  slides,
  onClose,
}: GalleryLightboxProps) {
  if (!open) return null;

  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Counter, Captions]}
      carousel={{ finite: false }}
      controller={{ closeOnBackdropClick: true }}
      captions={{ descriptionVisible: false }}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, 0.92)" },
      }}
    />
  );
}
