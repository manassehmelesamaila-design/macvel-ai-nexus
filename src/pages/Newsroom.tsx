import { motion } from "framer-motion";
import { 
  Newspaper, 
  TrendingUp, 
  Zap, 
  Globe, 
  MessageSquare, 
  Share2,
  Bookmark,
  ChevronRight,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const articles = [
  {
    title: "The Geopolitics of Semiconductors in 2025",
    category: "Politics",
    tag: "Analysis",
    time: "2h ago",
    author: "Elena Vance",
    desc: "A deep dive into how manufacturing hubs are shifting towards the Macvel Tech corridors.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/tech-hub-bg-d4e51b32-1779633327029.webp"
  },
  {
    title: "Bitcoin ETFs: A New Era of Institutional Liquidity",
    category: "Trading",
    tag: "Market Update",
    time: "4h ago",
    author: "Mark S.",
    desc: "Why the current price stability is a signal for long-term institutional accumulation.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/trading-platform-bg-36cc75b6-1779633326937.webp"
  },
  {
    title: "Macvel Academy reaches 1 million graduates",
    category: "Academy",
    tag: "Milestone",
    time: "1d ago",
    author: "Editorial Team",
    desc: "The digital education pillar celebrates a decade of upskilling the global workforce.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/academy-bg-eaf29455-1779633327802.webp"
  },
];

export default function Newsroom() {
  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold flex items-center gap-3">
            <Newspaper className="w-10 h-10 text-primary" />
            Multiverse Newsroom
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">Real-time industry insights, political developments, and global tech trends across our 5 pillars.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Filter by pillar..." className="pl-10 w-48" />
          </div>
          <Button variant="outline">Subscribe</Button>
        </div>
      </div>

      {/* Featured Article */}
      <section className="relative rounded-3xl overflow-hidden group cursor-pointer h-[500px]">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/omniverse-portal-d773d691-1779633326983.webp" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          alt="Featured"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 lg:p-12 flex flex-col justify-end">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-primary hover:bg-primary">Breaking News</Badge>
            <Badge variant="outline" className="text-white border-white/20 backdrop-blur-md">Technology</Badge>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight">Macvel AI 4.0: The Unified Brain of the Multiverse is Here</h2>
          <div className="flex items-center gap-6 text-zinc-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary" />
              <span className="text-sm font-medium">Chief Innovation Officer</span>
            </div>
            <span className="text-sm">15 Min Read</span>
            <span className="text-sm">2,402 Shares</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Article List */}
        <div className="lg:col-span-2 space-y-8">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-6 group cursor-pointer"
            >
              <div className="md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={article.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={article.title} />
              </div>
              <div className="md:w-2/3 space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-[10px] uppercase font-bold tracking-wider">{article.category}</Badge>
                  <span className="text-xs text-muted-foreground">{article.time}</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-muted-foreground line-clamp-2">{article.desc}</p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      24
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Read More <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar Trends */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
                Live Multiverse Trends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { label: "BTC/USD", trend: "+4.2%", up: true },
                { label: "AI Infrastructure", trend: "+12.8%", up: true },
                { label: "Global Trade Vol", trend: "-2.1%", up: false },
                { label: "Incubation Starts", trend: "144", up: true },
              ].map((trend, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
                  <span className="font-medium text-sm">{trend.label}</span>
                  <div className={`flex items-center gap-1 text-sm font-bold ${trend.up ? 'text-green-500' : 'text-red-500'}`}>
                    {trend.up ? <Zap className="w-3 h-3 fill-green-500" /> : <Zap className="w-3 h-3 fill-red-500 opacity-20" />}
                    {trend.trend}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-muted/30 border-none">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg">Daily Multiverse Brief</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Get the top 3 stories from each pillar delivered to your inbox every morning at 8 AM GMT.</p>
              <Input placeholder="Enter your email" className="bg-background border-none" />
              <Button className="w-full">Sign Me Up</Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Recent Policy Papers</h3>
            {[
              "Digital Sovereignty in the 21st Century",
              "The Role of AI in Post-Crisis Recovery",
              "Decentralized Finance as a Global Standard"
            ].map((p, i) => (
              <div key={i} className="flex gap-3 group cursor-pointer">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <p className="text-sm font-medium group-hover:text-primary transition-colors underline-offset-4 decoration-primary/30 decoration-1">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}