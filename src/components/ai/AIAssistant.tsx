import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Send, 
  X, 
  Minus, 
  Maximize2, 
  Sparkles,
  TrendingUp,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
  type?: "news" | "trading" | "education" | "business";
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Welcome to the Macvel Multiverse. I am your integrated AI assistant. How can I help you across our pillars today?" }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const getContextualResponse = (query: string, path: string) => {
    const q = query.toLowerCase();
    if (path === "/trading") {
      return "Analyzing market trends... I see significant resistance for BTC at $98k. Based on current RSI, I'd suggest waiting for a pullback to $94,500 for entry.";
    }
    if (path === "/academy") {
      return "I've personalized your learning path for 'Blockchain Fundamentals'. You should focus on Module 3: Smart Contract Security today. Shall I summarize it for you?";
    }
    if (path === "/entrepreneurship") {
      return "I've drafted a basic market analysis for your 'Eco-Tech' startup idea. The total addressable market in Africa is projected to grow by 15% annually.";
    }
    if (path === "/tech") {
      return "Current tech trends show a massive shift towards Edge AI. We are currently implementing these architectures for our latest client case studies.";
    }
    return "The Macvel Omniverse is buzzing! Top news today: Tech Hub released a new AI framework, and Macvel Academy just hit 10k students.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate AI thinking
    setTimeout(() => {
      const response = getContextualResponse(input, location.pathname);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 45 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:opacity-100 opacity-0 transition-opacity" />
            <Bot className="w-6 h-6 z-10" />
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "auto" : "500px"
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="w-[380px] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-none">Macvel AI</h3>
                  <span className="text-[10px] opacity-80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Online • Multiverse Aware
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 hover:bg-white/10"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <ScrollArea className="flex-1 p-4 h-[350px]">
                  <div className="space-y-4">
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex flex-col max-w-[85%]",
                          msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                        )}
                      >
                        <div
                          className={cn(
                            "p-3 rounded-2xl text-sm",
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground rounded-tr-none"
                              : "bg-muted rounded-tl-none"
                          )}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Suggestions */}
                <div className="px-4 py-2 border-t border-border bg-muted/30 flex gap-2 overflow-x-auto no-scrollbar">
                  {[
                    { icon: TrendingUp, label: "Trading Info" },
                    { icon: Briefcase, label: "Business Idea" },
                    { icon: GraduationCap, label: "Study Plan" }
                  ].map((s, i) => (
                    <button 
                      key={i} 
                      onClick={() => setInput(s.label)}
                      className="whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs hover:bg-accent transition-colors"
                    >
                      <s.icon className="w-3 h-3" />
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 bg-background border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask anything..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      className="bg-accent/50 border-none"
                    />
                    <Button onClick={handleSend} size="icon" className="shrink-0">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}