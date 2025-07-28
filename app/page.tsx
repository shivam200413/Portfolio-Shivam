"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Album,
  Text
} from "lucide-react"
import Image from "next/image"

const colors = ["red" ,"green" , "blue" , "orange","purple" , "brown" , "grey"]

const NAME = "Shivam Singh Bhati",
  ROLE = "SDE | Full-Stack (MERN) Developer | AI Enthusiast",
  EMAIL = "Shivambhati290@gmail.com",
  PHONE = "+91 8875882353",
  LOCATION = "Chennai, Tamil Nadu, India",
  PROFILE_IMG = "https://raw.githubusercontent.com/shivam200413/Portfolio-Shivam/31e6c29bc86d9688dea92c7c6237eba8739a8ab2/public/Profile.jpg", // Use absolute path from 'public' folder
  ABOUTME = [
    "Results-driven Software Developer and AI enthusiast with hands-on experience in end-to-end web development and AI-driven applications.",
    "Proven track record delivering full-stack projects (MERN) and applying advanced Generative AI techniques under industry mentoring.",
    "Solid foundation in data structures, algorithms, and modern software engineering practices."
  ],
  coreSkillList = [
    "Full-Stack Web Development (MERN)",
    "RESTful API Design",
    "UI/UX Prototyping",
    "Machine Learning Fundamentals",
    "Generative AI (Stable Diffusion, ComfyUI)",
    "Agile & Collaborative Development",
    "Strategic Problem Solving"
  ],
  techStackList = [
    "JavaScript/TypeScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "C++",
    "Java",
    "Git & GitHub",
    "Redux",
    "Tailwind CSS",
    "Chart.js",
    "OpenAI API",
    "three.js"
  ],
  UNIVERSITY = "Vellore Institute of Technology, Chennai",
  DEGREE = "B.Tech Electronics and Computer Engineering",
  PERIOD = "2023 – 2027",
  CGPA = "7.84/10.0",
  PROJECTS = [
    {
      "name": "Yum Finder – Food Delivery Website Clone",
      "link": "", // Add relevant link if hosted/demoed
      "description": "Developed a feature-rich food delivery platform clone using the MERN stack. Showcased login, browse, cart, checkout and order tracking flows.",
      "tech_stack": ["MongoDB", "Express.js", "React", "Node.js"],
      "key_points": [
        "Built end-to-end architecture for scalable, responsive web apps",
        "Implemented secure authentication and data handling",
        "Industry-mentored code and UI/UX design"
      ]
    },
    {
      "name": "Image Generation with Stable Diffusion and ComfyUI",
      "link": "", // Add GitHub link if open-sourced
      "description": "AI-powered image synthesis using advanced generative models. Automated pipeline for image generation, custom prompts, and performance evaluation.",
      "tech_stack": ["Python", "Stable Diffusion", "ComfyUI"],
      "key_points": [
        "Integrated mentor-guided AI workflows",
        "Explored model tuning and prompt engineering"
      ]
    },
    {
      "name": "Chess Engine (JavaScript)",
      "link": "", // Add actual link if deployed or open-sourced
      "description": "Developed a JavaScript-based chess engine with full gameplay logic and move validation.",
      "tech_stack": ["JavaScript", "HTML/CSS"],
      "key_points": [
        "Interactive browser-based UI",
        "Implements core chess algorithms"
      ]
    },
    {
      "name": "HoneyPhish – Security Awareness Platform",
      "link": "", // Add demo or repo if available
      "description": "A gamified phishing simulation and awareness training platform, featuring AI-driven content, real-time scoring, leaderboards, and admin dashboard.",
      "tech_stack": [
        "React (TypeScript)",
        "Tailwind CSS",
        "three.js",
        "Redux",
        "Chart.js",
        "OpenAI API"
      ],
      "key_points": [
        "Simulates real-world phishing attacks",
        "Dynamic and interactive user training",
        "Admin analytics dashboard"
      ]
    }
  ],
  CERTIFICATES = [
    {
      "link": "",
      "title": "Full Stack Web Development Internship (MERN) – EY GDS & AICTE",
      "subtitle": "02/2025 – 03/2025",
      "expiry": ""
    },
    {
      "link": "",
      "title": "AI Intern – Microsoft & SAP TechSaksham",
      "subtitle": "01/2025 – 02/2025",
      "expiry": ""
    }
    // Add more if available, e.g., Coursera ML, JS, etc.
  ],
  MINI_PROJECTS = [
    {
      "name": "UI Prototyping Toolkit",
      "link": "",
      "description": "Developed rapid prototyping utilities for creating interactive UI mockups in React.",
      "tech_stack": ["React", "Figma", "Tailwind CSS"],
      "key_points": [
        "Accelerated design-to-development handoff",
        "Incorporated key UI/UX principles"
      ]
    },
    {
      "name": "Agile Sprint Dashboard",
      "link": "",
      "description": "Built a team productivity dashboard for agile project tracking using Kanban.",
      "tech_stack": ["React", "Express.js", "MongoDB"],
      "key_points": [
        "Tracks sprints, tasks, velocity",
        "Role-based access for teams"
      ]
    }
  ],
  ACHIEVEMENTS = [
    {
      "name": "Interned at EY GDS & AICTE for Full Stack Web Development",
      "link": "",
      "description": "Built production-level MERN app under industry mentorship",
      mention:""
    },
    {
      "name": "Top grades in DSA/Programming courses",
      "link": "",
      "description": "Consistently strong performance in algorithm-heavy courses",
      mention:""
    }
  ],
  CURRENTLY = [
    "🚀 Learning Advanced MERN Stack Concepts",
    "🧠 Exploring Generative AI in production",
    "🎓 Networking at developer communities"
  ],
  UPDATED_ON = "July 2025"






