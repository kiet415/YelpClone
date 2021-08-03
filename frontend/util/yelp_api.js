


export const businessSearch = location => {
    return $.ajax({
        url: `https://api.yelp.com/v3/businesses/search?location=${location}`,
        method: 'GET',
        headers: {
            "Authorization": "Bearer Rhhln7a4JPyWjTzav-3ezPmFgSWRjlQ7sSJJDmdPh_jhfzp2j3zRh9um_q1NuIFURZ4b1uYAw72ICtD9WhYEIn_QXcfK_JEd2ife6L3Qacve4wosya0LdfxONXUJYXYx", 
        }
    })
}