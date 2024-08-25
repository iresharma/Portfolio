import {DragHandleVerticalIcon, EnvelopeClosedIcon} from "@radix-ui/react-icons";
import {VideoIcon} from "lucide-react";
import {BentoCard, BentoGrid} from "@/components/magicui/bento-grid";
import SparklesText from "@/components/magicui/sparkles-text";
import ShinyButton from "@/components/magicui/shiny-button";
import ShineBorder from "@/components/magicui/shine-border";

const features = [
    {
        Icon: EnvelopeClosedIcon,
        name: "G-Notify",
        description: "G-notify is a mass mailer written in nuxt snd express without any third party libraries like (nodemailer). We directly contact GAPIs to send the mail.",
        href: "https://g-notify-landing.netlify.app/",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: <img className="absolute -right-20 -top-20 opacity-60"/>
    },
    {
        Icon: DragHandleVerticalIcon,
        name: "Reach",
        description: "Experience a platform built by creatives for creatives! Our platform is designed to meet the unique needs of creative professionals, providing you with the tools and resources you need to bring your ideas to life. From seamless project management and collaboration tools, to customizable templates and advanced design features, our platform has everything you need to streamline your creative workflow and unlock your full potential.",
        href: "https://github.com/users/iresharma/projects/1",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: <img className="absolute -right-20 -top-20 opacity-60"/>,
    },
    {
        Icon: VideoIcon,
        name: "Variable Bitrate Streaming Server",
        description: "This a small attempt to use a create a multiple protocol live streaming server which takes in a a video file and convert into both a HLS video format(time segment files & .m3u8 playlist) and MPEG-DASH format(.mpd manifest & .m4s chunks).",
        href: "https://github.com/iresharma/Variable-bitrate-Live-streamin-server",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: <img className="absolute -right-20 -top-20 opacity-60"/>
    }
];

export function ProjectSection() {
    return (
        <div className="m-auto mx-6 lg:mx-32 lg:my-12 relative">
            <div className="absolute w-[40vw] h-[40vw] top-[5%] left-[20%]" style={{
                filter: "blur(150px)",
                background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(2,8,23,1) 100%)"
            }}/>
            <div className="absolute w-[40vw] h-[40vw] top-[10%] left-[40%]" style={{
                filter: "blur(200px)",
                background: "linear-gradient(0deg, rgba(195,34,190,1) 0%, rgba(45,51,253,1) 100%)"
            }}/>
            <h1
                className="my-6 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Projects
            </h1>

            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
                <div
                    className="col-span-3 hidden md:flex h-full lg:col-span-1 group relative flex-col justify-center items-center overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                    <ShineBorder
                        className="relative h-[40vw] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                        <SparklesText className="text-center" text="And built a bunch of things"/>
                        <ShinyButton text="Github" className="mt-8"/>
                    </ShineBorder>
                </div>
                <div
                    className="col-span-3 flex md:hidden h-full lg:col-span-1 group relative flex-col justify-center items-center overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                    <SparklesText className="text-center" text="And built a bunch of things"/>
                    <ShinyButton text="Github" className="mt-8"/>
                </div>
            </BentoGrid>
        </div>
    );
}
