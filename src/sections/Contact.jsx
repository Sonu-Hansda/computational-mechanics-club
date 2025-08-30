import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef();
  const [errMsg, setErrMsg]   = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = (email) =>
    /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const data = {
      name:    fd.get('from_name'),
      email:   fd.get('from_email'),
      subject: fd.get('user_subject'),
      message: fd.get('message'),
    };

    if (!data.name)          return setErrMsg('Name is required');
    if (!data.email)         return setErrMsg('Email is required');
    if (!emailValidation(data.email)) return setErrMsg('Valid email required');
    if (!data.subject)       return setErrMsg('Subject is required');
    if (!data.message)       return setErrMsg('Message is required');

    const gmail = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sonukumarhansda61@gmail.com&su=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    )}&tf=1`;

    setErrMsg('');
    setSuccessMsg('Opening Gmail…');
    window.open(gmail, '_blank');

    setTimeout(() => {
      setSuccessMsg('');
      form.current.reset();
    }, 2000);
  };

  return (
    <section id="contact" className="relative isolate bg-[#111] py-24 md:py-32">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-[size:32px_32px] opacity-5" />

      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-black text-4xl leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-white">Get In</span>{' '}
            <span className="text-[#B9FF66]">Touch</span>
          </h2>
          <p className="mt-5 text-lg text-neutral-400">
            Want to join us or collaborate? Drop a line.
          </p>
        </motion.div>

        {/* messages */}
        {errMsg && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-orange-400"
          >
            {errMsg}
          </motion.p>
        )}
        {successMsg && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-green-400"
          >
            {successMsg}
          </motion.p>
        )}

        {/* form */}
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-xl space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-1">Name</label>
              <input
                type="text"
                name="from_name"
                className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:border-[#B9FF66] focus:ring-1 focus:ring-[#B9FF66] transition"
                placeholder="Srijan Kumar"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-1">Email</label>
              <input
                type="email"
                name="from_email"
                className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:border-[#B9FF66] focus:ring-1 focus:ring-[#B9FF66] transition"
                placeholder="srijan@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-1">Subject</label>
            <input
              type="text"
              name="user_subject"
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:border-[#B9FF66] focus:ring-1 focus:ring-[#B9FF66] transition"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-3 text-white placeholder-neutral-500 focus:border-[#B9FF66] focus:ring-1 focus:ring-[#B9FF66] transition"
              placeholder="Tell us about your interest…"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-md bg-[#B9FF66] px-6 py-4 font-bold text-[#111] shadow-md hover:bg-[#B9FF66]/90 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}