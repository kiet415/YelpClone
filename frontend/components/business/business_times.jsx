import React from 'react';

class BusinessTimes extends React.Component {
    constructor(props) {
        super(props);
    }
    readHours = () => {
        let str = ""
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
                hash[split[i][0].toString()] = [<div className="top-hours" key="da">{split[i].slice(2)}</div>]
            } else {
                hash[split[i][0]].push(<div key="db">{split[i].slice(2)}</div>)
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
        return (
            <ul className="business-times" key="days" >
                <li key="mon"><p key="ca">Mon</p> <div className="hours" key="bf">{this.isClosed(hash[0])}</div></li>
                <li key="tue"><p key="cb">Tue</p> <div className="hours" key="bd">{this.isClosed(hash[1])}</div></li>
                <li key="wed"><p key="cc">Wed</p> <div className="hours" key="be">{this.isClosed(hash[2])}</div></li>
                <li key="thu"><p key="cd">Thu</p> <div className="hours" key="bg">{this.isClosed(hash[3])}</div></li>
                <li key="fri"><p key="ce">Fri</p> <div className="hours" key="bh">{this.isClosed(hash[4])}</div></li>
                <li key="sat"><p key="cf">Sat</p> <div className="hours" key="bi">{this.isClosed(hash[5])}</div></li>
                <li key="sun"><p key="cg">Sun</p> <div className="hours" key="bj">{this.isClosed(hash[6])}</div></li>
            </ul>
        )
    }
}

export default BusinessTimes;