import { CardLayout } from "@/components/common/Card"
import { Section } from "@/components/common/Section"
import { SectionHeader } from "@/components/common/SectionHeader"
import { SearchIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { categories, featured_projects } from "@/constant/project"
import { Button } from "@/components/ui/button"

export function ProjectPage() {
  return (
    <Section>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-0">
        <div className="flex w-fit items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <p className="text-xs font-medium text-foreground dark:text-gray-300">
            Available for new projects
          </p>
        </div>

        <div>
          <SectionHeader
            title="MY RECENT WORK"
            description="A collection of technical experiments and full-scale applications focused on performance, scalability, and intuitive user experiences."
          />
        </div>

        <div className="w-full lg:max-w-sm">
          <InputGroup className="h-11 w-full rounded-lg border-2 border-slate-200 bg-white shadow-sm transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-lg hover:border-blue-400 hover:shadow-md sm:h-12 dark:border-gray-700 dark:bg-gray-900 dark:focus-within:border-blue-400 dark:hover:border-blue-500">
            <InputGroupInput
              placeholder="Filter by tech..."
              className="text-xs placeholder:text-slate-400 sm:text-sm sm:placeholder:text-slate-400 dark:placeholder:text-gray-500"
            />
            <InputGroupAddon align="inline-end">
              <SearchIcon className="mr-3 h-4 w-4 text-slate-400 transition-colors sm:h-5 sm:w-5 dark:text-gray-500" />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((cat, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`px-4 py-2 text-xs transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                index === 0
                  ? "bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  : "border-2 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-slate-100 dark:border-gray-600 dark:hover:border-gray-500"
              }`}
            >
              {cat.categoryType}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {featured_projects.map((data, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:scale-105"
            >
              <CardLayout project={data} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
