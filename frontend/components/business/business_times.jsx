import React from 'react';

class BusinessTimes extends React.Component {
    constructor(props) {
        super(props);
    }
    readHours = () => {
        let str = ""
        console.log(str)
        let hash = {}
        for(let i = 0; i < this.props.hours.length; i++) {
            for(let j = 0; j < this.props.hours[i].length; j++) {
                if(this.props.hours[i][j] !== "'") {
                    str += this.props.hours[i][j];
                }
            }
            
        }
        let split = str.split("D")
        split.shift()
        for(let i = 0; i < split.length; i++) {
            if(!hash[split[i][0].toString()]) {
                hash[split[i][0].toString()] = [<div className="top-hours">{split[i].slice(2)}</div>]
            } else {
                hash[split[i][0]].push(<div>{split[i].slice(2)}</div>)
            }
        }
        
        return hash;
    }
    isClosed = (day) => {
        if (!day) {
            return "Closed";
        } else {
            return day;
        }
    }
    render() {
        let hash = this.readHours();
        this.readHours();
        return (
            <ul className="business-times">
                <li><p>Mon</p> <div className="hours">{this.isClosed(hash[0])}</div></li>
                <li><p>Tue</p> <div className="hours">{this.isClosed(hash[1])}</div></li>
                <li><p>Wed</p> <div className="hours">{this.isClosed(hash[2])}</div></li>
                <li><p>Thu</p> <div className="hours">{this.isClosed(hash[3])}</div></li>
                <li><p>Fri</p> <div className="hours">{this.isClosed(hash[4])}</div></li>
                <li><p>Sat</p> <div className="hours">{this.isClosed(hash[5])}</div></li>
                <li><p>Sun</p> <div className="hours">{this.isClosed(hash[6])}</div></li>
            </ul>
        )
    }
}

export default BusinessTimes;