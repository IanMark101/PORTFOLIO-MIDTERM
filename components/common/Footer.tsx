import Link from "next/link"
export default function Footer() {
  return (
    <footer className="flex flex-col items-center border-t p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-base font-bold lg:text-lg">
          IAN MARK J. BUENAFLOR
        </h1>
        <ul className="mt-5 flex flex-wrap justify-center gap-8">
          <Link href="./">
            <li className="text-sm lg:text-base">Home</li>
          </Link>
          <Link href="/about">
            <li className="text-sm lg:text-base">About</li>
          </Link>
          <Link href="blog">
            <li className="text-sm lg:text-base">Blog</li>
          </Link>
          <Link href="contact">
            <li className="text-sm lg:text-base">Contact</li>
          </Link>
          <Link href="projects">
            <li className="text-sm lg:text-base">Projects</li>
          </Link>
        </ul>
      </div>
    </footer>
  )
}
