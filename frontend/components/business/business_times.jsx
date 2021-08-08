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
                hash[split[i][0].toString()] = [split[i].slice(2)]
            } else {
                hash[split[i][0]].push(" and ")
                hash[split[i][0].toString()].push(split[i].slice(2))
            }
        }
        
        return hash;
    }
    isClosed = (day) => {
        if (!day) {
            return "closed";
        } else {
            return day;
        }
    }
    render() {
        let hash = this.readHours();
        this.readHours();
        return (
            <ul className="business-times">
                <li><p>Mon</p> {this.isClosed(hash[0])}</li>
                <li><p>Tue</p> {this.isClosed(hash[1])}</li>
                <li><p>Wed</p> {this.isClosed(hash[2])}</li>
                <li><p>Thu</p> {this.isClosed(hash[3])}</li>
                <li><p>Fri</p> {this.isClosed(hash[4])}</li>
                <li><p>Sat</p> {this.isClosed(hash[5])}</li>
                <li><p>Sun</p> {this.isClosed(hash[6])}</li>
            </ul>
        )
    }
}

export default BusinessTimes;