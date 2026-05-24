import { motion } from "framer-motion";
import { 
  Search, 
  PlayCircle, 
  Clock, 
  Star, 
  Award, 
  ChevronRight,
  BookOpen,
  Layout,
  Layers,
  Terminal,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const courses = [
  {
    title: "AI Development Masterclass",
    instructor: "Dr. Sarah Chen",
    students: "4.5k",
    rating: "4.9",
    level: "Advanced",
    duration: "24h 15m",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/tech-hub-bg-d4e51b32-1779633327029.webp",
    category: "Technology"
  },
  {
    title: "Global Markets & Forex Strategy",
    instructor: "James Wilson",
    students: "3.2k",
    rating: "4.8",
    level: "Intermediate",
    duration: "18h 30m",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/trading-platform-bg-36cc75b6-1779633326937.webp",
    category: "Trading"
  },
  {
    title: "Startup Foundations",
    instructor: "Elon M. (Guest)",
    students: "10.1k",
    rating: "5.0",
    level: "Beginner",
    duration: "12h 00m",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f2006e15-b7fa-4d9b-a1ea-0b4f07eeda27/entrepreneurship-politics-bg-0b3f50a7-1779633327956.webp",
    category: "Business"
  },
];

export default function Academy() {
  return (
    <div className="space-y-12 pb-20">
      {/* Academy Hero */}
      <section className="bg-primary rounded-3xl p-8 lg:p-16 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <GraduationCap className="w-full h-full rotate-12" />
        </div>
        <div className="relative z-10 max-w-2xl space-y-6">
          <Badge className="bg-white/20 hover:bg-white/30 text-white border-none">Upskill for the Future</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Learn. Build. Conquer.</h1>
          <p className="text-lg text-primary-foreground/80">World-class education integrated with Macvel's technology and market ecosystems. Prepare for high-demand digital careers.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
              <Input 
                placeholder="What do you want to learn today?" 
                className="pl-10 h-12 bg-white text-foreground rounded-xl border-none"
              />
            </div>
            <Button size="lg" variant="secondary" className="h-12 rounded-xl">Browse All Courses</Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {[
          { name: "Full-Stack Dev", icon: Terminal },
          { name: "AI & ML", icon: Layers },
          { name: "Global Finance", icon: Layout },
          { name: "Policy & Law", icon: BookOpen },
        ].map((cat, i) => (
          <Button key={i} variant="outline" className="rounded-full gap-2 whitespace-nowrap px-6 h-12">
            <cat.icon className="w-4 h-4" />
            {cat.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Course Grid */}
        <div className="lg:col-span-3 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Courses</h2>
            <Button variant="link">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-border/50 group hover:shadow-xl transition-all">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={course.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={course.title} />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-black/60 backdrop-blur-md border-none">{course.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-foreground">{course.rating}</span>
                        <span>({course.students})</span>
                      </div>
                      <span>{course.level}</span>
                    </div>
                    <h3 className="text-lg font-bold line-clamp-2 leading-tight group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{course.instructor}</p>
                  </CardHeader>
                  <CardFooter className="p-4 pt-2 border-t border-border mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </div>
                    <Button size="sm" className="rounded-lg h-8 px-4">Enroll Now</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Progress Sidebar */}
        <div className="space-y-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="p-4">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                Your Learning Path
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="font-medium">Blockchain Fundamentals</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-1.5" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="font-medium">Macro-Economics 101</span>
                  <span>32%</span>
                </div>
                <Progress value={32} className="h-1.5" />
              </div>
              <Button className="w-full rounded-xl bg-primary">Resume Learning</Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-bold">Upcoming Webinars</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              {[
                { title: "The Future of Ethereum 3.0", date: "Tomorrow, 6 PM" },
                { title: "Zero-Knowledge Proofs", date: "June 24, 2 PM" },
              ].map((web, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg group cursor-pointer hover:bg-muted transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center border border-border">
                    <PlayCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-none">{web.title}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">{web.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Tutor Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xs font-bold">AI</span>
              </div>
              <span className="text-sm font-bold">24/7 Smart Tutor</span>
            </div>
            <p className="text-xs text-white/80 mb-4 leading-relaxed">Stuck on a concept? Our AI assistant can explain complex topics and personalize your study plan.</p>
            <Button size="sm" variant="secondary" className="w-full text-xs font-bold">Start Chat</Button>
          </div>
        </div>
      </div>
    </div>
  );
}