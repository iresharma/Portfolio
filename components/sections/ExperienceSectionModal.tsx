"use client"

import {Separator} from "@/components/ui/separator";

const content = [
    {
        title: "Software Engineer",
        company: "Twilio",
        time: "Aug 2023 - Present",
        description: "During my tenure at Twilio as an L1 software engineer, my key contributions can be summarized as follows",
        pointers: [
            "Collaborated on a team to develop and maintain a sophisticated real-time reporting system using Kafka Stream, adept at processing tens of millions of events per minute with a sub-5-second SLA.",
            "Participated in a team to devise disaster recovery solutions, developing a software system for delayed replication across SQL (Aurora DB) and NoSQL (DynamoDB) databases, ensuring accurate replication with a 30-minute delay for databases storing terabytes of data, alongside creating reporting APIs for data integrity verification across these databases.",
        ],
        img: "https://i0.wp.com/securityaffairs.com/wp-content/uploads/2022/08/twilio-logo.png?ssl=1"
    },
    {
        title: "Software Engineer",
        company: "Supertokens",
        time: "Feb 2023 - Aug 2023",
        description: "My journey with Supertokens has been marked by versatile contributions, ranging from enhancing SDKs to designing user-centric interfaces and empowering the developer community.",
        pointers: [
            "I've made significant contributions to the Flutter, Golang, Node.js, and Python SDKs. By bridging the gap between different programming languages, I've ensured that developers have reliable and consistent access to Supertokens' capabilities across their tech stacks.",
            "I assumed ownership of the search functionality in the Supertokens user management dashboard. By meticulously refining search algorithms and optimizing the user experience,",
            "Recognizing the importance of community engagement, I actively participate in our Discord server, fostering a thriving ecosystem where developers can connect, collaborate, and share insights."
        ],
        img: "https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/c5a0391e-6b5f-40dc-8292-623e256e602d.png"
    },
    {
        title: "Software Engineer Intern",
        company: "Supertokens",
        time: "Nov 2022 - Jan 2023",
        description: "",
        pointers: [
            "Took ownership of the flutter SDK while updating the SDK to support the newer drivers and APIs.",
            "Added dio(most used and liked http client for flutter) support to the SDK",
        ],
        img: "https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/c5a0391e-6b5f-40dc-8292-623e256e602d.png"
    },
    {
        title: "Software Engineer (Flutter)",
        company: "Triomics",
        time: "Sep 2022 - Oct 2022",
        description: "Joined the team mid release and helped complete and optimise the code base. Mainly working towards API integration.",
        pointers: [
            "Fixed and ramped up code generation for generating types and endpoints.\n",
            "Made a listener globally to observe at user activity and change auth status based on inactivity",
            "Major UI fixes on both the projects.",
            "Took completely ownership of a product in the starting phase and got the codebase ready for API integration and business logic.",
            "Fixed responsiveness and UI consistency issues across multiple projects."
        ],
        img: "https://parsers.vc/logo/459ef6bd-0416-4d86-ad48-c5da12af1ae3-0.png"
    },
    {
        title: "Software Engineer Intern",
        company: "Twilio",
        time: "May 2022 - Jul 2022",
        description: "As an intern I was part of Twilio Flex product, worked mainly on java creating a micro service to handle configuration of every Flex account present.",
        pointers: [
            "Successfully designed and built a flexible custom CRM plugin for Flex which has the capability to make routing decisions based on priority of the customers and their feedback and stitch calls coming from the same customer on same or different channels\n" +
            "(voice and non voice)",
            "Successfully delivered a critical reliability item for Flex - Configuration service for Flex was made reliable and able to start without cache ( memcached) - this is now configurable.",
            "Helped new team members to understand end to end automation test cases.",
        ],
        img: "https://i0.wp.com/securityaffairs.com/wp-content/uploads/2022/08/twilio-logo.png?ssl=1"
    },
    {
        title: "Software Engineer Freelance",
        company: "Learner Digital",
        time: "Nov 2020 - Mar 2021",
        description: "Built and published a cross platform mobile app in the ed-tech sector.",
        pointers: [],
        img: "./learner.png"
    },
]

export function ExperienceSectionModal() {

    return <div id="experince" className="m-auto">
        <h1
            className="my-6 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            My Experience
        </h1>
        <div>
            {content.map((item, ind) => <>
                <div
                    key={ind}
                    className="flex flex-col-reverse justify-between center rounded-md items-center jobs mt-20  overflow-scroll"
                >
                    <div className="w-full">
                        <div id="job">
                            <h2
                                className="text-2xl font-bold"
                            >
                                {item.title}
                            </h2>
                            <h2
                                className="text-sm text-gray-600"
                            >
                                {item.company} | {item.time}
                            </h2>
                            <p
                                className="pr-8 text-justify text-gray-400"
                            >
                                {item.description}
                                <ol className="mt-4">
                                    {item.pointers.map((point, i) => <li key={"point" + item.time + i}>{point}</li>)}
                                </ol>
                            </p>
                        </div>
                    </div>
                    <div className="h-[200px] mb-4 w-full rounded-3xl bg-slate-800 flex justify-center items-center">
                        <img className="max-w-64 max-h-64" src={item.img}/>
                    </div>
                </div>
                <Separator className="my-4" />
            </>)}
        </div>
    </div>
}
