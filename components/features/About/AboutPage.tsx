import { Section } from "@/components/common/Section"
import Image from "next/image"
import { SectionHeader } from "@/components/common/SectionHeader"

export function AboutPage() {
  return (
    <Section>
      <div className="flex flex-col-reverse items-center justify-center gap-10 border-y-1 border-slate-300 py-20 lg:flex-row">
        <div className="flex w-[50%] flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="mb-10 text-3xl font-bold">ABOUT ME</h1>
          <SectionHeader title="PASSIONATE ABOUT" />
          <SectionHeader title="IT & DEVELOPMENT" className="text-blue-600" />
          <div className="mt-5 flex w-[85%] flex-col gap-5 lg:w-full">
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

        <div className="flex size-[75%] items-center justify-center lg:w-1/2 lg:justify-end">
          <Image
            src="/profile.jpg"
            width={800}
            height={800}
            alt="Profile"
            className="animate-glow-pulse w-full max-w-[450px] rotate-1 rounded-lg ring-3 ring-blue-600 transition-transform hover:scale-105 hover:rotate-0"
          />
        </div>
      </div>
    </Section>
  )
}
