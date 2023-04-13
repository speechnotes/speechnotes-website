function generateToc(targetEl){
  if (!targetEl) {
    return;
  }

  if (targetEl instanceof Element) {
    let h2elements = document.querySelectorAll("h2");

    if (!h2elements || h2elements.length==0) {
      return;
    }

    for (const h2El of h2elements) {
      if (h2El instanceof Element) {
        h2El.classList.add('sticky-top');
        if (h2El.id) {
          let newLink = document.createElement("A");
          newLink.innerText = "- " + h2El.innerText;
          newLink.setAttribute("href", "#" + h2El.id);
          newLink.classList.add('toc-leve2')
          targetEl.appendChild(newLink);
          targetEl.appendChild(document.createElement("BR"));

          let h3El = h2El.nextElementSibling;
          while (h3El && !(h3El.tagName=="H1" || h3El.tagName=="H2")) {
            if (h3El.tagName=="H3") {
              h3El.classList.add('sticky-top');
              if (h3El.id) {
                let newLink = document.createElement("A");
                newLink.innerText = "- " + h3El.innerText;
                newLink.setAttribute("href", "#" + h3El.id);
                newLink.classList.add('toc-leve3')
                targetEl.appendChild(newLink);
                targetEl.appendChild(document.createElement("BR"));
              }
            }

            h3El = h3El.nextElementSibling;
          }
        }
      }
    }
  }
}

generateToc(document.getElementById("toc"));