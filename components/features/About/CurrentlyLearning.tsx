import { Section } from "@/components/common/Section"
import { TechLists } from "@/constant/tech"
import { Cpu, CodeXml } from "lucide-react"
export function CurrentlyLearning() {
  return (
    <Section>
      <div className="container mx-auto flex w-full items-center justify-center rounded-2xl border border-transparent bg-white p-5 md:p-10 dark:bg-card">
        <div>
          <h1 className="flex items-center justify-center gap-2 text-3xl font-extrabold">
            <CodeXml size={40} className="text-violet-500" />
            CURRENTLY LEARNING
          </h1>
          <div className="mt-10 grid grid-cols-1 gap-15 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {TechLists.map((tech, index) => (
              <div
                key={index}
                className="animate-glow-pulse flex items-center justify-center rounded-lg border border-2 border-blue-600 p-3 text-center font-bold transition-all hover:scale-105 hover:shadow-lg"
              >
                <Cpu />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
