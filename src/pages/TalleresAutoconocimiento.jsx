import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import talleresHeroImg from "../assets/optimized/talleres-hero.webp";
import portraitImg from "../assets/optimized/sobre-mi-portrait.webp";

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=34625183735&text=Hola%20Lola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20talleres%20de%20autoconocimiento.";

const pains = [
  "Sientes ansiedad o angustia y no sabes realmente por qué.",
  "Tu cabeza no para y te cuesta salir de los mismos pensamientos.",
  "Te sientes atrapada en situaciones o relaciones que te hacen sufrir.",
  "Te cuesta tomar decisiones y dudas constantemente de ti misma.",
  "Sabes que necesitas cambiar algo en tu vida, pero no sabes por dónde empezar.",
];

const benefits = [
  "Sentirte más en calma contigo misma.",
  "Dejar de vivir en bucle con tus pensamientos.",
  "Comprender lo que hay detrás de tu sufrimiento.",
  "Relacionarte contigo desde un lugar más sano.",
  "Empezar a tomar decisiones con más claridad y seguridad.",
];

function WhatsappButton({ children, light = false }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
        light
          ? "bg-[#f8f4ed] text-[#26302c] hover:shadow-black/15"
          : "bg-[#8f9e8d] text-white hover:bg-[#7d8d7b] hover:shadow-[#738572]/25"
      }`}
    >
      <MessageCircle className="h-4 w-4" />
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export default function TalleresAutoconocimiento() {
  useEffect(() => {
    document.title = "Talleres de autoconocimiento | Lola Montes";
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#faf8f4] text-[#26302c]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <p className="font-heading text-2xl font-medium tracking-wide text-[#26302c] md:text-3xl">
            Lola Montes
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir a Lola por WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#26302c]/15 bg-white/60 text-[#26302c] backdrop-blur-sm transition-colors hover:bg-white"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </header>

      <main>
        <section className="relative min-h-[94vh] overflow-hidden">
          <img
            src={talleresHeroImg}
            alt="Talleres de autoconocimiento con Lola Montes"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,244,0.98)_0%,rgba(250,248,244,0.93)_43%,rgba(250,248,244,0.62)_72%,rgba(250,248,244,0.36)_100%)]" />
          <div className="relative z-10 mx-auto flex min-h-[94vh] max-w-7xl items-center px-6 pb-20 pt-28 lg:px-10">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-xs font-medium uppercase tracking-[0.24em] text-[#70826e]"
              >
                Talleres de autoconocimiento
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="mt-6 max-w-3xl font-heading text-5xl font-light leading-[0.98] md:text-7xl lg:text-[5.5rem]"
              >
                Empieza a entender lo que te pasa y aprende a vivir lo que
                sientes de una forma diferente
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16 }}
                className="mt-7 max-w-2xl text-base leading-relaxed text-[#59635f] md:text-xl"
              >
                Talleres prácticos para comprender por qué te sientes así,
                salir del sufrimiento que te mantiene atrapada y empezar a
                cambiar tu vida.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24 }}
                className="mt-9"
              >
                <WhatsappButton>Quiero entender lo que me pasa</WhatsappButton>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <AnimatedSection>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#70826e]">
                Quizá te reconoces aquí
              </p>
              <h2 className="mt-4 max-w-2xl font-heading text-4xl font-light leading-tight md:text-5xl">
                Puede que te pase algo de esto...
              </h2>
            </AnimatedSection>
            <div className="mt-10 divide-y divide-[#d8d7cf] border-y border-[#d8d7cf]">
              {pains.map((pain, index) => (
                <AnimatedSection key={pain} delay={index * 0.04}>
                  <div className="flex items-start gap-5 py-5 md:py-6">
                    <span className="font-heading text-2xl text-[#9b755c]">
                      0{index + 1}
                    </span>
                    <p className="max-w-3xl text-base leading-relaxed text-[#59635f] md:text-lg">
                      {pain}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eef0eb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <AnimatedSection>
              <Sparkles className="mx-auto h-6 w-6 text-[#8f9e8d]" />
              <h2 className="mt-5 font-heading text-4xl font-light leading-tight md:text-6xl">
                Si te reconoces en esto, no te pasa nada raro.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#59635f] md:text-xl">
                Simplemente hay cosas dentro de ti que todavía no has podido
                comprender.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20 lg:px-10">
            <AnimatedSection>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#70826e]">
                Un primer cambio posible
              </p>
              <h2 className="mt-4 font-heading text-4xl font-light leading-tight md:text-5xl">
                A través de estos talleres podrás
              </h2>
              <p className="mt-5 leading-relaxed text-[#69736f]">
                Empezar a mirarte con curiosidad y comprensión, sin exigirte
                tener todas las respuestas desde el primer día.
              </p>
            </AnimatedSection>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit} delay={index * 0.04}>
                  <div className="flex items-start gap-4 border-b border-[#d8d7cf] pb-4">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#e5ebe3] text-[#70826e]">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="text-base leading-relaxed text-[#59635f] md:text-lg">
                      {benefit}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
            <AnimatedSection>
              <img
                src={portraitImg}
                alt="Lola Montes"
                className="aspect-[4/5] w-full object-cover shadow-[0_24px_60px_rgba(38,48,44,0.12)]"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#70826e]">
                Mi historia
              </p>
              <h2 className="mt-4 font-heading text-4xl font-light md:text-5xl">
                Hola, soy Lola.
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-[#59635f]">
                <p>
                  Durante muchos años, yo también sentí ansiedad, confusión y
                  esa sensación de no entender por qué me pasaba lo que me
                  pasaba.
                </p>
                <p>
                  Buscaba respuestas, leía e investigaba, pero sentía que no
                  terminaba de encontrar algo que realmente me ayudara a
                  comprenderme de verdad.
                </p>
                <p>
                  Con el tiempo entendí algo que lo cambió todo: no se trata
                  solo de gestionar lo que te pasa, sino de comprender de dónde
                  viene y comprenderte de verdad.
                </p>
                <p>
                  He creado estos talleres como un espacio práctico y cercano,
                  donde puedas entender lo que te sucede y empezar a generar
                  cambios reales en tu vida.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-[#e9e0d5] py-20 text-center lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <AnimatedSection>
              <Heart className="mx-auto h-6 w-6 text-[#9b755c]" />
              <h2 className="mt-5 font-heading text-4xl font-light leading-tight md:text-6xl">
                Lo que te pasa tiene un sentido, aunque todavía no lo entiendas
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#59635f] md:text-xl">
                Cuando empiezas a comprenderlo, puedes empezar a transformarlo.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="bg-[#26302c] py-20 text-center text-[#f8f4ed] lg:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <AnimatedSection>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#f8f4ed]/72 md:text-xl">
                Si has llegado hasta aquí, es porque una parte de ti ya está
                buscando entender lo que te pasa.
              </p>
              <div className="mt-9">
                <WhatsappButton light>Quiero empezar mi proceso</WhatsappButton>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-[#f8f4ed]/50">
                Escríbeme por WhatsApp y te cuento todos los detalles.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir a Lola por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#70826e] text-white shadow-[0_12px_30px_rgba(61,79,60,0.30)] transition-transform hover:scale-105 md:hidden"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
