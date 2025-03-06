export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="space-y-6">
        <p className="text-lg">
          I'm John Doe, a passionate software engineer with 5 years of experience in web development. I specialize in
          creating efficient, scalable, and user-friendly applications.
        </p>
        <p className="text-lg">
          My journey in software engineering began during my college years when I discovered my love for problem-solving
          through code. Since then, I've worked on a variety of projects, from small startups to large enterprises,
          always striving to learn and grow.
        </p>
        <p className="text-lg">
          When I'm not coding, you can find me exploring new hiking trails, reading about the latest tech trends, or
          experimenting with new recipes in the kitchen.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>Python / Django</li>
          <li>SQL / NoSQL Databases</li>
          <li>AWS / Cloud Technologies</li>
          <li>Git / Version Control</li>
          <li>Agile / Scrum Methodologies</li>
        </ul>
      </div>
    </main>
  )
}

