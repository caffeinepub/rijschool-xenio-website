export function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-5 py-7">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-4">
            <img
              src="/assets/generated/rijschool-xenio-logo-transparent.png"
              alt="Rijschool Xenio Logo"
              className="h-20 w-auto sm:h-24 md:h-28"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight">
                Rijschool Xenio
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Jouw partner voor het rijbewijs
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
