import { HeroBanner } from "@/components/features/home/HeroBanner"
import { ProjectPage } from "@/components/features/home/FeaturedProject"
import { AboutSummary } from "@/components/features/home/AboutSummary"
import { ContactSummary } from "@/components/features/home/ContactSummary"
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col gap-20 px-6 lg:gap-24 lg:px-10">
      <HeroBanner />
      <ProjectPage />
      <AboutSummary />
      <ContactSummary />
    </div>
  )
}
