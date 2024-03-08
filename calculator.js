var operationclicked=0


function clearall() {
    document.getElementById("screen").value = " "
}

function one(number) {
    if (operationclicked==1) {
        var newvalue= document.getElementById("screen").value
        operationclicked==0
    } else {
        document.getElementById("screen").value = document.getElementById("screen").value + number
    }
}
function two(number) {
    document.getElementById("screen").value = document.getElementById("screen").value + number
}
function three(number) {
    document.getElementById("screen").value = document.getElementById("screen").value + number
}
function four(number) {
    document.getElementById("screen").value = document.getElementById("screen").value + number
}
function five(number) {
    document.getElementById("screen").value = document.getElementById("screen").value + number
}
function six(number) {
    document.getElementById("screen").value = document.getElementById("screen").value + number
}
function seven(number) {
    document.getElementById("screen").value = document.getElementById("screen").value + number
}
function eight(number) {
    document.getElementById("screen").value = document.getElementById("screen").value + number
}
function nine(number) {
    document.getElementById("screen").value = document.getElementById("screen").value + number
}
function zero(number) {
    document.getElementById("screen").value = document.getElementById("screen").value + number
}
function finalResult() {
    var newNumber = document.getElementById("screen").value
    var result
    if (flag == 1) {
        result = oldNumber + newNumber
        document.getElementById("screen").value=result
    }else if(flag==2){
        result = oldNumber - newNumber
        document.getElementById("screen").value=result
    } else if(flag==3){
        result = oldNumber * newNumber
        document.getElementById("screen").value=result
    } else if (flag==4) {
        result = oldNumber / newNumber
        document.getElementById("screen").value=result
    } else {
        
    } {

    }
}
function addition() {
    var flag = 1
    operationclicked==1
    var oldNumber = document.getElementById("screen").value
    clearall()
}
function minus(){
    var flag = 2
    operationclicked==1
}
function multiple(){
    var flag = 3
    operationclicked==1
}
function division(){
    var flag = 4
    operationclicked==1
}