import {Spotlight} from "../ui/spotlight";
import FlickeringGrid from "@/components/magicui/flickering-grid";
import {HoverBorderGradient} from "@/components/ui/hover-border-gradient";
import {StatsSection} from "@/components/sections/stats";
import {Socials} from "@/components/sections/socials";

export function HeroSection() {
    return (
        <div
            className="h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <FlickeringGrid
                className="z-0 absolute m-auto inset-0 [mask:radial-gradient(circle_at_center,#fff_300px,transparent_0)]"
                squareSize={4}
                gridGap={6}
                color="#60A5FA"
                maxOpacity={0.5}
                flickerChance={0.1}
                height={1000}
                width={1000}
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <div className="mb-8 flex justify-center text-center">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span className="bg-green-600 rounded-full w-2 h-2"></span>
                        <span className="text-green-600 text-sm">Open for freelance</span>
                    </HoverBorderGradient>
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Iresh Sharma
                </h1>
                <p className="p-8 pb-2 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    I freelance while working as an Software Engineer L1 at Twilio.
                    At times when I am not coding, I like to
                </p>

                <ul className="font-semibold m-auto mt-2 w-full md:w-1/3 text-center">
                    <li>Play basketball ⛹🏼‍♂️ ,</li>
                    <li>Try my hand photography 📸 &</li>
                    <li>Listen to hip-hop 🎶</li>
                    <li>Recently started learning 3D modeling and printing</li>
                </ul>

                <StatsSection />
                <Socials />
            </div>
        </div>
    );
}
