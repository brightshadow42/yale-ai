"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

import { GradientBox } from "@components/GradientBox";
import { SolidColorBlock } from "@components/SolidColorBlock";
import { Sponsors } from "@components/Sponsors";
// import { ParticleNetwork } from "@components/ParticleNetwork";
import { TitleSubtitle } from "@components/TitleSubtitle";

const FastParticleNetwork = dynamic(
  () => import("@components/ParticleNetwork"),
  {
    loading: () => <p>Loading...</p>,
    ssr: true,
  }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-12">
        <FastParticleNetwork />

        <div className="hidden md:flex justify-center items-center overflow-hidden fixed top-0 left-0 w-full h-full -z-10">
          <div
            className="text-white opacity-[0.03] text-[20rem] md:text-[30rem] font-black text-center"
            style={{
              transform: "translateX(-50%)",
              left: "50%",
              position: "absolute",
              fontSize: "calc(50vw + 1rem)",
            }}
          >
            y/cs
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-white drop-shadow-lg text-center font-extrabold text-4xl md:text-5xl mt-20 md:mt-[9vw] mb-3 -z-10 bg-gradient-to-r from-ycs-pink to-ycs-pink text-transparent bg-clip-text">
            We are the
          </p>
          <p className="text-white drop-shadow-lg text-center text-6xl md:text-8xl font-extrabold">
            Yale Computer Society
          </p>

          <p className="text-white text-center lg:text-2xl md:text-xl text-lg mt-6 md:mt-8 w-3/4 md:w-3/4 mx-auto">
            Yale&apos;s premier tech and computer science organization
          </p>

          <h1 className="text-white md:mt-[7vw] text-center mt-16 lg:text-2xl md:text-xl text-lg w-3/4 mx-auto">
            We&apos;re a group of computer science students that build software
            applications for Yale University&apos;s campus community and connect
            over our shared love for applied computing.
            <br />
            <a
              className="text-ycs-pink underline"
              href="https://github.com/yalecomputersociety"
            >
              GitHub
            </a>
          </h1>

          <div className="flex md:flex-row flex-col mt-10 gap-10 md:mx-10 mx-16">
            <SolidColorBlock
              color={"ycs-pink"}
              title={"80+ developers"}
              desc={"creating apps to benefit the Yale and New Haven community."}
            />
            <SolidColorBlock
              color={"ycs-pink"}
              title={"50+ Catalyst members"}
              desc={"taught each year."}
            />
            <SolidColorBlock
              color={"ycs-pink"}
              title={"20,000+ unique users"}
              desc={"across all y/cs applications."}
            />
          </div>

          <TitleSubtitle
            title="Cultivating a passion for the computer science industry"
            subtitle="From development mentorship to hacking nights, we create a community for programmers of all skill levels."
            className="mt-32"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto gap-8 mt-8">
            <GradientBox
              title="Development"
              color="blue"
              text="Become a member of one of our software teams and help build apps that benefit the Yale and New Haven community."
              link="/products"
            />
            <GradientBox
              title="Mentorship"
              color="pink"
              text="New to software engineering? Learn from mentors who have been there before with the y/cs Catalyst Program."
            />
            <GradientBox
              title="Events"
              color="green"
              text="Help plan social events for students to meet and share their interests, as well as bring notable industry figures to Yale's campus."
              link="/events"
            />
            <GradientBox
              title="Community"
              color="red"
              text="Join a y/cs community such as the Cybersecurity Community to meet people of similar computer science interests to yourself."
              link={"https://forms.gle/C4JvNKg5R19Khnpi9"}
            />
          </div>

          <Sponsors />

          <TitleSubtitle
            title="Ready to join the best computer science club at Yale?"
            subtitle="The Fall 2024 Membership Application will open following the Extracirrcular Bazaar."
            className="mt-32"
          />

          <Link
            href="/join"
            className="rounded-full disabled:opacity-50 font-bold text-xl hover:scale-105 duration-200 bg-ycs-pink p-4 pl-12 pr-12 m-6"
          >
            Learn More
          </Link>
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSd8vyeaux2ia9CgvDH6Os6wsbuO_uIX1axE7udcSZKoMD0m4w/viewform?usp=sf_link"
            }
            className="text-ycs-pink font-bold text-xl hover:scale-105 duration-200"
          >
            Applications are now open, apply today!
          </Link>

          {/* New Upcoming Events section */}
          <section className="w-full max-w-5xl mt-12">
            <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">June 15, 2024 - AI in Healthcare Symposium</p>
                <p>Speakers: Dr. Jane Smith, Prof. John Doe, Dr. Emily Johnson</p>
              </li>
              <li>
                <p className="font-semibold">August 22, 2024 - Machine Learning Workshop</p>
                <p>Speakers: Dr. Michael Brown, Sarah Lee, PhD, Robert Chen</p>
              </li>
              <li>
                <p className="font-semibold">October 5, 2024 - Ethics in AI Conference</p>
                <p>Speakers: Prof. Lisa Garcia, Dr. David Wilson, Amelia Thompson</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
