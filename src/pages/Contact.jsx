import { useState } from "react";

export default function Contact() {
  const email = "jissenapp@gmail.com";
  const phone = "+254 726 551 492";
  const whatsappNumber = "254726551492";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleWhatsAppSubmit(event) {
    event.preventDefault();

    const message = [
      "Hello Jissen Planner,",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-[70vh] bg-[#F8F4ED] text-[#25231F]">
      {/* Hero */}
      <section className="px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-14">
        <p className="text-xs uppercase tracking-[0.22em] text-[#8B714A]">
          Get in touch
        </p>

        <h1 className="font-display mt-6 text-7xl font-light leading-[0.95] sm:text-8xl lg:text-[9rem]">
          Let's connect.
        </h1>

        <div className="mt-9 grid gap-8 border-t border-[#D9D0C1] pt-7 md:grid-cols-[1fr_2fr] md:gap-16">
          <p className="text-xs uppercase tracking-[0.18em] text-[#8B714A]">
            We're here to listen
          </p>

          <p className="max-w-2xl text-sm leading-8 text-[#625C53] sm:text-base">
            Have a question about Jissen Planner, its upcoming release, or your
            subscription? Reach out using one of the contact options below.
            We're happy to hear from you.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="px-5 pb-24 sm:px-8 lg:px-14">
        <div className="grid border-t border-[#D9D0C1] md:grid-cols-2">
          <article className="border-b border-[#D9D0C1] py-9 md:border-b-0 md:border-r md:py-12 md:pr-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8B714A]">
              Email
            </p>

            <h2 className="font-display mt-5 text-4xl font-light sm:text-5xl">
              Write to us.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#625C53]">
              For general enquiries, support questions, and anything else
              you'd like us to know.
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-8 inline-flex items-center gap-3 border-b border-[#8B714A] pb-2 text-sm transition-colors hover:text-[#8B714A]"
            >
              {email} <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="py-9 md:py-12 md:pl-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8B714A]">
              WhatsApp
            </p>

            <h2 className="font-display mt-5 text-4xl font-light sm:text-5xl">
              Let's talk.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#625C53]">
              Fill in the form and WhatsApp will open with your message ready
              for you to review and send.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#8B714A]"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-[#D9D0C1] bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#8B714A]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#8B714A]"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-[#D9D0C1] bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#8B714A]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs uppercase tracking-[0.15em] text-[#8B714A]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-y border border-[#D9D0C1] bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#8B714A]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-[#25231F] px-6 py-4 text-sm text-[#F8F4ED] transition-colors hover:bg-[#8B714A]"
              >
                Continue to WhatsApp <span aria-hidden="true">↗</span>
              </button>
            </form>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 border-b border-[#8B714A] pb-2 text-sm transition-colors hover:text-[#8B714A]"
            >
              Or message us directly at {phone}{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>

      {/* Closing note */}
      <section className="bg-[#25231F] px-5 py-16 text-[#F8F4ED] sm:px-8 sm:py-20 lg:px-14">
        <p className="text-xs uppercase tracking-[0.22em] text-[#C9A875]">
          Jissen Planner
        </p>

        <h2 className="font-display mt-5 max-w-3xl text-5xl font-light leading-tight sm:text-7xl">
          Make room for what matters.
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-[#D0C9BE]">
          We're preparing for our first public release. Thanks for being part
          of the journey.
        </p>
      </section>
    </main>
  );
}