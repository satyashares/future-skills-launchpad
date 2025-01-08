import { Rocket, Target, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Transform Your Future With The Right Skills
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop gambling with your career. Get expert guidance to master the exact skills that top companies are desperately seeking in India's rapidly evolving job market.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 group">
            <span>Get Free Career Assessment</span>
            <Sparkles className="ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group">
            <span>Join Elite Community</span>
            <Target className="ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 rounded-lg bg-white/50 backdrop-blur-sm animate-float shadow-lg hover:shadow-xl transition-shadow">
            <Rocket className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold">Future-Ready Skills</h3>
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg bg-white/50 backdrop-blur-sm animate-float shadow-lg hover:shadow-xl transition-shadow" style={{ animationDelay: "0.2s" }}>
            <Target className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold">Career Mastery</h3>
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg bg-white/50 backdrop-blur-sm animate-float shadow-lg hover:shadow-xl transition-shadow" style={{ animationDelay: "0.4s" }}>
            <Sparkles className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold">Financial Freedom</h3>
          </div>
        </div>
      </div>
    </div>
  );
};