import { useState } from "react";

const sections = [
  {
    title: "About Jissen Planner",
    questions: [
      {
        question: "Who is Jissen Planner for?",
        answer:
          "Students, entrepreneurs, professionals and anyone focused on personal growth. Jissen Planner helps you turn your goals into daily action.",
      },
      {
        question: "Do you see my goals and notes?",
        answer:
          "Your planner content is saved on your device and a copy is stored in our secure cloud service so your data can sync. We cannot access it, read it or use it. Information you choose to ask the AI assistant about is handled as described in our Privacy Policy.",
      },
      {
        question: "Will the AI contact me without asking?",
        answer:
          "No. Jissen AI works only if you grant permission in the app, and you can withdraw that permission at any time. Reminders are scheduled on your device and delivered through your device’s notification system. You can turn them off in the app or device settings.",
      },
      {
        question: "Can I cancel or get a refund?",
        answer:
          "You can cancel at any time and keep access until the end of the period you paid for. Refund requests must be made within seven days of the payment. See the Refund and Cancellation Policy on our Terms page for details.",
      },
      {
        question: "How do I pay?",
        answer:
          "You pay by M-Pesa or bank through the app. Payments are processed by Pesapal.",
      },
    ],
  },
  {
    title: "Affiliate programme",
    questions: [
      {
        question: "What is the Jissen Planner affiliate programme?",
        answer:
          "It lets you earn a commission by sharing Jissen Planner with other people. When someone subscribes using your referral code or link, you earn a share of their payment.",
      },
      {
        question: "Who can apply?",
        answer:
          "Anyone who can honestly promote Jissen Planner to a real audience, such as students, content creators, community leaders, coaches and professionals. All applications are reviewed before approval.",
      },
      {
        question: "How much will I earn?",
        answer:
          "On monthly plans you earn 15% of each payment for the first three months of each person you refer. That is KES 45 per month on Basic and KES 60 per month on Premium. On yearly plans you earn 8% of the yearly payment, which is KES 240 on Basic and KES 336 on Premium.",
      },
      {
        question: "How do I apply?",
        answer:
          "Fill in the application form on the Affiliates page. It’s free, and you will only be asked for payout details after you are approved.",
      },
      {
        question: "How does the approval process work?",
        answer:
          "We review your application, may ask for more information, and then email you our decision. If you are approved, you receive your unique referral code and link. We decide who is approved and may decline an application.",
      },
      {
        question: "How long does approval take?",
        answer:
          "We usually reply within [number] business days. If we need more information, we will email you.",
      },
      {
        question: "When is my commission earned?",
        answer:
          "Commission is earned once the referred person’s payment has cleared and the 7-day refund period has passed.",
      },
      {
        question: "When and how do I get paid?",
        answer:
          "Commission is paid monthly by M-Pesa or bank transfer. The minimum payout is KES 200.",
      },
      {
        question: "What happens if a person I referred gets a refund?",
        answer:
          "If a subscription is refunded, charged back or found to be fraudulent, the commission on it is cancelled. If you have already been paid, the amount may be deducted from future payouts.",
      },
      {
        question: "Can I see who signed up using my code?",
        answer:
          "You can see that a sign-up or subscription happened under your code, but not the person’s name, email or any planner content. This protects our users’ privacy.",
      },
      {
        question: "Can I refer myself or use paid ads or incentives?",
        answer:
          "No. Self-referrals, fake sign-ups, spam, misleading claims and incentivised sign-ups that are not genuine users are not allowed. Affiliates who break the rules can be removed.",
      },
      {
        question: "Am I employed by Jissen Planner?",
        answer:
          "No. Affiliates are independent promoters, not employees, agents or partners, and are responsible for their own taxes.",
      },
      {
        question: "Who can I contact with questions?",
        answer:
          "Email jissenapp@gmail.com or call +254 726 551 492.",
      },
    ],
  },
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <main className="min-h-screen bg-[#F8F4ED] text-[#25231F]">
      <section className="border-b border-[#25231F]/10 px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-32 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
            Need to know
          </p>

          <h1 className="font-display mt-5 max-w-4xl text-5xl font-light leading-[0.98] sm:text-7xl md:text-8xl">
            Frequently asked questions.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#625C53] sm:text-base sm:leading-8">
            Quick answers about Jissen Planner, subscriptions, privacy, and the
            affiliate programme.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        {sections.map((section, sectionIndex) => (
          <div
            key={section.title}
            className={sectionIndex === 0 ? "" : "mt-16"}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#8B714A]">
              0{sectionIndex + 1}
            </p>

            <h2 className="font-display mt-3 text-3xl font-light sm:text-4xl">
              {section.title}
            </h2>

            <div className="mt-7">
              {section.questions.map((item, questionIndex) => {
                const id = `${sectionIndex}-${questionIndex}`;
                const isOpen = openQuestion === id;

                return (
                  <article
                    key={item.question}
                    className="border-b border-[#25231F]/15"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenQuestion(isOpen ? null : id)}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left"
                    >
                      <span className="text-sm font-medium sm:text-base">
                        {item.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className="font-display shrink-0 text-2xl font-light text-[#8B714A]"
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-6 pr-7">
                        <p className="max-w-2xl text-sm leading-7 text-[#625C53]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-[#25231F]/10 bg-[#E9DFCE] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8B714A]">
            Still have questions?
          </p>

          <h2 className="font-display mt-4 text-4xl font-light sm:text-5xl">
            Let’s help you find clarity.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#625C53]">
            Email{" "}
            <a
              href="mailto:jissenapp@gmail.com"
              className="text-[#8B714A] underline underline-offset-4"
            >
              jissenapp@gmail.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+254726551492"
              className="text-[#8B714A] underline underline-offset-4"
            >
              +254 726 551 492
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}