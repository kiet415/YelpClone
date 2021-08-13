import React from "react"

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="review-item-container">
                <div className="review-item-name">
                    {this.props.firstName} {this.props.lastName}
                </div>
                
                <div className="review-item-top">
                    <img  src={this.props.img}></img>
                    <span className="review-date">{this.props.date}</span>
                </div>
                <div className="review-item-body">
                    {this.props.body}
                </div>
                
                
            </div>
        )
    }
}


export default ReviewItem;