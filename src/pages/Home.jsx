import { motion } from "motion/react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero_img.avif";

const audiences = [
  {
    number: "01",
    title: "Students",
    description:
      "Bring assignments, revision, deadlines, and personal goals into one organized space.",
    detail: "LEARN WITH DIRECTION",
  },
  {
    number: "02",
    title: "Professionals",
    description:
      "Protect your focus, organize your workload, and make meaningful progress beyond the to-do list.",
    detail: "WORK WITH PURPOSE",
  },
  {
    number: "03",
    title: "Entrepreneurs",
    description:
      "Turn ambitious ideas into realistic priorities and build momentum through consistent action.",
    detail: "BUILD WITH INTENTION",
  },
  {
    number: "04",
    title: "Personal growth",
    description:
      "Create healthier routines, make time for yourself, and reflect on the person you're becoming.",
    detail: "GROW AT YOUR PACE",
  },
];

const features = [
  {
    number: "01",
    label: "GOALS & PLANNING",
    title: "Give your ambitions a structure.",
    description:
      "Break bigger ambitions into monthly goals, weekly priorities, and daily tasks. See how the small things you do connect to the bigger picture.",
  },
  {
    number: "02",
    label: "YOUR EVERYDAY",
    title: "Make room for what matters.",
    description:
      "Organize tasks, establish routines, and use reminders to keep important responsibilities in sight without losing sight of your priorities.",
  },
  {
    number: "03",
    label: "AI ASSISTANCE",
    title: "Find clarity when you need it.",
    description:
      "Explore planning assistance, progress insights, and recommendations through Jissen AI chat and voice.",
  },
  {
    number: "04",
    label: "WELLBEING & REFLECTION",
    title: "Progress without losing yourself.",
    description:
      "Make space for self-care, reflect on what is working, and adjust your plans as your circumstances and priorities change.",
  },
];

const steps = [
  {
    number: "01",
    title: "Set your direction",
    description:
      "Identify the goals that matter to you and decide what you want to work toward.",
  },
  {
    number: "02",
    title: "Plan your next move",
    description:
      "Break your ambitions into monthly goals, weekly priorities, and daily actions.",
  },
  {
    number: "03",
    title: "Show up and reflect",
    description:
      "Take action, review your progress, and adjust your approach as you learn.",
  },
];

const aiBenefits = [
  {
    number: "01",
    title: "Permission-first check-ins",
    description:
      "AI check-ins happen only when you give permission. You can turn them off at any time.",
  },
  {
    number: "02",
    title: "Talk through your plans",
    description:
      "Work through your priorities and think about what deserves your attention.",
  },
  {
    number: "03",
    title: "Understand your progress",
    description:
      "Explore insights and recommendations to help you decide what to do next.",
  },
  {
    number: "04",
    title: "Choose how you interact",
    description:
      "Use Jissen AI chat or voice to think through your plans.",
  },
];

