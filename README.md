# Kelp  

[Live Demo](https://kelp-kiet.herokuapp.com/ "Live Demo" )

Kelp is a full-stack web application based on Yelp. The application uses Rails/PostgreSQL for the backend,
and React.js and Redux for the frontend.

## Features and Implementations
* User's account information is secured with BCrypt being used.
* Users can search for businesses depending on key words like category, name, or location.
* Businesses that display in the search will have a marker on the Google Maps to display where they are.
  ![Search](https://kelp-icon.s3.us-west-1.amazonaws.com/search.jpg "Search")

* Users can leave reviews for individual businesses and will display on that businesses' page.
* Users can also leave photos of their experiences of that business.
  ![Photos](https://kelp-icon.s3.us-west-1.amazonaws.com/allphotos.png "Business Photos")
  
 ## Challenges
 ### Seeding Data
 Calling Yelp's API for the first time was a challenge for me as I had to work around what their response data
 based on my requests for my backend database schema. As the data wasn't that pretty, I had to create my own
 individual Ruby file to parse through their "Business Search" to obtain the columns that I needed then also using
 that "ID" to request to another URL to get the other columns from their "Business Details" data. I put all those
 data in a hash and used that to create a function to create correct Rails seeding variables.
 
 ### Home Page
 Another challenge I had was on how to make my home page a bit more interesting so I decided to render three different
 restaurants everytime the screen refreshed so the users could expand and try new businesses. I implemented
 this by choosing adding three random numbers in a set so there couldn't be any randoms and using
 conditional rendering to display the business item components.
 ```javascript
 {this.props.businesses.map((business,index) => 
      (idx.includes(index)) ? 
      <div className="home-items">
      <img className="home-img" src={business.pictures[0]}/>
           <div className="home-itemName">
                <BusinessIndexItem
                    business={business}
                    fetchBusiness={this.props.fetchBusiness}
                    id={business.id}
                 /> 
           </div>
           
       ...
 
 ```
 
 ## Future Implemenations/Improvements
 * Being able to search for more different keywords rather than just category.
 * Give users a profile page and allow them to have friends where they can communicate with each other.
 * Implement pagination so not every business is displayed at once.
