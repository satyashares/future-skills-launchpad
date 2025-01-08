import { Users, Brain, DollarSign } from "lucide-react";

export const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Your Path to Career Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-muted hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Future Leaders Community</h3>
            <p className="text-muted-foreground">
              Join our free career growth community. Learn from peers, share insights, and stay ahead of industry trends.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-muted hover:shadow-lg transition-shadow">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Elite Mastermind Groups</h3>
            <p className="text-muted-foreground">
              Premium groups for high-performers. Get focused guidance and accelerate your career growth with like-minded achievers.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-muted hover:shadow-lg transition-shadow">
            <DollarSign className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">1:1 Career Guidance</h3>
            <p className="text-muted-foreground">
              Personalized mentorship to identify your ideal career path and the skills needed to succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};