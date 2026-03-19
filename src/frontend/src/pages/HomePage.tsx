import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Facebook, Globe, Heart, Instagram, Mail, MapPin } from "lucide-react";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top WhatsApp Button - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <WhatsAppButton size="default" />
      </div>

      <Header />

      <main className="flex-1">
        {/* Even voorstellen section - NOW AT THE TOP */}
        <section className="py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-12 text-primary text-center px-2 leading-tight">
              Even voorstellen
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 mb-10 md:mb-12">
              <div className="w-full lg:w-1/3">
                <img
                  src="/assets/IMG_5840.jpg"
                  alt="Xenio Scholte Rijinstructeur van Rijschool Xenio in de Duin en Bollenstreek"
                  className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
                />
              </div>
              <div className="w-full lg:w-2/3">
                <div className="text-base sm:text-lg md:text-xl leading-relaxed space-y-5 md:space-y-6 px-2">
                  <p className="leading-loose">
                    Hallo! Ik ben Xenio Scholte, een ervaren en gediplomeerde
                    rijinstructeur met een echte passie voor het rijonderwijs.
                    Naast bevoegd rijinstructeur ben ik ook NLP Master
                    Practitioner, trainer, systemisch coach en hypnotherapeut.
                    Al deze talenten zet ik in om je op een fijne manier de weg
                    op te helpen. Met jarenlange ervaring in het begeleiden van
                    leerlingen naar hun rijbewijs, help ik je op een ontspannen,
                    professionele en effectieve manier om een zelfverzekerde en
                    veilige bestuurder te worden.
                  </p>
                  <p className="leading-loose">
                    Bij Rijschool Xenio staat persoonlijke aandacht centraal.
                    Elke leerling is uniek, en daarom pas ik mijn lesmethode
                    volledig aan op jouw individuele leerstijl, tempo en
                    behoeften. Of je nu een beginnende bestuurder bent, je
                    rijvaardigheden wilt verbeteren, of faalangst wilt
                    overwinnen ik begeleid je stap voor stap naar succes.
                  </p>
                  <p className="leading-loose">
                    Mijn doel is niet alleen om je te leren rijden, maar ook om
                    je het vertrouwen en de vaardigheden te geven die je nodig
                    hebt om veilig en zelfstandig de weg op te gaan. Samen maken
                    we van jouw rijlessen een positieve, leerzame en succesvolle
                    ervaring!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Speciale Begeleiding Block */}
        <section className="py-16 md:py-20 lg:py-24 px-5 bg-gradient-to-r from-accent/10 to-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-card p-7 md:p-8 lg:p-12 rounded-lg shadow-lg border-2 border-accent/30">
              <div className="flex flex-col md:flex-row items-center gap-7 md:gap-10">
                <div className="md:w-1/3">
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto border-4 border-accent/30">
                    <Heart className="w-14 h-14 md:w-16 md:h-16 text-accent" />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left px-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary leading-tight">
                    Speciale Begeleiding
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-5 leading-relaxed">
                    Professionele ondersteuning bij:
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-6 leading-relaxed">
                    Rijangst • Faalangst • Onzekerheid • ADD • ADHD • Autisme
                  </p>
                  <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-6 leading-relaxed">
                    Als NLP Master Practitioner, trainer, systemisch coach en
                    hypnotherapeut beschik ik over unieke vaardigheden om jou op
                    een rustige en effectieve manier te begeleiden naar je
                    rijbewijs.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto min-h-[48px] text-base sm:text-lg font-semibold"
                  >
                    <Link to="/speciale-begeleiding">
                      Lees meer over speciale begeleiding
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-background py-16 md:py-20 lg:py-24 px-5 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/generated/driving-lesson-hero.jpg"
              alt="Rijlessen in de Duin en Bollenstreek"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6 text-primary px-2 leading-tight">
              Rijschool Xenio Duin en Bollenstreek
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-7 md:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Jouw betrouwbare rijschool voor rijlessen in Sassenheim, Voorhout,
              Lisse, Noordwijk en omgeving. Persoonlijke begeleiding, moderne
              lesauto's en flexibele lestijden.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-7 px-4">
              <div className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-medium text-primary">
                <MapPin className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                <span>Duin en Bollenstreek</span>
              </div>
              <div className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-medium text-primary">
                <Globe className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                <span>Ook lessen in het Engels</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <WhatsAppButton size="lg" />
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 md:py-20 lg:py-24 px-5 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10 md:mb-12 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary leading-tight">
                Rijlessen in de Duin en Bollenstreek
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Rijschool Xenio verzorgt professionele rijlessen in de gehele
                Duin en Bollenstreek. Wij bieden onze diensten aan in de
                volgende plaatsen:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12">
              <div className="bg-card p-3 md:p-3 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow min-h-[80px] flex flex-col justify-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base md:text-base mb-1">
                  Sassenheim
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Rijlessen in Sassenheim
                </p>
              </div>
              <div className="bg-card p-3 md:p-3 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow min-h-[80px] flex flex-col justify-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base md:text-base mb-1">
                  Voorhout
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Rijlessen in Voorhout
                </p>
              </div>
              <div className="bg-card p-3 md:p-3 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow min-h-[80px] flex flex-col justify-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base md:text-base mb-1">
                  Lisse
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Rijlessen in Lisse
                </p>
              </div>
              <div className="bg-card p-3 md:p-3 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow min-h-[80px] flex flex-col justify-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base md:text-base mb-1">
                  Rijnsburg
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Rijlessen in Rijnsburg
                </p>
              </div>
              <div className="bg-card p-3 md:p-3 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow min-h-[80px] flex flex-col justify-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base md:text-base mb-1">
                  Oegstgeest
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Rijlessen in Oegstgeest
                </p>
              </div>
              <div className="bg-card p-3 md:p-3 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow min-h-[80px] flex flex-col justify-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base md:text-base mb-1">
                  Warmond
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Rijlessen in Warmond
                </p>
              </div>
              <div className="bg-card p-3 md:p-3 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow min-h-[80px] flex flex-col justify-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base md:text-base mb-1">
                  Noordwijk
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Rijlessen in Noordwijk
                </p>
              </div>
              <div className="bg-card p-3 md:p-3 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow min-h-[80px] flex flex-col justify-center">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm sm:text-base md:text-base mb-1">
                  Noordwijkerhout
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  Rijlessen in Noordwijkerhout
                </p>
              </div>
            </div>

            <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-7">
                <div className="md:w-1/3">
                  <div className="w-24 h-24 md:w-28 md:h-28 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="w-12 h-12 md:w-14 md:h-14 text-primary" />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left px-2">
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 md:mb-4 text-primary leading-tight">
                    Jouw Lokale Rijschool in de Bollenstreek
                  </h3>
                  <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-4 md:mb-4 leading-relaxed">
                    Als ervaren rijschool in de Duin en Bollenstreek kennen wij
                    de lokale wegen, verkeerssituaties en examenroutes in
                    Sassenheim, Voorhout, Lisse, Noordwijk en omliggende
                    plaatsen als geen ander. Dit lokale voordeel helpt onze
                    leerlingen om optimaal voorbereid te zijn op hun rijexamen.
                  </p>
                  <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                    Of je nu in Rijnsburg, Oegstgeest, Warmond of
                    Noordwijkerhout woont, wij komen graag bij je in de buurt
                    rijlessen geven!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* English Lessons Section */}
        <section className="py-16 md:py-20 lg:py-24 px-5 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-7 md:p-8 lg:p-12 rounded-lg shadow-sm border-2 border-primary/20">
              <div className="flex flex-col md:flex-row items-center gap-7 md:gap-8">
                <div className="md:w-1/3">
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-4 border-primary/20">
                    <Globe className="w-14 h-14 md:w-16 md:h-16 text-primary" />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left px-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 md:mb-4 text-primary leading-tight">
                    Driving Lessons in English
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 md:mb-4 leading-relaxed">
                    Bij Rijschool Xenio bieden wij ook rijlessen aan in het
                    Engels. Of je nu internationaal bent, Engels als
                    voorkeurstaal hebt, of gewoon comfortabeler bent met Engelse
                    instructie wij helpen je graag op weg naar je Nederlandse
                    rijbewijs.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl font-medium text-primary mb-5 md:mb-6 leading-relaxed">
                    Professional driving instruction available in English
                    throughout the Duin en Bollenstreek region.
                  </p>
                  <WhatsAppButton size="lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waarom kiezen voor Rijschool Xenio */}
        <section className="py-16 md:py-20 lg:py-24 px-5 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary text-center px-2 leading-tight">
              Waarom kiezen voor Rijschool Xenio in de Duin en Bollenstreek?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Ontdek wat Rijschool Xenio uniek maakt en waarom zoveel leerlingen
              in Sassenheim, Voorhout, Lisse, Noordwijk en omgeving succesvol
              hun rijbewijs behalen met onze persoonlijke en professionele
              aanpak.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 mb-12 md:mb-16">
              <div className="text-center p-7 md:p-8 bg-card rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                  <span className="text-3xl md:text-4xl">👨‍🏫</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-4 text-primary leading-tight">
                  Persoonlijke Begeleiding
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Elke leerling krijgt individuele aandacht en een volledig op
                  maat gemaakte aanpak die perfect past bij jouw unieke
                  leerstijl, tempo en persoonlijke doelen.
                </p>
              </div>

              <div className="text-center p-7 md:p-8 bg-card rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                  <a
                    href="https://www.instagram.com/rijschoolxenio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full h-full"
                  >
                    <img
                      src="/assets/generated/instagram-logo.dim_64x64.png"
                      alt="Instagram"
                      className="w-12 h-12 md:w-14 md:h-14"
                    />
                  </a>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-4 text-primary leading-tight">
                  Volg ons op Instagram
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-5 leading-relaxed">
                  Bekijk foto's en video's van onze lessen, lesauto's en
                  succesvolle leerlingen op Instagram.
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white w-full sm:w-auto min-h-[48px] text-base sm:text-lg"
                >
                  <a
                    href="https://www.instagram.com/rijschoolxenio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                    Bezoek Instagram
                  </a>
                </Button>
              </div>

              <div className="text-center p-7 md:p-8 bg-card rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                  <span className="text-3xl md:text-4xl">⏰</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-4 text-primary leading-tight">
                  Flexibele Lestijden
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Plan je rijlessen op momenten die perfect uitkomen in jouw
                  agenda. Ook 's avonds, in het weekend en tijdens vakanties
                  zijn lessen mogelijk.
                </p>
              </div>

              <div className="text-center p-7 md:p-8 bg-card rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                  <span className="text-3xl md:text-4xl">🎯</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-4 text-primary leading-tight">
                  Hoog Slagingspercentage
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Dankzij gerichte voorbereiding, uitgebreide oefening en
                  bewezen lesmethoden hebben onze leerlingen een uitzonderlijk
                  hoog slagingspercentage.
                </p>
              </div>

              <div className="text-center p-7 md:p-8 bg-card rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                  <span className="text-3xl md:text-4xl">💰</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-4 text-primary leading-tight">
                  Transparante Prijzen
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-4 leading-relaxed">
                  Geen verborgen kosten of verrassingen. Je weet van tevoren
                  precies wat je betaalt voor je rijlessen, examens en alle
                  bijbehorende services.
                </p>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Tegoed wat overblijft krijg je netjes terug. Lessen die binnen
                  48 uur gewijzigd worden, worden in rekening gebracht.
                </p>
              </div>

              <div className="text-center p-7 md:p-8 bg-card rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                  <span className="text-3xl md:text-4xl">📱</span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-4 text-primary leading-tight">
                  Gemakkelijk Contact
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Bereik ons eenvoudig via WhatsApp voor al je vragen, het
                  inplannen van lessen, wijzigen van afspraken of gewoon voor
                  een vriendelijk advies.
                </p>
              </div>
            </div>

            {/* Visual elements */}
            <div className="grid md:grid-cols-2 gap-7 md:gap-8 mb-12 md:mb-16">
              <div className="relative">
                <img
                  src="/assets/IMG_5913.jpg"
                  alt="Moderne lesauto van Rijschool Xenio in de Bollenstreek"
                  className="rounded-lg shadow-lg w-full h-56 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                      Geen wachtlijst
                    </h4>
                    <p className="text-base sm:text-lg md:text-xl opacity-90">
                      je kunt direct beginnen
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center p-7 md:p-8 bg-card rounded-lg shadow-sm border hover:shadow-md transition-shadow flex flex-col items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                  <a
                    href="https://www.facebook.com/RijschoolXenio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full h-full"
                  >
                    <img
                      src="/assets/generated/facebook-logo@64x64-transparent.png"
                      alt="Facebook"
                      className="w-12 h-12 md:w-14 md:h-14"
                    />
                  </a>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-4 text-primary leading-tight">
                  Volg ons op Facebook
                </h3>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground mb-5 leading-relaxed">
                  Blijf op de hoogte van nieuws, updates en verhalen van onze
                  rijschool op Facebook.
                </p>
                <Button
                  asChild
                  className="bg-[#1877F2] hover:bg-[#166FE5] text-white w-full sm:w-auto min-h-[48px] text-base sm:text-lg"
                >
                  <a
                    href="https://www.facebook.com/RijschoolXenio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                    Bezoek Facebook
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Onze Aanpak */}
        <section className="py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary text-center px-2 leading-tight">
              Onze Bewezen Aanpak
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Bij Rijschool Xenio hanteren we een gestructureerde en bewezen
              aanpak die is afgestemd op moderne leerprincipes en jarenlange
              ervaring.
            </p>

            <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center mb-12 md:mb-16">
              <div className="px-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-6 text-primary leading-tight">
                  Stap voor Stap naar Succes
                </h3>
                <div className="space-y-6 md:space-y-6">
                  <div className="flex gap-4 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-base md:text-lg flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 md:mb-2 text-base sm:text-lg md:text-xl leading-tight">
                        Intake & Kennismaking
                      </h4>
                      <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                        Persoonlijk gesprek om jouw doelen, ervaring en
                        leerstijl te bepalen.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-base md:text-lg flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 md:mb-2 text-base sm:text-lg md:text-xl leading-tight">
                        Extra ondersteuning
                      </h4>
                      <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                        Wij bieden extra ondersteuning bij onzekerheid, angsten,
                        autisme en ADD/ADHD.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-base md:text-lg flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 md:mb-2 text-base sm:text-lg md:text-xl leading-tight">
                        Praktijklessen op Maat
                      </h4>
                      <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                        Individuele rijlessen aangepast aan jouw tempo en
                        leerstijl.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-base md:text-lg flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 md:mb-2 text-base sm:text-lg md:text-xl leading-tight">
                        Examen Voorbereiding
                      </h4>
                      <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                        Intensieve voorbereiding en begeleiding naar het
                        praktijkexamen.
                      </p>
                    </div>
                  </div>
                </div>
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
        </section>

        {/* Lespakketten */}
        <section className="py-16 md:py-20 lg:py-24 px-5 bg-card/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-4 text-primary text-center px-2 leading-tight">
              Onze Lespakketten
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-center mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
              Kies het pakket dat het beste bij jouw situatie en wensen past.
              Alle pakketten zijn volledig aanpasbaar aan jouw individuele
              behoeften.
            </p>

            <div className="grid md:grid-cols-2 gap-7 md:gap-8 mb-10 md:mb-12">
              {/* Pakket 1 - Basis Pakket */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5 md:mb-6 text-primary leading-tight">
                  Basis Pakket
                </h3>
                <div className="mb-5 md:mb-6">
                  <img
                    src="/assets/generated/driving-license-materials.jpg"
                    alt="Rijbewijs materialen"
                    className="w-full h-36 object-cover rounded-lg mb-4"
                  />
                </div>

                {/* Pricing highlight block for Pakket 1 */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-5 mb-5 md:mb-6">
                  <div className="text-center">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-3">
                      Pakket 1
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary leading-tight">
                      1000 lesminuten en examen €1475,-
                    </p>
                    <p className="text-sm sm:text-base md:text-base text-muted-foreground mt-2">
                      overige lessen in overleg
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 md:space-y-4 mb-7 md:mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl">
                      ✓
                    </span>
                    <span className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Uitgebreid intake gesprek en proefles
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl">
                      ✓
                    </span>
                    <span className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Praktijklessen volledig op maat
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl">
                      ✓
                    </span>
                    <span className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Intensieve praktijkexamen voorbereiding
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl">
                      ✓
                    </span>
                    <span className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Persoonlijke begeleiding naar het CBR
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl">
                      ✓
                    </span>
                    <span className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Continue voortgangsbewaking
                    </span>
                  </li>
                </ul>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Perfect voor leerlingen die stap voor stap willen leren rijden
                  met persoonlijke begeleiding en een bewezen aanpak.
                </p>
              </div>

              {/* Pakket 2 - Intensief Pakket */}
              <div className="bg-card p-7 md:p-8 rounded-lg shadow-sm border-2 border-primary hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-5 md:mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary leading-tight">
                    Intensief Pakket
                  </h3>
                  <span className="bg-primary text-primary-foreground px-3 md:px-3 py-1 rounded-full text-sm md:text-sm font-medium">
                    Populair
                  </span>
                </div>
                <div className="mb-5 md:mb-6">
                  <img
                    src="/assets/generated/driving-license-materials.jpg"
                    alt="Nederlands rijbewijs"
                    className="w-full h-36 object-cover rounded-lg mb-4"
                  />
                </div>

                {/* Pricing highlight block for Pakket 2 */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-5 mb-5 md:mb-6">
                  <div className="text-center">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-3">
                      Pakket 2
                    </h4>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary leading-tight">
                      1000 lesminuten, toets en examen €1749,-
                    </p>
                    <p className="text-sm sm:text-base md:text-base text-muted-foreground mt-2">
                      overige lessen in overleg
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 md:space-y-4 mb-7 md:mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl">
                      ✓
                    </span>
                    <span className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Uitgebreid intake gesprek en proefles
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl">
                      ✓
                    </span>
                    <span className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Extra oefenlessen en praktijktraining
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl">
                      ✓
                    </span>
                    <span className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Versnelde planning en flexibiliteit
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl">
                      ✓
                    </span>
                    <span className="text-base sm:text-lg md:text-lg leading-relaxed">
                      Professionele faalangst begeleiding
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 text-xl">
                      ✓
                    </span>
                    <span className="text-base sm:text-lg md:text-lg leading-relaxed">
                      24/7 WhatsApp ondersteuning
                    </span>
                  </li>
                </ul>
                <p className="text-base sm:text-lg md:text-lg text-muted-foreground leading-relaxed">
                  Ideaal voor leerlingen die snel hun rijbewijs willen halen met
                  maximale ondersteuning, begeleiding en flexibiliteit.
                </p>
              </div>
            </div>

            {/* Pricing Information */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-7 md:p-8 mb-7 md:mb-8 max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-6 text-primary text-center leading-tight">
                Prijzen per Les
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-6">
                <div className="bg-card p-6 md:p-6 rounded-lg shadow-sm border text-center">
                  <div className="text-4xl md:text-5xl mb-3 md:mb-3">💶</div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-primary leading-tight">
                    Losse Les
                  </h4>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                    €70
                  </p>
                  <p className="text-base sm:text-lg md:text-lg text-muted-foreground">
                    per uur
                  </p>
                </div>
                <div className="bg-card p-6 md:p-6 rounded-lg shadow-sm border text-center">
                  <div className="text-4xl md:text-5xl mb-3 md:mb-3">📦</div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-primary leading-tight">
                    Les in Pakket
                  </h4>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                    €69
                  </p>
                  <p className="text-base sm:text-lg md:text-lg text-muted-foreground">
                    per uur
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center px-4">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-6 leading-relaxed">
                Wil je meer weten over onze pakketten en prijzen? Neem contact
                op voor een persoonlijk advies!
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
            </div>
          </div>
        </section>

        {/* Bottom WhatsApp Section */}
        <section className="bg-whatsapp text-white py-16 md:py-20 lg:py-24 px-5">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6 px-2 leading-tight">
              Start vandaag nog met rijlessen in de Duin en Bollenstreek!
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 mb-7 md:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
              Stuur ons een WhatsApp bericht en ontvang binnen 24 uur een
              persoonlijk advies over je rijlessen en de mogelijkheden bij
              Rijschool Xenio in Sassenheim, Voorhout, Lisse, Noordwijk en
              omgeving. We helpen je graag op weg naar je rijbewijs met onze
              bewezen aanpak!
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
