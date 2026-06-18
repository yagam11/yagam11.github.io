"use client";

import { ContactRow } from "@/components/contact-row";
import { ProfilePicture } from "@/components/profile-picture";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    if (!isImageOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isImageOpen]);

  return (
    <div className="bg-background text-foreground">
      <main className="mx-auto flex w-full max-w-[653px] flex-col gap-10 px-6 py-12 sm:px-8 sm:py-16">
        <section id="top" className="relative space-y-4 pt-6 sm:pt-8">
          <div className="absolute left-0 top-6 hidden -translate-x-[calc(100%+5rem)] flex-col items-start gap-3 md:flex">
            <ProfilePicture
              src="/profile.jpeg"
              alt="Profile image of Tianchi Huang"
              onClick={() => setIsImageOpen(true)}
            />
            <ContactRow
              linkedinUrl="https://www.linkedin.com/in/tianchihuang/"
              email="htianchi8@gmail.com"
            />
          </div>
          <h1 className="text-[24px] font-medium leading-none tracking-tight sm:text-[28px]">
            Tianchi Huang
          </h1>
          <div className="space-y-4 text-[17px] leading-[1.5] text-foreground">
            <p>Hi, I&apos;m Tianchi.</p>

            <p>
              I&apos;m a developer interested in distributed systems, computer networks,
              and the infrastructure that powers modern software.
            </p>

            <p>
              I studied Mathematics and Computer Science at Boston University and completed 
              my Sc.M. in Computer Science at Brown University. I&apos;ll be joining Google as a 
              Software Engineer.

            </p>

            <p>
              Outside of work, I like reading about investing, looking for great
              restaurants, and exploring new places. I&apos;m generally curious about
              how things work, whether it&apos;s software, businesses, or ideas. I
              usually have{' '}
              <a
                className="inline-link"
                href="https://open.spotify.com/artist/3pc0bOVB5whxmD50W79wwO"
                target="_blank"
                rel="noreferrer"
              >
                music
              </a>
              {' '}playing somewhere in the background.
            </p>

            <p>
              After growing up around Shanghai&apos;s dense metro life, moving to
              the United States gave me a new appreciation for cars. I like the
              freedom of being able to leave when you want, take the longer
              route, and end up somewhere you didn&apos;t plan for. Sometimes the
              destination matters. Sometimes it doesn&apos;t.
            </p>

            <p>
              Film, anime, and games are another longtime interest of mine. Some
              of my favorite directors are Shinichirō Watanabe, Satoshi Kon, and
              Christopher Nolan, I am a big fan of Rockstar Games. I&apos;m drawn to
              works that blend style, tension, and a world that feels lived in.
            </p>
          </div>
        </section>
      </main>

      {isImageOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          role="presentation"
          onClick={() => setIsImageOpen(false)}
        >
          <div className="profile-preview-panel relative h-[86vh] aspect-[3609/4586] max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl bg-background shadow-2xl">
            <div className="relative h-full w-full" onClick={(event) => event.stopPropagation()}>
              <Image
                src="/profile.jpeg"
                alt="Large profile image of Tianchi Huang"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 86vh, 90vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