const plans = [
  {
    name: "Basic",
    monthlyPrice: "300",
    yearlyPrice: "3,000",
    description: "A focused planning experience for your everyday life.",
    features: [
      "Core planning experience",
      "Goals and daily tasks",
      "Routines and self-care",
      "Progress and reflection",
      "No AI chat or voice",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    monthlyPrice: "400",
    yearlyPrice: "4,200",
    description: "The core planner, with Jissen AI chat and voice.",
    features: [
      "Everything in Basic",
      "Jissen AI chat",
      "Jissen AI voice",
    ],
    highlighted: true,
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-7 ${
          light ? "bg-[#D6BB8B]" : "bg-[#8B714A]"
        }`}
      />
      <p
        className={`text-[10px] uppercase tracking-[0.24em] sm:text-xs ${
          light ? "text-[#D6BB8B]" : "text-[#8B714A]"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function ArrowLink({ to, children, light = false }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 text-sm transition-colors duration-300 ${
        light
          ? "text-[#F8F4ED] hover:text-[#D6BB8B]"
          : "text-[#25231F] hover:text-[#8B714A]"
      }`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        ↗
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F8F4ED] text-[#25231F]">
      {/* Hero */}
      <section className="relative flex min-h-[86vh] items-end overflow-hidden bg-[#25231F] sm:min-h-[92vh]">
        <img
          src={heroImage}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171613]/80 via-[#171613]/45 to-[#171613]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171613]/75 via-transparent to-[#171613]/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:px-14 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            <SectionLabel light>
              A more intentional way to live
            </SectionLabel>

            <h1 className="font-display mt-7 max-w-5xl text-5xl font-light leading-[0.96] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[108px]">
              Start each day
              <br />
              with <span className="text-[#E3C795]">clarity.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              A thoughtful planning experience for your goals, your everyday
              responsibilities, and the life you're working toward.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              Less scattered thinking. More intentional action. A clearer
              relationship with your time.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/releases"
                className="inline-flex items-center gap-5 bg-[#F8F4ED] px-6 py-4 text-sm text-[#25231F] transition-colors duration-300 hover:bg-[#E3C795]"
              >
                Explore Jissen Planner
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#philosophy"
                className="inline-flex items-center gap-3 px-3 py-4 text-sm text-white/85 transition-colors hover:text-[#E3C795]"
              >
                Discover the philosophy
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </motion.div>

          <div className="mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-white/65 sm:mt-20">
            <span>Plan</span>
            <span className="h-px w-6 bg-[#D6BB8B]/70" />
            <span>Act</span>
            <span className="h-px w-6 bg-[#D6BB8B]/70" />
            <span>Reflect</span>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="scroll-mt-10 mx-auto grid max-w-[1440px] gap-8 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[0.7fr_1.3fr] md:gap-16 lg:px-14 lg:py-36"
      >
        <Reveal>
          <SectionLabel>The Jissen Planner philosophy</SectionLabel>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display max-w-5xl text-4xl font-light leading-[1.04] sm:text-6xl md:text-7xl">
            A plan is not about doing everything.
            <span className="text-[#8B714A]">
              {" "}
              It is about knowing what matters next.
            </span>
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-10">
            <p className="text-sm leading-7 text-[#625C53] sm:text-base sm:leading-8">
              Big ambitions can feel distant when every day is filled with
              smaller demands. Jissen Planner helps you connect the bigger
              picture with the actions you can take today.
            </p>

            <p className="text-sm leading-7 text-[#625C53] sm:text-base sm:leading-8">
              It is not about filling every hour or chasing perfect
              productivity. It is about creating a plan that supports your
              priorities, your wellbeing, and the way you want to live.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Audience */}
      <section className="border-y border-[#25231F]/10 bg-[#F1EADF]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
          <Reveal>
            <SectionLabel>Made for your kind of growth</SectionLabel>

            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end">
              <h2 className="font-display max-w-3xl text-4xl font-light leading-[1.02] sm:text-6xl md:text-7xl">
                A planner for the way you work and live.
              </h2>

              <p className="max-w-lg text-sm leading-7 text-[#625C53] md:justify-self-end sm:text-base">
                Different lives. Different ambitions. One place to bring your
                priorities together and take your next step.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {audiences.map((audience, index) => (
              <Reveal key={audience.number} delay={index * 0.07}>
                <article className="h-full border-t border-[#8B714A]/50 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-light text-[#8B714A]">
                      {audience.number}
                    </span>
                    <span className="h-px w-8 bg-[#8B714A]/40" />
                  </div>

                  <p className="mt-7 text-[10px] uppercase tracking-[0.15em] text-[#8B714A]">
                    {audience.detail}
                  </p>

                  <h3 className="font-display mt-3 text-3xl font-light leading-tight sm:text-4xl">
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

      {/* Features */}
      <section className="border-b border-[#25231F]/10">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
          <Reveal>
            <SectionLabel>Designed around your life</SectionLabel>

            <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end">
              <h2 className="font-display max-w-3xl text-4xl font-light leading-[1.02] sm:text-6xl md:text-7xl">
                More than a to-do list.
              </h2>

              <p className="max-w-lg text-sm leading-7 text-[#625C53] md:justify-self-end sm:text-base">
                Planning, routines, reflection, and wellbeing belong in the
                same conversation. Your life is more than a checklist.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal key={feature.number} delay={index * 0.07}>
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

          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
            <h2 className="font-display max-w-3xl text-4xl font-light leading-[0.98] sm:text-6xl md:text-7xl">
              Think bigger.
              <br />
              <span className="text-[#8B714A]">Start smaller.</span>
            </h2>

            <p className="max-w-lg text-sm leading-7 text-[#625C53] md:justify-self-end sm:text-base sm:leading-8">
              You do not have to figure everything out at once. Give your
              vision a direction, make the next step manageable, and build
              consistency over time.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid border-y border-[#25231F]/15 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.08}>
              <article className="h-full border-b border-[#25231F]/15 py-8 md:border-b-0 md:border-r md:px-7 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <span className="font-display text-4xl font-light text-[#8B714A]">
                  {step.number}
                </span>

                <h3 className="font-display mt-7 text-3xl font-light sm:text-4xl">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[#625C53]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AI */}
      <section className="bg-[#25231F] text-[#F8F4ED]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-14 lg:py-32">
          <Reveal>
            <SectionLabel light>Jissen AI · Premium</SectionLabel>

            <h2 className="font-display mt-6 max-w-2xl text-4xl font-light leading-[1.02] sm:text-6xl md:text-7xl">
              A little more clarity when you need it.
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Sometimes the next step is easier to find when you can talk
              things through. Jissen AI is designed to help you think about
              your plans, reflect on your progress, and explore what to do
              next.
            </p>

            <Link
              to="/releases#whats-included"
              className="mt-8 inline-flex items-center gap-4 border border-[#D6BB8B]/60 px-6 py-4 text-sm transition-colors duration-300 hover:bg-[#F8F4ED] hover:text-[#25231F]"
            >
              Explore Jissen AI
              <span aria-hidden="true">↗</span>
            </Link>

            <p className="mt-5 max-w-lg text-xs leading-6 text-white/45">
              Jissen AI chat and voice are included with the Premium plan.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border border-white/15 p-6 sm:p-9">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#D6BB8B] sm:text-xs">
                Support that respects your choices
              </p>

              <div className="mt-7">
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

              <p className="border-t border-white/10 pt-5 text-xs leading-6 text-white/45">
                You remain in control of whether AI check-ins are enabled.
                Review the FAQ for more information.
              </p>

              <div className="mt-5">
                <ArrowLink to="/faq" light>
                  Read frequently asked questions
                </ArrowLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
        <Reveal>
          <SectionLabel>Simple pricing</SectionLabel>

          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
            <h2 className="font-display max-w-3xl text-4xl font-light leading-[1.02] sm:text-6xl md:text-7xl">
              Find your Jissen Planner plan.
            </h2>

            <p className="max-w-lg text-sm leading-7 text-[#625C53] md:justify-self-end sm:text-base">
              Choose the core planning experience or add Jissen AI chat and
              voice with Premium.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.1}>
              <article
                className={`h-full border p-6 sm:p-9 ${
                  plan.highlighted
                    ? "border-[#8B714A]/60 bg-[#E9DFCE]"
                    : "border-[#25231F]/15"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8B714A] sm:text-xs">
                    {plan.name}
                  </p>

                  {plan.highlighted && (
                    <span className="border border-[#8B714A]/35 px-3 py-1 text-[9px] uppercase tracking-[0.14em] text-[#765C38]">
                      AI included
                    </span>
                  )}
                </div>

                <div className="mt-5 grid gap-5 border-b border-[#25231F]/15 pb-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#8B714A]">
                      Monthly
                    </p>
                    <p className="font-display mt-2 text-4xl font-light sm:text-5xl">
                      KES {plan.monthlyPrice}
                    </p>
                    <p className="mt-1 text-sm text-[#625C53]">per month</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#8B714A]">
                      Yearly
                    </p>
                    <p className="font-display mt-2 text-4xl font-light sm:text-5xl">
                      KES {plan.yearlyPrice}
                    </p>
                    <p className="mt-1 text-sm text-[#625C53]">per year</p>
                  </div>
                </div>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#625C53]">
                  {plan.description}
                </p>

                <div className="mt-7 border-t border-[#25231F]/15">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 border-b border-[#25231F]/10 py-3 text-sm text-[#454139]"
                    >
                      <span
                        aria-hidden="true"
                        className="text-[#8B714A]"
                      >
                        +
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/releases"
                  className={`mt-7 inline-flex items-center gap-4 px-5 py-3.5 text-sm transition-colors duration-300 ${
                    plan.highlighted
                      ? "bg-[#25231F] text-[#F8F4ED] hover:bg-[#8B714A]"
                      : "border border-[#25231F]/30 hover:border-[#8B714A] hover:text-[#8B714A]"
                  }`}
                >
                  Explore the plan
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-sm leading-7 text-[#625C53]">
          Prices include applicable taxes. Subscriptions renew manually at the
          end of each period, and you can cancel any time. Refunds are available
          only when requested within seven days of payment. See our{" "}
          <Link
            to="/terms#refund-plans"
            className="text-[#8B714A] underline underline-offset-4"
          >
            Refund and Cancellation Policy
          </Link>
          .
        </p>
      </section>

      {/* FAQ invitation */}
      <section className="border-y border-[#25231F]/10 bg-[#F1EADF]">
        <div className="mx-auto grid max-w-[1440px] gap-7 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[1fr_auto] md:items-center lg:px-14">
          <Reveal>
            <SectionLabel>Good questions deserve clear answers</SectionLabel>

            <h2 className="font-display mt-5 max-w-3xl text-3xl font-light leading-tight sm:text-5xl">
              Want to know more about Jissen Planner?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base">
              Learn more about the product, AI check-ins, privacy, payments,
              and the Jissen Planner affiliate programme.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center gap-5 border border-[#25231F]/30 px-6 py-4 text-sm transition-colors duration-300 hover:border-[#8B714A] hover:bg-[#E9DFCE]"
            >
              Visit the FAQs
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#E9DFCE]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36">
          <Reveal>
            <SectionLabel>Your next chapter</SectionLabel>

            <h2 className="font-display mt-6 max-w-5xl text-5xl font-light leading-[0.94] sm:text-7xl md:text-8xl">
              Make space for the life you're building.
            </h2>

            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-sm leading-7 text-[#625C53] sm:text-base sm:leading-8">
                Jissen Planner V1.0.0 is coming soon. Explore the planned
                experience and follow the journey toward launch.
              </p>

              <Link
                to="/releases"
                className="inline-flex shrink-0 items-center justify-center gap-5 bg-[#25231F] px-6 py-4 text-sm text-[#F8F4ED] transition-colors duration-300 hover:bg-[#8B714A]"
              >
                Discover V1.0.0
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#25231F]/15 pt-6">
              <ArrowLink to="/about">About Jissen Planner</ArrowLink>
              <ArrowLink to="/releases">Release notes</ArrowLink>
              <ArrowLink to="/faq">FAQs</ArrowLink>
              <ArrowLink to="/contact">Get in touch</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}