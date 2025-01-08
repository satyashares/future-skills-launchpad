import { Target, Users, Brain, Rocket, Trophy, TrendingUp } from "lucide-react";

export const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Your Path to High-Income Skills
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          Stop following the crowd. Get expert guidance to master the exact future-ready and STEM skills that are creating the next generation of high-performers across India.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-muted hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Brain className="w-12 h-12 text-primary mb-6 animate-pulse" />
            <h3 className="text-xl font-semibold mb-4">Future Skills Mastery</h3>
            <p className="text-muted-foreground">
              Get crystal-clear guidance on which future-ready skills align with your strengths and goals. Start your journey with a free career assessment.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-muted hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Users className="w-12 h-12 text-primary mb-6 animate-pulse" />
            <h3 className="text-xl font-semibold mb-4">Elite Growth Network</h3>
            <p className="text-muted-foreground">
              Join India's most ambitious community of future skill seekers. Share insights, get mentored, and accelerate your growth - completely free.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-muted hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Trophy className="w-12 h-12 text-primary mb-6 animate-pulse" />
            <h3 className="text-xl font-semibold mb-4">High-Performance Guidance</h3>
            <p className="text-muted-foreground">
              For serious achievers only: Get personalized mentoring and join exclusive mastermind groups to fast-track your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};