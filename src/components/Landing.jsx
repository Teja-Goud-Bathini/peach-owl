// import Image from "next/image"
import { Button } from "../components/ui/button"
import Header from "./Header"
import Hero from "./Hero"
import Features from "./Features"
import Products from "./Products"
import Footer from "./Footer"
import Contact from "./Contact"
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
      <Hero />
    <Features />
    <Products />
    <Contact/>
{/* <Newsletter /> */}

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-700">
                  Limited Time Offer
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  20% Off Your First Order
                </h2>
               
                <Button className="bg-lime-500 text-white hover:bg-lime-600">Shop Now</Button>
              </div>
              <div className="flex items-center justify-center">
                {/* <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Special Offer"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                /> */}
              </div>
            </div>
          </div>
        </section>
      </main>
     <Footer/>
    </div>
  )
}
