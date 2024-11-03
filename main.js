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
        // Task 4: Handle Errors Gracefully
        .catch(error => { // deals w any errors that occur in fetch request/then chains
            console.log('Fetch error', error); //log error to debug
            document.getElementById('product-container').innerHTML = '<p>Couldnt load, try again.</p>'; //error message
        })
}
fetchProducts(); // call fetchProducts
//Task 3: Display Product Details Dynamically
function displayDetails(productdetails) {
    const container = document.getElementById('product-container'); // container where the products are displayed
    container.innerHTML = ''; //clear
    productdetails.forEach(product => { //loop through products to get details
        const { company, name, price, image } = product.fields; // destructure object to pull properties
        const imageUrl = image[0].url; // gets url from image, gets the first image from url 
        const productDivision = document.createElement('div'); //creates new division to hold product info
        productDivision.classList.add('product'); // product class to div
        productDivision.innerHTML = ` 
            <h2>${name}</h2>
            <p>Company: ${company}</p>
            <p>Price:$${(price / 100).toFixed(2)}</p>
            <img src="${imageUrl}" alt="${name}>
            `; //format product details 
        container.appendChild(productDivision); // add each products division into container
    });
}
