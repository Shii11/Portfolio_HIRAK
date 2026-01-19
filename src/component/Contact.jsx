import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // DEBUG: check env loading
  // useEffect(() => {
  //   console.log(
  //     "EMAILJS PUBLIC KEY:",
  //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  //   );

  //   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  //   if (!publicKey) {
  //     console.error("❌ EmailJS public key missing from .env");
  //     return;
  //   }

  //   emailjs.init(publicKey);
  // }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  //   const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  //   const autoReplyID = import.meta.env.VITE_EMAILJS_AUTOREPLY_ID;

  //   if (!serviceID || !templateID || !autoReplyID) {
  //     alert("Email service is not configured correctly");
  //     return;
  //   }

  //   const templateParams = {
  //     from_name: name,
  //     from_email: email,
  //     message: message,
  //   };

  //   Promise.all([
  //     emailjs.send(serviceID, templateID, templateParams),
  //     emailjs.send(serviceID, autoReplyID, templateParams),
  //   ])
  //     .then(() => {
  //       alert("Email sent successfully!");
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     })
  //     .catch((err) => {
  //       console.error("EmailJS Error:", err);
  //       alert("Something went wrong. Please try again later.");
  //     });
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) throw new Error("Failed");

    toast.success("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  } catch (err) {
    toast.error("Something went wrong. Please try again.");
  }
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
          <a href="mailto:nathhirakj16@gmail.com">nathhirakj16@gmail.com</a>
        </p>

        <form className="mt-14 border border-black/40" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-black/40">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent px-4 py-4 text-sm outline-none border-b md:border-b-0 md:border-r border-black/40 placeholder-black/60"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent px-4 py-4 text-sm outline-none placeholder-black/60"
              required
            />
          </div>

          <textarea
            placeholder="Message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent px-4 py-4 text-sm outline-none placeholder-black/60"
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

        <div className="mt-16 flex flex-wrap justify-center gap-10 text-xs tracking-widest text-black/60">
          <a href="https://www.instagram.com/hotaryuk/" target="_blank"
            rel="noopener noreferrer" className="cursor-pointer hover:text-black">Instagram</a>
          <a href="https://www.linkedin.com/in/hirak-j-nath/" target="_blank"
            rel="noopener noreferrer" className="cursor-pointer hover:text-black">LinkedIn</a>
          <a href="https://www.behance.net/hirakjnath" target="_blank"
            rel="noopener noreferrer" className="cursor-pointer hover:text-black">Behance</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
