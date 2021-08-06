import { thistle } from "color-name";
import React from "react"

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.body}
                <img src={this.props.img}></img>
            </div>
        )
    }
}


export default ReviewItem;