import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Cloud, 
  Workflow, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  { icon: Code2, title: "Custom Software", desc: "Bespoke digital solutions tailored to your business needs." },
  { icon: Cpu, title: "Edge AI Solutions", desc: "Deploying intelligence directly to your hardware infrastructure." },
  { icon: Cloud, title: "Cloud Architecture", desc: "Scalable, secure, and resilient cloud-native systems." },
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Enterprise-grade protection for your digital assets." },
];

const caseStudies = [
  {
    title: "Global Supply Chain AI",
    client: "Logistics Pro",
    results: "40% reduction in delay costs",
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/tech-hub-bg-d4e51b32-1779633327029.webp"
  },
  {
    title: "FinTech Security Core",
    client: "SecureBank",
    results: "Zero-breach record since 2023",
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/trading-platform-bg-36cc75b6-1779633326937.webp"
  }
];

export default function TechHub() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="relative h-[400px] rounded-3xl overflow-hidden flex flex-col justify-end p-8 lg:p-16">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/tech-hub-bg-d4e51b32-1779633327029.webp" 
          alt="Tech Hub" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <Badge className="bg-primary hover:bg-primary/90 text-white">Innovation Pillar</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-white">Engineering the Future</h1>
          <p className="text-lg text-zinc-300">Custom software, IT consulting, and emerging AI research to power your next big move.</p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="rounded-full">Request a Consult</Button>
            <Button size="lg" variant="outline" className="rounded-full text-white border-white/20 hover:bg-white/10">Explore Trends</Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">Our Core Expertise</h2>
          <p className="text-muted-foreground text-lg">We don't just build software; we build the digital infrastructure for the multiverse.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {caseStudies.map((study, i) => (
          <div key={i} className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
            <img 
              src={study.img} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              alt={study.title}
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <Badge className="mb-4 bg-white/20 backdrop-blur-md text-white border-none">{study.client}</Badge>
              <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
              <p className="text-primary font-medium mb-4">{study.results}</p>
              <Button variant="link" className="p-0 text-white flex items-center gap-2 group-hover:gap-4 transition-all">
                Read Case Study <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </section>

      {/* Tech Trends Feed */}
      <section className="bg-muted/30 rounded-3xl p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-4">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Workflow className="w-5 h-5" />
              <span>LIVE TRENDS</span>
            </div>
            <h2 className="text-3xl font-bold">What's Trending in Tech?</h2>
            <p className="text-muted-foreground">Stay ahead of the curve with real-time insights from our AI-driven technology news aggregator.</p>
            <Button className="rounded-full">Subscribe to Tech Alerts</Button>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "The shift from Cloud to Edge Computing",
              "Quantum-resistant encryption standards",
              "Generative AI in DevOps workflows",
              "Sustainable Data Center architectures"
            ].map((trend, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-background rounded-xl border border-border group hover:border-primary transition-colors cursor-pointer">
                <span className="font-medium">{trend}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}