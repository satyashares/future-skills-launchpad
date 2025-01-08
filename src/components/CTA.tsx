import { Button } from "./ui/button";

export const CTA = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Start with our free assessment and counselling session. No commitments, just pure value.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Take Free Assessment
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Book Free Counselling
          </Button>
        </div>
      </div>
    </div>
  );
};