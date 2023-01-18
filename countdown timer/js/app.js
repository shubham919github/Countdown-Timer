const endDate = "14 JANUARY 2023 09:30 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
// const clock = () => {
// }

function clock() {
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now) / 1000;

    if(diff < 0 )
    return;
    // console.log(diff);
     // convert into days;
    inputs[0].value = Math.floor(diff / 3600 /24);
     // convert into hours;
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // convert into minutes;
    inputs[2].value = Math.floor(diff / 60) % 60;
     // convert into seconds;
    inputs[3].value = Math.floor(diff) % 60;
  //  console.log(end);
  //  console.log(now);
}

// initial call
clock()

/*
* 1 day = 24 hours
* 1 hour = 60 mins
* 60 mins = 3600 sec
*/

setInterval (
    () => {
        clock()
    },
    1000
)