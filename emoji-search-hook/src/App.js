
import React, {useState,useEffect} from "react";
import Header from "./component/header";
import SearchInput from "./component/SearchInput";
 import EmojiResults from "./component/EmojiResult";
 import filterEmoji from "./component/filterEmoji";
 export default function App(){
   const [filteredEmoji,setFilteredEmoji]= useState(filterEmoji("",20));
   return(
    <div>
    <Header />
    <SearchInput textChange={(event)=>{ setFilteredEmoji(filterEmoji(event.target.value, 20))}} />
    {/* hiển thị ra SearchInput với textChange bằng hàm handleSearchChange và tất cẩ những thứ còn lại nữa */}
    <EmojiResults emojiData={filteredEmoji} />
    {/* Phần kết quả hiển thị là dãy filteredEmoji */}
  </div>
   )
 }


