//since js loads in the bg, if it gets loaded b4 main page, all the searching for divs
//would show no vals -> checking if doc is ready is not
if (document.readyState == 'loading')
    document.addEventListener('DOMContentLoaded', ready) 
    //if it's loading, it will wait for it to finish loading
else
    ready() 

function ready()
{   
    //add to cart
    var addItem = document.getElementsByClassName("shop-item-button")
    for (i=0;i<addItem.length;i++)
    {
        addItem[i].addEventListener('click', addToCart)
    }

    //if quantity changed
    var qntyIp = document.getElementsByClassName("cart-qnty-ip")
    for (i=0;i<qntyIp.length;i++)
    {
        qntyIp[i].addEventListener('change', qntyChanged)
    }   

    //removing items from cart
    var remItemBtn = document.getElementsByClassName("btn-rem")
    //finds all division that is described in the class 'btn-rem'
    console.log(remItemBtn)  
    var i,button   
    for (i=0;i<remItemBtn.length;i++)
    {
        button = remItemBtn[i] //storing the current element
        //when button is 'clicked', event listener is added & performs fnct described
        //event listener returns an event
        button.addEventListener('click', remCartItem)
    } 
}

function addToCart(event)
{
    var item = event.target
    updateCartTot()
}

function qntyChanged(event)
{
    var input = event.target
    if (isNaN(input.value) || input.value<=0) //isNaN => is Not a Number;- if the user deletes it
       input.value = 1 //lowest possible value
    updateCartTot()
}

function remCartItem(event)
{
    var btnClicked = event.target  //it is same as the button that is clicked            
    btnClicked.parentElement.parentElement.remove()
    //1st parentElement -> div class="cart-qnty cart-col" -> it is inside here that element exists
    //2nd -> parent of previous one -> div class="cart-row"
    // we remove this element when the button is clicked   
    updateCartTot()
    //since this is called after the removal, total will change
}

function updateCartTot()
{
    var cartItemCtn, cartRows, priceEle, qntyEle, qnty
    //the whole rows are inside a class named cart-items
    //but we have only one element in it, so the index [0]
    cartItemCtn = document.getElementsByClassName('cart-items')[0]
    cartRows = cartItemCtn.getElementsByClassName('cart-row')
    total = 0
    for (i=0;i<cartRows.length;i++)
    {
        priceEle = cartRows[i].getElementsByClassName('cart-price')[0]
        qntyEle = cartRows[i].getElementsByClassName('cart-qnty-ip')[0]
        //these two line of codes returns the line div contaning the class, not the text in it        
        price = parseFloat(priceEle.innerText.replace('$',''))
        //priceEle.innerText -> returns $9.99 (9.99 is an eg)
        //replace removes '$' with '' 
        //parseFloat converts it to float value
        qnty = qntyEle.value //it is inside an input bar -> there are taken as values, not texts
        total = total + (price*qnty)
    }
    //rounding it off to two decimal places
    total = Math.round(total*100)/100
    //changing the inner text area of the price to the one we got
    document.getElementsByClassName('cart-tot-pri')[0].innerText = '$' + total
}
