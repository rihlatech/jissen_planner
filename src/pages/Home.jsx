import { motion } from "motion/react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero_img.avif";

const features = [
  {
    number: "01",
    title: "Turn goals into action",
    description:
      "Break bigger ambitions into monthly goals, weekly priorities, and daily tasks. Give your plans a structure you can actually work with.",
    label: "GOALS & PLANNING",
  },
  {
    number: "02",
    title: "Make room for what matters",
    description:
      "Organize your tasks, build routines, and use reminders to keep important activities in sight without losing track of your priorities.",
    label: "DAILY LIFE",
  },
  {
    number: "03",
    title: "Think things through with AI",
    description:
      "Explore planning assistance, progress insights, and recommendations through AI chat and voice, subject to your available usage allowance.",
    label: "AI ASSISTANCE",
  },
  {
    number: "04",
    title: "Grow with intention",
    description:
      "Make space for self-care, reflect on your progress, and adjust your approach as your goals and circumstances change.",
    label: "WELLBEING & REFLECTION",
  },
];

const audiences = [
  {
    number: "01",
    title: "Students",
    description:
      "Keep classes, assignments, and exams in one calm place.",
  },
  {
    number: "02",
    title: "Professionals",
    description:
      "Protect your focus, run your meetings and finish high impact work.",
  },
  {
    number: "03",
    title: "Entrepreneurs",
    description:
      "Turn big ideas and busy weeks into a clear daily plan.",
  },
  {
    number: "04",
    title: "Personal growth",
    description:
      "Build habits, make time for self-care and follow through on your goals.",
  },
];

