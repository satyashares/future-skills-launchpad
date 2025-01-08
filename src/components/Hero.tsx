import { GraduationCap, Users, Brain } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Build Your Future-Ready Career Path
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Expert guidance to help you identify and master the right skills for tomorrow's high-paying careers. Join India's most focused career development community.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Free Career Assessment
          </Button>
          <Button size="lg" variant="outline">
            Join Free Career Community
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 backdrop-blur-sm animate-float">
            <GraduationCap className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold">Career Clarity</h3>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 backdrop-blur-sm animate-float" style={{ animationDelay: "0.2s" }}>
            <Users className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold">Growth Community</h3>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 backdrop-blur-sm animate-float" style={{ animationDelay: "0.4s" }}>
            <Brain className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold">Future Skills</h3>
          </div>
        </div>
      </div>
    </div>
  );
};