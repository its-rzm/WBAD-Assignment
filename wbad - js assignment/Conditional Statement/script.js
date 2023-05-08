document.getElementById("tanggal1").innerHTML = new Date().getDate();

// if statement
if (new Date().getDate() > 20) {
    document.getElementById("output1").innerHTML = "The end of month";
}

// else statement
document.getElementById("tanggal2").innerHTML = new Date("September 11, 15:00:00").getDate();
if (new Date("September 11, 15:00:00").getDate() > 20) {
    document.getElementById("output2").innerHTML = "The end of month";
} else{
    document.getElementById("output2").innerHTML = "The beginning of month";
}

// else-if statement
let dateNow = new Date("September 16, 15:00:00");
document.getElementById("tanggal3").innerHTML = dateNow.getDate();
if (dateNow.getDate() > 20) {
    document.getElementById("output3").innerHTML = "The end of month";
} else if (dateNow.getDate() >= 15 || dateNow.getDate() <=20) {
    document.getElementById("output3").innerHTML = "The middle of month";
} else{
    document.getElementById("output3").innerHTML = "The beginning of month";
}

// switch statement
document.getElementById("tanggal4").innerHTML = new Date("September 11, 01:00:00").getDate();
switch (new Date("September 11, 01:00:00").getDate()) {
    case 1:
        document.getElementById("output4").innerHTML = "friend birthday";
        break;

    case 11:
        document.getElementById("output4").innerHTML = "my birthday";
        break;

    case 21:
        document.getElementById("output4").innerHTML = "cousin birthday";
        break;

    default:
        break;
}