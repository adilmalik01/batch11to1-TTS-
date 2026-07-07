


let percentage = prompt("Enter your percentage: ");


if (percentage >= 90) {
    console.log("Grade A1");
} else if (percentage >= 80) {
    console.log("Grade A+");
} else if (percentage >= 70) {
    console.log("Grade A");
} else if (percentage >= 60) {
    console.log("Grade B");
} else if (percentage >= 50) {
    console.log("Grade C");
}else if (percentage >= 40) {
    console.log("Grade D");
}else if(percentage >= 0  && percentage < 40){
    console.log("FAIL");
}else {
    console.log("Invalid Percentage");
}