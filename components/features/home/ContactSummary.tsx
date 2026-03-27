import { SectionHeader } from "@/components/common/SectionHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export function ContactSummary() {
  return (
    <div className="border-slate- mx-auto flex w-full max-w-7xl flex-col gap-5 border-y py-16 dark:border-muted-foreground">
      <div className="flex items-center justify-center px-4">
        <div className="w-full rounded-lg border border-gray-700 bg-gray-100 p-6 text-center sm:p-8 dark:bg-card">
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
  )
}
