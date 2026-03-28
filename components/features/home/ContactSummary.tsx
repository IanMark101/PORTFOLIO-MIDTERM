import { SectionHeader } from "@/components/common/SectionHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Section } from "@/components/common/Section"
export function ContactSummary() {
  return (
    <Section>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 border-y border-slate-300 py-16">
        <div className="flex items-center justify-center px-4">
          <div className="border-slate-2 flex h-65 w-full flex-col items-center justify-center rounded-lg border bg-gray-100 p-6 text-center sm:p-8 dark:bg-card">
            <SectionHeader
              title="CONTACT & DOWNLOAD"
              description="Interested in working together? Download my current resume as a PDF or reach out directly."
            />
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                className="cursor-pointer p-3 text-base font-bold sm:p-4 sm:text-lg"
                variant="outline"
              >
                DOWNLOAD
              </Button>
              <Link href="/contact">
                <Button className="cursor-pointer p-3 text-base font-bold sm:p-4 sm:text-lg">
                  CONTACT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
