import React from 'react'
import EmailSVG from './SVGs/EmailSVG';
import GitHubSVG from './SVGs/GitHubSVG';
import LinkedInSVG from './SVGs/LinkedInSVG';

function ContactSection() {
  return (
    <section className="container px-3 md:px-4 lg:px-6">
      <h2 className="mb-5 text-center text-6xl font-bold text-white">
        Contact me
      </h2>
      <p className="text-center text-xl text-white">
        Feel free to email me, connect with me on LinkedIn or checkout my GitHub!
      </p>
      <div className="my-10 flex flex-wrap justify-center gap-10">
        <div className="flex flex-col justify-center">
          <a
            href={"mailto:matthew.h.harrell@gmail.com"}
            rel="noopener noreferrer"
            className="block h-fit w-fit text-white hover:brightness-90"
          >
            <EmailSVG width={90} height={90} />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href={"https://www.linkedin.com/in/matthharrell/"}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-fit w-fit text-white hover:brightness-90"
          >
            <LinkedInSVG width={70} height={70} />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href={"https://github.com/matt-harrell"}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-fit w-fit text-white hover:brightness-90"
          >
            <GitHubSVG width={75} height={75} />
          </a>
        </div>
      </div>
      <a
        href="https://docs.google.com/document/d/1_htRFYtk2WEscI7PuEArvUtd_6REqmXm1jizjv0N9ag/export?format=pdf&attachment=false"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto my-10 block w-fit rounded-lg bg-tan px-4 py-1 text-3xl text-black drop-shadow-sm duration-200 ease-in hover:scale-110 hover:drop-shadow-lg"
      >
        Download Resume
      </a>
    </section>
  );
}

export default ContactSection