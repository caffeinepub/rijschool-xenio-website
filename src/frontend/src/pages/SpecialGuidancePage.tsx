import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Brain,
  CheckCircle,
  Heart,
  Mail,
  Shield,
  Target,
} from "lucide-react";

export function SpecialGuidancePage() {
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
              Speciale begeleiding bij rijangst, faalangst en
              concentratieproblemen
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-7 md:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Bij Rijschool Xenio krijg je de persoonlijke aandacht en
              professionele begeleiding die je nodig hebt om met vertrouwen je
              rijbewijs te halen, ook bij rijangst, faalangst, onzekerheid, ADD,
              ADHD of autisme.
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
                  alt="Xenio Scholte - Rijinstructeur met specialisatie in rijangst en faalangst"
                  className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
                />
              </div>
              <div className="w-full lg:w-2/3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-primary leading-tight">
                  Begeleiding die écht werkt
                </h2>
                <div className="text-base sm:text-lg md:text-xl leading-relaxed space-y-5 md:space-y-6 px-2">
                  <p className="leading-loose">
                    Heb je last van rijangst, faalangst of
                    concentratieproblemen? Dan ben je niet alleen. Veel mensen
                    ervaren spanning, onzekerheid of angst tijdens het leren
                    autorijden. Bij Rijschool Xenio begrijpen we dat iedereen
                    anders leert en dat sommige mensen extra ondersteuning nodig
                    hebben.
                  </p>
                  <p className="leading-loose">
                    Als NLP Master Practitioner, trainer, systemisch coach en
                    hypnotherapeut beschik ik over unieke vaardigheden om jou op
                    een rustige, begripvolle en effectieve manier te begeleiden.
                    Ik combineer jarenlange ervaring als rijinstructeur met
                    professionele coaching technieken om jou te helpen je
                    angsten te overwinnen en je zelfvertrouwen op te bouwen.
                  </p>
                  <p className="leading-loose">
                    Of je nu te maken hebt met rijangst, faalangst, onzekerheid,
                    ADD, ADHD of autisme, bij Rijschool Xenio krijg je de
                    persoonlijke begeleiding die perfect bij jou past. Samen
                    werken we aan jouw doelen in een tempo dat bij jou past,
                    zonder druk of stress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Support Areas */}
        <section className="py-16 md:py-20 lg:py-24 px-5 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary text-center px-2 leading-tight">
              Speciale begeleiding bij
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Rijschool Xenio biedt professionele ondersteuning voor
              verschillende uitdagingen die je kunt ervaren tijdens het leren
              autorijden.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
              {/* Rijangst */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6 mx-auto">
                  <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-primary text-center leading-tight">
                  Rijangst
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground text-center leading-relaxed">
                  Angst voor het verkeer, voor fouten maken of voor specifieke
                  verkeerssituaties. Met hypnotherapie en NLP technieken help ik
                  je deze angsten stap voor stap te overwinnen.
                </p>
              </div>

              {/* Faalangst */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6 mx-auto">
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-primary text-center leading-tight">
                  Faalangst
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground text-center leading-relaxed">
                  Angst om te falen tijdens lessen of het examen. Als systemisch
                  coach help ik je om positieve denkpatronen te ontwikkelen en
                  met vertrouwen naar je examen toe te gaan.
                </p>
              </div>

              {/* Onzekerheid */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6 mx-auto">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-primary text-center leading-tight">
                  Onzekerheid
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground text-center leading-relaxed">
                  Twijfel aan je eigen kunnen en overweldigd voelen door het
                  verkeer. Met geduld en positieve bekrachtiging bouwen we samen
                  je zelfvertrouwen op.
                </p>
              </div>

              {/* ADD */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6 mx-auto">
                  <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-primary text-center leading-tight">
                  ADD
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground text-center leading-relaxed">
                  Moeite met concentratie en aandacht vasthouden. Ik pas mijn
                  lesmethode aan met duidelijke structuur, heldere communicatie
                  en voldoende pauzes.
                </p>
              </div>

              {/* ADHD */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6 mx-auto">
                  <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-primary text-center leading-tight">
                  ADHD
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground text-center leading-relaxed">
                  Prikkels verwerken en impulsiviteit beheersen tijdens het
                  rijden. We werken in jouw tempo met een rustige, voorspelbare
                  leeromgeving.
                </p>
              </div>

              {/* Autisme */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6 mx-auto">
                  <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-primary text-center leading-tight">
                  Autisme
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground text-center leading-relaxed">
                  Omgaan met onverwachte situaties en prikkels verwerken. Ik
                  neem de tijd om uit te leggen, herhaal waar nodig en zorg voor
                  duidelijkheid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Advice Section */}
        <section className="py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary text-center px-2 leading-tight">
              Hoe werkt de speciale begeleiding?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Bij Rijschool Xenio combineer ik professionele coaching technieken
              met rijinstructie om jou optimaal te ondersteunen.
            </p>

            <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-12 md:mb-16">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-base md:text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-base sm:text-lg md:text-xl leading-tight">
                      Kennismakingsgesprek
                    </h4>
                    <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                      We beginnen met een uitgebreid gesprek waarin we jouw
                      specifieke situatie, uitdagingen en doelen bespreken. Dit
                      helpt mij om de lessen perfect op jou af te stemmen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-base md:text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-base sm:text-lg md:text-xl leading-tight">
                      Persoonlijk Lesplan
                    </h4>
                    <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                      Op basis van het kennismakingsgesprek stel ik een
                      persoonlijk lesplan op dat rekening houdt met jouw
                      leerstijl, tempo en specifieke behoeften.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-base md:text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-base sm:text-lg md:text-xl leading-tight">
                      Aangepaste Lessen
                    </h4>
                    <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                      Tijdens de lessen werk ik met technieken uit NLP,
                      hypnotherapie en systemisch coachen om je te helpen
                      angsten te overwinnen en je zelfvertrouwen op te bouwen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-base md:text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-base sm:text-lg md:text-xl leading-tight">
                      Continue Ondersteuning
                    </h4>
                    <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                      Je krijgt continue ondersteuning en begeleiding, ook
                      tussen de lessen door. Via WhatsApp ben ik bereikbaar voor
                      vragen en ondersteuning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-7 md:p-8 rounded-lg shadow-sm border-2 border-primary/20">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-primary leading-tight">
                  Wat maakt mijn aanpak uniek?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      <strong>NLP Master Practitioner:</strong> Technieken om
                      negatieve denkpatronen te doorbreken en positieve
                      overtuigingen op te bouwen.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      <strong>Hypnotherapeut:</strong> Ontspanningstechnieken om
                      angsten te verminderen en je zelfvertrouwen te versterken.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      <strong>Systemisch Coach:</strong> Holistische benadering
                      waarbij we kijken naar het grotere plaatje en werken aan
                      duurzame verandering.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-base sm:text-lg md:text-lg leading-relaxed">
                      <strong>Ervaren Trainer:</strong> Jarenlange ervaring in
                      het begeleiden van mensen met verschillende uitdagingen en
                      leerstijlen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 lg:py-24 px-5 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary text-center px-2 leading-tight">
              Wat kun je verwachten?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Bij Rijschool Xenio krijg je een veilige, begripvolle leeromgeving
              waarin je in jouw eigen tempo kunt groeien.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border text-center">
                <div className="text-4xl md:text-5xl mb-4">🛡️</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary leading-tight">
                  Veilige Omgeving
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Een oordeelvrije, begripvolle leeromgeving waarin je je veilig
                  en gesteund voelt.
                </p>
              </div>

              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border text-center">
                <div className="text-4xl md:text-5xl mb-4">⏱️</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary leading-tight">
                  Jouw Tempo
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Lessen in jouw eigen tempo, zonder druk of stress. We nemen de
                  tijd die je nodig hebt.
                </p>
              </div>

              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border text-center">
                <div className="text-4xl md:text-5xl mb-4">💬</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary leading-tight">
                  Duidelijke Communicatie
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Heldere uitleg en duidelijke instructies die aansluiten bij
                  jouw manier van leren.
                </p>
              </div>

              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border text-center">
                <div className="text-4xl md:text-5xl mb-4">🧘</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary leading-tight">
                  Ontspanningstechnieken
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Praktische technieken om met spanning en angst om te gaan
                  tijdens het rijden.
                </p>
              </div>

              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border text-center">
                <div className="text-4xl md:text-5xl mb-4">👤</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary leading-tight">
                  Persoonlijke Aandacht
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Volledige focus op jou en jouw ontwikkeling, met maatwerk in
                  elke les.
                </p>
              </div>

              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border text-center">
                <div className="text-4xl md:text-5xl mb-4">💪</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary leading-tight">
                  Zelfvertrouwen
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Positieve bekrachtiging en opbouw van zelfvertrouwen bij elke
                  stap vooruit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary text-center px-2 leading-tight">
              Speciale begeleiding in de Duin- en Bollenstreek
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Rijschool Xenio biedt gespecialiseerde rijlessen in de gehele
              Duin- en Bollenstreek, inclusief Sassenheim, Voorhout, Lisse,
              Noordwijk, Rijnsburg, Oegstgeest, Warmond en Noordwijkerhout.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-7 md:p-8 lg:p-12 rounded-lg shadow-sm border-2 border-primary/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-primary leading-tight">
                    Lokale expertise
                  </h3>
                  <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-4 leading-relaxed">
                    Als ervaren rijschool in de Duin- en Bollenstreek kennen we
                    de lokale wegen, verkeerssituaties en examenroutes als geen
                    ander. Dit lokale voordeel helpt onze leerlingen om optimaal
                    voorbereid te zijn.
                  </p>
                  <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                    Of je nu in Sassenheim, Voorhout, Lisse, Noordwijk,
                    Rijnsburg, Oegstgeest, Warmond of Noordwijkerhout woont, wij
                    komen graag bij je in de buurt rijlessen geven met de
                    speciale begeleiding die je nodig hebt.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/generated/successful-student.jpg"
                    alt="Succesvolle leerling met rijbewijs"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 lg:py-24 px-5 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-7 md:p-8 lg:p-12 rounded-lg shadow-sm border-2 border-primary/20 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-primary leading-tight">
                Neem contact op voor maatwerk rijlessen
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-7 max-w-3xl mx-auto leading-relaxed">
                Wil je meer weten over de speciale begeleiding bij Rijschool
                Xenio? Neem vandaag nog contact op voor een vrijblijvend
                kennismakingsgesprek. Samen bespreken we jouw situatie en kijken
                we hoe ik jou het beste kan ondersteunen op weg naar je
                rijbewijs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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
              <p className="text-base sm:text-lg md:text-lg text-muted-foreground">
                Bel of app: 06 53336711
              </p>
            </div>
          </div>
        </section>

        {/* Bottom WhatsApp Section */}
        <section className="bg-whatsapp text-white py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6 px-2 leading-tight">
              Start vandaag met rijlessen op maat
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 mb-7 md:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Bij Rijschool Xenio krijg je de gespecialiseerde begeleiding die
              je nodig hebt om met vertrouwen je rijbewijs te halen. Stuur ons
              een WhatsApp bericht en ontdek hoe wij jou kunnen helpen bij
              rijangst, faalangst, onzekerheid, ADD, ADHD of autisme.
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
