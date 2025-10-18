"use client";

import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import dayjs from "dayjs";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/logo";

const footerData = {
  socialLinks: [
    { icon: Github, href: siteConfig.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: siteConfig.twitter, label: "X (Twitter)" },
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Correo" },
  ],
  copyrightName: "Siddharth",
  copyrightText: "Todos los derechos reservados.",
  madeWith: "Hecho con",
  inNextJs: "en Next.js",
  backToTop: "Volver arriba",
};

export function Footer() {
  return (
    <footer className="border-t px-4 py-3.5 md:px-8">
      <div className="text-foreground/70 flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
        <div className="inline-flex items-center gap-2">
          <Logo className="w-10" />
          <span>
            © {dayjs().year()} {footerData.copyrightName}. {footerData.copyrightText}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <span className="text-foreground/60 text-sm">{footerData.madeWith}</span>
          <Heart className="size-4 fill-primary text-primary" />
          <span className="text-foreground/60 text-sm">{footerData.inNextJs}</span>
        </motion.div>

        <div className="inline-flex items-center gap-4">
          {/* Social Links */}
          <div className="inline-flex overflow-hidden rounded-md border *:size-8 *:border-r last:*:border-r-0">
            {footerData.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-foreground/60 hover:bg-accent hover:text-foreground inline-flex items-center justify-center transition-colors"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-accent rounded-md border px-2 py-1 transition-all"
          >
            {footerData.backToTop}
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
