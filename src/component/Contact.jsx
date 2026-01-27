import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error("Email service not configured");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-16 lg:px-28 py-24 relative overflow-hidden"
    >
      <h2 className="absolute top-10 left-6 md:left-16 text-[4rem] md:text-[9rem] font-bold tracking-widest text-black/10">
        CONTACT
      </h2>

      <div className="relative z-10 max-w-4xl mx-auto mt-48">
        <p className="mt-4 text-sm tracking-widest text-black">
          nathhirakj16@gmail.com
        </p>
        <p className="mt-4 text-sm tracking-widest text-black">
          +91 75788 92971
        </p>

        <form className="mt-14 border border-black/40" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-black/40">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent px-4 py-4 text-sm outline-none border-b md:border-b-0 md:border-r border-black/40"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent px-4 py-4 text-sm outline-none"
              required
            />
          </div>

          <textarea
            placeholder="Message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent px-4 py-4 text-sm outline-none"
            required
          />

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 text-sm tracking-widest hover:bg-black/80 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
