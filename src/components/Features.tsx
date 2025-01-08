import { Brain, Users, Trophy, Target, Rocket, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Features = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Path to High-Income Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop following the crowd. Get expert guidance to master the exact future-ready and STEM skills that are creating the next generation of high-performers across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-xl bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Brain className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-semibold mb-4">Skills Assessment</h3>
            <p className="text-muted-foreground mb-6">
              Get crystal-clear guidance on which future-ready skills align perfectly with your strengths and goals. Start with our proven assessment framework.
            </p>
            <Button variant="ghost" className="group">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="p-8 rounded-xl bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Users className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-semibold mb-4">Elite Network</h3>
            <p className="text-muted-foreground mb-6">
              Join India's most ambitious community of future skill seekers. Share insights, get mentored, and accelerate your growth journey.
            </p>
            <Button variant="ghost" className="group">
              Join Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="p-8 rounded-xl bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Trophy className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-semibold mb-4">Premium Guidance</h3>
            <p className="text-muted-foreground mb-6">
              For serious achievers: Get personalized mentoring and join exclusive mastermind groups to fast-track your success journey.
            </p>
            <Button variant="ghost" className="group">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Choose Future Skills?</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Proven Framework</h4>
                    <p className="text-muted-foreground">Our skill assessment framework has helped thousands identify their perfect path.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fast Implementation</h4>
                    <p className="text-muted-foreground">Get actionable guidance to start building your skills immediately.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Elite Community</h4>
                    <p className="text-muted-foreground">Connect with ambitious peers who are already succeeding with future skills.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl animate-pulse" />
              <div className="relative bg-white p-8 rounded-xl shadow-xl">
                <h4 className="text-2xl font-bold mb-6">Start Your Journey Today</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <p>Free Skills Assessment</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <p>Personalized Roadmap</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <p>Community Access</p>
                  </div>
                  <Button className="w-full mt-6 group">
                    Get Started Free
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};