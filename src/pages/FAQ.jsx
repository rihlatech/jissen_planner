
import { useState } from "react";

const sections = [
  {
    title: "About Lock In",
    questions: [
      {
        question: "Who is Lock In for?",
        answer:
          "Students, professionals, entrepreneurs and anyone focused on personal growth. If you want to be more organised and follow through on your goals, it's for you.",
      },
      {
        question: "Do you see my goals and notes?",
        answer:
          "No. We only collect your name, email address and country. We don't collect, see or use the content you write in the app.",
      },
      {
        question: "Will the AI contact me without asking?",
        answer:
          "No. The AI checks in only if you've given permission, and you can turn it off at any time. Reminders are sent to you by email.",
      },
      {
        question: "Can I cancel or get a refund?",
        answer:
          "You can cancel any time and keep access until the end of the period you paid for. Refund requests must be made within seven days of the payment.",
      },
      {
        question: "How do I pay?",
        answer: "You pay by M-Pesa.",
      },
    ],
  },
  {
    title: "Affiliate programme",
    questions: [
      {
        question: "How do I become an affiliate?",
        answer:
          "Apply using the button on the affiliate page. We'll ask about you and your audience, review your application, and send your referral code and link if you're approved.",
      },
      {
        question: "How much do I earn?",
        answer:
          "15% of each payment from each person you refer, for the first three months they use Lock In. At current prices that's KSh 45 per payment on Basic and KSh 60 on Premium.",
      },
      {
        question: "When do I get paid?",
        answer:
          "Commission is confirmed once the payment has cleared and the seven-day refund window has passed. You're paid by M-Pesa, and we share the payout schedule when you're approved.",
      },
      {
        question: "What if someone I referred gets a refund?",
        answer:
          "The commission on that payment is cancelled. Refunds are only available within seven days of a payment.",
      },
      {
        question: "What if they cancel?",
        answer:
          "You earn on the payments they make in their first three months. Once they stop paying, there are no more payments to earn on.",
      },
      {
        question: "Can I see who signed up?",
        answer:
          "You'll see that a sign-up happened under your link, but not the person's name or email. We keep our users' details private.",
      },
      {
        question: "Can I refer myself?",
        answer:
          "No. Self-referrals and fake sign-ups aren't allowed and can lead to removal from the programme.",
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
            Quick answers about Lock-In, your subscription, and the affiliate
            programme.
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
                      onClick={() =>
                        setOpenQuestion(isOpen ? null : id)
                      }
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
            Let's help you find clarity.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#625C53]">
            If you need more information about Lock-In or the affiliate
            programme, get in touch with the team.
          </p>
        </div>
      </section>
    </main>
  );
}
