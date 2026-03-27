import { Section } from "@/components/common/Section"
import { TechLists } from "@/constant/tech"
import { Cpu, CodeXml } from "lucide-react"
export function CurrentlyLearning() {
  return (
    <Section>
      <div className="container mx-auto mt-30 flex items-center justify-center rounded-2xl border border-y border-gray-700 bg-gray-100 p-10 dark:bg-card">
        <div>
          <h1 className="flex items-center justify-center gap-2 text-3xl font-extrabold">
            <CodeXml size={40} className="text-violet-500" />
            CURRENTLY LEARNING
          </h1>
          <div className="mt-10 grid grid-cols-4 gap-15">
            {TechLists.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg border border-2 border-blue-600 p-3 text-center font-bold transition-all hover:scale-105 hover:shadow-lg"
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
