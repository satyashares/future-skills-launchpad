import { GraduationCap, DollarSign, Brain } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Transform Your Future with Skills That Matter
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
          Expert guidance for high-performers who want to build a future-proof career in tech and achieve financial freedom.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Take Free Assessment
          </Button>
          <Button size="lg" variant="outline">
            Book Free Counselling
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 backdrop-blur-sm animate-float">
            <GraduationCap className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold">STEM-Ready Skills</h3>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 backdrop-blur-sm animate-float" style={{ animationDelay: "0.2s" }}>
            <DollarSign className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold">Financial Freedom</h3>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 backdrop-blur-sm animate-float" style={{ animationDelay: "0.4s" }}>
            <Brain className="w-12 h-12 text-primary mb-2" />
            <h3 className="font-semibold">Future-Ready</h3>
          </div>
        </div>
      </div>
    </div>
  );
};