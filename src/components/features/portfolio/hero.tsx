"use client";

import { Profile } from "@/components/features/portfolio/profile";
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/registry/magicui/number-ticker";
import { Typewriter } from "@/components/typewriter";
import { cn } from "@/lib/utils";
import { ArrowDownSquareIcon, ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const heroData = {
  typewriterText: ["Siddharth", "Stark"],
  description: "Desarrollador Fullstack con pasión por construir aplicaciones web. Me especializo en React, Next.js, Node.js y TypeScript.",
  contactLink: "#contact",
  resumeLink: "/resume.pdf",
  stats: [
    { label: "Vistas del Portafolio", value: 0 },
    { label: "Años de Experiencia", value: 2 },
    { label: "Proyectos Entregados", value: 8 },
    { label: "Clientes Satisfechos", value: 5 },
  ],
  helloWorld: "< Hola Mundo />",
  jobTitle: "Desarrollador Full-Stack",
  intro: "Hola, soy ",
  connectButton: "Conectemos",
  resumeButton: "Descargar CV",
  scrollDown: "DESPLAZAR HACIA ABAJO",
};

export function Hero() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden border-b bg-background pt-12">
      {/* Tron Grid Background */}
      {/* <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-background"
          style={{ backgroundImage: "var(--tron-grid)", backgroundSize: "2rem 2rem" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div> */}

      {/* Content */}
      <div className="relative px-4 pb-6 md:px-8 md:pb-14 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center gap-12 text-center md:flex-row md:text-left"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 animate-pulse rounded-lg bg-primary/50 blur-xl" />
              <div className="absolute -inset-1 rotate-3 rounded-lg border-2 border-primary shadow-[0_0_15px_theme(colors.primary/0.6)]" />
              <div className="absolute -inset-1 -rotate-3 rounded-lg border-2 border-primary shadow-[0_0_15px_theme(colors.primary/0.6)]" />
              <div className="bg-card relative rounded-lg border-2 border-primary/30 p-2">
                <Profile />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="min-w-0 md:flex-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2"
            >
              <div className="border px-3 py-1">
                <span className="text-foreground/60 font-mono text-xs">
                  {heroData.helloWorld}
                </span>
              </div>
              <div className="h-px w-12 bg-border" />
              <span className="text-foreground/50 font-mono text-xs md:text-sm">
                {heroData.jobTitle}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-incognito mb-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span className="text-foreground">{heroData.intro}</span>
              <span
                className="relative italic text-primary"
                style={{ textShadow: "0 0 10px theme(colors.primary/0.5)" }}
              >
                <Typewriter
                  text={heroData.typewriterText}
                  speed={85}
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar="|"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground/60 max-w-2xl text-sm font-light md:text-base"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 flex flex-wrap items-center gap-4 max-md:justify-center"
            >
              <Button
                asChild
                size="lg"
                className="group/btn font-medium transition-all hover:shadow-[0_0_20px_theme(colors.primary/0.5)]"
              >
                <a href={heroData.contactLink}>
                  {heroData.connectButton}
                  <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group/btn font-medium transition-all"
              >
                <Link href={heroData.resumeLink}>
                  <Download className="size-4 transition-transform group-hover/btn:translate-y-0.5" />
                  {heroData.resumeButton}
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/*  Stats Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 border md:max-w-3/4 md:border-0 md:border-t md:border-r lg:grid-cols-4">
          {heroData.stats.map((stat, i) => (
            <div
              key={i}
              className={cn(
                "group hover:bg-accent relative p-8 text-center transition-colors",
                i !== 3 && "border-r",
                i < 2 && "border-b lg:border-b-0",
              )}
            >
              <div className="text-foreground mb-2 text-3xl font-bold">
                <NumberTicker value={stat.value} />+
              </div>
              <div className="text-foreground/50 font-mono text-xs tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground absolute right-4 bottom-2 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex">
          {heroData.scrollDown}
          <ArrowDownSquareIcon className="size-4 animate-pulse" />
        </div>
      </div>
    </div>
  );
};