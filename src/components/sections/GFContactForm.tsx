import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="mx-auto w-3/5">
      <h1 className="mb-2 text-2xl font-bold">お問い合わせ</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className=" space-y-4 py-7"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="space-y-1">
          <label htmlFor="yourname" className="font-medium text-gray-700">
            お名前
          </label>{" "}
          <br />
          <input
            type="text"
            name="name"
            id="yourname"
            className="w-1/3 rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="youremail" className="font-medium text-gray-700">
            {" "}
            メールアドレス<span className="text-red-600">*</span>
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            id="youremail"
            required
            className="w-1/3  rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="yourmessage" className="font-medium text-gray-700">
            {" "}
            お問い合わせ本文<span className="text-red-600">*</span>
          </label>{" "}
          <br />
          <textarea
            name="message"
            id="yourmessage"
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-opacity-50"
          ></textarea>
        </div>
        <p>
          <button type="submit" className="btn-accent btn text-lg">
            内容を送信
          </button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
