"use client";

import HeadingLine from "@/components/heading-line";
import { Robot } from "@/components/robot";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import env from "@/config/env";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const About = () => {
  const aboutData = {
    sectionHeading: "Sobre mí",
    title1: "Conoce al Desarrollador,",
    title2: "No Solo el Código",
    robotGreeting: "¡Hola!👋",
    paragraphs: [
      {
        text: "Construyo productos rápidos y amigables que hacen sonreír a los usuarios... y a veces también a sus perros.",
        imgSrc: "/gifs/kawaii%20cat%20GIF.gif",
        imgAlt: "gato kawaii animando",
      },
      {
        text: "Stack: Next.js, React, TypeScript, Tailwind. APIs limpias, microinteracciones sutiles, gran deleite.",
        imgSrc: "/gifs/cate%20coding.gif",
        imgAlt: "gato programando intensamente",
      },
      {
        text: "Fuera de servicio: café, bocetos de animaciones y maratones de One Piece.",
        imgSrc: "/gifs/happy%20one%20piece%20GIF.gif",
        imgAlt: "ambiente feliz de One Piece",
      },
      {
        text: "Mejor en equipos pequeños: ciclos rápidos, comunicación clara y chocar los cinco después del despliegue.",
        imgSrc: "/gifs/One%20Piece%20GIF%20by%20TOEI%20Animation%20UK.gif",
        imgAlt: "equipo de One Piece trabajando juntos",
      },
      {
        text: "¿Tienes un brief desordenado o una idea a medio cocinar?... Convirtámoslo en algo real.",
        imgSrc: "/gifs/kirby%20confused.gif",
        imgAlt: "kirby confundido pero listo",
      },
    ],
    contactButton: "Contáctame",
    profileName: "Siddharth",
    profileHandle: "@stark",
    status: {
      available: "Disponible",
      notAvailable: "No Disponible",
    },
    badges: ["2+ Años", "Full-Stack"],
  };

  return (
    <SectionHeading text={aboutData.sectionHeading} id="about" className="overflow-hidden">
      <div className="flex items-center lg:h-[95vh]">
        <div className="relative flex-1 px-4 py-12 md:px-12">
          <h2 className="font-incognito text-2xl font-semibold text-primary md:text-5xl lg:text-4xl">
            {aboutData.title1}
            <br />
            {aboutData.title2}
          </h2>

          <HeadingLine className="mt-6" lineWidth={40} />

          <Robot className="absolute top-6 -right-8 z-0 w-64 font-mono text-white max-md:scale-x-[-1] md:top-8 md:right-4">
            <div className="max-md:scale-x-[-1]" style={{ textShadow: "0 0 10px theme(colors.primary/0.8)" }}>{aboutData.robotGreeting}</div>
          </Robot>

          <div className="text-foreground/70 bg-card/50 relative z-10 mx-auto mt-6 max-w-3xl rounded-lg border-2 border-dashed border-primary/20 text-sm leading-relaxed backdrop-blur-xl md:text-base">
            <div className="p-6">
              {aboutData.paragraphs.map((p, i) => (
                <p key={i}>
                  {p.text.split("...")[0]}
                  <span className="mx-1 inline-block align-middle">
                    <span className="ring-offset-background relative inline-block w-12 rotate-2 overflow-hidden rounded-md ring ring-offset-2">
                      <img
                        src={p.imgSrc}
                        className="max-h-8 h-auto w-full object-cover object-center"
                        alt={p.imgAlt}
                      />
                    </span>
                  </span>
                  {p.text.split("...")[1]}
                </p>
              ))}
            </div>

            <div className="border-t-2 border-dashed border-primary/20 p-6">
              <Button
                asChild
                size={"lg"}
                variant={"outline"}
                className="group font-medium transition-all"
              >
                <a href="#contact">
                  Contact Me
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Left */}
        <div className="relative hidden h-full items-center justify-center border-l md:w-1/2 lg:flex">
          <div className="absolute inset-0 size-full">
            <div className="relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full before:bg-border after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5 after:bg-border" />
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -2 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative py-4 md:w-72 lg:w-80"
          >
            <div className="sticky top-8 h-auto w-full">
              {/* Tron Stacked effect */}
              <div className="absolute inset-0 rotate-3 rounded-2xl bg-primary/30 blur-sm" />
              <div className="absolute inset-0 rotate-1 rounded-2xl bg-primary/20 blur-sm" />

              {/* Main card */}
              <div className="relative rounded-2xl border-2 border-primary/30 bg-card p-6 shadow-xl shadow-primary/10">
                <div className="text-center">
                  <div className="border-foreground/20 bg-muted/20 mb-4 overflow-hidden rounded-lg border-2 border-dashed p-4">
                    <img
                      src="/ascii-art-profile.png"
                      alt="ASCII"
                      className="-mb-5 h-auto w-full object-cover object-center dark:invert"
                    />
                  </div>
                  <h3 className="font-incognito text-2xl font-semibold">{aboutData.profileName}</h3>
                  <p className="text-foreground/60 mt-1 font-mono text-sm">{aboutData.profileHandle}</p>

                  {/* Status badges */}
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <Badge
                      variant="outline"
                      className={cn("border-primary/30 bg-primary/10 text-primary", {
                        "border-destructive/30 bg-destructive/10 text-destructive":
                          !env.AVAILABLE_STATUS,
                      })}
                    >
                      <div
                        className={cn(
                          "mr-1.5 h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_8px_theme(colors.primary)]",
                          {
                            "bg-destructive shadow-[0_0_8px_theme(colors.destructive)]": !env.AVAILABLE_STATUS,
                          },
                        )}
                      />
                      {!env.AVAILABLE_STATUS
                        ? aboutData.status.notAvailable
                        : aboutData.status.available}
                    </Badge>
                    {aboutData.badges.map((badge) => (
                      <Badge key={badge} variant="outline" className="hover:bg-accent">{badge}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionHeading>
  );
};

export default About;
