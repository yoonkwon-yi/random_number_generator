function generate_ran_num() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    //   The Math.random() function returns a floating-point,
    //  pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
    //  with approximately uniform distribution over that range
    const ans = +Math.floor(Math.random() * (number2 - number1)) + +number1;
    document.getElementById("answer").innerHTML = ans;
}