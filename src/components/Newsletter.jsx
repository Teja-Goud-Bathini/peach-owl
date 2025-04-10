import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-lime-50">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2">
        
        {/* Text Content */}
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-700">
            Stay Connected
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Join Our Newsletter
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Stay updated with our latest designs, promotions, and exclusive offers. Get 10% off your first order!
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <div className="grid gap-2 w-full">
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 max-w-lg"
              />
              <Button type="submit" className="bg-lime-500 text-white hover:bg-lime-600">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              By subscribing, you agree to our{" "}
              <a
                href="#"
                className="underline underline-offset-2 hover:text-lime-500"
              >
                Terms & Conditions
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
