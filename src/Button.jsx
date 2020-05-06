import React from 'react'
import {ThemeContextConsumer} from './themeContext';
//Consumer du provider qui est dans le themeContext.jsx 
function Button(props) {
    return(
        /* On pose les balises du Consumer*/
        <ThemeContextConsumer > 
            {context => (
                <button onClick={context.toggleTheme} className="button"> 
                    Switch
                    <span role="img" aria-label="sun">
                        🌞
                    </span>
                    <span role="img" aria-label="moon">
                        🌚
                    </span>
                </button>
            )}
        </ThemeContextConsumer>
    );
}/* context === props du provider*/

export default Button;