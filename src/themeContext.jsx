import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
/**
 * Créer le contexte avec un Provider et des Consumer
 */
class ThemeContextProvider extends Component {
  state = {
    theme: "Day"
  };

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === "Day" ? "Night" : "Day"
      };
    });
  };

  render() {
    /* Rends disponible au consumer le theme et la fonction toggleTheme */
    return (
      
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }} /* props le theme et la fonction toggleTheme au consumer */
      >
        {this.props.children} 
      </Provider>
      /* this.props.children ===  Affiche ce que vont renvoyer les Consumer*/
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
// exporte le Provider et le Consumer, le Consumer sera exporté en tant ThemeContextConsumer