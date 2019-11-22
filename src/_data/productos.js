const fetch = require('node-fetch')
const token = 'a40a0a76b63b63a7d49e481a5ebf0e';

module.exports = async function() {

    let response = await fetch(
    'https://graphql.datocms.com/',
    {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
        query: `
        {
            allProducts(first: "100") {
                name
                image
                price
                subcategory {
                  name
                }
                urlAmazon
              }
            }        
        `
        }),
    }
    )
        .then(res => res.json())
        .then(json => {
            // console.log(json.data.allProducts)
            return json.data.allProducts
        })
        .catch((error) => {
            console.log(error);
        });

    return response
}
