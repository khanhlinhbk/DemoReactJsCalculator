// thanh search
import React, { Component } from "react";
import "./SearchInput.css";

class SearchInput extends Component {

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="search-input">
        <div>
          <input onChange={this.handleChange} />
          {/* nhập giá trị vào nó gọi hàm handleChange với tham số là gt vừa nhập */}
        </div>
      </div>
    );
  }
}
export default SearchInput;