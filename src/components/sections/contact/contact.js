"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hrfd87w",
        "template_8h48u9n",
        form.current,
        "faNgOb9LHJLLNVTq6"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          setFormValues({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="bg-regularBG border-t-zinc-300 border dark:bg-opacity-15 flex flex-col justify-center items-center mx-auto p-10 gap-3"
      id="contact"
    >
      <h1 className="mx-auto text-3xl font-bold text-foreground mb-10">
        Contact
      </h1>
      <div className="shadow-md bg-dottedBG p-5 py-8 md:w-[35%] rounded-lg border-zinc-600 border w-[80vw]">
        <article className="font-montserrat">
          <form
            className="lg:w-11/12 mx-auto rounded-lg md:w-10/12"
            ref={form}
            onSubmit={sendEmail}
          >
            <label className="block mb-2 font-bold">Name</label>
            <input
              type="text"
              name="user_name"
              className="block mb-8 dark:bg-zinc-700 bg-background w-full p-4 rounded-md drop-shadow-sm text-foreground"
              placeholder="Enter Your Name"
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
            <label className="block mb-2 font-bold">Email</label>
            <input
              type="email"
              name="user_email"
              className="block mb-8 dark:bg-zinc-700 bg-background w-full p-4 rounded-md drop-shadow-sm text-foreground"
              placeholder="Enter Your Email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
            <label className="block mb-2 font-bold">Message</label>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows={8}
              className="block dark:bg-zinc-700 bg-background mb-8 w-full resize-none rounded-md drop-shadow-sm p-4 text-foreground h-40"
              value={formValues.message}
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
            />
            <div className="flex justify-end">
              <button className="hover:cursor-pointer bg-Ruby rounded-md bg-green-500">
                <input
                  type="submit"
                  value="Send"
                  className="hover:cursor-pointer text-white font-semibold text-xl py-2 px-5"
                />
              </button>
            </div>
          </form>
        </article>
      </div>
    </div>
  );
}

export default Contact;
