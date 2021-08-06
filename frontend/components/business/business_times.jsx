import React from 'react';

class BusinessTimes extends React.Component {
    constructor(props) {
        super(props);
    }
    readHours = () => {
        let str = ""
        console.log(str)
        let hash = {}
        let ctr = 0;
        for(let i = 0; i < this.props.hours.length; i++) {
            for(let j = 0; j < this.props.hours[i].length; j++) {
                if(this.props.hours[i][j] !== "'") {
                    str += this.props.hours[i][j];
                }
            }
            
        }
        console.log(str)
        let split = str.split("D")
        split.shift()
        console.log(split)
        for(let i = 0; i < split.length; i++) {
            if(!hash[split[i][0].toString()]) {
                hash[split[i][0].toString()] = [split[0].slice(2,-1)]
            } else {
                hash[split[i][0].toString()].push(split[0].slice(2,-1))
            }
        }
        return hash;
    }

    render() {
        this.readHours();
        return (
            <div>
                {this.props.hours}
            </div>
        )
    }
}

export default BusinessTimes;