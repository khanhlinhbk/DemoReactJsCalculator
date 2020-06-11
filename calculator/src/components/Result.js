import React, {Component} from 'react';
// hiển thị kết quả từ những thg tham chiếu đến result
class Result extends Component {
    render(){
        let {result}= this.props;
        return(
            <div className="result">

                <p>{result}</p>
            </div>
        )

    }
}
export default Result;
