import React from "react";

function Contact() {
  return (
    <div
      className="bg-black border-t-zinc-300 border bg-opacity-15 flex flex-col justify-center items-center mx-auto p-10 gap-3 "
      id="contact"
    >
      <h1 className="mx-auto text-3xl font-bold text-zinc-50 mb-10">Contact</h1>
      <div className="bg-zinc-800 p-5 py-8 w-6/12 rounded-lg">
        <article className="font-montserrat">
          <h2 className="text-xl mx-auto lg:w-11/12 text-center w-10/12"></h2>
          <form className="lg:w-11/12 mx-auto rounded-lg w-10/12">
            <label className="block mb-2 font-bold">Name</label>
            <input
              type="text"
              name="user_name"
              className="block mb-8 bg-zinc-700 w-full p-4 rounded-md drop-shadow-sm text-white"
              placeholder="Enter Your Name"
            />
            <label className="block mb-2 font-bold">Email</label>
            <input
              type="email"
              name="user_email"
              className="block mb-8 bg-zinc-700 w-full p-4 rounded-md drop-shadow-sm text-white"
              placeholder="Enter Your Email"
            />
            <label className="block mb-2 font-bold">Message</label>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows={8}
              className="block bg-zinc-700 mb-8 w-full resize-none rounded-md drop-shadow-sm p-4 text-white h-40"
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
