"use client"

import React from "react"
import { Mail, Phone } from "lucide-react"
import { Section } from "@/components/common/Section"
import { ContactForm } from "./ContactForm"

export function ContactPage() {
  return (
    <Section>
      <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:py-15">
        <div className="grid w-full max-w-6xl grid-cols-1 items-center justify-items-center gap-12 text-center lg:grid-cols-2 lg:text-left">
          {/*Contact Info*/}
          <div className="flex flex-col items-center space-y-8 lg:items-start">
            <div>
              <h1 className="text-5xl leading-tight font-extrabold text-foreground md:text-6xl">
                LET&apos;S DISCUSS
                <br />
                <span className="text-blue-600">TECHNOLOGY</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                I&apos;m ready to connect for collaborations, creative projects,
                or job opportunities! Let&apos;s build something amazing
                together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-muted/50">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    Email Address
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    ianmarkbuenaflor9@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-muted/50">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    Mobile Number
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    (+63) 930 539 9170
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*Contact Form*/}
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
