import React from "react";
import {Card, CardContent} from "@/components/ui/card";
import AvatarCircles from "@/components/magicui/avatar-circles";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {Modal, ModalBody, ModalContent, ModalTrigger} from "@/components/ui/animated-modal";
import {ExperienceSectionModal} from "@/components/sections/ExperienceSectionModal";

const companies = [
    "https://www.brighttalk.com/wp-content/uploads/2019/07/download-6.png",
    "https://avatars.githubusercontent.com/u/50478857?s=280&v=4",
    "https://parsers.vc/logo/459ef6bd-0416-4d86-ad48-c5da12af1ae3-0.png",
    "https://i0.wp.com/securityaffairs.com/wp-content/uploads/2022/08/twilio-logo.png?ssl=1",
    "./learner.png"
]

export function ExperienceSection() {
    return <div className="m-auto mx-6 lg:mx-32 lg:my-12">
        <h1
            className="my-6 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Experience
        </h1>
        <Card className="rounded-3xl">
            <CardContent className="flex flex-col md:flex-row justify-between items-center gap-4 m-0 p-4">
                <div className="p-4">
                    <strong className="mb-4 text-md">Years of experience</strong>
                    <br/>
                    <small>2 full-time and 3 internship</small>
                </div>
                <div className="p-4">
                    <strong className="mb-4 text-md">Companies I worked at</strong>
                    <AvatarCircles avatarUrls={companies}/>
                </div>
                <div className="p-4">
                    <Modal>
                        <ModalTrigger>
                            <ShimmerButton className="shadow-2xl scale-75">
                                <span
                                    className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                  Read More
                                </span>
                            </ShimmerButton>
                        </ModalTrigger>
                        <ModalBody>
                            <ModalContent className="overflow-scroll">
                                <ExperienceSectionModal/>
                            </ModalContent>
                        </ModalBody>
                    </Modal>
                </div>
            </CardContent>
        </Card>
    </div>
}
