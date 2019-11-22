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
          allSubcategories(first: "100") {
            name
            intro
            description
            image {
              url
            }
            seo {
              title
              twitterCard
              description
            }
            category {
              name
            }
          }
        }         
        `
        }),
    }
    )
        .then(res => res.json())
        .then(json => {

            return json.data.allSubcategories
        })
        .catch((error) => {
            console.log(error);
        });

    return response
}