export default function HarvardResume() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{NAME}</h1>
            <p className="text-xl text-gray-600 mb-4">{ROLE}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer"><span>{EMAIL}</span></a>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <a href={`tel:${PHONE}`} target="_blank" rel="noopener noreferrer"><span>{PHONE}</span></a>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <a href="https://maps.app.goo.gl/1L1c99bn61HNqZPc8" target="_blank" rel="noopener noreferrer"><span>{LOCATION}</span></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Introduction */}
          <div className="lg:col-span-3">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden ">
                  <Image src={PROFILE_IMG}  style = {{objectFit:"cover",transform:"scale(1.1)"}}  alt=""/>
                </div>

                <div className="text-sm text-gray-600 space-y-3">
                  {ABOUTME.map((statement, idx) => (
                    <p key={idx}>{statement}</p>
                  ))}
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Core Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {coreSkillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <div className="text-sm text-gray-600">
                    <a href="https://maps.app.goo.gl/7YRCbTgsFHMSkVjF6" target="_blank" rel="noopener noreferrer">
                      <p className="font-medium">{UNIVERSITY}</p>
                    </a>
                    <p>{DEGREE}</p>
                    <p className="text-xs text-gray-500">{PERIOD}</p>
                    <p className="text-xs">{CGPA}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {techStackList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Projects, Mini Projects, Achievements & Certifications */}
          <div className="lg:col-span-6 space-y-8">
            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Featured Projects
              </h2>
              <div className="space-y-6">
                {PROJECTS.map((project, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{project.name}</span>
                        {project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 text-gray-400" /></a> : null}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech_stack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.key_points.map((highlight) => (
                          <p key={highlight}>• {highlight}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Mini Projects */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Mini Projects
              </h2>
              <div className="space-y-6">
                {MINI_PROJECTS.map((project, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{project.name}</span>
                        {project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 text-gray-400" /></a> : null}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {project.description ? <p className="text-gray-600 mb-3">{project.description}</p> : null}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech_stack?.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.key_points?.map((highlight, idx2) => (
                          <p key={idx2}>• {highlight}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Achievements Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Achievements & Virtual Internship
              </h2>
              <div className="space-y-4">
                {ACHIEVEMENTS.map((achievement, idx) => {
                  const color = colors[idx % colors.length];
                  return (
                    <Card key={idx}>
                      <CardContent className="py-3">
                        <div className="flex items-start gap-3">
                          <Award className={`w-5 h-5 ${color} mt-1`} />
                          <div>
                            <a href={achievement.link || "#"} target="_blank" rel="noopener noreferrer">
                              <h3 className="font-semibold">{achievement.name}</h3>
                            </a>
                            {achievement.description && <p className="text-sm text-gray-600">{achievement.description}</p>}
                            {achievement.mention && <p className="text-xs text-gray-500 mt-1">{achievement.mention}</p>}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CERTIFICATES.map((certificate, idx) => {
                  const color = colors[idx % colors.length];
                  return (
                    <Card key={idx}>
                      <CardHeader>
                        <CardTitle>
                          {certificate.link ? (
                            <a className="flex justify-end" href={certificate.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 text-gray-400" />
                            </a>
                          ) : null}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="py-3">
                        <div className="text-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${color}`}>
                            <Album className="w-6 h-6" />
                          </div>
                          <h3 className="font-semibold">{certificate.title}</h3>
                          {certificate?.subtitle ? <p className="text-sm text-gray-600">{certificate.subtitle}</p> : null}
                          {certificate.expiry ? <p className="text-xs text-gray-500 mt-1">Expires: {certificate.expiry}</p> : null}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right Column - Social Links and Status */}
          <div className="lg:col-span-3">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Connect With Me Anytime</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/shivamsinghbhati13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-sm">LinkedIn</p>
                      <p className="text-xs text-gray-500">Professional Network</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/shivam200413"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-800" />
                    <div>
                      <p className="font-medium text-sm">GitHub</p>
                      <p className="text-xs text-gray-500">Code Repository</p>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/heycvam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="font-medium text-sm">Instagram</p>
                      <p className="text-xs text-gray-500">More Social Side of Mine</p>
                    </div>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1ftD6VrDg3Oo3ueYrZYmQ4aZAxjygfx7R/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <Text className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-sm">Resume</p>
                      <p className="text-xs text-gray-500">PDF</p>
                    </div>
                  </a>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-2">Currently</h4>
                  {CURRENTLY.map((statement, idx) => (
                    <p key={idx} className="text-sm text-gray-600">{statement}<br /></p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">© 2025 {NAME}. Built with React and Next.js.</p>
          <p className="text-gray-500 text-xs mt-2">Last updated: {UPDATED_ON}</p>
        </div>
      </footer>
    </div>
  )
}
