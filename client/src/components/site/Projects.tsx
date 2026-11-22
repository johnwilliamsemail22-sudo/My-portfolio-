import type { CSSProperties } from "react";
import { site } from "@/site.config";
import { ArrowUpRight } from "./Icons";

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="shell">
        <div className="projects__top">
          <div>
            <span className="projects__eyebrow" data-reveal>
              Recent projects
            </span>
            <h2 className="projects__title" data-reveal style={{ "--d": "80ms" } as CSSProperties}>
              Beyond the
              <br />
              <span>Visuals</span>
            </h2>
          </div>
          <p className="projects__aside" data-reveal style={{ "--d": "160ms" } as CSSProperties}>
            Four live builds for restaurants, cafés and mobility brands — each one designed, coded and
            shipped. Open any card to walk through the real site.
          </p>
        </div>

        <div className="projects__grid">
          {site.projects.map((project, index) => (
            <a
              className="proj"
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              style={{ "--d": `${index * 90}ms` } as CSSProperties}
            >
              <div className="proj__media">
                <img src={project.image} alt={`${project.name} website homepage`} loading="lazy" />
                <div className="proj__hover" aria-hidden="true">
                  <span>
                    Visit live site
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>

              <div className="proj__meta">
                <div>
                  <h3 className="proj__name">{project.name}</h3>
                  <p className="proj__cat">
                    {project.category} · {project.location}
                  </p>
                  <p className="proj__note">{project.note}</p>
                </div>
                <span className="proj__arrow" aria-hidden="true">
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
