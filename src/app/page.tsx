import { BackgroundNoise } from "@/components/features/backgrounds";
import Navbar from "@/components/features/navbar";
import About from "@/components/features/portfolio/about";
import Contact from "@/components/features/portfolio/contact";
import { Footer } from "@/components/features/portfolio/footer";
import { Hero } from "@/components/features/portfolio/hero";

export default function Home() {
  return (
    <>
      <div className="no-scrollbar portfolio-container relative size-full snap-y snap-mandatory overflow-y-scroll">
        <BackgroundNoise className="z-50" />
        <main className="before:border-border after:border-border relative z-10 min-h-screen snap-start before:absolute before:top-0 before:left-0 before:h-full before:w-12 before:border-r before:bg-[linear-gradient(-135deg,_var(--color-border)_25%,_transparent_25%,_transparent_50%,_var(--color-border)_50%,_var(--color-border)_75%,_transparent_75%,_transparent)] before:bg-[length:5px_5px] after:absolute after:top-0 after:right-0 after:h-full after:w-12 after:border-l after:bg-[linear-gradient(135deg,_var(--color-border)_25%,_transparent_25%,_transparent_50%,_var(--color-border)_50%,_var(--color-border)_75%,_transparent_75%,_transparent)] after:bg-[length:5px_5px] max-md:before:hidden max-md:after:hidden md:px-12">
          <Navbar />
          {/* <Suspense fallback={null}>
            <Guestbook />
          </Suspense> */}
          <div className="min-h-[calc(100vh-4rem)] md:px-8">
            <div className="min-h-[calc(100vh-4rem)] md:border-r md:border-l">
              <Hero />
              <About />
              <Contact />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
