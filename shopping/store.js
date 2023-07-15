var remItemBtn = document.getElementsByClassName("btn-rem")
//finds all division that is described in the class 'btn-rem'
//here, we are looking for remove buttons
console.log(remItemBtn)

var i,button, btnClicked

for (i=0;i<remItemBtn.length;i++)
{
    button = remItemBtn[i] //storing the current element
    //when button is 'clicked', event listener is added & performs fnct described
    //event listener returns an event
    button.addEventListener('click', function(event)
    {
        btnClicked = event.target  //it is same as the button that is clicked
        
        btnClicked.parentElement.parentElement.remove()
        //1st parentElement -> div class="cart-qnty cart-col" -> it is inside here that element exists
        //2nd -> parent of previous one -> div class="cart-row"
        // we remove this element when the button is clicked

        updateCartTot()
        //since this is called after the removal, total will change
    })
}

function updateCartTot()
{
    //the whole rows are inside a class named cart-items
    //but we have only one element in it, so the index [0]
    cartItemCtn = document.getElementsByClassName('cart-items')[0]
    cartRows = cartItemCtn.getElementsByClassName('cart-row')
    var cartItemCtn, cartRows, priceEle, qntyEleprice, qnty
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

    //changing the inner text area of the price to the one we got
    document.getElementsByClassName('cart-tot-pri')[0].innerText = '$' + total

}
