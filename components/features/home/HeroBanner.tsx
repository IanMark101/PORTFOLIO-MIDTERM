import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Download } from "lucide-react"
import { socialLinks } from "@/constant/iconLinks"
import { Section } from "@/components/common/Section"
export function HeroBanner() {
  return (
    <Section>
      <div className="container mx-auto flex items-center justify-center rounded-2xl border-y bg-gray-100 dark:bg-card">
        <div className="flex flex-col-reverse items-center gap-10 p-10 lg:flex-row lg:p-20">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="w-fit text-3xl font-bold hover:text-muted-foreground/99 lg:text-5xl">
              IAN MARK
            </h1>
            <h1 className="w-fit text-3xl font-bold text-blue-600 hover:text-blue-500 lg:text-5xl">
              BUENAFLOR
            </h1>
            <br />
            <p className="w-fit text-lg font-bold hover:text-muted-foreground/99">
              Aspiring Web Developer
            </p>
            <br />
            <p className="text-sm hover:text-muted-foreground/99">
              Aspiring full-stack web developer with a passion for creating
              dynamic and user-friendly web applications. Eager to contribute to
              innovative projects and continuously enhance my development
              skills. Skilled in both front-end and back-end technologies, with
              a strong foundation in HTML, CSS, JavaScript, and modern
              frameworks. Committed to writing clean, efficient code and staying
              updated with emerging web development trends to deliver seamless
              digital experiences.
            </p>
            <Button className="mt-5 w-auto cursor-pointer bg-blue-600 p-4 text-base font-bold hover:scale-105 hover:bg-blue-500 lg:p-5 lg:text-lg dark:text-white">
              Resume <Download className="!h-6 !w-6 lg:!h-8 lg:!w-8" />
            </Button>
            <div className="flex">
              <div className="mt-3 flex rounded-full bg-gray-200 p-2 transition-colors duration-500 dark:bg-gray-700">
                {socialLinks.map((item) => (
                  <a
                    href={item.href}
                    key={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="p-2 text-gray-800 transition-colors duration-500 hover:scale-110 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-600"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[280px] lg:max-w-[450px]">
              <Image
                src="/profile.jpg"
                alt="profile-picture"
                width={500}
                height={500}
                className="animate-glow-pulse ml-0 rotate-2 cursor-pointer rounded-lg ring-3 ring-blue-600 transition-transform hover:scale-105 hover:rotate-0 lg:ml-10"
              />
              <div className="absolute -right-6 -bottom-7 flex h-24 w-24 items-center justify-center rounded-full bg-blue-700 text-3xl font-bold text-white transition-all hover:scale-110 hover:bg-blue-600 lg:-right-11">
                <p>BSIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
