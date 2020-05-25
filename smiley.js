function canvasApp(){
    let canvas = document.getElementById("smiley");
    let context = canvas.getContext("2d");
    
    context.beginPath();
    context.lineWidth = 3;
    context.fillStyle = "yellow";
    context.arc(100, 100, 75, Math.PI, Math.PI*3);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(65, 70, 10, Math.PI, Math.PI*3);
    context.closePath();
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "black";
    context.arc(135, 70, 10, Math.PI, Math.PI*3);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();
    context.lineWidth = 6;
    context.arc(99, 120, 35, Math.PI*2, Math.PI);
    context.stroke();

    context.font = "20px sans serif";
    context.fillText("Hello Canvas", 45, 200);

}

function displayDateTime(){
    let date = document.getElementById("date");
    let time = document.getElementById("time");
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    let event = new Date();
    date.innerText = event.toLocaleDateString('fr-FR', options);
    time.innerText = event.toLocaleTimeString('fr-FR');   
}

function displayDecrementSeconds(temps){
    let second = document.getElementById("decrementation");
    if(temps == 0){
        second.innerHTML = "Le dessin est affiché ci-dessous";
        canvasApp("smiley");
    }
    else{
        second.innerHTML = "Le dessin va s'afficher dans <b>"+ temps +"</b>s";
        setTimeout(displayDecrementSeconds, 1000, temps-1);
    }
}

function main(){

    setInterval(displayDateTime, 1000);
    displayDecrementSeconds(10);

}

main();