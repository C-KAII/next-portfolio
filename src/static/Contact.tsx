import React, { useState } from "react";

interface Errors {
  fullname?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
}

function Contact() {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Form validation state
  const [errors, setErrors] = useState<Errors>({});

  // Setting button text on form submission
  const [buttonText, setButtonText] = useState<string>("Send");

  // Setting success or failure messages states
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showFailureMessage, setShowFailureMessage] = useState<boolean>(false);

  // Validation check method
  const handleValidation = (): boolean => {
    const tempErrors: Errors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors.fullname = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors.email = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors.subject = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors.message = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  // Handling form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const isValidForm = handleValidation();
    if (!isValidForm) return;

    setButtonText("Sending");

    try {
      // Load reCAPTCHA script dynamically if not already loaded
      if (!window.grecaptcha) {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
        document.body.appendChild(script);
        await new Promise((resolve) => (script.onload = resolve));
      }

      // Execute reCAPTCHA v3
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "submit" }
      );

      const res = await fetch("/api/contact-form-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          subject,
          message,
          recaptchaToken: token,
        }),
      });

      const { success, error } = await res.json();
      if (success) {
        setIsSubmitted(true);
      } else {
        console.error(error);
        setShowFailureMessage(true);
      }
    } catch (err) {
      console.error(err);
      setShowFailureMessage(true);
    } finally {
      setButtonText("Send");
    }
  };

  if (isSubmitted) {
    return (
      <section className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white">Thank you for your message!</h2>
          <p className="text-white mt-2">I&apos;ll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 desktop:w-1/3 mobile:w-full mobile:px-4 mobile:max-w-3xl">
      <div className="px-2 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
              Your name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="block p-3 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Describe your subject"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-800 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message...">
            </textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {buttonText}
            </button>
          </div>
          {showFailureMessage && <p className="text-red-500 mt-2">Failed to send message. Please try again later.</p>}
        </form>
        <p className="mt-4 text-xs text-gray-300 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>

      </div>
    </section>
  );
}

export default Contact;