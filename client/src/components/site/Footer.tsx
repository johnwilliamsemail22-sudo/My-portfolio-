import type { CSSProperties } from "react";
import { site } from "@/site.config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <h2 className="footer__statement" data-reveal>
            <span>Creative Mindset.</span>
            <span>Digital Skillset.</span>
            <span>Marketing Vision.</span>
          </h2>

          <div data-reveal style={{ "--d": "80ms" } as CSSProperties}>
            <h3 className="footer__col-head">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <a href="#top">Home</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>

          <div data-reveal style={{ "--d": "150ms" } as CSSProperties}>
            <h3 className="footer__col-head">Connect Me On</h3>
            <ul className="footer__links">
              <li>
                <a href={site.contact.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`}>Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <span className="footer__mark" aria-hidden="true">
        {site.name}
      </span>

      <div className="shell">
        <div className="footer__bottom">
          <span>Proudly Crafted in {site.location}</span>
          <span>©{new Date().getFullYear()} {site.name} — All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
