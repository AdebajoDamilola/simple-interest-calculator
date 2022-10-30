function updateRate(val){
    document.getElementById("rate_val").innerHTML=val+"%";
}
document.getElementById("rate").addEventListener(onchange, updateRate());



function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = parseInt(principal * years * rate) / 100;
    var year = (new Date().getFullYear()) + parseInt(years);

    if (principal == "") {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML = "If you deposit <mark> " + principal + "</mark>,</br>at an interest rate of <mark>" + rate + "%</mark>.</br> You will receive an interest of <mark> " + interest + "</mark>, in the year <mark>" + year + "</mark>.";
    }
}        
     