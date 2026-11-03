import { useState } from "react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "1",
    title: "You apply",
    detail: "Submit the form. We confirm receipt by email.",
  },
  {
    number: "2",
    title: "We review",
    detail:
      "We check your application and how you plan to promote Jissen Planner. We usually reply within [number] business days.",
  },
  {
    number: "3",
    title: "We may ask questions",
    detail:
      "We may ask for more information to check that the programme is a good fit.",
  },
  {
    number: "4",
    title: "You get a decision",
    detail:
      "We email you to say whether you are approved or not. We decide who is approved and may decline an application.",
  },
  {
    number: "5",
    title: "You get your code and link",
    detail:
      "Approved affiliates receive a unique referral code and link, and we ask for your M-Pesa or bank details for payouts.",
  },
  {
    number: "6",
    title: "You start earning",
    detail:
      "Share your link. Commission is paid monthly once it has been earned.",
  },
];

const affiliateRules = [
  "No referring yourself, creating fake sign-ups, or offering incentives for sign-ups that are not genuine users.",
  "No spam and no misleading claims about Jissen Planner.",
  "Only promote features that are available in the app today.",
  "You are an independent promoter, not our employee, agent or partner, and you are responsible for your own taxes.",
  "We may change commission rates for future referrals, with notice, and may remove an affiliate who breaks these rules.",
];

