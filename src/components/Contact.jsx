import React from "react";

function Contact() {
  return (
    <form className="bg-blue-200 p-4 my-4 rounded-lg shadow-md hover:shadow-xl">
      <div>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-white p-2 w-full rounded mb-2"
          placeholder="Enter Your Name"
        />
      </div>
      <div>
        <input
          type="email"
          className="bg-white p-2 w-full rounded mb-2"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
      </div>
      <div>
        <textarea
          className="bg-white p-2 w-full rounded"
          type="text"
          name="name"
          id="name"
          placeholder="Your Query"
        />
      </div>
      <div>
        <button
          type="submit"
          className="cursor-pointer bg-green-500 text-lg px-3 py-2 rounded text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Contact;
