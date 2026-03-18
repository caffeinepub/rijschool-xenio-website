import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Brain, Heart, Mail, Shield, Users } from "lucide-react";

export function SpecializedSupportPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top WhatsApp Button - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <WhatsAppButton size="default" />
      </div>

      <Header />

      <main className="flex-1">
        {/* Back to Home Button */}
        <section className="py-6 px-5 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <Button asChild variant="ghost" className="gap-2">
              <Link to="/">
                <ArrowLeft className="w-5 h-5" />
                Terug naar home
              </Link>
            </Button>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6 text-primary px-2 leading-tight">
              Gespecialiseerde Ondersteuning bij Rijschool Xenio
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-7 md:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Professionele begeleiding bij rij-angst, faalangst, onzekerheid,
              ADD, ADHD en autisme. Jij verdient een rijinstructeur die jou
              begrijpt en ondersteunt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <WhatsAppButton size="lg" />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 mb-10 md:mb-12">
              <div className="w-full lg:w-1/3">
                <img
                  src="/assets/IMG_5840.jpg"
                  alt="Xenio Scholte - Gespecialiseerde rijinstructeur"
                  className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-primary leading-tight">
                  Jij bent niet alleen
                </h2>
                <div className="text-base sm:text-lg md:text-xl leading-relaxed space-y-5 md:space-y-6 px-2">
                  <p className="leading-loose">
                    Veel mensen ervaren spanning, angst of onzekerheid tijdens
                    het leren autorijden. Of je nu last hebt van rij-angst,
                    faalangst, of te maken hebt met ADD, ADHD of autisme, bij
                    Rijschool Xenio krijg je de begeleiding die perfect bij jou
                    past.
                  </p>
                  <p className="leading-loose">
                    Als NLP Master Practitioner, trainer, systemisch coach en
                    hypnotherapeut beschik ik over unieke vaardigheden om jou op
                    een rustige, begripvolle en effectieve manier te begeleiden.
                    Ik begrijp dat iedereen anders leert en dat sommige mensen
                    extra ondersteuning nodig hebben om zich veilig en
                    zelfverzekerd te voelen achter het stuur.
                  </p>
                  <p className="leading-loose">
                    Samen werken we aan jouw doelen in een tempo dat bij jou
                    past, met aandacht voor jouw specifieke behoeften en
                    uitdagingen. Mijn doel is om jou niet alleen te leren
                    rijden, maar ook om je het vertrouwen te geven dat je nodig
                    hebt om zelfstandig en veilig de weg op te gaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Support Areas */}
        <section className="py-16 md:py-20 lg:py-24 px-5 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary text-center px-2 leading-tight">
              Waar kunnen wij je mee helpen?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Bij Rijschool Xenio bieden we gespecialiseerde ondersteuning voor
              verschillende uitdagingen die je kunt ervaren tijdens het leren
              autorijden.
            </p>

            <div className="grid md:grid-cols-2 gap-7 md:gap-8">
              {/* Rij-angst */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6">
                  <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-primary leading-tight">
                  Rij-angst
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-4 leading-relaxed">
                  Rij-angst kan verschillende vormen aannemen: angst voor het
                  verkeer, angst om fouten te maken, of angst voor specifieke
                  verkeerssituaties zoals rotondes of snelwegen.
                </p>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Met mijn achtergrond als hypnotherapeut en NLP Master
                  Practitioner help ik je om deze angsten stap voor stap te
                  overwinnen. We werken in een rustig tempo, bouwen geleidelijk
                  je zelfvertrouwen op en oefenen in een veilige, begripvolle
                  omgeving.
                </p>
              </div>

              {/* Faalangst */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6">
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-primary leading-tight">
                  Faalangst
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-4 leading-relaxed">
                  Faalangst kan je belemmeren om je volledige potentieel te
                  bereiken. De angst om te falen tijdens lessen of het examen
                  kan verlammend werken en je zelfvertrouwen ondermijnen.
                </p>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Als systemisch coach help ik je om deze angst te herkennen en
                  te transformeren. We werken aan positieve denkpatronen,
                  realistische doelen en technieken om met spanning om te gaan.
                  Samen zorgen we ervoor dat je met vertrouwen naar je lessen en
                  examen toe kunt.
                </p>
              </div>

              {/* Onzekerheid */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-primary leading-tight">
                  Onzekerheid
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-4 leading-relaxed">
                  Onzekerheid achter het stuur is heel normaal, vooral in het
                  begin. Misschien twijfel je aan je eigen kunnen, voel je je
                  overweldigd door het verkeer, of ben je bang om verkeerde
                  beslissingen te nemen.
                </p>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Met geduld, positieve bekrachtiging en een gestructureerde
                  aanpak help ik je om je zelfvertrouwen op te bouwen. Elke
                  kleine stap vooruit vieren we samen, en ik zorg ervoor dat je
                  je veilig en gesteund voelt tijdens het hele leerproces.
                </p>
              </div>

              {/* ADD, ADHD en Autisme */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6">
                  <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-primary leading-tight">
                  ADD, ADHD en Autisme
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-4 leading-relaxed">
                  Leren autorijden met ADD, ADHD of autisme vraagt om een
                  aangepaste aanpak. Prikkels verwerken, concentratie vasthouden
                  en omgaan met onverwachte situaties kan extra uitdagend zijn.
                </p>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Ik pas mijn lesmethode volledig aan op jouw specifieke
                  behoeften. We werken met duidelijke structuur, heldere
                  communicatie en voldoende pauzes. Ik neem de tijd om uit te
                  leggen, herhaal waar nodig en zorg voor een rustige,
                  voorspelbare leeromgeving waarin jij je kunt ontwikkelen in je
                  eigen tempo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary text-center px-2 leading-tight">
              Mijn Gespecialiseerde Aanpak
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Als NLP Master Practitioner, trainer, systemisch coach en
              hypnotherapeut combineer ik verschillende technieken om jou
              optimaal te ondersteunen.
            </p>

            <div className="grid md:grid-cols-3 gap-7 md:gap-8 mb-12 md:mb-16">
              <div className="text-center p-7 md:p-8 bg-card rounded-lg shadow-sm border">
                <div className="text-4xl md:text-5xl mb-4">🧠</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary leading-tight">
                  NLP Technieken
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Neuro-Linguïstisch Programmeren helpt om negatieve
                  denkpatronen te doorbreken en positieve overtuigingen op te
                  bouwen.
                </p>
              </div>

              <div className="text-center p-7 md:p-8 bg-card rounded-lg shadow-sm border">
                <div className="text-4xl md:text-5xl mb-4">💆</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary leading-tight">
                  Hypnotherapie
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Ontspanningstechnieken en hypnotherapie kunnen helpen om
                  angsten te verminderen en je zelfvertrouwen te versterken.
                </p>
              </div>

              <div className="text-center p-7 md:p-8 bg-card rounded-lg shadow-sm border">
                <div className="text-4xl md:text-5xl mb-4">🤝</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary leading-tight">
                  Systemisch Coachen
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Een holistische benadering waarbij we kijken naar het grotere
                  plaatje en werken aan duurzame verandering.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-7 md:p-8 lg:p-12 rounded-lg shadow-sm border-2 border-primary/20">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-primary text-center leading-tight">
                Wat kun je verwachten?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl mt-1">
                      ✓
                    </span>
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Een veilige, begripvolle en oordeelvrije leeromgeving
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl mt-1">
                      ✓
                    </span>
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Lessen in jouw eigen tempo, zonder druk of stress
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl mt-1">
                      ✓
                    </span>
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Duidelijke communicatie en heldere uitleg
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl mt-1">
                      ✓
                    </span>
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Technieken om met spanning en angst om te gaan
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl mt-1">
                      ✓
                    </span>
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Persoonlijke aandacht en maatwerk in elke les
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl mt-1">
                      ✓
                    </span>
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Positieve bekrachtiging en opbouw van zelfvertrouwen
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl mt-1">
                      ✓
                    </span>
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Flexibele planning aangepast aan jouw behoeften
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl mt-1">
                      ✓
                    </span>
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Continue ondersteuning en begeleiding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 md:py-20 lg:py-24 px-5 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary text-center px-2 leading-tight">
              Jij kunt het ook!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Veel leerlingen met rij-angst, faalangst of ADD/ADHD hebben met
              succes hun rijbewijs gehaald bij Rijschool Xenio. Met de juiste
              begeleiding en ondersteuning is alles mogelijk.
            </p>

            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
              <div>
                <img
                  src="/assets/generated/successful-student.jpg"
                  alt="Succesvolle leerling met rijbewijs"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-6 px-2">
                <div className="bg-card p-6 md:p-7 rounded-lg shadow-sm border">
                  <p className="text-base sm:text-lg md:text-lg text-muted-foreground italic mb-4 leading-relaxed">
                    "Ik dacht dat ik nooit zou kunnen autorijden vanwege mijn
                    angst. Xenio heeft me geholpen om stap voor stap mijn
                    vertrouwen op te bouwen. Nu rijd ik zelfstandig en voel ik
                    me veilig op de weg!"
                  </p>
                  <p className="text-base sm:text-lg md:text-lg font-semibold text-primary">
                    - Voormalige leerling
                  </p>
                </div>

                <div className="bg-card p-6 md:p-7 rounded-lg shadow-sm border">
                  <p className="text-base sm:text-lg md:text-lg text-muted-foreground italic mb-4 leading-relaxed">
                    "Als iemand met ADHD had ik moeite met concentratie tijdens
                    het rijden. Xenio's aangepaste aanpak en geduld hebben het
                    verschil gemaakt. Ik heb mijn rijbewijs in één keer
                    gehaald!"
                  </p>
                  <p className="text-base sm:text-lg md:text-lg font-semibold text-primary">
                    - Voormalige leerling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-7 md:p-8 lg:p-12 rounded-lg shadow-sm border-2 border-primary/20 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-primary leading-tight">
                Klaar om te beginnen?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-7 max-w-3xl mx-auto leading-relaxed">
                Neem vandaag nog contact op voor een vrijblijvend
                kennismakingsgesprek. Samen bespreken we jouw situatie en kijken
                we hoe ik jou het beste kan ondersteunen op weg naar je
                rijbewijs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <WhatsAppButton size="lg" />
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto min-h-[48px] text-base sm:text-lg"
                >
                  <a
                    href="mailto:xenio@rijschoolxenio.nl"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    zend Email
                  </a>
                </Button>
              </div>
              <p className="text-base sm:text-lg md:text-lg text-muted-foreground mt-6">
                Bel of app: 06 53336711
              </p>
            </div>
          </div>
        </section>

        {/* Bottom WhatsApp Section */}
        <section className="bg-whatsapp text-white py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6 px-2 leading-tight">
              Jij verdient de beste begeleiding
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 mb-7 md:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Bij Rijschool Xenio krijg je de gespecialiseerde ondersteuning die
              je nodig hebt om met vertrouwen je rijbewijs te halen. Stuur ons
              een WhatsApp bericht en ontdek hoe wij jou kunnen helpen.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center px-4">
              <WhatsAppButton variant="outline" size="lg" />
              <p className="text-base sm:text-lg md:text-xl opacity-75">
                Bel of app: 06 53336711
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
