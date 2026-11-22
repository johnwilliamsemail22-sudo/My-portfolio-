import type { CSSProperties } from "react";
import { site } from "@/site.config";
import { ArrowUpRight } from "./Icons";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="shell about__inner">
        <p className="about__label" data-reveal>
          About
        </p>

        <div>
          <p className="about__text" data-reveal style={{ "--d": "80ms" } as CSSProperties}>
            {site.about}
          </p>

          <div
            className="about__actions"
            data-reveal
            style={{ "--d": "180ms" } as CSSProperties}
          >
            <a className="pill pill--dark" href="#work">
              See My Recent Work
              <ArrowUpRight />
            </a>
            <a className="pill pill--ghost" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
