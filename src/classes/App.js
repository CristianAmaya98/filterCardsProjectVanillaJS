import { OptionsButtons, data } from "../filter-const";
import { containerApp } from "../selectores";
import UI from "./UI";

class App {
  constructor() {
    this.ui = new UI(containerApp);
    this.filterObjeto = {
      option: ""
    };
    this.productsCard = data;
  }

  initApp() {
    this.ui.showHeader("Filter Cards");
    this.ui.showButtons(OptionsButtons, (option) => {
      this.filterObjeto.option = option.toLowerCase();
      this.filterCardApp();
    });
    this.ui.showCards(this.productsCard);
  }

  filterCardApp() {
    this.productsCard = this.productsCard.map((product) => {
      if (this.filterObjeto.option === "show all") {
        product.activeFilter = false;
        return product;
      }
      
      product.activeFilter = true;
      product.filterProduct = (product.category.toLowerCase() === this.filterObjeto.option);
      return product;
    });

    this.ui.showCards(this.productsCard);
  }
}

export default App;
