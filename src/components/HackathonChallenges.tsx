import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Factory, FileCheck, Video, Code, Presentation, ListChecks, Lightbulb } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
interface Challenge {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  theme: string;
}
const challenges: Challenge[] = [{
  id: 1,
  title: "AI & Healthcare Innovation",
  icon: <Heart className="h-8 w-8 text-primary" />,
  theme: "Healthcare",
  description: "Address a current issue, either local or global, in the field of medicine, paramedicine, or public health using AI and cutting-edge technologies."
}, {
  id: 2,
  title: "AI & Industry Innovation",
  icon: <Factory className="h-8 w-8 text-primary" />,
  theme: "Industry",
  description: "Tackle a major challenge in the areas of production, logistics, maintenance, quality, safety, or energy management using AI and innovative technologies."
}];
const deliverables = [{
  icon: <Presentation />,
  title: "Presentation (10-20 slides)",
  items: ["Project title and team members", "Problem identification and importance", "Proposed solution description", "Application architecture", "Technology stack details", "Visual prototype", "Expected results", "Impact evaluation"]
}, {
  icon: <Video />,
  title: "Demonstration Video",
  items: ["Video illustrating the application functionality"]
}, {
  icon: <Code />,
  title: "Technical Materials",
  items: ["Source code", "Technical documentation"]
}];
const evaluationCriteria = ["Innovation and originality", "Technology-problem alignment", "Presentation clarity", "Prototype quality", "Technical feasibility", "Potential impact"];
const ChallengeCard = ({
  challenge
}: {
  challenge: Challenge;
}) => {
  return <Card className="group relative overflow-hidden border-2 border-muted backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="space-y-6 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            {challenge.icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-primary">
              {challenge.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{challenge.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>;
};
const HackathonChallenges = () => {
  return <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container relative space-y-12">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="bg-gradient-to-r from-primary/60 to-primary bg-clip-text font-orbitron text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Challenge Objectives
            </h2>
            <p className="text-muted-foreground">Participants are required to design and present an innovative idea for a smart application that integrates one or more cutting-edge technologies (artificial intelligence, blockchain, IoT, etc.), under one of the following two themes:</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {challenges.map(challenge => <ChallengeCard key={challenge.id} challenge={challenge} />)}
        </div>

        <div className="mt-12 space-y-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="deliverables">
              <AccordionTrigger className="text-xl font-semibold">
                <FileCheck className="mr-2 h-6 w-6" />
                Expected Deliverables
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-6 md:grid-cols-3">
                  {deliverables.map((deliverable, index) => <div key={index} className="space-y-3 rounded-lg border p-4">
                      <div className="flex items-center gap-2 font-semibold">
                        {deliverable.icon}
                        {deliverable.title}
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {deliverable.items.map((item, idx) => <li key={idx} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {item}
                          </li>)}
                      </ul>
                    </div>)}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="criteria">
              <AccordionTrigger className="text-xl font-semibold">
                <ListChecks className="mr-2 h-6 w-6" />
                Evaluation Criteria
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {evaluationCriteria.map((criterion, index) => <div key={index} className="flex items-center gap-3 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      <span>{criterion}</span>
                    </div>)}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>;
};
export default HackathonChallenges;