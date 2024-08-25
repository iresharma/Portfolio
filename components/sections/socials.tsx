import {Instagram, Youtube, Github, Linkedin, ChevronRightIcon} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {AnimatedSubscribeButton} from "@/components/magicui/animated-subscribe-button";


export function Socials() {
    return <div className="flex text-sm text-gray-400 justify-around md:justify-between p-4 w-full md:w-3/12 m-auto">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Instagram className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>WatchIreshStruggle</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Instagram className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>iresharma</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Youtube className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>WatchIreshStruggle</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Github className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>iresharma</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Linkedin className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Iresh Sharma</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
}
