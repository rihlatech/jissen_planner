import { Link } from "react-router-dom";

const termsSections = [
  ["who-we-are", "1. Who we are"],
  ["account", "2. Eligibility and your account"],
  ["service", "3. What Jissen Planner offers"],
  ["plans", "4. Plans, prices and payment"],
  ["cancellation-refunds", "5. Cancellation and refunds"],
  ["ai", "6. Jissen AI (Premium)"],
  ["acceptable-use", "7. Acceptable use"],
  ["content", "8. Your content"],
  ["intellectual-property", "9. Our intellectual property"],
  ["affiliates", "10. Affiliate programme"],
  ["availability", "11. Availability and changes"],
  ["disclaimers", "12. Disclaimers"],
  ["liability", "13. Limitation of liability"],
  ["termination", "14. Suspension and termination"],
  ["privacy", "15. Privacy"],
  ["law", "16. Governing law and disputes"],
  ["changes", "17. Changes to these Terms"],
  ["general", "18. General"],
  ["contact", "19. Contact us"],
];

const refundSections = [
  ["refund-plans", "1. Plans covered"],
  ["how-to-cancel", "2. How to cancel"],
  ["when-you-cancel", "3. What happens when you cancel"],
  ["seven-day-rule", "4. Refunds: the seven-day rule"],
  ["no-refunds", "5. When we do not give refunds"],
  ["upgrades-downgrades", "6. Upgrades and downgrades"],
  ["request-refund", "7. How to request a refund"],
  ["refund-payment", "8. How refunds are paid"],
  ["affiliate-commissions", "9. Affiliate commissions"],
  ["charge-problems", "10. Problems with a charge"],
  ["legal-rights", "11. Your legal rights"],
  ["refund-changes", "12. Changes to this policy"],
  ["refund-contact", "13. Contact us"],
];

function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-[#25231F]/10 py-8 sm:py-10"
    >
      <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-sm leading-7 text-[#625C53]">
        {children}
      </div>
    </section>
  );
}

function LegalLink({ to, children }) {
  return (
    <Link to={to} className="text-[#8B714A] underline underline-offset-4">
      {children}
    </Link>
  );
}

function BulletList({ children }) {
  return <ul className="list-disc space-y-2 pl-5">{children}</ul>;
}

function NumberList({ children }) {
  return <ol className="list-decimal space-y-2 pl-5">{children}</ol>;
}

