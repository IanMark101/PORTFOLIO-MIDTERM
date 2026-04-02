"use client"

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
import { useState } from "react"

export function ProjectPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = featured_projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" ||
      project.categories.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <Section>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-0">
        <div className="flex w-fit items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <p className="text-xs font-bold tracking-wider text-foreground uppercase dark:text-gray-300">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <SearchIcon className="mr-3 h-4 w-4 text-slate-400 transition-colors sm:h-5 sm:w-5 dark:text-gray-500" />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            className={`px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
              selectedCategory === "All"
                ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                : "border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:bg-blue-50 dark:border-slate-600 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-950/40"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </Button>

          {categories.map((cat, index) => (
            <Button
              key={index}
              variant={
                selectedCategory === cat.categoryType ? "default" : "outline"
              }
              className={`px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                selectedCategory === cat.categoryType
                  ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                  : "border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:bg-blue-50 dark:border-slate-600 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-950/40"
              }`}
              onClick={() => setSelectedCategory(cat.categoryType)}
            >
              {cat.categoryType}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filteredProjects.map((data, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:scale-105"
            >
              <CardLayout project={data} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-slate-400 dark:text-gray-500">
              No projects found matching your search.
            </p>
          </div>
        )}
      </div>
    </Section>
  )
}
