import { site } from "@/site.config";
import { useHeroParallax } from "@/hooks/useSiteMotion";

export default function Hero() {
  const heroRef = useHeroParallax();

  return (
    <section className="hero" id="top" ref={heroRef}>
      <h1 className="hero__name" aria-label={site.name}>
        {site.name}
      </h1>

      <div className="hero__sun sun-1" aria-hidden="true">
        <img src="/assets/sunflower.webp" alt="" />
      </div>
      <div className="hero__sun sun-2" aria-hidden="true">
        <img src="/assets/sunflower.webp" alt="" />
      </div>
      <div className="hero__sun sun-3" aria-hidden="true">
        <img src="/assets/sunflower.webp" alt="" />
      </div>
      <div className="hero__sun sun-4" aria-hidden="true">
        <img src="/assets/sunflower.webp" alt="" />
      </div>

      <div className="hero__intro">
        <p className="hero__greeting">{site.intro.greeting}</p>
        <p className="hero__who">{site.intro.headline}</p>
        <p className="hero__line">{site.intro.positioning}</p>
      </div>

      <div className="hero__portrait-wrap">
        <img
          className="hero__portrait"
          src="/assets/portrait.webp"
          alt={`${site.name}, ${site.role}`}
          width={1400}
          height={1316}
          fetchPriority="high"
        />
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
        Scroll
      </div>
    </section>
  );
}
