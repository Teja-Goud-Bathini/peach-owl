export default function AboutSection() {
    return (
      <section id="about" className="bg-rose-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-900">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/about.jpg"
                alt="About Peach & Owl"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <p className="text-white-800 mb-4">
                Founded in 2020, Peach & Owl began as a small passion project creating
                keychains for friends and family.
              </p>
              <p className="text-rose-800 mb-4">
                Each piece is handcrafted using high-quality materials, ensuring
                durability and unique character in every item.
              </p>
              <p className="text-white-800">
                We believe in sustainable crafting practices and source our materials
                responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }