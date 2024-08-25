"use client"
import useGithubStats from "react-github-user-stats";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import NumberTicker from "@/components/magicui/number-ticker";

export function GithubSection() {

    const { error, loading, userData } = useGithubStats("iresharma");

    if (loading) return <h1>Loading data..</h1>;
    if (error) return <h1>ERROR: {error}</h1>;
    if (!userData) return <h1>Not found!</h1>;

    let x = {
        "id": 32684272,
        "name": "Iresh Sharma",
        "username": "iresharma",
        "avatar_url": "https://avatars.githubusercontent.com/u/32684272?v=4",
        "url": "https://github.com/iresharma",
        "type": "User",
        "company": "Twilio",
        "website": "https://iresharma.com",
        "location": "Bangalore, India",
        "email": null,
        "bio": "Software Engineer at @twilio ",
        "twitter_username": null,
        "public_repos": 96,
        "public_gists": 1,
        "followers": 97,
        "following": 78,
        "total_stars": 79,
        "total_forks": 21,
        "created_at": "2017-10-10T18:28:13Z",
        "updated_at": "2024-08-13T11:36:41Z"
    }

    return (
        <Card className="m-auto mx-6 my-6 lg:mx-32 lg:my-12">
            <CardHeader>
                <div className="flex">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0TtaTbg9dT7tqx_qxhQFC4ul9meZdIW9MQ&s" className="rounded-full w-16 h-16 mr-8" />
                    </div>
                    <div>
                        <h1 className="text-2xl">
                            {userData.name}
                        </h1>
                        <a href={userData.url ?? ""} target="_blank"
                           className="text-sm text-gray-600 underline">{userData.url}</a>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row">
                    <div className="flex justify-between md:justify-evenly w-full mb-6 md:mb-0">
                        <div className="flex flex-col">
                            Followers
                            <NumberTicker className="text-3xl" value={userData.followers}/>
                        </div>
                        <div className="flex flex-col">
                            Following
                            <NumberTicker className="text-3xl" value={userData.following}/>
                        </div>
                        <div className="flex flex-col">
                            Repos
                            <NumberTicker className="text-3xl" value={userData.public_repos}/>
                        </div>
                    </div>
                    <div className="flex justify-between md:justify-evenly w-full">
                        <div className="flex flex-col">
                            Stars
                            <NumberTicker className="text-3xl" value={userData.total_stars}/>
                        </div>
                        <div className="flex flex-col">
                            Forks
                            <NumberTicker className="text-3xl" value={userData.total_forks}/>
                        </div>
                        <div className="flex flex-col">
                            Gists
                            <NumberTicker className="text-3xl" value={userData.public_gists}/>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
