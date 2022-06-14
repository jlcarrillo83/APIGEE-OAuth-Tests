/** 
 * Helper function to call MS Graph API endpoint
 * using the authorization bearer token scheme
*/
function callApiGee(endpoint, token, callback) {
    const headers = new Headers();
    //const bearer = `Bearer ${token}`;
    const bearer = `Bearer`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET"//,
        //headers: headers
    };

    console.log('request made to ApiGee at: ' + new Date().toString());

    fetch(endpoint, options)
        .then(response => response.json())
        .then(response => callback(response, endpoint))

        //.then(response => response.text())
        //.then(response => callback(response, endpoint))

        .catch(error => console.log(error));
}