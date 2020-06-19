// thanh search
import "./SearchInput.css";
import React, {useState, useEffect} from "react";

export default function SearchInput(props){
  return (
    <div className="search-input">
      <div>
        <input onChange={(event)=>{props.textChange(event)}} />
        {/* nhập giá trị vào nó gọi hàm handleChange với tham số là gt vừa nhập */}
      </div>
    </div>
  );
}
