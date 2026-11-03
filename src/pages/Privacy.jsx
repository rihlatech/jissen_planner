import { Link } from "react-router-dom";

const sections = [
  ["who-we-are", "1. Who we are"],
  ["collect", "2. What we collect"],
  ["planner-content", "3. Your planner content stays with you"],
  ["use", "4. How and why we use your data"],
  ["reminders-ai", "5. Reminders and the AI assistant"],
  ["sharing", "6. Who we share your data with"],
  ["transfers", "7. Transfers outside Kenya"],
  ["retention", "8. How long we keep your data"],
  ["rights", "9. Your rights"],
  ["security", "10. How we protect your data"],
  ["children", "11. Children and students"],
  ["changes", "12. Changes to this policy"],
  ["contact", "13. Contact us"],
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

function ContactLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-[#8B714A] underline underline-offset-4"
    >
      {children}
    </a>
  );
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#F8F4ED] text-[#25231F]">
      <header className="border-b border-[#25231F]/10">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
            JISSEN PLANNER
          </p>

          <h1 className="mt-5 font-display text-6xl font-light leading-[0.95] sm:text-7xl lg:text-8xl">
            Privacy
            <br />
            Policy.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#625C53] sm:text-base">
            This Privacy Policy explains what personal data Jissen Planner
            collects, why we collect it, how we use and protect it, and the
            choices and rights you have. We process personal data in line with
            the Data Protection Act, 2019 of Kenya and its regulations. By
            creating an account or using Jissen Planner you confirm that you
            have read this policy.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs text-[#625C53]">
            <span>Effective date: 11th October 2026</span>
            <span>Last updated: 11th October 2026</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1100px] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:px-14 lg:py-16">
        <aside className="self-start lg:sticky lg:top-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8B714A]">
            On this page
          </p>

          <nav className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-[#625C53] transition-colors hover:text-[#8B714A]"
              >
                {label}
              </a>
            ))}
          </nav>

          <Link
            to="/terms"
            className="mt-8 inline-block border-b border-[#8B714A] pb-1 text-sm text-[#8B714A]"
          >
            Read Terms &amp; Conditions →
          </Link>
        </aside>

        <article className="min-w-0">
          <Section id="who-we-are" title="1. Who we are">
            <p>
              Jissen Planner is operated by a business registered in Kenya under
              Registration No. BN-8DSZDKJM, based in Nairobi, Kenya. We are the
              data controller for the personal data described in this policy.
              Our data protection contact is the Jissen Planner team, reachable
              at jissenapp@gmail.com or +254 726 551 492.
            </p>
          </Section>

          <Section id="collect" title="2. What we collect">
            <p>
              In short: we collect your account opening details and basic
              payment and support records. We do not collect your planner
              content, and we do not sell your data.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Account data: your name, email address and country, and the
                profile and appearance preferences you set.
              </li>
              <li>
                AI assistant data: only if you use the AI assistant, the chat
                messages you send it and the planner information you choose to
                ask it about. It is sent to OpenAI to produce your reply and is
                not stored or kept by us.
              </li>
              <li>
                Subscription and payment records: your plan, payment dates and
                status, and the M-Pesa transaction reference. We never see or
                store your M-Pesa PIN. Payments are processed by Pesapal.
              </li>
              <li>
                Affiliate data (affiliates only): your referral code, the
                sign-ups and subscriptions linked to it, your payout details
                such as your M-Pesa number, and the information we ask for when
                we vet your application.
              </li>
              <li>
                Communications: messages you send to our support channels.
              </li>
            </ul>

            <p>
              We do not collect your goals, tasks, schedules, reminders,
              self-care records, ratings or reflections (see section 3). Voice
              input uses your device’s own speech recognition and text-to-speech
              services. We do not receive your voice recordings.
            </p>
          </Section>

          <Section
            id="planner-content"
            title="3. Your planner content stays with you"
          >
            <p>
              The planners, goals, tasks, notes, self-care records, ratings and
              reflections you create in Jissen Planner are yours. We do not
              collect them. They are saved on your device, and a copy is stored
              in our secure cloud service so that your data syncs and is not
              lost if you change your device.
            </p>

            <p>
              We store this content on your behalf, but we cannot access it and
              we do not read or use it for any purpose, including advertising,
              analytics or training AI models. The only exception is
              information you choose to ask the AI assistant about, which is
              handled as described in section 5.
            </p>
          </Section>

          <Section id="use" title="4. How and why we use your data">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#25231F]/15">
                    <th className="py-3 pr-4 font-medium text-[#25231F]">
                      Purpose
                    </th>
                    <th className="py-3 pr-4 font-medium text-[#25231F]">
                      Data used
                    </th>
                    <th className="py-3 font-medium text-[#25231F]">
                      Legal basis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">Create and manage your account</td>
                    <td className="py-4 pr-4">Account data</td>
                    <td className="py-4">Contract</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">
                      Store your planner content so it syncs and is backed up
                      (we do not access it)
                    </td>
                    <td className="py-4 pr-4">
                      Your planner content, stored on your behalf
                    </td>
                    <td className="py-4">Contract</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">
                      Process subscriptions, renewals, refunds and receipts
                    </td>
                    <td className="py-4 pr-4">
                      Account data, subscription and payment records
                    </td>
                    <td className="py-4">Contract; legal obligation</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">
                      Send reminders as notifications on your device
                    </td>
                    <td className="py-4 pr-4">Reminder times and text you set</td>
                    <td className="py-4">Consent</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">
                      Send service messages such as receipts, security alerts
                      and changes to our terms
                    </td>
                    <td className="py-4 pr-4">Name, email address</td>
                    <td className="py-4">Contract; legitimate interests</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">
                      Provide the AI assistant, only if you grant permission in
                      the app
                    </td>
                    <td className="py-4 pr-4">
                      Chat text and planner information you ask about
                    </td>
                    <td className="py-4">Consent</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">
                      Keep Jissen Planner secure and prevent fraud
                    </td>
                    <td className="py-4 pr-4">Account data, payment records</td>
                    <td className="py-4">Legitimate interests</td>
                  </tr>
                  <tr className="border-b border-[#25231F]/10">
                    <td className="py-4 pr-4">
                      Run the affiliate programme, vet applicants and pay
                      commissions
                    </td>
                    <td className="py-4 pr-4">Affiliate data</td>
                    <td className="py-4">Contract; legal obligation</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4">
                      Comply with the law and respond to lawful requests
                    </td>
                    <td className="py-4 pr-4">Relevant data</td>
                    <td className="py-4">Legal obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Where we rely on your consent or permission, such as for reminders
              or the AI assistant, you can withdraw it at any time in the app
              settings or by contacting us. Withdrawing does not affect
              processing that took place before. We send marketing messages only
              if you opt in.
            </p>
          </Section>

          <Section id="reminders-ai" title="5. Reminders and the AI assistant">
            <p>
              Reminders are scheduled on your device and delivered through your
              device’s notification system. You can turn them off in the app
              settings or in your device settings.
            </p>

            <p>
              The Jissen Planner AI assistant offers chat and voice help with
              planning. It works only if you grant permission in the app, and
              you can withdraw that permission at any time. When you use it,
              your chat text and the planner information you ask about are sent
              to OpenAI to generate a reply. The request passes through our
              secure server function only to be relayed to OpenAI and back to
              you. We do not store, keep or read it, and we do not use it for
              advertising or to train AI models.
            </p>

            <p>
              When you ask it to, the assistant can create, update, complete and
              reschedule tasks. Each change is checked by the app’s planner
              service before it is saved.
            </p>

            <p>
              AI replies can be wrong, so please read them critically. The AI
              is not a substitute for professional medical, legal, financial or
              mental-health advice.
            </p>
          </Section>

          <Section id="sharing" title="6. Who we share your data with">
            <p>We do not sell your personal data. We share it only with:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Service providers who help us run Jissen Planner, under written
                agreements that require them to protect your data: Supabase
                (sign-in, account database and server functions), Pesapal
                (payment processing), OpenAI (AI assistant), and website
                hosting (Vercel).
              </li>
              <li>
                Affiliates: if you subscribe using an affiliate’s referral
                code, the affiliate is told only that a sign-up or subscription
                happened under their code. They do not see your name or email.
              </li>
              <li>Authorities, regulators or courts where the law requires it.</li>
              <li>
                A buyer or successor: if Jissen Planner or its operating
                business is sold or restructured. They must honour this policy.
              </li>
            </ul>
          </Section>

          <Section id="transfers" title="7. Transfers outside Kenya">
            <p>
              Some of our service providers store or process data outside
              Kenya. When we transfer personal data abroad we do so in line
              with the Data Protection Act, 2019, using safeguards such as
              contracts that require an adequate level of protection, or with
              your consent where required.
            </p>
          </Section>

          <Section id="retention" title="8. How long we keep your data">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Account data and stored planner content: for as long as your
                account is active.
              </li>
              <li>
                After you delete your account: you can request permanent
                deletion of your account in the app. We then delete or
                anonymise your account data within [30] days, except for what
                we must keep by law. Your stored planner content is deleted
                with your account, and content on your device is removed when
                you delete the app or clear its data.
              </li>
            </ul>
          </Section>

          <Section id="rights" title="9. Your rights">
            <p>Under the Data Protection Act, 2019 you have the right to:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>be informed about how we use your personal data;</li>
              <li>access the personal data we hold about you;</li>
              <li>
                object to or restrict certain processing, including direct
                marketing;
              </li>
              <li>have inaccurate or incomplete data corrected;</li>
              <li>have your data deleted;</li>
              <li>withdraw your consent or permission at any time; and</li>
              <li>
                receive a copy of the personal data you gave us in a usable
                format.
              </li>
            </ul>

            <p>
              To use any of these rights, email{" "}
              <ContactLink href="mailto:jissenapp@gmail.com">
                jissenapp@gmail.com
              </ContactLink>{" "}
              or use the account settings in the app. We will respond within
              the time the law allows.
            </p>
          </Section>

          <Section id="security" title="10. How we protect your data">
            <p>
              We use measures such as encrypted connections, access controls
              limited to people who need them, secure storage with trusted
              providers, and regular reviews. No system is completely secure,
              so please protect your login details and tell us straight away if
              you think someone has accessed your account. If a personal data
              breach affects you, we will notify you and the relevant
              authorities as the law requires.
            </p>
          </Section>

          <Section id="children" title="11. Children and students">
            <p>
              Jissen Planner is intended for people aged 16 and over. Users
              under 16 require parent or guardian consent and permission. If we
              learn that we hold a child’s data without the required consent,
              we will delete it.
            </p>
          </Section>

          <Section id="changes" title="12. Changes to this policy">
            <p>
              We may update this policy from time to time. We will post the new
              version in the app and on our website and, for important changes,
              tell you by email or in the app. The date at the top shows when
              it was last updated.
            </p>
          </Section>

          <Section id="contact" title="13. Contact us">
            <p>
              Email:{" "}
              <ContactLink href="mailto:jissenapp@gmail.com">
                jissenapp@gmail.com
              </ContactLink>
            </p>

            <p>
              Phone or WhatsApp:{" "}
              <ContactLink href="https://wa.me/254726551492">
                +254 726 551 492
              </ContactLink>
            </p>
          </Section>

          <div className="border-t border-[#25231F]/10 pt-8">
            <p className="text-sm text-[#625C53]">
              Read our{" "}
              <Link
                to="/terms"
                className="text-[#8B714A] underline underline-offset-4"
              >
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}