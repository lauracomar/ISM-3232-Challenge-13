// Task 1: html
// Task 2:  Fetch Products from the API Using Fetch and Promises
const APIURL = 'https://www.course-api.com/javascript-store-products';
function fetchProducts() { //function to fetch data from api
    fetch(APIURL) //initiates get request --> returns a promise
        .then(response => { // promise handler
            if (!response.ok) { // check response, .ok = true
                throw new Error('Response not ok');// if not ok throw error which stops the process and moves to catch block
            }
            return response.json(); //convert to json
        })
        .then(data => { // process data
            displayDetails(data);// calls for display details
        })
        .catch(error => { // deals w any errors that occur in fetch request/then chains
            console.log('Fetch error', error); //log error to debug
            document.getElementById('product-container').innerHTML = '<p>Couldnt load, try again.</p>'; //error message
        })
} 