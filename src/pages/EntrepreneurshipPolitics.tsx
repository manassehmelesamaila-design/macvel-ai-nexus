import { motion } from "framer-motion";
import { 
  Users, 
  Lightbulb, 
  Map, 
  Shield, 
  MessageSquare, 
  ArrowUpRight,
  TrendingUp,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EntrepreneurshipPolitics() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero */}
      <section className="relative h-[450px] rounded-3xl overflow-hidden flex items-center p-8 lg:p-16">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/entrepreneurship-politics-bg-0b3f50a7-1779633327956.webp" 
          alt="Business and Politics" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="flex gap-2">
            <Badge className="bg-purple-500 hover:bg-purple-600 border-none">Business</Badge>
            <Badge className="bg-red-500 hover:bg-red-600 border-none">Geopolitics</Badge>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">Incubating Ideas, Analyzing Policy.</h1>
          <p className="text-lg text-zinc-300">A dual-purpose hub where startups scale and global policies are decoded through the lens of emerging technology.</p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Apply for Incubation</Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">Policy Roundtable</Button>
          </div>
        </div>
      </section>

      <Tabs defaultValue="entrepreneurship" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-12 h-14 bg-muted/50 p-1">
          <TabsTrigger value="entrepreneurship" className="text-lg py-3">Business Incubation</TabsTrigger>
          <TabsTrigger value="politics" className="text-lg py-3">Geopolitical Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="entrepreneurship" className="space-y-12">
          {/* Incubation Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Active Startups", value: "120+", icon: Users },
              { label: "Capital Raised", value: "$45M", icon: TrendingUp },
              { label: "Innovation Hubs", value: "12", icon: Map },
            ].map((stat, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Scale with Macvel AI</h2>
              <p className="text-muted-foreground">Our generative AI tools help entrepreneurs draft business plans, generate marketing copy, and optimize digital strategies in minutes.</p>
              <div className="space-y-4">
                {[
                  "AI Business Plan Generator",
                  "Market Sentiment Analyzer",
                  "Automated Ad Copy Creator",
                  "Digital Marketing Optimizer"
                ].map((tool, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-purple-500/50 transition-colors cursor-pointer group">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="flex-1 font-medium">{tool}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-purple-500 transition-colors" />
                  </div>
                ))}
              </div>
              <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">Launch AI Advisor</Button>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/academy-bg-eaf29455-1779633327802.webp" 
                className="w-full h-full object-cover" 
                alt="AI Tools"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center p-8">
                  <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-white text-xl font-bold italic">"Macvel AI saved us 200 hours of market research."</p>
                  <p className="text-zinc-300 mt-2">— Sarah K., CEO of AgriTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="politics" className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold">Geopolitical Roundtable</h2>
              <div className="space-y-4">
                {[
                  { title: "The Impact of BRICS Expansion on Digital Trade", date: "June 15, 2025", author: "Dr. Elena Vance" },
                  { title: "AI Sovereignty: Why Nations are Building Their Own LLMs", date: "June 12, 2025", author: "Marcus Thorne" },
                  { title: "Central Bank Digital Currencies and the Future of Forex", date: "June 10, 2025", author: "Sarah Jenkins" },
                ].map((item, i) => (
                  <Card key={i} className="hover:border-red-500/50 transition-colors cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">{item.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{item.author}</span>
                            <span>•</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                        <FileText className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button size="lg" variant="outline" className="w-full border-red-500/30 hover:bg-red-500/10 text-red-600 dark:text-red-400">View All Policy Papers</Button>
            </div>

            <Card className="border-red-500/20 bg-red-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  Live Risk Map
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground">Real-time geopolitical stability monitoring across trade corridors.</p>
                <div className="space-y-4">
                  {[
                    { region: "East Africa Corridor", status: "Stable", color: "green" },
                    { region: "ASEAN Tech Hub", status: "Monitoring", color: "yellow" },
                    { region: "Nordic Data Grid", status: "High Alert", color: "red" },
                  ].map((risk, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                        <span>{risk.region}</span>
                        <span className={`text-${risk.color}-500`}>{risk.status}</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div className={`h-full w-full bg-${risk.color}-500 opacity-20`} />
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">Access Global Risk Dashboard</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Forum Community Section */}
      <section className="bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">Join the Multiverse Community</h2>
            <p className="text-muted-foreground text-lg">Connect with thousands of entrepreneurs, policy makers, and developers in our integrated forums.</p>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full gap-2">
                <MessageSquare className="w-4 h-4" />
                Open Forums
              </Button>
              <Button variant="outline" className="rounded-full">Join Discord</Button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-background p-4 rounded-2xl shadow-sm">
              <p className="text-xs text-muted-foreground mb-2">Active Topics</p>
              <p className="font-bold">4.2k+</p>
            </div>
            <div className="bg-background p-4 rounded-2xl shadow-sm">
              <p className="text-xs text-muted-foreground mb-2">Daily Messages</p>
              <p className="font-bold">12k+</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}