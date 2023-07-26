var a=document.getElementById('display');

function btnClick(value) {
    a.value += value;
}
function clearScreen(){
    a.value="";
}
function Result(){
   
    try{
        var result=eval(a.value);
        a.value=result;
    }
    catch(error){
        a.value="error";
    }
}
