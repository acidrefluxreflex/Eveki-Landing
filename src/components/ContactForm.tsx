import { useState } from "react";

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform?usp=pp_url&entry.XXXXXXXXXX=";
    const submitUrl = `${googleFormUrl}${email}&entry.XXXXXXXXXX=${body}`;

    setSubmitted(true);
    window.location.href = submitUrl;
  };

  if (submitted) {
    return (
      <div className="rounded-md border border-green-500 bg-green-100 p-4">
        <p className="text-green-700">
          Your response has been recorded. Thank you for contacting us!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-3/5 mx-auto py-7">
      <div className="space-y-1">
        <label htmlFor="email" className="font-medium text-gray-700">
          メールアドレス<span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="body" className="font-medium text-gray-700">
          お問い合わせ本文<span className="text-red-600">*</span>
        </label>
        <textarea
          id="body"
          value={body}
          onChange={handleBodyChange}
          required
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-opacity-50"
          rows={6}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
