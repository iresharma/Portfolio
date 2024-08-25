import IconCloud from "@/components/magicui/icon-cloud";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {useEffect, useState} from "react";
import NumberTicker from "@/components/magicui/number-ticker";
import {BorderBeam} from "@/components/magicui/border-beam";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "rpc",
    "remix",
    "sass"
];

export function FilterSection() {
    const [blogInfo, setBlogInfo] = useState()
    const [posts, setPosts] = useState({
        posts: 52,
        reactions: 10,
        views: 12
    })
    const getHashnodeDetails = () => {
        const query =
            `query {
          me {
            publications(first: 1) {
              totalDocuments
              edges {
                node {
                  title
                  url
                  followersCount
                  posts(first: 50) {
                    totalDocuments
                    edges {
                      node {
                        reactionCount
                        views
                      }
                    }
                  }
                }
              }
            }
          }
        }`
        fetch('https://gql.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "31a778a9-95cf-431d-b63f-8bce8e567881"
            },
            body: JSON.stringify({
                query: query,
            }),
        }).then(res => res.json()).then(res => {
            setBlogInfo(res.data.me.publications.edges[0].node)
            const reactions = blogInfo.posts.edges.reduce((accumulator, currentObject) => {
                return accumulator + currentObject.node.reactionCount;
            }, 0);
            const views = blogInfo.posts.edges.reduce((accumulator, currentObject) => {
                return accumulator + currentObject.node.views;
            }, 0);
            const temp = {
                posts: blogInfo.posts.edges.length,
                reactions: reactions,
                views: views
            }
            setPosts(temp)
        })
    }

    useEffect(() => {
        getHashnodeDetails()
    }, []);

    return <div className="flex flex-col md:flex-row gap-4 m-auto mx-6 lg:mx-32 lg:my-12">
        <div className="flex justify-center items-center relative p-8 rounded-3xl my-4">
            <h1 className="absolute text-2xl text-center md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Wanna see<br/>
                me rant ?
            </h1>
            <IconCloud iconSlugs={slugs}/>
            {window.screen.width > 768 && <BorderBeam size={250} duration={12} delay={9}/>}
        </div>
        <div className="flex flex-col w-full justify-between">
            {blogInfo && posts && <Card className="m-4 mb-4">
                <CardHeader>
                    <div className="flex">
                        <div>
                            <img src="https://img.icons8.com/?size=512&id=HnB8zGOh5xgd&format=png" className="w-16 h-16 mr-8" />
                        </div>
                        <div className="ml-4">
                            <h1 className="text-2xl">
                                {blogInfo.title ?? "Blog title"}
                            </h1>
                            <a href="https://blog.iresharma.com" target="_blank"
                               className="text-sm text-gray-600 underline">blog.iresharma.com</a>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-around">
                        <div className="flex flex-col">
                            Posts
                            <NumberTicker className="text-3xl" value={posts.posts} />
                        </div>
                        <div className="flex flex-col">
                            Reactions
                            <NumberTicker className="text-3xl" value={posts.reactions} />
                        </div>
                        <div className="flex flex-col">
                            Views
                            <NumberTicker className="text-3xl" value={posts.views}/>
                        </div>
                    </div>
                </CardContent>
            </Card>}
            {blogInfo && <Card className="m-4 mt-6">
                <CardHeader>
                    <div className="flex">
                        <div>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/480/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" className="w-16 h-16 mr-8" />
                        </div>
                        <div className="ml-4">
                            <h1 className="text-2xl">
                                {blogInfo.title ?? "Blog title"}
                            </h1>
                            <a href="https://www.youtube.com/@iresharma" target="_blank"
                               className="text-sm text-gray-600 underline">watchireshstruggle</a>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-around">
                        <div className="flex flex-col">
                            Subscribers
                            <NumberTicker className="text-3xl" value={25}/>
                        </div>
                        <div className="flex flex-col">
                            Videos
                            <NumberTicker className="text-3xl" value={11}/>
                        </div>
                        <div className="flex flex-col">
                            Views
                            <NumberTicker className="text-3xl" value={380}/>
                        </div>
                    </div>
                </CardContent>
            </Card>}
        </div>
    </div>
}
