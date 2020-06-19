import React, { Component } from "react";
import Clipboard from "clipboard";
import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResult.css";
// npm i clipboard --save để lưu gt vào bảng tạm
 class EmojiResults extends Component {
  //lưu giá trị copy vào bảng tạm
    componentDidMount() {
        this.clipboard = new Clipboard(".copy-to-clipboard");
      }
    
      componentWillUnmount() {
        this.clipboard.destroy();
      }
  render() {
    return (
      <div className="component-emoji-results">
        {/* mỗi 1 thg trong emojiData sẽ đc gọi ra để dùng map với tên emojiData1= 1 thg trong emojiData */}
        {this.props.emojiData.map(emojiData1 => (
          <EmojiResultRow
            key={emojiData1.title}
            symbol={emojiData1.symbol}
            title={emojiData1.title}
          />
        ))}
      </div>
    );
  }
}
export default EmojiResults
