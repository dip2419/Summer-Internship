const days = window.prompt("Enter any number")
switch (days) {
    case "0":
       document.write("Sunday")
        break;
    case "1":
       document.write("Monday")
        break;
    case "2":
       document.write("Tuesday")
        break;
    case "3":
       document.write("Wednesday")
        break;
    case "4":
       document.write("Thusday")
        break;
    case "5":
       document.write("Friday")
        break;
    case "6":
       document.write("Saturday")
        break;

    default:
       document.write("Value is Incorrect");
        break;
}