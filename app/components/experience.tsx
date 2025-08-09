import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Experience {
    title: string
    company: string
    period: string
    location: string
    responsibilities: string[]
    image?: string  // Optional image URL
}

const experiences: Experience[] = [
    {
        title: "Consultant - Percussion Technician",
        company: "Cypress-Fairbanks ISD",
        period: "July 2023 - August 2024",
        location: "Cypress, Texas, United States",
        image: "/CFISD.png",  // Add image URL here
        responsibilities: [
            "Provide percussion instruction and guidance to students",
            "Develop leadership and team-building skills among students",
            "Assist in music education and performance preparation"
        ],

    },
    {
        title: "Consultant - Percussion Technician",
        company: "Fort Bend ISD",
        period: "July 2022 - August 2024",
        location: "Sugar Land, Texas, United States",
        image: "/FBISD.png",
        responsibilities: [
            "Taught 30+ students over the duration of the contract",
            "Developed leadership, team-building, and mentoring skills",
            "Instilled discipline and structured rehearsal procedures",
            "Designed and wrote over 10 original lesson packets",
            "Hosted private sessions for students requiring additional support"
        ],

    },
    {
        title: "Restaurant Crew Member",
        company: "LA Crawfish",
        period: "April 2020 - August 2022",
        location: "Houston, Texas, United States",
        responsibilities: [
            "Assisted 50+ customers daily with service and orders",
            "Managed inventory and ensured stock levels were maintained",
            "Prepared crawfish and other food items",
            "Packaged take-out orders and handled delivery services",
            "Ensured diners were accommodated with prompt and accurate service"
        ],

    }
];

export default function Experience() {
    return (
        <main id="experience" className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Professional Experience</h1>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <Card key={index}>
                        <CardHeader>
                            {exp.image && (
                                <div className="w-24 h-24 mb-4">  {/* Adjust w-24 h-24 to change size */}
                                    <img
                                        src={exp.image}
                                        alt={exp.company}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            )}
                            <CardTitle>{exp.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                {exp.company} | {exp.period}
                            </p>
                            <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4">
                                <h3 className="font-semibold mb-2">Responsibilities:</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    )
}