const aiBenefits = [
  {
    number: "01",
    title: "Daily check-ins",
    description: "Only when you've given permission.",
  },
  {
    number: "02",
    title: "Talk through your plan",
    description:
      "Ask how your week went, or what's on your plate today.",
  },
  {
    number: "03",
    title: "Know your next move",
    description: "Get recommendations for what to do next.",
  },
  {
    number: "04",
    title: "Chat or talk by voice",
    description: "Choose the way you want to interact with your AI companion.",
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F8F4ED] text-[#25231F]">
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#25231F] sm:min-h-[92vh]">
        <img
          src={heroImage}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171613]/75 via-[#171613]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171613]/60 via-transparent to-[#171613]/10" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:px-14 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#D6BB8B]" />
              <p className="text-xs uppercase tracking-[0.24em] text-[#F1E2C3]">
                A more intentional way to live
              </p>
            </div>

            <h1 className="font-display mt-7 text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[104px]">
              Start Each Day
              <br />
              with <span className="text-[#E3C795]">Clarity.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              #1 productivity app for students, professionals and
              entrepreneurs.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              This is where you stop planning and start doing. This is where
              you lock-in.
              <span className="mt-3 block text-xs uppercase tracking-[0.2em] text-[#E3C795] sm:text-sm">
                Intentional. Disciplined. Modern.
              </span>
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/releases"
                className="inline-flex items-center gap-4 bg-[#F8F4ED] px-6 py-4 text-sm text-[#25231F] transition-colors duration-300 hover:bg-[#E3C795]"
              >
                Explore Lock-In
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#philosophy"
                className="inline-flex items-center gap-3 px-3 py-4 text-sm text-white transition-colors hover:text-[#E3C795]"
              >
                Discover the philosophy
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </motion.div>

          <div className="mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/65 sm:mt-20">
            <span>Plan</span>
            <span className="h-px w-5 bg-[#D6BB8B]/70" />
            <span>Act</span>
            <span className="h-px w-5 bg-[#D6BB8B]/70" />
            <span>Reflect</span>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="scroll-mt-10 mx-auto grid max-w-[1440px] gap-8 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:px-14 lg:py-36"
      >
        <Reveal>
          <SectionLabel>The Lock-In philosophy</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display max-w-4xl text-5xl font-light leading-[1.02] sm:text-6xl md:text-7xl">
            A plan is not about doing everything.
            <span className="text-[#8B714A]">
              {" "}
              It's about knowing what matters next.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base sm:leading-8">
            Lock-In is built around a simple idea: meaningful progress becomes
            easier to pursue when your ambitions have direction and your days
            have intention. It helps you connect the bigger picture with the
            small actions that move you forward.
          </p>
        </Reveal>
      </section>

      {/* Who it's for */}
      <section className="border-y border-[#25231F]/10 bg-[#F1EADF]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
          <Reveal>
            <SectionLabel>Who it's for</SectionLabel>

            <div className="mt-5 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
              <h2 className="font-display max-w-3xl text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl">
                A planner for the way you work and live.
              </h2>

              <p className="max-w-lg text-sm leading-7 text-[#625C53] md:justify-self-end">
                Whatever you're working toward, give your time, goals, and
                everyday responsibilities a place to come together.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {audiences.map((audience, index) => (
              <Reveal key={audience.number} delay={index * 0.08}>
                <article className="h-full border-t border-[#8B714A]/50 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-light text-[#8B714A]">
                      {audience.number}
                    </span>
                    <span className="h-px w-8 bg-[#8B714A]/40" />
                  </div>

                  <h3 className="font-display mt-7 text-3xl font-light leading-tight sm:text-4xl">
                    {audience.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#625C53]">
                    {audience.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature overview */}
      <section className="border-b border-[#25231F]/10 bg-[#F8F4ED]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
          <Reveal>
            <SectionLabel>Designed around your life</SectionLabel>

            <div className="mt-5 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
              <h2 className="font-display max-w-3xl text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl">
                More than a to-do list.
              </h2>

              <p className="max-w-lg text-sm leading-7 text-[#625C53] md:justify-self-end">
                A connected planning experience that considers your goals,
                your time, your wellbeing, and how you grow along the way.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal key={feature.number} delay={index * 0.08}>
                <article className="h-full border-t border-[#8B714A]/50 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-light text-[#8B714A]">
                      {feature.number}
                    </span>
                    <span className="h-px w-8 bg-[#8B714A]/40" />
                  </div>

                  <p className="mt-7 text-[10px] uppercase tracking-[0.15em] text-[#8B714A]">
                    {feature.label}
                  </p>

                  <h3 className="font-display mt-3 text-3xl font-light leading-tight sm:text-4xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#625C53]">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36">
        <Reveal>
          <SectionLabel>From intention to action</SectionLabel>

          <h2 className="font-display mt-5 max-w-3xl text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl">
            Think bigger.
            <br />
            Start smaller.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base sm:leading-8">
            Your long-term vision can feel overwhelming when everything is
            competing for attention. Lock-In is designed to help you bring
            that vision closer, one planning stage at a time.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-0 border-y border-[#25231F]/15 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Set your direction",
              text: "Identify goals that matter to you and give them a place in your bigger picture.",
            },
            {
              number: "02",
              title: "Shape your next steps",
              text: "Translate your priorities into monthly, weekly, and daily plans.",
            },
            {
              number: "03",
              title: "Review and adjust",
              text: "Reflect on what worked, learn from what didn't, and decide what comes next.",
            },
          ].map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <article className="h-full border-b border-[#25231F]/15 py-8 md:border-b-0 md:border-r md:px-7 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <span className="font-display text-4xl font-light text-[#8B714A]">
                  {step.number}
                </span>

                <h3 className="font-display mt-7 text-3xl font-light sm:text-4xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#625C53]">
                  {step.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lock-In AI Premium */}
      <section className="bg-[#25231F] text-[#F8F4ED]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-14 lg:py-32">
          <Reveal>
            <SectionLabel>Lock-In AI — Premium</SectionLabel>

            <h2 className="font-display mt-5 max-w-2xl text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl">
              An AI companion that's dedicated to you.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              It checks in on you and you can ask it anything about your plan,
              any time.
            </p>

            <Link
              to="/releases#whats-included"
              className="mt-8 inline-flex items-center gap-3 border border-[#D6BB8B]/60 px-6 py-4 text-sm transition-colors duration-300 hover:bg-[#F8F4ED] hover:text-[#25231F]"
            >
              Explore planned features
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border border-white/15 p-6 sm:p-9">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D6BB8B]">
                Your personal AI companion
              </p>

              <div className="mt-8 space-y-0">
                {aiBenefits.map((benefit) => (
                  <div
                    key={benefit.number}
                    className="flex gap-5 border-t border-white/15 py-5"
                  >
                    <span className="font-display text-2xl font-light text-[#D6BB8B]">
                      {benefit.number}
                    </span>

                    <div>
                      <h3 className="text-sm font-medium text-white/90">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-6 text-white/45">
                AI availability and usage allowances depend on the selected
                plan and final release configuration.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <Reveal>
          <SectionLabel>Simple proposed pricing</SectionLabel>

          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <h2 className="font-display max-w-3xl text-5xl font-light leading-[0.98] sm:text-6xl md:text-7xl">
              Find the plan that fits you.
            </h2>

            <p className="max-w-lg text-sm leading-7 text-[#625C53] md:justify-self-end">
              Start with the core planner or choose the proposed Premium plan
              for AI-assisted planning.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <article className="border border-[#25231F]/15 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8B714A]">
                Standard
              </p>

              <p className="font-display mt-4 text-5xl font-light">
                KSh 300
                <span className="ml-2 font-sans text-sm text-[#625C53]">
                  / month
                </span>
              </p>

              <p className="mt-4 text-sm leading-6 text-[#625C53]">
                The core planning experience, without included AI usage.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="border border-[#8B714A]/50 bg-[#E9DFCE] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#765C38]">
                Premium
              </p>

              <p className="font-display mt-4 text-5xl font-light">
                KSh 400
                <span className="ml-2 font-sans text-sm text-[#625C53]">
                  / month
                </span>
              </p>

              <p className="mt-4 text-sm leading-6 text-[#625C53]">
                Core planning plus AI chat and voice within defined usage
                limits.
              </p>
            </article>
          </Reveal>
        </div>

        <p className="mt-5 text-xs leading-6 text-[#625C53]">
          Proposed prices only. Final plan features, usage allowances, and
          billing terms will be confirmed before launch.
        </p>

        <Reveal>
          <div className="mt-8">
            <Link
              to="/releases"
              className="inline-flex items-center gap-3 border border-[#25231F] px-6 py-4 text-sm transition-colors duration-300 hover:bg-[#25231F] hover:text-[#F8F4ED]"
            >
              View the full release
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[#25231F]/10 bg-[#E9DFCE]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
          <Reveal>
            <SectionLabel>Your next chapter</SectionLabel>

            <h2 className="font-display mt-5 max-w-4xl text-6xl font-light leading-[0.92] sm:text-7xl md:text-8xl">
              Make space for the life you're building.
            </h2>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-sm leading-7 text-[#625C53] sm:text-base sm:leading-8">
                Lock-In V1.0.0 is coming soon. Explore the planned features
                and follow the journey toward launch.
              </p>

              <Link
                to="/releases"
                className="inline-flex shrink-0 items-center justify-center gap-4 bg-[#25231F] px-6 py-4 text-sm text-[#F8F4ED] transition-colors duration-300 hover:bg-[#8B714A]"
              >
                Discover V1.0.0
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}