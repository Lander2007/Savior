import {
  lazy,
  memo,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { ArrowRight, Expand, Images } from "lucide-react";
import "../../styles/gallery.css";
import { useInView } from "./hooks/useInView";
import { useLanguage } from "../contexts/LanguageContext";

const GalleryLightbox = lazy(() => import("./GalleryLightbox"));

const RESPONSIVE_WIDTHS = [400, 800] as const;
const TILE_WIDTH = 800;
const HERO_WIDTH = 1000;
const LIGHTBOX_WIDTH = 1400;

const GALLERY_IMAGE_URLS = [
  {
    url: "https://images.unsplash.com/photo-1679312061521-d7d619a8cfb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=1000",
    area: "hero",
    aspectRatio: "4 / 5",
    featured: true,
  },
  {
    url: "https://images.unsplash.com/photo-1676471932681-45fa972d848a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=800",
    area: "i1",
    aspectRatio: "4 / 5",
  },
  {
    url: "https://images.unsplash.com/photo-1502920764203-b859c2384716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=800",
    area: "i2",
    aspectRatio: "1 / 1",
  },
  {
    url: "https://images.unsplash.com/photo-1689672235271-727de51355e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=800",
    area: "i3",
    aspectRatio: "3 / 4",
  },
  {
    url: "https://images.unsplash.com/photo-1651842462716-9829733957b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=800",
    area: "i4",
    aspectRatio: "16 / 10",
  },
  {
    url: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=800",
    area: "i5",
    aspectRatio: "5 / 6",
  },
  {
    url: "https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=800",
    area: "i6",
    aspectRatio: "4 / 3",
  },
  {
    url: "https://images.unsplash.com/photo-1565895405227-31cffbe0cf86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=75&w=800",
    area: "i7",
    aspectRatio: "3 / 2",
  },
] as const;

const IMAGE_COUNT = GALLERY_IMAGE_URLS.length;

function withWidth(url: string, width: number) {
  return url.replace(/w=\d+/, `w=${width}`);
}

function buildSrcSet(url: string) {
  return RESPONSIVE_WIDTHS.map((w) => `${withWidth(url, w)} ${w}w`).join(", ");
}

const IMAGE_SIZES =
  "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw";

const HERO_SIZES =
  "(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 58vw";

type GalleryTileImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  maxWidth: number;
};

const GalleryTileImage = memo(function GalleryTileImage({
  src,
  alt,
  priority = false,
  sizes = IMAGE_SIZES,
  maxWidth,
}: GalleryTileImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  useEffect(() => {
    if (priority || shouldLoad) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "280px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [priority, shouldLoad]);

  const displaySrc = withWidth(src, maxWidth);

  return (
    <div ref={containerRef} className="gallery-cell__media">
      {shouldLoad ? (
        <img
          src={displaySrc}
          srcSet={buildSrcSet(src)}
          sizes={sizes}
          alt={alt}
          width={maxWidth}
          height={Math.round(maxWidth * 0.75)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="gallery-cell__img"
        />
      ) : null}
    </div>
  );
});

export function GalleryFullWidth() {
  const [ref, isInView] = useInView({ threshold: 0.05, once: true });
  const { t, tm, isRTL } = useLanguage();

  const galleryImages = useMemo(() => {
    const alts = tm<{ alt: string }[]>("gallery.images");
    return GALLERY_IMAGE_URLS.map((item, index) => ({
      ...item,
      alt: alts[index]?.alt ?? "",
    }));
  }, [tm]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const lightboxSlides = useMemo(
    () =>
      galleryImages.map((img) => ({
        src: withWidth(img.url, LIGHTBOX_WIDTH),
        alt: img.alt,
        title: img.alt,
      })),
    []
  );

  const paddedCount = String(IMAGE_COUNT).padStart(2, "0");
  const mosaicClass = `gallery-mosaic${isInView ? " is-inview" : ""}${
    isRTL ? " gallery-section--rtl" : ""
  }`;

  return (
    <section
      id="gallery"
      ref={ref}
      className={`gallery-section min-h-screen py-24 sm:py-28${
        isRTL ? " gallery-section--rtl" : ""
      }`}
    >
      <div className="gallery-section__glow gallery-section__glow--tr" aria-hidden />
      <div className="gallery-section__glow gallery-section__glow--bl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header
          className={`gallery-header gallery-header--animate${
            isInView ? " is-inview" : ""
          }${isRTL ? " gallery-header--rtl" : ""}`}
        >
          <div className="gallery-header__main">
            <span className="gallery-eyebrow">{t.common.gallery}</span>
            <h2 className="gallery-title">{t.gallery.title}</h2>
            <p className="gallery-subtitle">{t.gallery.subtitle}</p>
            <div className="gallery-divider" aria-hidden />
          </div>

          <div className="gallery-header__meta">
            <span className="gallery-header__count">{paddedCount}</span>
            <span className="gallery-header__count-label">{t.common.gallery}</span>
            <p className="gallery-header__hint">{t.gallery.view}</p>
          </div>
        </header>

        <div className={mosaicClass} role="list">
          {galleryImages.map((image, index) => (
            <button
              key={image.area}
              type="button"
              role="listitem"
              className={
                image.featured
                  ? "gallery-cell gallery-cell--hero"
                  : "gallery-cell"
              }
              data-area={image.area}
              style={
                {
                  "--tile-ratio": image.featured
                    ? undefined
                    : image.aspectRatio,
                  "--stagger": index,
                } as CSSProperties
              }
              onClick={() => openLightbox(index)}
              aria-label={`${t.gallery.view}: ${image.alt}`}
            >
              <div className="gallery-cell__frame">
                <span className="gallery-cell__index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {image.featured && (
                  <span className="gallery-cell__badge" aria-hidden>
                    {t("gallery.featured")}
                  </span>
                )}

                <GalleryTileImage
                  src={image.url}
                  alt={image.alt}
                  priority={image.featured}
                  sizes={image.featured ? HERO_SIZES : IMAGE_SIZES}
                  maxWidth={image.featured ? HERO_WIDTH : TILE_WIDTH}
                />

                <div className="gallery-cell__overlay" aria-hidden>
                  <div className="gallery-cell__overlay-top">
                    <div className="gallery-cell__icon-wrap">
                      <Expand className="gallery-cell__icon" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="gallery-cell__overlay-bottom">
                    <span className="gallery-cell__view-label">
                      {t.gallery.view}
                    </span>
                    <span className="gallery-cell__caption">{image.alt}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <footer
          className={`gallery-footer gallery-footer--animate${
            isInView ? " is-inview" : ""
          }`}
        >
          <p className="gallery-footer__text flex items-center justify-center gap-2 sm:justify-start">
            <Images className="h-4 w-4 shrink-0 text-violet-600 dark:text-violet-400" />
            {t.gallery.subtitle}
          </p>
          <button
            type="button"
            className={`gallery-footer__btn ${isRTL ? "flex-row-reverse" : ""}`}
            onClick={() => openLightbox(0)}
          >
            {t.gallery.view} {t.common.gallery}
            <ArrowRight
              className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`}
              aria-hidden
            />
          </button>
        </footer>
      </div>

      {lightboxOpen && (
        <Suspense fallback={null}>
          <GalleryLightbox
            open={lightboxOpen}
            index={lightboxIndex}
            slides={lightboxSlides}
            onClose={closeLightbox}
          />
        </Suspense>
      )}
    </section>
  );
}
