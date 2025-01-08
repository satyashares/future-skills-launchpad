import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <div className="py-24 bg-gradient-to-r from-primary via-accent to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
          Your Future Starts With One Decision
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Join thousands of Indian students who've already discovered their path to high-income skills and financial freedom. Start with our free career assessment.
        </p>
        <div className="flex flex-wrap gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90 group"
          >
            <span>Get Free Assessment</span>
            <Sparkles className="ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 group"
          >
            <span>Join Free Community</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};