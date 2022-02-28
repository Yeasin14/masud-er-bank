// login btn event handler
let logIn = document.getElementById("login");
logIn.addEventListener("click",function(){
let logInArea = document.getElementById("login-area");
logInArea.style.display = "none";
let transactionArea = document.getElementById("transaction-area");
transactionArea.style.display = "block";
});












// deposit btn event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click" , function(){
    const depositNum = getInput("depositAmount") 

upDateText("currentBalence" ,depositNum)
upDateText("currentDeposit" , depositNum)

document.getElementById("depositAmount").value = "";
});



// withdraw event handler

const withdraw = document.getElementById("addWithdraw");
withdraw.addEventListener("click",function(){
const withdrawNum = getInput("withDrawAmount");

    upDateText("currentWithdraw" ,withdrawNum)
    upDateText("currentBalence" , -1 * withdrawNum)

   document.getElementById("withDrawAmount").value = "";
})


function getInput(id){
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;

}

function upDateText( id, amount){
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const total = amount + currentNum ;
    document.getElementById(id).innerText = total;
}











