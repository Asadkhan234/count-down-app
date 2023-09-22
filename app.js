const endDate="24 september 2023 12:58 pm"

document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input")




function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    if(diff<0) return;
    // convert into days
    inputs[0].value=Math.floor(diff/3600/24)
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;
}

clock()

// 1 day=24hour
// 1hour=60min
// 60min=3600sec

setInterval(
    ()=>{
        clock()
    },
    1000
)