function ajustarTexto() {
    let p = document.querySelector(".logoSubtitle");
    if (window.innerWidth < 700) {
      p.innerHTML = " con <b> Clean Problem, </b> <br> Limpiamos tu problema";
    } else {
      p.innerHTML = "con <b> Clean Problem, </b> Limpiamos tu problema";
    }
  }

  window.addEventListener("resize", ajustarTexto);
  window.addEventListener("load", ajustarTexto);