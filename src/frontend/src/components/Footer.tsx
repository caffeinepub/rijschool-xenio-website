import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-10 px-5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <span>© 2025. Built with</span>
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-red-500 fill-current" />
            <span>using</span>
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
