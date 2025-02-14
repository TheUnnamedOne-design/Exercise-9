var ec = 0;
var fc = 0;
function Seat() {
    var es = [0, 0, 0, 0, 0];
    var fs = [0, 0, 0, 0, 0,0];
    

    let sl = parseInt(document.getElementById("choiceInput").value);
    
    if (sl === 1) {
        if (fc < 5) {
            fs[fc] = 1;
            fc++;
            alert("First-class seat allotted!");
        } else if (ec < 5) {
            let ce = confirm("First-class is full. Would you like to book an economy seat instead?");
            if (ce) {
                es[ec] = 1;
                ec++;
                alert("Economy seat successfully booked!");
            } else {
                alert("Unfortunately, we couldn't accommodate your request.");
            }
        } else {
            alert("All seats are fully booked. We apologize for the inconvenience.");
        }
    } else if (sl === 2) {
        if (ec < 5) {
            es[ec] = 1;
            ec++;
            alert("Economy seat successfully booked!");
        } else if (fc < 5) {
            let cf = confirm("Economy is full. Would you like to book a first-class seat instead?");
            if (cf) {
                fs[fc] = 1;
                fc++;
                alert("First-class seat successfully booked!");
            } else {
                alert("Unfortunately, we couldn't accommodate your request.");
            }
        } else {
            alert("All seats are fully booked. We apologize for the inconvenience.");
        }
    } else {
        alert("Invalid selection. Please enter 1 for First Class or 2 for Economy.");
    }

    console.log("Economy: " + ec + " | First-Class: " + fc);


    document.getElementById("firstclass").innerHTML=5-fc;
    document.getElementById("economyclass").innerHTML=5-ec;
}
