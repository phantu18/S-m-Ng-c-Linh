import React from "react";
import { motion } from "framer-motion";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Liên hệ với chúng tôi
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Gửi thông tin hoặc ghé thăm địa chỉ của chúng tôi trên bản đồ.
        </motion.p>
      </div>
      <div className="w-full h-[500px] mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7709.5236706655105!2d108.00181337241428!3d14.950356490689535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316bd40ca383caa1%3A0x925e41e1fec9a025!2zVUJORCBYw6MgTmfhu41jIEzDonk!5e0!3m2!1svi!2s!4v1743847812011!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
