import type { CSSProperties } from "react";
import { site } from "@/site.config";
import { ArrowUpRight } from "./Icons";

export default function CtaBand() {
  const mailto = `mailto:${site.contact.email}?subject=Let%27s%20work%20together`;

  return (
    <section className="cta" id="contact">
      <div className="cta__glow cta__glow--a" aria-hidden="true" />
      <div className="cta__glow cta__glow--b" aria-hidden="true" />

      <div className="shell cta__inner">
        <h2 className="cta__title" data-reveal>
          Great Things
          <br />
          Begin Together.
        </h2>

        <p className="cta__sub" data-reveal style={{ "--d": "90ms" } as CSSProperties}>
          From a first sketch to a site that is live and earning — let&rsquo;s make something meaningful
          happen for your business.
        </p>

        <div data-reveal style={{ "--d": "170ms" } as CSSProperties}>
          <a className="pill pill--light" href={mailto}>
            Let&rsquo;s Connect
            <ArrowUpRight />
          </a>
        </div>

        <a className="cta__mail" href={mailto}>
          {site.contact.email}
        </a>
      </div>
    </section>
  );
}
