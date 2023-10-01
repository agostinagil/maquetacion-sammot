import heroImage from "./hero_image.js";
import activarMenu from "./menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  activarMenu(".menu", ".menu-btn");
  heroImage(
    "intro",
    "(min-width: 768px)",
    `<article class="bio-title">
      <img src="assets/logo.PNG" alt="" />
    </article>`,
    ` <section class="home">
      <article
        class="hero-image"
        style="
          --hero-image: url(assets/heroImageParty.jpeg);
          --hero-attachment: fixed;
        "
      >
        <aside
          class="hero-image-opacity"
          style="--hero-opacity-color: var(--black-alpha-color)"
        >
          <a href="#tour" class="btn">PRÓXIMAS FECHAS</a>
        </aside>
      </article>
    </section>`
  );
});