function SectionLabel({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-7 ${
          light ? "bg-[#D6BB8B]" : "bg-[#8B714A]"
        }`}
      />
      <p
        className={`text-[10px] uppercase tracking-[0.22em] sm:text-xs ${
          light ? "text-[#D6BB8B]" : "text-[#8B714A]"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

export default function Affiliates() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  acceptsTerms: false,
  acceptsPrivacy: false,
});

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
  event.preventDefault();

  const body = [
    "Jissen Planner Affiliate Programme Application",
    "",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone for M-Pesa: ${form.phone}`,
    "",
    "I agree to the affiliate terms in the Terms and Conditions and have read the Privacy Policy.",
  ].join("\n");

  const params = new URLSearchParams({
    subject: "Jissen Planner Affiliate Programme Application",
    body,
  });

  window.location.href = `mailto:jissenapp@gmail.com?${params.toString()}`;
}

  const inputClassName =
    "w-full border border-[#D9D0C1] bg-transparent px-4 py-3 text-sm text-[#25231F] outline-none transition-colors placeholder:text-[#928A7E] focus:border-[#8B714A]";

  return (
    <main className="overflow-hidden bg-[#F8F4ED] text-[#25231F]">
      {/* Hero */}
      <section className="border-b border-[#25231F]/10">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
          <SectionLabel>Jissen Planner Affiliate Programme</SectionLabel>

          <h1 className="font-display mt-6 max-w-5xl text-5xl font-light leading-[0.96] sm:text-7xl md:text-8xl">
            Earn with Jissen Planner.
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base sm:leading-8">
            Jissen Planner helps people turn their goals into daily action. Our
            affiliate programme lets you earn money by sharing Jissen Planner
            with people who would benefit from it, such as students,
            entrepreneurs, professionals and anyone focused on personal growth.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base">
            When someone subscribes using your referral code or link, you earn
            a commission. There is no fee to apply.
          </p>

          <a
            href="#apply"
            className="mt-8 inline-flex items-center gap-4 bg-[#25231F] px-6 py-4 text-sm text-[#F8F4ED] transition-colors hover:bg-[#8B714A]"
          >
            Apply now <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* Commission */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
        <SectionLabel>What you earn</SectionLabel>

        <h2 className="font-display mt-5 text-4xl font-light sm:text-6xl">
          Clear commissions.
        </h2>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-y border-[#25231F]/15">
                <th className="py-4 pr-6 font-medium">Plan type</th>
                <th className="py-4 pr-6 font-medium">Your commission</th>
                <th className="py-4 font-medium">At current prices</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#25231F]/10">
                <td className="py-5 pr-6">Monthly plans</td>
                <td className="py-5 pr-6">
                  15% of each subscription payment, for the first 3 months of
                  the person you referred
                </td>
                <td className="py-5">
                  KES 45 per month on Basic; KES 60 per month on Premium
                </td>
              </tr>
              <tr className="border-b border-[#25231F]/10">
                <td className="py-5 pr-6">Yearly plans</td>
                <td className="py-5 pr-6">
                  8% of the yearly subscription payment, paid once
                </td>
                <td className="py-5">
                  KES 240 on Basic; KES 336 on Premium
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-4 text-sm leading-7 text-[#625C53] sm:grid-cols-2">
          <p>
            Commission is earned once the payment has cleared and the 7-day
            refund period has passed.
          </p>
          <p>
            Commission is paid monthly by M-Pesa or bank transfer, with a
            minimum payout of KES 200.
          </p>
          <p>
            If a subscription is refunded, charged back or found to be
            fraudulent, the commission on it is cancelled.
          </p>
          <p>
            No commission is paid on monthly plans after the first three
            months.
          </p>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-[#E9DFCE]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
          <SectionLabel>Our approval process</SectionLabel>

          <h2 className="font-display mt-5 max-w-3xl text-4xl font-light sm:text-6xl">
            Apply, get reviewed, and start sharing.
          </h2>

          <div className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="border-t border-[#8B714A]/40 py-6"
              >
                <span className="font-display text-3xl font-light text-[#8B714A]">
                  {step.number}
                </span>
                <h3 className="font-display mt-4 text-2xl font-light">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#625C53]">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section
        id="apply"
        className="scroll-mt-10 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionLabel>Apply to join</SectionLabel>

            <h2 className="font-display mt-5 text-4xl font-light sm:text-6xl">
              Tell us about you.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#625C53]">
  Apply with your name, email, and phone number for M-Pesa.
</p>

<p className="mt-4 max-w-md text-sm leading-7 text-[#625C53]">
  Submitting opens your email app with your application details filled in.
  Send the email there to complete your application.
</p>
          </div>

          <form
  onSubmit={handleSubmit}
  className="border border-[#25231F]/15 bg-white/30 p-5 sm:p-8"
>
  <div className="space-y-5">
    <div>
      <label
        htmlFor="affiliate-name"
        className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#8B714A]"
      >
        Name
      </label>
      <input
        id="affiliate-name"
        name="name"
        type="text"
        autoComplete="name"
        required
        value={form.name}
        onChange={handleChange}
        className={inputClassName}
      />
    </div>

    <div>
      <label
        htmlFor="affiliate-email"
        className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#8B714A]"
      >
        Email
      </label>
      <input
        id="affiliate-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={form.email}
        onChange={handleChange}
        className={inputClassName}
      />
    </div>

    <div>
      <label
        htmlFor="affiliate-phone"
        className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#8B714A]"
      >
        Phone for M-Pesa
      </label>
      <input
        id="affiliate-phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        required
        value={form.phone}
        onChange={handleChange}
        className={inputClassName}
      />
    </div>
  </div>

  <div className="mt-6 space-y-4 text-sm leading-6 text-[#625C53]">
    <label className="flex items-start gap-3">
      <input
        type="checkbox"
        name="acceptsTerms"
        required
        checked={form.acceptsTerms}
        onChange={handleChange}
        className="mt-1 accent-[#8B714A]"
      />
      <span>
        I agree to the affiliate terms in our{" "}
        <Link
          to="/terms#affiliates"
          className="text-[#8B714A] underline underline-offset-4"
        >
          Terms and Conditions
        </Link>
        .
      </span>
    </label>

    <label className="flex items-start gap-3">
      <input
        type="checkbox"
        name="acceptsPrivacy"
        required
        checked={form.acceptsPrivacy}
        onChange={handleChange}
        className="mt-1 accent-[#8B714A]"
      />
      <span>
        I have read the{" "}
        <Link
          to="/privacy"
          className="text-[#8B714A] underline underline-offset-4"
        >
          Privacy Policy
        </Link>
        .
      </span>
    </label>
  </div>

  <button
    type="submit"
    className="mt-7 inline-flex items-center gap-4 bg-[#25231F] px-6 py-4 text-sm text-[#F8F4ED] transition-colors hover:bg-[#8B714A]"
  >
    Continue to email <span aria-hidden="true">↗</span>
  </button>
</form>
        </div>
      </section>

      {/* Rules and privacy */}
      <section className="bg-[#25231F] text-[#F8F4ED]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 lg:px-14">
          <div>
            <SectionLabel light>Affiliate rules</SectionLabel>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-white/75">
              {affiliateRules.map((rule) => (
                <li key={rule} className="flex gap-3">
                  <span className="text-[#D6BB8B]" aria-hidden="true">
                    ·
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionLabel light>Your referrals’ privacy</SectionLabel>

            <p className="mt-6 text-sm leading-7 text-white/75">
              You will only be told that a sign-up or subscription happened
              under your code. You will not see the person’s name, email or any
              of their planner content.
            </p>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-sm leading-7 text-white/75">
                Questions? Email{" "}
                <a
                  href="mailto:jissenapp@gmail.com"
                  className="text-[#D6BB8B] underline underline-offset-4"
                >
                  jissenapp@gmail.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+254726551492"
                  className="text-[#D6BB8B] underline underline-offset-4"
                >
                  +254 726 551 492
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}