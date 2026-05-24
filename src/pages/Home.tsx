import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Search, 
  TrendingUp, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Globe 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative h-[600px] rounded-3xl overflow-hidden flex items-center justify-center text-center px-6">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/omniverse-portal-d773d691-1779633326983.webp" 
          alt="Macvel Omniverse" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl space-y-6"
        >
          <Badge variant="secondary" className="px-4 py-1 text-sm bg-primary/20 text-primary border-primary/30">
            Welcome to the Omniverse Portal
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
            Connecting the <span className="text-primary italic">Future</span> of Global Systems
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Experience the integrated ecosystem of Tech, Business, Policy, Trading, and Education. 
            Powered by Macvel AI for a unified digital experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <Input 
                placeholder="Ask the Macvel AI Assistant..." 
                className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-zinc-400 rounded-full backdrop-blur-md focus-visible:ring-primary"
              />
            </div>
            <Button size="lg" className="h-14 px-8 rounded-full text-lg">
              Explore Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Pillars Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Cpu, title: "Tech Hub", desc: "Software & IT Services", color: "blue", path: "/tech" },
          { icon: Briefcase, title: "Entrepreneurship", desc: "Incubation & Strategy", color: "purple", path: "/entrepreneurship" },
          { icon: TrendingUp, title: "Trading", desc: "Global Market Access", color: "green", path: "/trading" },
          { icon: GraduationCap, title: "Academy", desc: "Future-Proof Careers", color: "orange", path: "/academy" },
        ].map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <pillar.icon className="w-24 h-24" />
              </div>
              <CardContent className="p-8">
                <div className={`w-12 h-12 rounded-xl bg-${pillar.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className={`w-6 h-6 text-${pillar.color}-500`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground mb-6">{pillar.desc}</p>
                <Button variant="link" className="p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform">
                  Enter Pillar <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Trending Feed */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Trending across the Multiverse</h2>
          </div>
          <Button variant="ghost">View Full Feed</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Trend */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-video rounded-3xl overflow-hidden group">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/tech-hub-bg-d4e51b32-1779633327029.webp" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Trend"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <Badge className="w-fit mb-4 bg-blue-500">Tech Hub Update</Badge>
                <h3 className="text-3xl font-bold text-white mb-4">The Rise of Sovereign AI Infrastructures</h3>
                <p className="text-zinc-300 line-clamp-2 mb-6">How Macvel Tech is helping governments build localized AI models to secure digital sovereignty.</p>
                <Button className="w-fit rounded-full">Read Article</Button>
              </div>
            </div>
          </div>

          {/* Quick Updates */}
          <div className="space-y-4">
            {[
              { tag: "Politics", text: "Global Trade Policy Shifts for 2025", time: "2h ago" },
              { tag: "Trading", text: "BTC breaks $98k resistance level", time: "4h ago" },
              { tag: "Academy", text: "New Certification: AI Ethics for Business", time: "6h ago" },
              { tag: "Entrepreneurship", text: "10 African Startups enter Macvel Incubation", time: "1d ago" },
            ].map((news, i) => (
              <Card key={i} className="bg-muted/30 border-none hover:bg-muted/50 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{news.tag}</Badge>
                    <span className="text-[10px] text-muted-foreground">{news.time}</span>
                  </div>
                  <p className="font-semibold text-sm">{news.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}