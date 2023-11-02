let heightInput = document.querySelector ('#height');
let weightInput = document.querySelector('#weight');
let calculate = document.querySelector('.calculate');
let result = document.querySelector('#answer');
let statement = document.querySelector('#statement');
calculate.addEventListener('click', ()=>{

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);
    
    let BMI = weight / Math.pow(height / 100, 2).toFixed(1);
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "You're underweight";
    }else if (BMI > 18.5 && BMI <= 24.9){
        statement.innerText = "You're healthy";
    }else if (BMI >= 25 && BMI <= 29.9){
        statement.innerText = "You're overweight";
    }else{
        statement.innerText = "You're obese";
    }
})
document.querySelector(".clear").
addEventListener("click", ()=>{
    let remove = heightInput.value; weightInput.value; statement.innerHTML; result.innerHTML;
    heightInput.value = "";
    weightInput.value = "";
    statement.innerHTML = "";
    result.innerHTML = "";
})


