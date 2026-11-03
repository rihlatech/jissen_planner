import { Link } from "react-router-dom";

const principles = [
  {
    number: "01",
    title: "Plan with purpose.",
    description:
      "Turn the things you want to achieve into clear goals and practical steps you can work towards.",
  },
  {
    number: "02",
    title: "Build consistency.",
    description:
      "Create routines that support your ambitions, organise your time, and make room for the work that matters.",
  },
  {
    number: "03",
    title: "Reflect and realign.",
    description:
      "Look back at your progress, learn from your experience, and adjust your plans as life changes.",
  },
];

export default function About() {
  return (
    <main className="bg-[#F8F4ED] text-[#25231F]">
      {/* Hero */}
      <section className="px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-14">
        <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
          About Jissen Planner
        </p>

        <h1 className="font-display mt-6 max-w-5xl text-6xl font-light leading-[0.95] sm:text-8xl lg:text-[9rem]">
          Your goals deserve
          <br />
          <span className="text-[#8B714A]">more than good intentions.</span>
        </h1>

        <div className="mt-10 grid gap-8 border-t border-[#D9D0C1] pt-7 md:grid-cols-[1fr_2fr] md:gap-16">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8B714A]">
            A more intentional way to plan
          </p>

          <p className="max-w-2xl text-sm leading-8 text-[#625C53] sm:text-base">
            Jissen Planner brings your goals, plans, routines, and reflection
            into one personal planning experience — helping you turn intentions
            into consistent action.
          </p>
        </div>
      </section>

      {/* Brand statement */}
      <section className="bg-[#25231F] px-5 py-20 text-[#F8F4ED] sm:px-8 sm:py-28 lg:px-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-end md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#C9A875]">
              The philosophy
            </p>

            <h2 className="font-display mt-6 text-5xl font-light leading-tight sm:text-7xl">
              Intention is the beginning.
              <br />
              Consistency is the practice.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-8 text-[#D0C9BE] sm:text-base">
            Having goals is one thing. Making space for them in everyday life
            is another. Jissen Planner is designed around the connection
            between long-term direction and daily action, giving you a place to
            plan, stay organised, and reflect on how things are going.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
            What guides us
          </p>

          <h2 className="font-display mt-5 text-5xl font-light sm:text-7xl">
            A plan with perspective.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#625C53] sm:text-base">
            The planning experience we are building is guided by three
            principles.
          </p>
        </div>

        <div className="grid border-t border-[#D9D0C1] md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="border-b border-[#D9D0C1] py-8 md:border-b-0 md:border-r md:px-7 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-xs tracking-[0.18em] text-[#8B714A]">
                {principle.number}
              </span>

              <h3 className="font-display mt-7 text-3xl font-normal sm:text-4xl">
                {principle.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#625C53]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#D9D0C1] px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
              The journey ahead
            </p>

            <h2 className="font-display mt-5 text-5xl font-light sm:text-7xl">
              Something intentional is taking shape.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#625C53] sm:text-base">
              Follow the progress of Jissen Planner as we work towards its
              public release.
            </p>
          </div>

          <Link
            to="/releases"
            className="inline-flex w-fit items-center gap-3 border-b border-[#8B714A] pb-2 text-sm transition-colors hover:text-[#8B714A]"
          >
            Explore releases <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}