"use client";

import { useState } from "react";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/registry/magicui/terminal";
import { Button } from "@/components/ui/button";
import { Send, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";

const contactData = {
  sectionHeading: "Contacto",
  steps: [
    {
      prompt: "¿Podrías compartir tu correo electrónico conmigo?",
      placeholder: "tu@dominio.com",
      type: "email",
      color: "primary",
    },
    {
      prompt: "¡Genial! ¿Y podría saber tu nombre?",
      placeholder: "Siddharth",
      type: "text",
      color: "destructive",
    },
    {
      prompt: "Increíble, ahora dime cómo podemos ayudarte hoy.",
      placeholder: "Cuéntame sobre tu proyecto, plazos y objetivos…",
      type: "textarea",
      color: "red-400",
    },
  ],
  buttons: {
    cancel: "Cancelar",
    send: "Enviar",
    sending: "Enviando…",
    sent: "¡Enviado!",
  },
  statusMessages: {
    sent: "✓ Mensaje redirigido.",
    error: "⚠ Algo salió mal. Por favor, inténtalo de nuevo.",
  },
};

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<number>(0); // 0: email, 1: name, 2: message, 3: review
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const canSend = email.trim().length > 3 && message.trim().length > 4;

  const onSubmit = async (e: React.FormEvent) => {
   
    e.preventDefault();
    if (!canSend) return;
    try {
      setStatus("sending");
      window.location.href = `mailto:${siteConfig.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
        name || "Anonymous",
      )}&body=${encodeURIComponent(message)}%0A%0Afrom:%20${encodeURIComponent(email)}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const onReset = () => {
    setStep(0);
    setEmail("");
    setName("");
    setMessage("");
    setStatus("idle");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setStep((step) => step + 1);
    }
  };

  return (
    <SectionHeading
      id={contactData.sectionHeading.toLowerCase()}
      text={contactData.sectionHeading}
      className="px-4 py-12 md:px-8 md:py-16"
    >
      <div className="absolute inset-0 size-full">
        <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="">
          <form onSubmit={onSubmit} className="w-full">
            <Terminal className="max-h-none w-full max-w-none">
              {step >= 0 && (
                <>
                  {" "}
                  {/* Q1 */}
                  <div className="flex items-start gap-2 font-mono text-foreground/90">
                    <span className={cn("text-primary")}>$</span>
                    <TypingAnimation startOnView duration={26}>
                      {contactData.steps[0].prompt}
                    </TypingAnimation>
                  </div>
                  {/* A1 */}
                  <AnimatedSpan className="grid gap-2">
                    <div className="flex items-center gap-2 font-mono">
                      <span className={cn("text-primary")}>↪</span>
                      <input
                        type="email"
                        required
                        placeholder={contactData.steps[0].placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={handleEnter}
                        disabled={status === "sending" || status === "sent"}
                        autoComplete="email"
                        className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-foreground outline-none placeholder:text-foreground/40 focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </AnimatedSpan>
                </>
              )}

              {step >= 1 && (
                <>
                  {/* Q2 */}
                  <div className="flex items-start gap-2 font-mono text-foreground/90">
                    <span className={cn("text-destructive")}>$</span>
                    <TypingAnimation duration={26}>
                      {contactData.steps[1].prompt}
                    </TypingAnimation>
                  </div>

                  {/* A2 */}
                  <AnimatedSpan className="grid gap-2">
                    <div className="flex items-center gap-2 font-mono">
                      <span className={cn("text-destructive")}>↪</span>
                      <input
                        type="text"
                        placeholder={contactData.steps[1].placeholder}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={handleEnter}
                        autoComplete="name"
                        className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-foreground outline-none placeholder:text-foreground/40 focus:border-destructive/60 focus:ring-2 focus:ring-destructive/30"
                      />
                    </div>
                  </AnimatedSpan>
                </>
              )}

              {/* Q3 */}
              {step >= 2 && (
                <>
                  <div className="flex items-start gap-2 font-mono text-foreground/90">
                    <span className={cn("text-red-400")}>$</span>
                    <TypingAnimation duration={26}>
                      {contactData.steps[2].prompt}
                    </TypingAnimation>
                  </div>

                  {/* A3 */}
                  <AnimatedSpan className="grid gap-2">
                    <div className="flex items-start gap-2 font-mono">
                      <span className={cn("mt-2 text-red-400")}>↪</span>
                      <textarea
                        required
                        rows={4}
                        placeholder={contactData.steps[2].placeholder}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full resize-y rounded-md border border-border bg-transparent px-3 py-2 text-foreground outline-none placeholder:text-foreground/40 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/30"
                      />
                    </div>
                  </AnimatedSpan>
                  {/* Footer actions */}
                  <AnimatedSpan className="mt-2">
                    <div className="border-t border-dashed border-border pt-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={onReset}
                          className="font-mono text-xs"
                        >
                          <X className="mr-1 h-3.5 w-3.5" />
                          {contactData.buttons.cancel}
                        </Button>
                        <Button
                          type="submit"
                          disabled={
                            message.trim().length < 4 || status === "sending"
                          }
                          className="font-mono text-xs disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <Send className="mr-1 h-3.5 w-3.5" />
                          {status === "sending"
                            ? contactData.buttons.sending
                            : status === "sent"
                              ? contactData.buttons.sent
                              : contactData.buttons.send}
                        </Button>
                      </div>
                    </div>
                  </AnimatedSpan>
                </>
              )}

              {status === "sent" && (
                <AnimatedSpan className="font-mono text-primary/90">
                  {contactData.statusMessages.sent}
                </AnimatedSpan>
              )}
              {status === "error" && (
                <AnimatedSpan className="font-mono text-destructive/90">
                  {contactData.statusMessages.error}
                </AnimatedSpan>
              )}
            </Terminal>
          </form>
        </div>
      </div>
    </SectionHeading>
  );
}
