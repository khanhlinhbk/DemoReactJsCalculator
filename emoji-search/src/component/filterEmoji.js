import emojiList from "./emojiList.json";

 function filterEmoji(searchText, maxResults) {
//   const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(iter => iter.length > 6);
  return emojiList
    .filter(emoji => emoji.title.toLowerCase().includes(searchText.toLowerCase())).slice(0, maxResults);
    //nếu từng cái trong emojiList là emoji.title chứa searchText thì lọc ra kq đó 
}
export default filterEmoji