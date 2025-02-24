function ajustarTexto() {
    let p = document.querySelector(".logoSubtitle");
    if (window.innerWidth < 700) {
      p.innerHTML = "Eliminamos el problema, <br> garantizamos la limpieza";
    } else {
      p.innerHTML = "Eliminamos el problema, garantizamos la limpieza";
    }
  }

  window.addEventListener("resize", ajustarTexto);
  window.addEventListener("load", ajustarTexto);