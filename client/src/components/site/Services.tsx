import type { CSSProperties } from "react";
import { site } from "@/site.config";

const tones: Record<string, { c1: string; c2: string }> = {
  blue: { c1: "#3f7bff", c2: "#16205e" },
  teal: { c1: "#25d6bd", c2: "#0a4340" },
  pink: { c1: "#ff64a6", c2: "#61102f" },
  orange: { c1: "#ff9f36", c2: "#5f2703" },
};

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="shell">
        <h2 className="services__head" data-reveal>
          <span>What I can</span>
          <span>Help you with?</span>
        </h2>

        <div className="services__grid">
          {site.services.map((service, index) => {
            const tone = tones[service.tone] ?? tones.blue;

            return (
              <article
                className="svc"
                key={service.title}
              >
                <div
                  className="svc__inner"
                  data-reveal="scale"
                  style={{ "--d": `${index * 110}ms` } as CSSProperties}
                >
                  <div
                    className="svc__art"
                    style={{ "--c1": tone.c1, "--c2": tone.c2 } as CSSProperties}
                  >
                    <div className="svc__orb" />
                    <span className="svc__num">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="svc__foot">
                    <h3 className="svc__title">{service.title}</h3>
                    <span className="svc__caption">{service.caption}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
