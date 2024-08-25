"use client"
import {Card, CardContent} from "@/components/ui/card";
import NumberTicker from "@/components/magicui/number-ticker";

export function StatsSection() {
    return <>
        <Card className="m-auto mt-2 p-4 w-full md:w-3/12 border-none bg-transparent">
            <CardContent className="flex justify-between">
                <div className="text-center">
                    <small>Years of <br/> experience</small>
                    <br />
                    <NumberTicker className="text-3xl" value={3} />
                </div>
                <div className="text-center">
                    <small>More than <br/> Projects</small>
                    <br/>
                    <NumberTicker className="text-3xl" value={55}/>
                </div>
            </CardContent>
        </Card>
    </>
}
