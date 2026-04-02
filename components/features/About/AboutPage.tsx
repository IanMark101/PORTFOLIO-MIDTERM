import { Section } from "@/components/common/Section"
import Image from "next/image"
import { BadgeHeading } from "@/components/common/Badge"
export function AboutPage() {
  return (
    <Section>
      <div className="flex flex-col-reverse items-center justify-center gap-10 border-y border-slate-300 py-20 lg:flex-row">
        <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          <BadgeHeading text="ABOUT ME" />

          <h1 className="text-5xl leading-tight font-extrabold text-foreground md:text-6xl">
            LET&apos;S DISCUSS
            <br />
            <span className="text-blue-600">TECHNOLOGY</span>
          </h1>

          <div className="mt-6 flex w-[90%] flex-col gap-5 text-balance lg:w-full">
            <p>
              I am Ian Mark Buenaflor, a third-year Bachelor of Science in
              Information Technology student at CPC. I am currently deeply
              immersed in developing my knowledge and skills in the field of web
              application development.
            </p>
            <p>
              I am committed to gaining practical experience, improving my
              technical competencies, and expanding my understanding of modern
              web technologies. As I continue my academic journey, I aim to
              contribute to meaningful projects and further refine my abilities
              as a future IT professional.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-end">
          <Image
            src="/profile.jpg"
            width={800}
            height={800}
            alt="Profile"
            priority
            className="animate-glow-pulse w-full max-w-[400px] rotate-1 rounded-2xl ring-4 ring-blue-600 transition-transform duration-300 hover:scale-105 hover:rotate-0"
          />
        </div>
      </div>
    </Section>
  )
}
