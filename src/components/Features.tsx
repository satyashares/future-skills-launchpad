import { Target, Users, Brain, Rocket, Trophy, TrendingUp } from "lucide-react";

export const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Your Gateway to High-Income Skills
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          We don't just give advice - we guide you to master the exact skills that are transforming India's job market. Join thousands of students who've already secured their future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-muted hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Users className="w-12 h-12 text-primary mb-6 animate-pulse" />
            <h3 className="text-xl font-semibold mb-4">Elite Growth Community</h3>
            <p className="text-muted-foreground">
              Connect with India's most ambitious students and professionals. Share insights, get mentored, and stay ahead of industry trends - completely free.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-muted hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Trophy className="w-12 h-12 text-primary mb-6 animate-pulse" />
            <h3 className="text-xl font-semibold mb-4">High-Performance Mastermind</h3>
            <p className="text-muted-foreground">
              Join exclusive groups of top performers. Get focused guidance and accelerate your career growth with like-minded achievers.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-muted hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <TrendingUp className="w-12 h-12 text-primary mb-6 animate-pulse" />
            <h3 className="text-xl font-semibold mb-4">1:1 Elite Guidance</h3>
            <p className="text-muted-foreground">
              Get personalized roadmaps to master future-ready skills. Reserved for serious high-performers committed to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};