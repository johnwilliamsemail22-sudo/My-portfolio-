import type { CSSProperties } from "react";
import { site } from "@/site.config";

const tones: Record<string, { c1: string; c2: string }> = {
  blue: { c1: "#3f7bff", c2: "#16205e" },
  teal: { c1: "#25d6bd", c2: "#0a4340" },
  pink: { c1: "#ff64a6", c2: "#61102f" },
  orange: { c1: "#ff9f36", c2: "#5f2703" },
};

function ServiceArtwork({ index }: { index: number }) {
  const delay = `${index * 0.45}s`;

  return (
    <svg
      className={`svc__illustration svc__illustration--${index + 1}`}
      viewBox="0 0 240 316"
      role="presentation"
      aria-hidden="true"
      style={{ "--float-delay": delay } as CSSProperties}
    >
      {index === 0 && (
        <g className="svc__illustration-content">
          <rect x="28" y="76" width="184" height="150" rx="17" fill="#F8F1E7" />
          <path d="M28 93a17 17 0 0 1 17-17h150a17 17 0 0 1 17 17v15H28V93Z" fill="#DED2C2" />
          <circle cx="47" cy="92" r="4" fill="#D9694F" />
          <circle cx="61" cy="92" r="4" fill="#E0AD56" />
          <circle cx="75" cy="92" r="4" fill="#79A17F" />
          <rect x="43" y="123" width="72" height="81" rx="9" fill="#E8A85F" />
          <path d="M54 174c11-17 24-22 47-20v39H54v-19Z" fill="#FBDFB2" />
          <circle cx="82" cy="148" r="12" fill="#C65B42" />
          <rect x="128" y="125" width="65" height="8" rx="4" fill="#665244" />
          <rect x="128" y="143" width="48" height="6" rx="3" fill="#C8B8A5" />
          <rect x="128" y="158" width="58" height="6" rx="3" fill="#C8B8A5" />
          <rect x="128" y="179" width="47" height="18" rx="9" fill="#E88432" />
          <path className="svc__sparkle" d="M190 50v18M181 59h18" stroke="#FFF0C5" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {index === 1 && (
        <g className="svc__illustration-content" transform="rotate(-6 120 158)">
          <rect x="48" y="73" width="144" height="176" rx="15" fill="#F2E0CD" />
          <path d="M68 99h104" stroke="#B99D82" strokeWidth="2" />
          <text x="68" y="166" fill="#4A3527" fontFamily="Georgia, serif" fontSize="63" fontWeight="700" letterSpacing="-8">Aa</text>
          <text x="69" y="188" fill="#755E4C" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2">BRAND STUDY</text>
          <rect x="68" y="207" width="22" height="15" rx="4" fill="#E88657" />
          <rect x="97" y="207" width="22" height="15" rx="4" fill="#66857A" />
          <rect x="126" y="207" width="22" height="15" rx="4" fill="#E0B963" />
          <rect x="155" y="207" width="17" height="15" rx="4" fill="#4A3527" />
          <circle className="svc__sparkle" cx="183" cy="59" r="8" fill="#FFE7A5" />
        </g>
      )}

      {index === 2 && (
        <g className="svc__illustration-content">
          <rect x="34" y="78" width="172" height="157" rx="20" fill="#F4E7D4" />
          <path d="M60 103c0-10 8-18 18-18s18 8 18 18M145 103c0-10 8-18 18-18s18 8 18 18" stroke="#C98045" strokeWidth="4" strokeLinecap="round" />
          <circle cx="120" cy="161" r="59" fill="#FFFBF4" stroke="#D8C4A8" strokeWidth="4" />
          <circle cx="120" cy="161" r="43" fill="#E6B45F" />
          <circle cx="120" cy="161" r="34" fill="#C86142" />
          <path d="M101 146c9-10 20-10 29 0M105 176c10 8 20 8 30 0" stroke="#EBCB82" strokeWidth="5" strokeLinecap="round" />
          <circle cx="108" cy="159" r="4" fill="#52765B" />
          <circle cx="135" cy="164" r="4" fill="#52765B" />
          <path d="M67 131v39M60 131v13m14-13v13m-7 0v39M174 131c-8 9-8 18 0 25v14m0-39v39" stroke="#7B6350" strokeWidth="3" strokeLinecap="round" />
          <path className="svc__sparkle" d="M187 53v16m-8-8h16" stroke="#FFF0C5" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {index === 3 && (
        <g className="svc__illustration-content">
          <rect x="31" y="78" width="178" height="151" rx="18" fill="#211A17" stroke="#F4D99F" strokeOpacity=".65" strokeWidth="2" />
          <text x="49" y="107" fill="#F2E8DB" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2">SITE PERFORMANCE</text>
          <text x="49" y="146" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="29" fontWeight="700">+38%</text>
          <text x="50" y="162" fill="#BDB0A0" fontFamily="Arial, sans-serif" fontSize="8" letterSpacing="1">MORE ENQUIRIES</text>
          <path d="M49 198h145" stroke="#62564B" strokeWidth="1" />
          <path d="m51 188 27-12 24 6 23-27 21 9 20-27 25 5" stroke="#FFC264" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="191" cy="142" r="5" fill="#FFC264" />
          <circle className="svc__sparkle" cx="183" cy="61" r="8" fill="#FFC264" />
        </g>
      )}
    </svg>
  );
}

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
              <article className="svc" key={service.title}>
                <div
                  className="svc__inner"
                  data-reveal="scale"
                  style={{ "--d": `${index * 110}ms` } as CSSProperties}
                >
                  <div
                    className="svc__art"
                    style={{
                      "--c1": tone.c1,
                      "--c2": tone.c2,
                    } as CSSProperties}
                  >
                    <div className="svc__orb" />
                    <span className="svc__num">{String(index + 1).padStart(2, "0")}</span>
                    <ServiceArtwork index={index} />
                    <span className="svc__art-label" aria-hidden="true">
                      {index === 0 && "WEB"}
                      {index === 1 && "IDENTITY"}
                      {index === 2 && "HOSPITALITY"}
                      {index === 3 && "GROWTH"}
                    </span>
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
