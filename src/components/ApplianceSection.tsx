"use client";

import type { Eletrodomestico } from "@/data/eletrodomesticos";
import { ApplianceImage } from "./ApplianceImage";
import { ScrollReveal } from "./ScrollReveal";

function DimensaoGrid({
  altura,
  largura,
  profundidade,
  visible,
}: {
  altura?: string;
  largura?: string;
  profundidade?: string;
  visible: boolean;
}) {
  const items = [
    { key: "A", label: "Altura", value: altura },
    { key: "L", label: "Largura", value: largura },
    { key: "P", label: "Profundidade", value: profundidade },
  ].filter((item) => item.value);

  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item, chipIndex) => (
        <div
          key={item.key}
          className={`dim-chip flex flex-col items-center rounded-xl bg-white px-3 py-4 shadow-sm ring-1 ring-stone-200/80 transition-all duration-500 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{
            transitionDelay: visible ? `${140 + chipIndex * 80}ms` : "0ms",
          }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            {item.key}
          </span>
          <span className="mt-1.5 text-center text-base font-bold leading-tight text-stone-900 sm:text-lg">
            {item.value}
          </span>
          <span className="mt-1 text-[11px] text-stone-400">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function DimensaoBlock({
  dimensao,
  visible,
  index,
}: {
  dimensao: Eletrodomestico["dimensoes"][number];
  visible: boolean;
  index: number;
}) {
  return (
    <div
      className={`rounded-2xl bg-amber-50/90 p-4 ring-1 ring-amber-100 transition-all duration-500 ease-out sm:p-5 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${100 + index * 100}ms` : "0ms" }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-800">
        {dimensao.label}
      </p>

      {dimensao.raw ? (
        <p className="text-sm italic text-stone-500 sm:text-base">{dimensao.raw}</p>
      ) : (
        <DimensaoGrid
          altura={dimensao.altura}
          largura={dimensao.largura}
          profundidade={dimensao.profundidade}
          visible={visible}
        />
      )}
    </div>
  );
}

export function ApplianceSection({
  item,
  index,
  total,
}: {
  item: Eletrodomestico;
  index: number;
  total: number;
}) {
  const filename = item.imagem.split("/").pop() ?? "";
  const isEven = index % 2 === 0;
  const label = String(index + 1).padStart(2, "0");

  return (
    <ScrollReveal
      as="section"
      id={item.id}
      variant="fade-up"
      aria-labelledby={`${item.id}-title`}
      className="product-section scroll-snap-start scroll-snap-always"
    >
      {(visible) => (
        <div className="mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-16">
          <div
            className={`mb-6 flex items-center gap-3 transition-all duration-500 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span className="font-mono text-sm font-semibold text-amber-700">{label}</span>
            <span className="h-px flex-1 bg-stone-200" />
            <span className="text-xs text-stone-400">
              {index + 1} / {total}
            </span>
          </div>

          <div
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
              isEven ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            }`}
          >
            <ApplianceImage
              src={item.imagem}
              alt={item.nome}
              filename={filename}
              priority={index === 0}
            />

            <div className="space-y-6">
              <header
                className={`transition-all duration-500 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: visible ? "80ms" : "0ms" }}
              >
                <h2
                  id={`${item.id}-title`}
                  className="text-2xl font-bold leading-tight tracking-tight text-stone-900 sm:text-3xl"
                >
                  {item.nome}
                </h2>
                {item.subtitulo && (
                  <p className="mt-3 text-sm leading-relaxed text-stone-500 sm:text-base">
                    {item.subtitulo}
                  </p>
                )}
              </header>

              <div className="space-y-4">
                {item.dimensoes.map((dimensao, dimIndex) => (
                  <DimensaoBlock
                    key={dimensao.label}
                    dimensao={dimensao}
                    visible={visible}
                    index={dimIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </ScrollReveal>
  );
}
