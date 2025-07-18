import React from "react";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[60vh] bg-gradient-to-b from-white to-blue-50 dark:from-[#0f172a] dark:to-[#1e293b] px-6 md:px-16 py-20 flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-800 dark:text-white">
        🤝 Let’s Connect
      </h2>

      <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8">
        Let’s create impactful digital experiences together. If you’re looking to
        collaborate on innovative projects, build meaningful software, or simply
        want to connect and share ideas, I’d love to hear from you.
      </p>

      <a
  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCCSPLJwHTdmDqbcxwxjVcQjQSKvsTJzZGhkNkjvxDJjMLvnxhpkrkNzBNPhRmXKTDlQCg" // ✅ Opens default email client to send mail
  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-base font-medium border-blue-500 rounded text-blue-600 hover:bg-blue-50 transition border dark:border-gray-600"
>
  <FiMail size={20} />
  gavinnadar20@gmail.com
</a>

    </section>
  );
};

export default Contact;
