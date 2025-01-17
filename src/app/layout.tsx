import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"

export const metadata = {
  title: "Fizzle Bugs",
  description: "Generated by Next.js | Lamadev | Basic",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <main>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </main>
    </html>
  )
}
