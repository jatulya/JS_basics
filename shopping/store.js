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
    var cartItemCtn, cartRows, price

    for (i=0;i<cartRows.length;i++)
    {
        price = cartRows[i].getElementsByClassName('cart-price')[0]
    }

}