function ContactDetails() {
  return (
    <>
      <p>
        Email:{" "}
        <a
          href="mailto:jissenapp@gmail.com"
          className="text-[#8B714A] underline underline-offset-4"
        >
          jissenapp@gmail.com
        </a>
      </p>
      <p>
        Phone:{" "}
        <a
          href="tel:+254726551492"
          className="text-[#8B714A] underline underline-offset-4"
        >
          +254 726 551 492
        </a>
      </p>
    </>
  );
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#F8F4ED] text-[#25231F]">
      <header className="border-b border-[#25231F]/10">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
            JISSEN PLANNER
          </p>
          <h1 className="mt-5 font-display text-6xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            Terms and
            <br />
            Conditions.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base">
            These Terms and Conditions govern your use of the Jissen Planner
            app, website and related services (the “Service”). Please read them
            together with our Privacy Policy and Refund and Cancellation Policy.
            By creating an account, subscribing or using the Service you agree
            to these Terms.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs text-[#625C53]">
            <span>Effective date: 11 October 2026</span>
            <span>Last updated: 11 October 2026</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1100px] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:px-14 lg:py-16">
        <aside className="self-start lg:sticky lg:top-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8B714A]">
            On this page
          </p>
          <nav className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <p className="text-xs uppercase tracking-[0.18em] text-[#8B714A]">
              Terms and Conditions
            </p>
            {termsSections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-[#625C53] transition-colors hover:text-[#8B714A]"
              >
                {label}
              </a>
            ))}
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#8B714A]">
              Refund and Cancellation Policy
            </p>
            {refundSections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-[#625C53] transition-colors hover:text-[#8B714A]"
              >
                {label}
              </a>
            ))}
            <LegalLink to="/privacy">
              <span className="mt-5 inline-block border-b border-[#8B714A] pb-1 no-underline">
                Read our Privacy Policy →
              </span>
            </LegalLink>
          </nav>
        </aside>

        <article className="min-w-0">
          <Section id="who-we-are" title="1. Who we are">
            <p>
              Jissen Planner App is operated by a business registered in Kenya
              under Registration No. BN-8DSZDKJM. In these Terms, “we”, “us” and
              “our” mean that business.
            </p>
          </Section>

          <Section id="account" title="2. Eligibility and your account">
            <BulletList>
              <li>
                You must be 16 or over, or have the consent of a parent or
                guardian.
              </li>
              <li>
                You must give us accurate information: your name, email address
                and country.
              </li>
              <li>
                You are responsible for everything that happens on your account
                and for keeping your login details secure. Tell us straight away
                if you suspect unauthorised use.
              </li>
              <li>Each account is for one person. Please do not share your account.</li>
            </BulletList>
          </Section>

          <Section id="service" title="3. What Jissen Planner offers">
            <p>
              Jissen Planner is a productivity and planning app that helps you
              set goals, break them into tasks, organise schedules, follow
              through with reminders, and reflect on your progress. Depending on
              your plan, it includes:
            </p>
            <BulletList>
              <li>
                Both plans: reminders delivered as notifications on your device,
                which you can turn off in the app settings or your device
                settings.
              </li>
              <li>
                Basic: planners, goals, tasks and schedules, task tracking,
                self-care activities, and monthly ratings and reflections.
              </li>
              <li>
                Premium: everything in Basic, plus the Jissen AI assistant: AI
                chat and voice help with planning. The assistant works only if
                you grant permission in the app.
              </li>
            </BulletList>
            <p>
              We may add, change or remove features. If we remove a feature you
              paid for in a way that materially reduces what you receive, we will
              tell you and deal with it under our Refund and Cancellation Policy.
            </p>
          </Section>

          <Section id="plans" title="4. Plans, prices and payment">
            <p>
              <strong className="text-[#25231F]">MONTHLY PLAN</strong>
            </p>
            <p>
              Basic
              <br />
              Price: KES 300 per month
              <br />
              Includes: Core planning experience. No AI chat or voice.
            </p>
            <p>
              Premium
              <br />
              Price: KES 400 per month
              <br />
              Includes: Core planning plus Jissen AI chat and voice.
            </p>
            <p>
              <strong className="text-[#25231F]">YEARLY PLAN</strong>
            </p>
            <p>
              Basic
              <br />
              Price: KES 3,000 for the whole year
              <br />
              Includes: Core planning experience. No AI chat or voice.
            </p>
            <p>
              Premium
              <br />
              Price: KES 4,200 for the whole year
              <br />
              Includes: Core planning plus Jissen AI chat and voice.
            </p>
            <BulletList>
              <li>Prices include applicable taxes.</li>
              <li>
                You pay by M-Pesa or bank through the app. Payments are processed
                by Pesapal. You must be authorised to use the number or payment
                method you pay with.
              </li>
              <li>You renew subscriptions manually at the end of each period.</li>
              <li>
                If a payment fails, we may pause access to paid features after 7
                days.
              </li>
              <li>
                If we change our prices, we will give you at least [30] days’
                notice before the new price applies to your next renewal.
              </li>
            </BulletList>
          </Section>

          <Section id="cancellation-refunds" title="5. Cancellation and refunds">
            <p>
              You can cancel at any time and keep your access until the end of
              the period you paid for. A subscription payment can be refunded
              only if you ask within seven days of the payment. After seven days,
              subscriptions cannot be refunded. The details are in our Refund
              and Cancellation Policy, which forms part of these Terms.
            </p>
          </Section>

          <Section id="ai" title="6. Jissen AI (Premium)">
            <BulletList>
              <li>
                Jissen AI gives productivity support such as planning help,
                summaries, outlines, reminders and suggestions. It is not
                medical, psychological, legal, financial or other professional
                advice.
              </li>
              <li>
                When you use the AI, your chat text and the planner information
                you ask about are sent to a third-party AI provider (OpenAI) to
                generate a reply, as explained in our Privacy Policy.
              </li>
              <li>
                When you ask it to, the AI can create, update, complete and
                reschedule tasks in your planner. The app checks each change
                before saving it. Please review changes made on your behalf.
              </li>
              <li>
                AI replies can be inaccurate or incomplete. Check anything
                important before you rely on it. We are not responsible for
                decisions you make based on AI output.
              </li>
              <li>
                The AI works only if you grant permission in the app. You can
                withdraw that permission at any time in settings.
              </li>
              <li>Fair use: [reasonable-use limits on AI usage, e.g. messages per month].</li>
              <li>The AI may sometimes be unavailable or interrupted.</li>
            </BulletList>
          </Section>

          <Section id="acceptable-use" title="7. Acceptable use">
            <p>You agree not to:</p>
            <BulletList>
              <li>use Jissen Planner for anything unlawful or to harm others;</li>
              <li>
                hack, probe, scrape, copy or reverse engineer the app or its AI,
                or upload malware;
              </li>
              <li>
                use Jissen AI to create harassing, abusive or illegal content,
                or try to get around usage limits;
              </li>
              <li>
                share, sell or transfer your account, or pretend to be someone
                else; or
              </li>
              <li>interfere with other people’s use of Jissen Planner.</li>
            </BulletList>
            <p>We may suspend or end accounts that break these rules.</p>
          </Section>

          <Section id="content" title="8. Your content">
            <p>
              The planners, goals, tasks, notes, reflections and other content
              you create in Jissen Planner belong to you. We do not collect it.
              It is stored on your behalf so that it syncs and is backed up, but
              we cannot access it, we do not use it, and we claim no rights over
              it, except as needed to provide the Service and the AI assistant
              when you ask for it. You are responsible for what you write.
            </p>
          </Section>

          <Section id="intellectual-property" title="9. Our intellectual property">
            <p>
              Jissen Planner, its software, design, name, logo and the content
              we create belong to the registered business named in section 1.
              While your account is in good standing we give you a personal,
              non-exclusive, non-transferable, revocable right to use the app for
              your own planning. These Terms do not transfer any ownership to you.
            </p>
          </Section>

          <Section id="affiliates" title="10. Affiliate programme">
            <p>
              If you take part in the Jissen Planner affiliate programme, these
              extra terms apply.
            </p>
            <BulletList>
              <li>
                Application and vetting: you must apply and pass our vetting
                process before you receive a referral code or link. We decide
                who is approved, may ask for information to check your
                suitability, and may decline or remove an affiliate at our
                discretion.
              </li>
              <li>
                Commission: on monthly plans, you earn 15% of each subscription
                payment made by a user you referred, for the first three months
                that user uses Jissen Planner. At current prices that is KES 45
                per month on Basic and KES 60 per month on Premium. No commission
                is paid after those three months.
              </li>
              <li>
                Yearly plans: on yearly plans, you earn 8% of the yearly
                subscription payment made by a user you referred. At current
                prices that is KES 240 on Basic and KES 336 on Premium, paid
                once for that payment.
              </li>
              <li>
                A commission is earned once the payment has cleared and the
                seven-day refund window in our Refund and Cancellation Policy
                has passed.
              </li>
              <li>
                If a subscription is refunded, charged back or found to be
                fraudulent, the commission on it is cancelled, and any amount
                already paid may be deducted from future payouts.
              </li>
              <li>
                Commissions are paid by M-Pesa or bank account monthly, with a
                minimum payout of KES 200.
              </li>
              <li>No self-referrals, fake sign-ups or incentivised sign-ups that are not genuine users.</li>
              <li>
                No spam or misleading claims, and no promoting features that are
                not yet available.
              </li>
              <li>
                You are an independent promoter, not our employee, agent or
                partner, and you are responsible for your own taxes.
              </li>
              <li>
                We may change commission rates for future referrals with [30]
                days’ notice, and may end your participation if you break these
                terms.
              </li>
            </BulletList>
          </Section>

          <Section id="availability" title="11. Availability and changes">
            <p>
              We aim to keep Jissen Planner available, but we cannot promise it
              will be uninterrupted or error-free. We may carry out maintenance,
              change or discontinue features, or suspend the Service. We will
              give reasonable notice of significant changes where we can.
            </p>
          </Section>

          <Section id="disclaimers" title="12. Disclaimers">
            <p>
              Jissen Planner is provided “as is” and “as available”. It is a
              planning, productivity tool, and we do not guarantee any particular
              result, such as achieving your goals or becoming more productive,
              although it is designed to help you work towards them.
            </p>
          </Section>

          <Section id="liability" title="13. Limitation of liability">
            <p>
              To the extent permitted by Kenyan law, we are not liable for
              indirect or consequential loss, or for loss of data, profit or
              opportunity arising from your use of the Service. Our total
              liability to you for any claim is limited to the amount you paid
              us in the [3] months before the claim arose. Nothing in these
              Terms excludes or limits liability that cannot be excluded by law,
              or your rights as a consumer under the Consumer Protection Act,
              2012.
            </p>
          </Section>

          <Section id="termination" title="14. Suspension and termination">
            <p>
              You can stop using Jissen Planner and request permanent deletion
              of your account in the app at any time. We may suspend or end your
              access for breach of these Terms, fraud, non-payment or legal
              reasons, giving notice where reasonable. When your access ends,
              your right to use Jissen Planner ends too. The parts of these
              Terms that are meant to continue, such as intellectual property,
              limitation of liability and governing law, will continue.
            </p>
          </Section>

          <Section id="privacy" title="15. Privacy">
            <p>
              Our Privacy Policy explains how we handle your personal data and
              forms part of these Terms.
            </p>
          </Section>

          <Section id="law" title="16. Governing law and disputes">
            <p>
              These Terms are governed by the laws of Kenya. If you have a
              problem, please contact us first at jissenapp@gmail.com so we can
              try to resolve it. If it is not resolved, the parties will try
              mediation before going to court. The courts of Kenya have
              jurisdiction over any dispute.
            </p>
          </Section>

          <Section id="changes" title="17. Changes to these Terms">
            <p>
              We may update these Terms. We will tell you about important
              changes in the app or by email before they take effect. If you
              keep using Jissen Planner after the change takes effect, you
              accept the updated Terms. If you do not agree, you can cancel
              before then.
            </p>
          </Section>

          <Section id="general" title="18. General">
            <p>
              These Terms, together with our Privacy Policy and Refund and
              Cancellation Policy, are the whole agreement between you and us
              about Jissen Planner. If any part is found to be invalid, the rest
              stays in effect. If we do not enforce a right straight away, we
              have not given it up. You may not transfer your account to someone
              else.
            </p>
          </Section>

          <Section id="contact" title="19. Contact us">
            <ContactDetails />
          </Section>

          <header className="border-t border-[#25231F]/10 py-8 sm:py-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
              JISSEN PLANNER
            </p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
              Refund and Cancellation Policy
            </h2>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-xs text-[#625C53]">
              <span>Effective date: 11 October 2026</span>
              <span>Last updated: 11 October 2026</span>
            </div>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#625C53]">
              <p>
                This policy explains how to cancel a Jissen Planner subscription
                and when you can get a refund. It forms part of our Terms and
                Conditions.
              </p>
            </div>
          </header>

          <Section id="refund-plans" title="1. Plans covered">
            <p>
              This policy applies to Jissen Planner Basic and Jissen Planner
              Premium, on both monthly and yearly plans:
            </p>
            <p>
              <strong className="text-[#25231F]">MONTHLY PLAN</strong>
              <br />
              Basic: KES 300
              <br />
              Premium: KES 400
            </p>
            <p>
              <strong className="text-[#25231F]">YEARLY PLAN</strong>
              <br />
              Basic: KES 3,000
              <br />
              Premium: KES 4,200
            </p>
            <p>
              In short: cancel any time and keep your access until the end of
              the period you paid for. A subscription payment can be refunded
              only if you ask within seven days of the payment. After seven
              days, subscriptions cannot be refunded.
            </p>
          </Section>

          <Section id="how-to-cancel" title="2. How to cancel">
            <NumberList>
              <li>In the app, choose Cancel subscription and confirm.</li>
              <li>
                Or email jissenapp@gmail.com from your registered email address,
                with the M-Pesa number or payment method you pay with.
              </li>
            </NumberList>
            <p>We will confirm your cancellation [by email / in the app].</p>
          </Section>

          <Section id="when-you-cancel" title="3. What happens when you cancel">
            <BulletList>
              <li>Your subscription will not renew, so you will not be charged again.</li>
              <li>You keep access to your plan until the end of the period you have already paid for.</li>
              <li>Cancelling does not by itself give you a refund. Refunds follow the seven-day rule below.</li>
              <li>
                When the period ends, your account moves to [no paid access /
                read-only access]. You can resubscribe at any time.
              </li>
              <li>
                If you cancel Premium but want to keep Basic, your plan changes
                to Basic at the end of the period.
              </li>
              <li>
                You can request permanent deletion of your account in the app at
                any time, as described in our Privacy Policy.
              </li>
            </BulletList>
          </Section>

          <Section id="seven-day-rule" title="4. Refunds: the seven-day rule">
            <p>
              The seven days count from the date of the payment. If you ask for a
              refund within seven days of a payment, we will refund it in the
              situations below. This applies to every subscription payment,
              monthly or yearly, including renewals.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#25231F]/15">
                    <th className="py-3 pr-4 font-medium text-[#25231F]">
                      Situation
                    </th>
                    <th className="py-3 font-medium text-[#25231F]">
                      What we do
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">You change your mind</td>
                    <td className="py-4">Full refund</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">
                      Duplicate or incorrect charge, such as being charged twice
                      for the same period or the wrong amount
                    </td>
                    <td className="py-4">Full refund of the extra or incorrect amount</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">
                      You paid but your plan was not activated and we cannot fix it
                    </td>
                    <td className="py-4">Full refund</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">
                      Unauthorised payment: you did not make or approve it
                    </td>
                    <td className="py-4">Refund after verification</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              After seven days, we do not refund subscription payments,
              including for unused time. This does not affect your rights under
              Kenyan consumer law.
            </p>
          </Section>

          <Section id="no-refunds" title="5. When we do not give refunds">
            <BulletList>
              <li>Any request made more than seven days after the payment.</li>
              <li>
                The unused or partly used part of a period after you cancel,
                including the remainder of a yearly plan.
              </li>
              <li>
                Paying for a renewal by mistake, if more than seven days have
                passed since the renewal payment. Renewals are made manually, so
                you will not be charged unless you choose to pay.
              </li>
              <li>Accounts suspended or ended for breaking our Terms and Conditions.</li>
              <li>Not achieving your goals, or finding AI replies unhelpful or inaccurate.</li>
              <li>
                Fees charged by your mobile money provider or bank, unless the
                charge was caused by our error.
              </li>
            </BulletList>
          </Section>

          <Section id="upgrades-downgrades" title="6. Upgrades and downgrades">
            <BulletList>
              <li>Upgrading from Basic to Premium takes effect immediately.</li>
              <li>
                Downgrading from Premium to Basic takes effect at the end of your
                current period. There is no refund for the difference.
              </li>
            </BulletList>
          </Section>

          <Section id="request-refund" title="7. How to request a refund">
            <p>
              Email jissenapp@gmail.com within seven days of the payment, from
              your registered email address, and include:
            </p>
            <BulletList>
              <li>your name and account email;</li>
              <li>the M-Pesa phone number or payment method used to pay;</li>
              <li>the M-Pesa transaction code or payment reference, and the date; and</li>
              <li>the reason for your request.</li>
            </BulletList>
            <p>
              We will acknowledge your request within [2 business days] and give
              you a decision within [5 business days]. A request made within the
              seven days is treated as made in time even if we finish processing
              it after the seven days.
            </p>
          </Section>

          <Section id="refund-payment" title="8. How refunds are paid">
            <p>
              Approved refunds are sent to the M-Pesa number or payment method
              used to pay, through our payment provider, Pesapal, usually within
              [3 to 7 business days] of approval. We will tell you by email once
              it has been sent. If a refund cannot go to the original number or
              method, we will agree an alternative with you.
            </p>
          </Section>

          <Section id="affiliate-commissions" title="9. Affiliate commissions">
            <p>
              If a subscription is refunded or reversed, the commission paid or
              due on it is cancelled, as set out in the affiliate programme
              terms in our Terms and Conditions.
            </p>
          </Section>

          <Section id="charge-problems" title="10. Problems with a charge">
            <p>
              If something looks wrong with a charge, please contact us first so
              we can fix it quickly. If you ask your mobile money provider or
              bank to reverse a valid charge without speaking to us, we may need
              to suspend your account while it is investigated.
            </p>
          </Section>

          <Section id="legal-rights" title="11. Your legal rights">
            <p>
              This policy does not affect your rights under Kenyan consumer law,
              including the Consumer Protection Act, 2012.
            </p>
          </Section>

          <Section id="refund-changes" title="12. Changes to this policy">
            <p>
              We may update this policy. Changes apply to purchases made after
              the updated date shown at the top.
            </p>
          </Section>

          <Section id="refund-contact" title="13. Contact us">
            <ContactDetails />
          </Section>
        </article>
      </div>
    </main>
  );
}