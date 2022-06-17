/** 
 * Helper function to call MS Graph API endpoint
 * using the authorization bearer token scheme
*/
function callApiGee(endpoint, token, callback) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append('Authorization', bearer);

    const options = {
        method: "GET",
        //headers: headers
        headers: {"Authorization" : bearer}
    };

    console.log('request made to ApiGee at: ' + new Date().toString());

    //console.log('ApiGee GET Method: ' + options);

    console.log('ApiGee Token: ' + token);
    console.log('APiGee Headers: ' + JSON.stringify(headers));
    console.log('APiGee options: ' + JSON.stringify(options));

    fetch(endpoint, options)
        .then(response => response.json()) 
        .then(response => callback(response, endpoint))

        .then(response => console.log(response.text()))
        //.then(response => response.text())
        //.then(response => callback(response, endpoint))

        .catch(error => console.log(error));
}