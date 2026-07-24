"use client";

import { ApplianceSection } from "@/components/ApplianceSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { eletrodomesticos } from "@/data/eletrodomesticos";

export function ApplianceShowcase() {
  return (
    <>
      <ScrollReveal
        as="section"
        id="inicio"
        variant="fade-up"
        className="product-section product-section--hero scroll-snap-start scroll-snap-always"
      >
        <div className="mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Mostruário
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Eletrodomésticos da Casa
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-500 sm:text-lg">
            {eletrodomesticos.length} produtos selecionados. Role para ver cada item com foto e
            medidas em destaque.
          </p>
          <p className="mt-8 text-xs text-stone-400">
            ↓ role para explorar
          </p>
        </div>
      </ScrollReveal>

      {eletrodomesticos.map((item, index) => (
        <ApplianceSection
          key={item.id}
          item={item}
          index={index}
          total={eletrodomesticos.length}
        />
      ))}

      <ScrollReveal
        as="footer"
        id="fotos"
        variant="fade-up"
        delay={80}
        className="product-section product-section--footer scroll-snap-start scroll-snap-always"
      >
      </ScrollReveal>
    </>
  );
}
