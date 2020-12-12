function add() {

    var myselect = document.getElementById("sele");
    var index = myselect.selectedIndex;
    var op = myselect.options[index].value;
    var num = document.getElementById('tickets').value;
    var total = num * op;
    document.getElementById('total').value = total;
}
$(function () {
    $("#btn-summary").click(function () {
        window.open("https://www.paypal.com/us/welcome/signup/#/mobile_conf");
    });
});