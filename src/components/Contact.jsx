import { useState } from "react";

const recipientEmail = "priyadharshinik200507@gmail.com";

function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 text-white flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-8">Contact Me</h2>

      <p className="text-gray-400 text-lg mb-8 text-center">
        Open for freelance projects, collaborations, and exciting opportunities.
      </p>

      <div className="flex flex-col gap-5 text-xl">
        <a href="mailto:priyadharshinik200507@gmail.com" className="text-gray-300 hover:text-cyan-400 transition">
          &#128231; Email
        </a>

        <a
          href="https://www.linkedin.com/in/priyak777/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          &#128188; LinkedIn
        </a>

        <a
          href="https://github.com/Priya117K"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition"
        >
          &#128187; GitHub
        </a>
      </div>

      <div className="mt-10">
        <button
          type="button"
          onClick={() => setIsFormOpen((current) => !current)}
          aria-expanded={isFormOpen}
          className="bg-cyan-500 px-8 py-3 rounded-xl text-xl hover:bg-cyan-400 transition"
        >
          {isFormOpen ? "Close form" : "Let's Connect ?"}
        </button>
      </div>

      {isFormOpen && (
        <form
          className="mt-8 w-full max-w-2xl space-y-5 rounded-3xl border border-cyan-400/20 bg-slate-950/55 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur-sm sm:p-10"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-gray-200">
              Your name
              <input required name="name" value={formData.name} onChange={handleChange} autoComplete="name" className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
            </label>

            <label className="grid gap-2 text-sm font-medium text-gray-200">
              Your email
              <input required type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-gray-200">
            Subject
            <input required name="subject" value={formData.subject} onChange={handleChange} className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
          </label>

          <label className="grid gap-2 text-sm font-medium text-gray-200">
            Your message
            <textarea required name="message" value={formData.message} onChange={handleChange} rows="6" className="resize-y rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
          </label>

          <button type="submit" className="w-full rounded-xl bg-cyan-500 px-8 py-3 text-lg font-semibold text-slate-950 transition hover:bg-cyan-400">
            Send message
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;

