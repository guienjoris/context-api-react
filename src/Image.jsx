import React from "react";
import Button from "./Button";
import { ThemeContextConsumer } from "./themeContext";
//Consumer du provider qui est dans le themeContext.jsx 

function Image(props) {
  /* On pose les balises du Consumer*/
/* context === props du provider*/
/* import du composant button qui est aussi un consumer du provider, il reçoit aussi des props du provider*/
  return (
    <ThemeContextConsumer> 
      {context => (
        <div className={`${context.theme}-image image`}> 
          <div className={`${context.theme}-ball ball`} />
          <Button /> 
        </div>
      )}
    </ThemeContextConsumer>
  );
}

Image.contextType = ThemeContextConsumer;

export default Image;