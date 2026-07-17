"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/Button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0,
    },
  },
};

const charVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={container}
      className={className}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={charVariant}
              aria-hidden="true"
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.h1>
  );
}

export function Hero() {
  return (
    <section id="top" className="grid min-h-screen w-full lg:grid-cols-2">
      <div className="bg-background flex min-h-screen flex-col justify-between p-8 pt-24 lg:p-12 lg:pt-28">
        <motion.div
          custom={2.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 flex flex-wrap gap-3"
        >
          <span className="border-border bg-accent/80 text-foreground/80 inline-flex items-center rounded-full border px-4 py-1 text-sm">
            <span className="bg-success mr-2 block size-2 rounded-full"></span>
            Available for new projects
          </span>
        </motion.div>

        <div className="flex max-w-xl flex-col gap-6">
          <motion.p
            custom={1.8}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-camel text-sm font-semibold tracking-[0.3em] uppercase"
          >
            Hello, I&apos;m Phuc Tran
          </motion.p>
          <AnimatedText
            text="Turning ideas into clean, working interfaces."
            className="text-foreground text-4xl leading-tight font-light lg:text-5xl"
          />

          <motion.div
            custom={2.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 flex flex-wrap gap-3"
          >
            <Button href="#projects">See projects</Button>
          </motion.div>

          <motion.p
            custom={2.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-foreground/70 max-w-md text-sm"
          >
            Find me on{" "}
            <a
              href="https://github.com/hphuc112"
              target="_blank"
              rel="noreferrer"
              className="text-success decoration-camel font-medium underline underline-offset-4"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/tranhoangphucttb/"
              target="_blank"
              rel="noreferrer"
              className="text-success decoration-camel font-medium underline underline-offset-4"
            >
              LinkedIn
            </a>
            .
          </motion.p>

          <motion.p
            custom={2.8}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-foreground/70 max-w-md text-sm"
          >
            Download my{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-success decoration-camel font-medium underline underline-offset-4"
            >
              resume
            </a>
            .
          </motion.p>
        </div>

        <div>
          <p className="text-foreground/60 text-sm"></p>
        </div>
      </div>

      <div className="bg-accent relative min-h-80 overflow-hidden lg:h-full">
        <motion.div
          initial={{ filter: "blur(20px)", scale: 1.1, opacity: 0 }}
          animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="relative h-full w-full lg:absolute lg:inset-0"
        >
          <Image
            src="/images/portrait.webp"
            alt="Portrait of Phuc Tran"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
