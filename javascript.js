//check odd even number
function checkNumber() {
    const number = document.getElementById("number").value;
      
    

    if (number==="" ||number < 0) {
          document.getElementById("result").innerHTML =  "Blank and Negative value not allow.";
          document.getElementById("result").style.color = "red";
    }
    else {

        if (number % 2 == 0) {
          document.getElementById("result").innerHTML = number+" is Even number";
          document.getElementById("result").style.color = "green";
          

          
        }
        else {
            document.getElementById("result").innerHTML = number+" is Odd number";
            document.getElementById("result").style.color = "blue";
             
        }
    }
}




