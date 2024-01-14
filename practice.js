function calculateBMI(){
    let heightInput = document.querySelector("#heightcontainer input").value;
    let weightInput = document.querySelector("#weightcontainer input").value;

    let height = parseFloat(heightInput);
    let weight = parseFloat(weightInput);

    if(document.querySelector("#heightcontainer select").value==="Feet"){
        height*=0.3048;
    }
    else{
    height/=100;
    }

    if(document.querySelector("#weightcontainer select").value === "Grams"){
        weight/=1000;
    }
  
   
    let bmi = weight/(height*height)
    let comment = ""

    if(bmi < 18.5){
        comment = "You are underweight"
    }
    else if(bmi >=18.5 && bmi<=24.9){
        comment = "You are in the healthy weight range"
    }
    else if(bmi >24.9 && bmi<29.9){
        comment ="You are in the weight range"
    }
    else if (bmi>30){
        comment = "You are obese.Please visit your nearest health center."
    }
    else{
        comment="Enter valid data"
    }

    document.querySelector("#bmiResult").textContent =isNaN(bmi) ? "Not a number":bmi.toFixed(2);
    document.querySelector("#comment").textContent=`Comment:   ${comment}`;
    heightInput.value="";
    weightInput.value="";

}

