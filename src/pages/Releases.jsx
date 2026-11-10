import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Automatically discover screenshots inside src/assets.
const assetFiles = import.meta.glob(
  "../assets/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const assets = Object.fromEntries(
  Object.entries(assetFiles).map(([path, url]) => {
    const filename = path.split("/").pop().replace(/\.[^.]+$/, "");
    return [filename, url];
  })
);

const galleryItems = [
  // { name: "planner_stage", title: "Planner" },
  // { name: "monthly_stage", title: "Monthly planning" },
  // { name: "weekly_stage", title: "Weekly planning" },
  // { name: "daily_stage", title: "Daily planning" },
  { name: "home", title: "Home" },
  { name: "goals", title: "Goals" },
  { name: "selfcare", title: "Self-care" },
  { name: "review", title: "Review" },
  { name: "more", title: "More" },
  // { name: "ai_popup_window", title: "Jissen AI" },
  { name: "settings", title: "Settings" },
  // { name: "themes_page", title: "Themes" },
  // { name: "reminders_page", title: "Reminders" },
]
  .map((item) => ({
    ...item,
    src: assets[item.name],
  }))
  .filter((item) => item.src);

const features = [
  {
    number: "01",
    title: "Plan your goals",
    description:
      "Break your goals into manageable plans, tasks, and daily actions.",
  },
  {
    number: "02",
    title: "Stay on track",
    description:
      "Organize your schedule and get reminders for the things that matter.",
  },
  {
    number: "03",
    title: "Use Jissen AI",
    description:
      "Get planning help through AI chat and voice with the Premium plan.",
  },
  {
    number: "04",
    title: "Reflect and grow",
    description:
      "Make space for self-care and review your progress as you go.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function ScreenshotCard({ screenshot, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Enlarge ${screenshot.title}`}
      className="group w-[210px] shrink-0 overflow-hidden border border-[#25231F]/10 bg-[#F8F4ED] text-left sm:w-[230px]"
    >
      <div className="flex h-[300px] items-start justify-center overflow-hidden bg-[#E9DFCE]/60">
        <img
          src={screenshot.src}
          alt={screenshot.title}
          loading="lazy"
          className="h-full w-full object-contain object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <h3 className="px-4 py-3 text-sm text-[#25231F]">
        {screenshot.title}
      </h3>
    </button>
  );
}

function ImageLightbox({ images, activeIndex, onClose, onChange }) {
  const image = activeIndex === null ? null : images[activeIndex];

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          key="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${image.title} image viewer`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171613]/95 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/30 text-2xl text-white transition-colors hover:bg-white/10"
          >
            ×
          </button>

          {activeIndex > 0 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onChange(activeIndex - 1);
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/25 text-3xl text-white transition-colors hover:bg-white/15 sm:left-6"
            >
              ‹
            </button>
          )}

          {activeIndex < images.length - 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onChange(activeIndex + 1);
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/25 text-3xl text-white transition-colors hover:bg-white/15 sm:right-6"
            >
              ›
            </button>
          )}

          <motion.div
            key={image.name}
            className="flex max-h-full max-w-full flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.title}
              className="block max-h-[78vh] max-w-[80vw] object-contain"
            />

            <p className="text-sm text-white">{image.title}</p>
            <p className="text-xs text-white/55">
              {activeIndex + 1} / {images.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Releases() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index > 0 ? index - 1 : index));
      } else if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index < galleryItems.length - 1 ? index + 1 : index
        );
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <main className="overflow-hidden bg-[#F8F4ED] text-[#25231F]">
      {/* Coming soon */}
      <section className="bg-[#25231F] text-[#F8F4ED]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-[#D6BB8B]">
              JISSEN PLANNER · V1.0.0
            </p>

            <h1 className="font-display mt-6 max-w-4xl text-5xl font-light leading-[0.96] sm:text-7xl md:text-8xl">
              A clearer way to plan your life.
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Set goals, plan your days, and reflect on your progress in one
              place.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="cursor-not-allowed border border-white/20 bg-white/10 px-6 py-4 text-sm text-white/50"
              >
                Download here
              </button>

              <span className="text-sm text-[#D6BB8B]">
                Version 1.0.0 is coming soon.
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
            What you can do
          </p>

          <h2 className="font-display mt-4 max-w-3xl text-4xl font-light leading-tight sm:text-6xl">
            The essentials for making progress.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.number} delay={index * 0.06}>
              <article className="h-full border-t border-[#8B714A]/50 py-5">
                <span className="font-display text-2xl font-light text-[#8B714A]">
                  {feature.number}
                </span>

                <h3 className="font-display mt-5 text-2xl font-light">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#625C53]">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Scrolling gallery */}
      {galleryItems.length > 0 && (
        <section className="border-y border-[#25231F]/10 bg-[#F1EADF]">
          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
                A preview
              </p>

              <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-display text-4xl font-light sm:text-5xl">
                  Take a look inside.
                </h2>
                <p className="text-sm text-[#625C53]">
                  Scroll to explore. Select an image to enlarge it.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 flex gap-4 overflow-x-auto overscroll-x-contain pb-4 scroll-smooth">
              {galleryItems.map((screenshot, index) => (
                <ScreenshotCard
                  key={screenshot.name}
                  screenshot={screenshot}
                  onOpen={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <ImageLightbox
        images={galleryItems}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </main>
  );
}