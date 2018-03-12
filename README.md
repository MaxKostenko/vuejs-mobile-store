> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
# E-Commerce Frontend technical assignment

## Our shopping workflow and terminology

- You land on a page where all of the available services/products are displayed - **catalogue view**.
- You choose a service/product and get sent to another page which contains a detailed information about the product - **product description view**.
- After revising everything about the service/product you confirm that you would like to purchase/subscribe to it. You can do this by clicking a "Purchase" button.
- You get redirected to a page where you have to fill in forms with personal details - **checkout view**.
- After you fill in all of your details you finally click "Submit Order" and get redirected to the **confirmation view** where you can see the details of your order.


## Goals
### What we would ideally like to see
- Create a [catalogue view](/data/catalogue.png) where all the products are displayed ([json file](/data/products.json) with the list of products which you can use for making this assignment).
- Create a [product description view](/data/product-details.png) where full information of the selected product is displayed.
- Create a [checkout view](/data/checkout.png) where the selected product is displayed along with a form that has the following input fields
    - First name
    - Last name
    - Date of birth
    - E-mail
    - Preferred delivery date
- Create a [confirmation view](/data/confirmation.png) where the customer and product details are displayed
- Mock implementation of backend calls
- Very basic layout and styling
- Basic validations
- Flow state persistence
- Make commits to show the progress of the implementing this assignment
