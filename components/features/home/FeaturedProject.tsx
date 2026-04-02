import { SectionHeader } from "@/components/common/SectionHeader"
import { featured_projects } from "@/constant/project"
import { CardLayout } from "@/components/common/Card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/common/Section"

export function ProjectPage() {
  return (
    <Section>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 border-y border-slate-300 py-16 lg:gap-2 dark:border-muted-foreground">
        {/* Header Section */}
        <div className="flex flex-col items-center lg:items-start">
          <SectionHeader
            title="MY WORKS"
            description="Small projects that i've created so far."
            className="text-center lg:text-left"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featured_projects.map((data, index) => (
            <CardLayout key={index} project={data} />
          ))}
        </div>

        {/* Button Section */}
        <div className="mt-10 flex justify-center">
          <Link href="/projects">
            <Button
              className="cursor-pointer p-8 text-2xl font-bold"
              variant="outline"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}
