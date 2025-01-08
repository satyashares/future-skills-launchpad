import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Check } from "lucide-react";

export const CTA = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-primary via-accent to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNHMxNCA2LjI2OCAxNCAxNHMtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Your Future Starts Today
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join thousands of ambitious Indians who've already discovered their path to high-income skills and financial freedom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6">Free Starter Pack</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Comprehensive Skills Assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Basic Career Roadmap</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Community Access</span>
                </li>
              </ul>
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full group"
              >
                Start Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold mb-6">Premium Guidance</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>1-on-1 Mentoring Sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Exclusive Mastermind Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary" />
                  <span>Personalized Skill Development Plan</span>
                </li>
              </ul>
              <Button 
                size="lg" 
                className="w-full bg-white text-primary hover:bg-white/90 group"
              >
                Learn More
                <Sparkles className="ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-lg opacity-90 mb-4">
              Not sure which path to take? Start with our free assessment!
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="group"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};