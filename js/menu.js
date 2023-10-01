export default function activarMenu(menu, menuBtn) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
      d.querySelector(menuBtn).firstElementChild.classList.toggle("none");
      d.querySelector(menuBtn).lastElementChild.classList.toggle("none");
      d.querySelector(menu).classList.toggle("is-active");
    }

    if (e.target.matches(menu) || e.target.matches(`${menu} *`)) {
      d.querySelector(menuBtn).firstElementChild.classList.remove("none");
      d.querySelector(menuBtn).lastElementChild.classList.add("none");
      d.querySelector(menu).classList.remove("is-active");
    }
  });
}
/* Before event delegation
 const $btnMenu = d.querySelector(".menu-btn"),
   $menu = d.querySelector(".menu");

 $btnMenu.addEventListener("click", (e) => {
   $btnMenu.firstElementChild.classList.toggle("none");
   $btnMenu.lastElementChild.classList.toggle("none");
   $menu.classList.toggle("is-active");
 });
 d.addEventListener("click", (e) => {   if (!e.target.matches(".menu a")) return false;

   $btnMenu.firstElementChild.classList.remove("none");
   $btnMenu.lastElementChild.classList.add("none");
   $menu.classList.remove("is-active");
 });
*/
