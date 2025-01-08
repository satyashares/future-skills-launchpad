import { Rocket, Target, Sparkles, Brain, Trophy, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: "0.5s" }}>
          <div className="w-24 h-24 rounded-full bg-primary/10 backdrop-blur-lg" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "0.8s" }}>
          <div className="w-32 h-32 rounded-full bg-secondary/10 backdrop-blur-lg" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="animate-fade-in space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-pulse">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Transform Your Future Today</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            Master The Skills That<br />Define Your Success
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a high school student planning ahead, a college graduate seeking direction, or a working professional ready to level up - we'll help you identify and master the exact high-income skills that match your strengths.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-6 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 group text-lg">
            <span>Get Free Skills Assessment</span>
            <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group text-lg">
            <span>Join Elite Network</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm animate-float shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 group hover:-translate-y-2">
            <Brain className="w-12 h-12 text-primary mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg">Future-Ready Skills</h3>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm animate-float shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 group hover:-translate-y-2" style={{ animationDelay: "0.2s" }}>
            <Trophy className="w-12 h-12 text-primary mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg">High Performance</h3>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm animate-float shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 group hover:-translate-y-2" style={{ animationDelay: "0.4s" }}>
            <Target className="w-12 h-12 text-primary mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-lg">Financial Freedom</h3>
          </div>
        </div>
      </div>
    </div>
  );
};