import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);
  const formValues = {
    from_name: formData.get('from_name'),
    from_email: formData.get('from_email'),
    user_subject: formData.get('user_subject'),
    message: formData.get('message'),
  };

  if (formValues.from_name === '') {
    setErrMsg('From name is required!');
  } else if (formValues.from_email === '') {
    setErrMsg('Please give your Email!');
  } else if (!emailValidation(formValues.from_email)) {
    setErrMsg('Give a valid Email!');
  } else if (formValues.user_subject === '') {
    setErrMsg('Please give your Subject!');
  } else if (formValues.message === '') {
    setErrMsg('Message is required!');
  } else {
    const recipient = "sonukumarhansda61@gmail.com";
    const subject = encodeURIComponent(formValues.user_subject);
    const body = encodeURIComponent(
      `Name: ${formValues.from_name}\nEmail: ${formValues.from_email}\n\n${formValues.message}`
    );

    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to= ${recipient}&su=${subject}&body=${body}&tf=1`;

    setErrMsg('');
    setSuccessMsg("Opening Gmail...");

    window.open(gmailUrl, '_blank');

    setTimeout(() => {
      setSuccessMsg('');
      form.current.reset();
    }, 2000);
  }
};

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
            <p className="text-lg text-gray-300">
              Want to join us or collaborate? Reach out!
            </p>
          </div>

          {errMsg && (
            <p className="mb-4 text-orange-400 text-center animate-pulse">{errMsg}</p>
          )}
          {successMsg && (
            <p className="mb-4 text-green-500 text-center animate-pulse">{successMsg}</p>
          )}

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#00ffe1] focus:border-[#00ffe1] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#00ffe1] focus:border-[#00ffe1] outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="user_subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
              <input
                type="text"
                name="user_subject"
                id="user_subject"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#00ffe1] focus:border-[#00ffe1] outline-none transition-colors"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#00ffe1] focus:border-[#00ffe1] outline-none transition-colors"
                placeholder="Tell us about your interest..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-b from-[#00ffe1] to-[#0a6971] text-black font-medium rounded-lg hover:from-[#0a6971] hover:to-[#00ffe1] hover:text-white transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;