import React from "react";

function Contact() {
  return (
    <div
      className="bg-[radial-gradient(#2f2f30_1px,transparent_1px)] [background-size:24px_24px] flex flex-col justify-center items-center mx-auto p-10 gap-3 "
      id="contact"
    >
      <h1 className="mx-auto text-3xl font-bold text-zinc-50 mb-10">Contact</h1>
      <div className="bg-zinc-800 p-5 py-8 w-1/3 rounded-lg">
        <article className="font-montserrat">
          <h2 className="text-xl mx-auto lg:w-11/12 text-center w-10/12"></h2>
          <form className="lg:w-11/12 mx-auto rounded-lg w-10/12">
            <label className="block mb-2 font-bold">Name</label>
            <input
              type="text"
              name="user_name"
              className="block mb-8 bg-gray-200 w-full p-4 rounded-md drop-shadow-sm text-black"
              placeholder="Enter Your Name"
            />
            <label className="block mb-2 font-bold">Email</label>
            <input
              type="email"
              name="user_email"
              className="block mb-8 bg-gray-200 w-full p-4 rounded-md drop-shadow-sm text-black"
              placeholder="Enter Your Email"
            />
            <label className="block mb-2 font-bold">Message</label>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows={8}
              className="block bg-gray-200 text-black mb-8 w-full resize-none rounded-md drop-shadow-sm p-4 h-auto"
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
