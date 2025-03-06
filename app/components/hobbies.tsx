import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface Hobby {
    title: string;
    description: string;
    imageUrl: string;
}

const hobbies: Hobby[] = [
    {
        title: "Photography",
        description: "I enjoy capturing moments and exploring different photography styles, particularly landscape and street photography.",
        imageUrl: "/images/photography.jpg"
    },
    {
        title: "Hiking",
        description: "On weekends, I love to explore nature trails and mountains, disconnecting from technology and reconnecting with nature.",
        imageUrl: "/images/hiking.jpg"
    },
    {
        title: "Reading",
        description: "I'm an avid reader of science fiction, philosophy, and technical books that help me grow both personally and professionally.",
        imageUrl: "/images/reading.jpg"
    },
    {
        title: "Cooking",
        description: "Experimenting with recipes from different cuisines is my way of exploring cultures and sharing experiences with friends and family.",
        imageUrl: "/images/cooking.jpg"
    }
];

export default function Hobbies() {
    return (
        <main id="hobbies" className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Hobbies & Interests</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hobbies.map((hobby, index) => (
                    <Card key={index} className="overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image
                                src={hobby.imageUrl}
                                alt={hobby.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>{hobby.title}</CardTitle>
                            <CardDescription>{hobby.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </main>
    );
}

