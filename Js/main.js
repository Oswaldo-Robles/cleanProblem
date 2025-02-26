function ajustarTexto() {
    let p = document.querySelector(".logoSubtitle");
    if (window.innerWidth < 700) {
      p.innerHTML = "Con Clean Problem, <br> Limpiamos tu problema";
    } else {
      p.innerHTML = "Con Clean Problem, Limpiamos tu problema";
    }
  }

  window.addEventListener("resize", ajustarTexto);
  window.addEventListener("load", ajustarTexto);