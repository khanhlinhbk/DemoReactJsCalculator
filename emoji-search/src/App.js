import React, { Component } from "react";
import Header from "./component/header";
import SearchInput from "./component/SearchInput";
 import EmojiResults from "./component/EmojiResult";
 import filterEmoji from "./component/filterEmoji";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
      // filteredEmoji là gọi hàm filterEmoji với các tham số
    };
  }

  handleSearchChange = event1 => {
    this.setState({
      filteredEmoji: filterEmoji(event1.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        {/* hiển thị ra SearchInput với textChange bằng hàm handleSearchChange và tất cẩ những thứ còn lại nữa */}
        <EmojiResults emojiData={this.state.filteredEmoji} />
        {/* Phần kết quả hiển thị là dãy filteredEmoji */}
      </div>
    );
  }
}

