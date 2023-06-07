class UI {
  constructor(containerHtml = undefined) {
    this.containerHtml = containerHtml;
    this.headerContainer = undefined;
    this.initUISection();
  }

  initUISection() {
    this.headerContainer = document.createElement("HEADER");
    this.containerHtml.appendChild(this.headerContainer);

    this.divButtonContainer = document.createElement("DIV");
    this.containerHtml.appendChild(this.divButtonContainer);

    this.divCardsProductContainer = document.createElement("DIV");
    this.containerHtml.appendChild(this.divCardsProductContainer);
  }

  showHeader(title = "") {
    if (!this.headerContainer) return;

    this.headerContainer.className = "header";

    const h1Text = document.createElement("H1");
    h1Text.className = "text-center text-white font-6rem mb-2rem";
    h1Text.textContent = title;

    this.headerContainer.appendChild(h1Text);
  }

  showButtons(buttons = [], callback = () => {}) {
    if (!this.divButtonContainer) return;

    this.divButtonContainer.className = "flex-row flex-align-center flex-gap-2 ";

    buttons.forEach((button) => {
      const buttonItem = document.createElement("BUTTON");
      buttonItem.className = "padding-2 button";

      buttonItem.textContent = button;
      buttonItem.onclick = function () {
        callback(button);
      };

      this.divButtonContainer.appendChild(buttonItem);
    });
  }

  showCards(cards = []) {
    if (!this.divCardsProductContainer) return;

    this.divCardsProductContainer.className = "container-grid";
    this.limpiarHTML(this.divCardsProductContainer);

    // this.removeClassStyle(
    //   this.divCardsProductContainer.childNodes,
    //   "filter-item"
    // );

    cards.forEach((card) => {
      const {
        name,
        imagen,
        description,
        activeFilter = false,
        filterProduct = false
      } = card;

      const cardContainer = document.createElement("DIV");
      cardContainer.classList.add("card");

       if (activeFilter) {
         cardContainer.classList.add("active-Filter");
      }
      
      if (activeFilter && filterProduct) {
        cardContainer.classList.add("filter-item");
      }

     

      const imagenEl = document.createElement("IMG");
      imagenEl.className = "card__imagen";
      imagenEl.src = imagen;
      imagenEl.alt = "Imagen Cards";
      cardContainer.appendChild(imagenEl);

      const cardInfo = document.createElement("DIV");
      cardInfo.className = "card__info";

      const spanEL = document.createElement("SPAN");
      spanEL.className = "card__title";
      spanEL.textContent = name;
      cardInfo.appendChild(spanEL);

      const pDescriptionEl = document.createElement("P");
      pDescriptionEl.className = "card__description";
      pDescriptionEl.textContent = description;
      cardInfo.appendChild(pDescriptionEl);

      cardContainer.appendChild(cardInfo);
      this.divCardsProductContainer.appendChild(cardContainer);
    });
  }

  limpiarHTML(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }

  removeClassStyle(childNodes = [], className = "") {
    childNodes.forEach((children) => {
      if (children.classList.contains(className)) {
        children.classList.remove(className);
      }
    });
  }
}

export default UI;
