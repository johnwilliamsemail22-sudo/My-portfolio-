import { site } from "@/site.config";
import { useScrolled, useScrollSpy } from "@/hooks/useSiteMotion";
import { ArrowUpRight } from "./Icons";

const links = [
  { id: "top", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const sectionIds = links.map(link => link.id);

export default function Nav() {
  const scrolled = useScrolled(48);
  const active = useScrollSpy(sectionIds);

  return (
    <header className={`nav${scrolled ? " is-stuck" : ""}`}>
      <div className="nav__pill">
        <a className="nav__brand" href="#top" aria-label={`${site.name} — home`}>
          {site.name}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map(link => (
            <a
              key={link.id}
              className={`nav__link${active === link.id ? " is-active" : ""}`}
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta" href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">
          Let&rsquo;s Talk
          <ArrowUpRight size={13} />
        </a>
      </div>
    </header>
  );
}
