//import React, { Component } from "react";
import "./EmojiResultRow.css";
import React,{useState} from "react";

export default function EmojiResultsRow(props){
  const codePointHex = props.symbol.codePointAt(0).toString(16);
  //chuyển mã unicode xong chuyển sang hệ 16
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  return (
    //symbol, title đc quy định trong thg sử dụng nó là emojiResult
    <div
      className="component-emoji-result-row copy-to-clipboard"
      data-clipboard-text={props.symbol}
    >
      <img src={src} />
      <span className="title">{props.title}</span>
      <span className="info">Click to copy emoji</span>
    </div>
  );
}

// class EmojiResultsRow extends Component {
  

//   render() {
//     const codePointHex = this.props.symbol.codePointAt(0).toString(16);
//     //chuyển mã unicode xong chuyển sang hệ 16
//     const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
//     return (
//       //symbol, title đc quy định trong thg sử dụng nó là emojiResult
//       <div
//         className="component-emoji-result-row copy-to-clipboard"
//         data-clipboard-text={this.props.symbol}
//       >
//         <img src={src} />
//         <span className="title">{this.props.title}</span>
//         <span className="info">Click to copy emoji</span>
//       </div>
//     );
//   }
// }
// export default  EmojiResultsRow;