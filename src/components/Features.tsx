import { Users, Brain, DollarSign } from "lucide-react";

export const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Future Skills School?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-muted hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mastermind Groups</h3>
            <p className="text-muted-foreground">
              Join exclusive groups of high-performers who push each other to excel and grow together.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-muted hover:shadow-lg transition-shadow">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
            <p className="text-muted-foreground">
              Get 1-on-1 mentorship tailored to your career goals and learning style.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-muted hover:shadow-lg transition-shadow">
            <DollarSign className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Free Assessment</h3>
            <p className="text-muted-foreground">
              Start with our comprehensive skills assessment to chart your path forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};