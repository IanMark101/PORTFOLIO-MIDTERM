import { SectionHeader } from "@/components/common/SectionHeader"
import { Button } from "@/components/ui/button"
import { TechStack } from "@/constant/tech"

export function AboutSummary() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 lg:items-start lg:px-0">
      <div className="w-full text-center lg:text-left">
        <SectionHeader
          title="TECH STACK"
          description="Lists of tech stacks that I'm currently learning and working on."
        />
      </div>

      <div className="mt-5 flex w-full flex-wrap justify-center gap-3 lg:justify-start lg:gap-4">
        {TechStack.map((tech, index) => (
          <Button
            variant="outline"
            key={index}
            className="text-xs lg:text-base"
          >
            {tech.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
