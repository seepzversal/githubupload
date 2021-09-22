

var cart=[
    {
        "id":0, // id = index of array
        "name":"shirt",
        "price":800,
        "quantity":0
},
{
    "id":1,
    "name":"tees",
    "price":1000,
    "quantity":0

}];/*considering all items are already in cart but there quantity is set to zero
*/
var totalAmount=0; //Total amount of cart initializing to zero



function addItem(id){ // function to increment quantity of product in cart
    //id is the index at which product obj is located in cart array
    var total=document.getElementById('total');
    var quantID='textbox'+id;
    var quant = document.getElementById(quantID);

    cart[id]["quantity"]+=1; //incrementing the quantity by one
    totalAmount+=cart[id]["price"]; //increasing the totalAmount
    quant.innerHTML = cart[id]["quantity"]; // Displaying the total quantity
    total.innerHTML=totalAmount; //displaying the total amount
    return;

}

function removeItem(id){ //function to decrement the quantity of product in cart

    var total=document.getElementById('total');
    var quantID='textbox'+id;
    var quant = document.getElementById(quantID);
    
    if(cart[id]["quantity"]>0){ //checking if quantity of product is greater than 0

        cart[id]["quantity"]-=1; 
        totalAmount -= cart[id]["price"];
        quant.innerHTML = cart[id]["quantity"];
    
    }
    total.innerHTML=totalAmount;
    return;


}


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


function myFunction1() {
    var popup1 = document.getElementById("myPopup1");
    popup1.classList.toggle("show");
}