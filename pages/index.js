import Head from 'next/head';
import Image from 'next/image';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

export default function Home() {
  return (
    <>
      <Head>
        <title>Harish&apos;s Portfolio</title>
        <meta name="description" content="Harish's Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-900 px-7">
        <section className="min-h-screen">
          <nav className="p-8 mb-10 flex justify-between">
            <h1 className="text-white font-moderne pt-2">
              Harish&apos;s Portfolio
            </h1>
            {/* <ul className="flex items-center">
              <li className="cursor-pointer mx-2">
                <a className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md">
                  Projects
                </a>
              </li>
              <li className="cursor-pointer mx-2">
                <a className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md">
                  Contact
                </a>
              </li>
              <li className="cursor-pointer mx-2">
                <a className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md">
                  Resume
                </a>
              </li>
            </ul> */}
          </nav>
          <div className="text-white text-center p-10">
            <h2 className="font-bold font-moderne text-5xl text-blue-300">
              HARISH UTHAYAKUMAR
            </h2>
            <h3 className="text-2xl py-2 text-blue-200">
              Software Developer and Computer Science Student
            </h3>
            <p className="text-lg max-w-xl mx-auto text-white pt-5">
              I&apos;m a computer science student with a passion for software
              development. Learn more about me and my work below!
            </p>
          </div>
          <div className="text-5xl flex justify-center">
            <a
              href="https://www.linkedin.com/in/harishuth/"
              target="_blank"
              rel="noreferrer"
              className="mx-3 text-blue-300 hover:text-blue-400 cursor-pointer"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/harishgajen"
              className="mx-3 text-blue-300 hover:text-blue-400 cursor-pointer"
            >
              <IoLogoGithub />
            </a>
          </div>
          <div className="py-8">
            <h3 className="text-center text-blue-200 text-2xl">My Projects</h3>
            <div className="">
              <div className="max-w-lg mx-auto text-center shadow-lg my-10 p-10 rounded-xl bg-slate-800">
                <h3 className="text-xl text-blue-200">EmotiChat</h3>
                <Image
                  className="py-5"
                  src="/emotichat.png"
                  alt="EmotiChat Preview Image"
                  width={500}
                  height={500}
                />
                <p className="text-white">
                  Chat app making messages easier to understand with live
                  emotion detection.
                  <br />
                  React, Next, Node, Express, MongoDB, Python, Socket.IO,
                  Tailwind
                </p>
                <ul className="flex justify-center mt-7">
                  <li className="cursor-pointer mx-2">
                    <a
                      href="https://emotichat.netlify.app/"
                      className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md"
                    >
                      Website
                    </a>
                  </li>
                  <li className="cursor-pointer mx-2">
                    <a
                      href="https://github.com/harishgajen/emotichat"
                      className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div className="max-w-lg mx-auto text-center shadow-lg my-10 p-10 rounded-xl bg-slate-800">
                <h3 className="text-xl text-blue-200">Neural Style Transfer</h3>
                <Image
                  className="py-5"
                  src="/neuralstyletransfer.png"
                  alt="Neural Style Transfer Preview Image"
                  width={500}
                  height={500}
                />
                <p className="text-white">
                  Transfer the artistic style from one image to another.
                  <br></br>
                  React, Express, Node, Tensorflow, Python
                </p>
                <ul className="flex justify-center mt-7">
                  <li className="cursor-pointer mx-2">
                    <a
                      href="https://github.com/harishgajen/neuralstyletransfer"
                      className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="max-w-lg mx-auto text-center shadow-lg my-10 p-10 rounded-xl bg-slate-800">
                <h3 className="text-xl text-blue-200">Portfolio Website</h3>
                <Image
                  className="py-5"
                  src="/portfolio.png"
                  alt="Portfolio Website Preview Image"
                  width={500}
                  height={500}
                />
                <p className="text-white">
                  Website showcasing my projects and links to where you can
                  connect with me.<br></br>
                  React, Next, Tailwind CSS
                </p>
                <ul className="flex justify-center mt-7">
                  <li className="cursor-pointer mx-2">
                    <a
                      href="https://harishuth-portfolio.vercel.app/"
                      className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md"
                    >
                      Website
                    </a>
                  </li>
                  <li className="cursor-pointer mx-2">
                    <a
                      href="https://github.com/harishgajen/portfolio"
                      className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="max-w-lg mx-auto text-center shadow-lg my-10 p-10 rounded-xl bg-slate-800">
                <h3 className="text-xl text-blue-200">byteKode Hackathons</h3>
                <p className="text-white">
                  Registered non-profit organization that has hosted two
                  hackathons for 100+ participants.
                </p>
                <ul className="flex justify-center mt-7">
                  <li className="cursor-pointer mx-2">
                    <a
                      href="https://bytekode.org/"
                      className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md"
                    >
                      Website
                    </a>
                  </li>
                  <li className="cursor-pointer mx-2">
                    <a
                      href="https://bytekodehackathon.devpost.com/?ref_feature=challenge&ref_medium=discover"
                      className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md"
                    >
                      Devpost
                    </a>
                  </li>
                </ul>
              </div>
              <div className="max-w-lg mx-auto text-center shadow-lg my-10 p-10 rounded-xl bg-slate-800">
                <h3 className="text-xl text-blue-200">
                  RoBERTa vs Logistic Regression
                </h3>
                <p className="text-white">
                  Building two different emotion detection machine learning
                  models and comparing them.
                </p>
                <ul className="flex justify-center mt-7">
                  <li className="cursor-pointer mx-2">
                    <a
                      href="https://github.com/harishgajen/bert-vs-logistic-regression"
                      className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div className="max-w-lg mx-auto text-center shadow-lg my-10 p-10 rounded-xl bg-slate-800">
                <h3 className="text-xl text-blue-200">2D Platformer Game</h3>
                <p className="text-white">
                  Remaking a classic 2D platformer with Java and OOP.
                  <br />
                  Java
                </p>
                <ul className="flex justify-center mt-7">
                  <li className="cursor-pointer mx-2">
                    <a
                      href="https://github.com/harishgajen/supermariobros"
                      className="text-white bg-blue-400 hover:bg-blue-500 px-2 py-2 rounded-md"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
