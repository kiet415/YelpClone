import React from 'react';

const BusinessIndex = ({businesses}) => {
    //console.log(businesses)
    return (
        <div>
            <h1>Businesses </h1>
            {/* {businesses.map(business => (
                <BusinessIndexItem
                business={business}
                key={business.id}
                />
            ))} */}
        </div>
    ) 
}



export default BusinessIndex;