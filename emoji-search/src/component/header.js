import React, {Component} from "react";
import "./header.css";
class Header extends Component{
    render(){
        return(
            <header className="header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
        />
        Emoji Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
        />
      </header>
        )
    }
}
export default Header;