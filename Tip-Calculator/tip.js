function calcTip(){
    var subTotal = parseInt(document.getElementById("subtotal").value);
    var tip = parseInt(document.getElementById("tip").value) /100;
    var total = subTotal + (subTotal * tip);
    var p = document.getElementById("total");
    p.innerHTML = total;
}