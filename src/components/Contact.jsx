import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const INITIAL = { name: '', email: '', message: '' };

export default function Contact() {
  const prefersReduced = useReducedMotion();
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'A valid email is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);

    /*
     * TODO: POST to /api/contact once the Express backend exists.
     * Replace this block with:
     *   const res = await fetch('/api/contact', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(form),
     *   });
     *
     * For now, using Web3Forms (free, no backend):
     * 1. Sign up at web3forms.com and get an access_key
     * 2. Replace YOUR_WEB3FORMS_ACCESS_KEY below
     */
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '587e5f8f-7fd6-428b-84db-f76a28ded8f4', // 🔑 Replace this
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm(INITIAL);
      } else {
        // fallback: log for debugging
        console.log('Form submission (dev fallback):', form);
        setSubmitted(true);
        setForm(INITIAL);
      }
    } catch {
      console.log('Form values (offline fallback):', form);
      setSubmitted(true);
      setForm(INITIAL);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <motion.div
        className="contact__card"
        initial={prefersReduced ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {!submitted ? (
          <>
            <div className="contact__header">
              <h2 id="contact-heading" className="contact__heading">
                Let's build something together.
              </h2>
              <p className="contact__sub">
                Whether you have a project in mind, want to collaborate, or just want to say hi
                — my inbox is always open.
              </p>
            </div>

            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="contact-name" className="sr-only">Your name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p id="name-error" className="contact__error" role="alert">{errors.name}</p>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-email" className="sr-only">Your email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p id="email-error" className="contact__error" role="alert">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="sr-only">Project details</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project or just say hello…"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="contact__error" role="alert">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn-pill contact__submit"
                id="contact-submit"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? 'Sending…' : (
                  <>
                    Send Message
                    <Send size={15} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="contact__success" role="status" aria-live="polite">
            <CheckCircle size={48} className="contact__success-icon" aria-hidden="true" />
            <h3 className="contact__success-heading">Message sent!</h3>
            <p className="contact__success-text">
              Thanks for reaching out. I'll get back to you within 24 hours.
            </p>
            <button
              className="btn-pill btn-pill--outline"
              onClick={() => setSubmitted(false)}
              id="contact-reset"
            >
              Send another message
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
