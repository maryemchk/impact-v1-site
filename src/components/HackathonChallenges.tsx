
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Brain, ShieldCheck, Users, Clock, Medal, Cpu, Code, CheckCircle2, ExternalLink } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  icon: React.ReactNode;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  requirements: string[];
  rewards: string[];
  tools: string[];
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "AI Innovation Challenge",
    icon: <Brain className="h-8 w-8 text-primary" />,
    difficulty: "Advanced",
    description: "Build an innovative AI solution that addresses real-world challenges in healthcare, education, or environmental sustainability.",
    requirements: [
      "Implement machine learning or deep learning models",
      "Create a user-friendly interface",
      "Include data visualization components",
      "Provide clear documentation",
    ],
    rewards: [
      "First Prize: $5,000",
      "AI Development Kit",
      "Cloud Credits worth $2,000",
      "1:1 Mentorship with Industry Experts"
    ],
    tools: [
      "TensorFlow/PyTorch",
      "Cloud Computing Platform",
      "Modern Web Framework",
    ]
  },
  {
    id: 2,
    title: "Cybersecurity Challenge",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    difficulty: "Intermediate",
    description: "Create an innovative security solution for threat detection, secure authentication, or cybersecurity education.",
    requirements: [
      "Implement secure coding practices",
      "Create real-time monitoring features",
      "Include comprehensive security reporting",
      "Focus on user privacy and data protection"
    ],
    rewards: [
      "First Prize: $4,000",
      "Security Tools License",
      "Cloud Credits worth $1,500",
      "Security Certification Voucher"
    ],
    tools: [
      "Security Testing Tools",
      "Cloud Security Services",
      "Authentication Framework"
    ]
  }
];

const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
  const difficultyColor = {
    Beginner: 'text-emerald-400',
    Intermediate: 'text-blue-400',
    Advanced: 'text-purple-400'
  }[challenge.difficulty];

  return (
    <Card className="group relative overflow-hidden border-2 border-muted backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="space-y-6 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {challenge.icon}
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-primary">
                {challenge.title}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className={`font-semibold ${difficultyColor}`}>
                  {challenge.difficulty}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-3.5 w-3.5" />
                  2-4 Team Members
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground">{challenge.description}</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Requirements
            </div>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {challenge.requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold">
              <Medal className="h-4 w-4 text-primary" />
              Rewards
            </div>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {challenge.rewards.map((reward, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  {reward}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold">
              <Cpu className="h-4 w-4 text-primary" />
              Recommended Tools
            </div>
            <ul className="flex flex-wrap gap-2">
              {challenge.tools.map((tool, index) => (
                <li
                  key={index}
                  className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text
-muted-foreground"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const HackathonChallenges = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="container relative space-y-12">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="bg-gradient-to-r from-primary/60 to-primary bg-clip-text font-orbitron text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Hackathon Challenges
            </h2>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                48 Hours
              </div>
              <div className="flex items-center gap-2">
                <Medal className="h-4 w-4" />
                $10,000 Prize Pool
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                2 Challenges
              </div>
            </div>
            <p className="text-muted-foreground">
              Choose your challenge and showcase your innovation. Work in teams of 2-4 to build solutions
              that can make a real impact. Join us in pushing the boundaries of technology.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonChallenges;
