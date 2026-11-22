import type { CSSProperties } from "react";
import { site } from "@/site.config";

type Row = {
  items: readonly { image: string; label: string }[];
  dir: "normal" | "reverse";
  dur: string;
  tilt: string[];
};

const rows: Row[] = [
  {
    items: site.archive,
    dir: "normal",
    dur: "52s",
    tilt: ["-1.6deg", "1.2deg", "-0.8deg", "1.8deg"],
  },
  {
    items: [...site.archive].reverse(),
    dir: "reverse",
    dur: "64s",
    tilt: ["1.4deg", "-1.8deg", "1deg", "-1.2deg"],
  },
];

export default function Archive() {
  return (
    <section className="archive" aria-labelledby="archive-title">
      <div className="archive__watermark" id="archive-title" aria-hidden="true">
        <span>
          Visual
          <br />
          Archive
        </span>
      </div>

      <div className="archive__rows">
        {rows.map((row, rowIndex) => (
          <div className="marquee" key={rowIndex}>
            <div
              className="marquee__track"
              style={{ "--dir": row.dir, "--dur": row.dur } as CSSProperties}
            >
              {[0, 1].map(pass =>
                row.items.map((item, index) => (
                  <figure
                    className="marquee__item"
                    key={`${pass}-${item.label}`}
                    style={{ "--tilt": row.tilt[index % row.tilt.length] } as CSSProperties}
                  >
                    <img src={item.image} alt={`${item.label} project artwork`} loading="lazy" />
                    <figcaption className="marquee__tag">{item.label}</figcaption>
                  </figure>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
