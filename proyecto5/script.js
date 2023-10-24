let esqueleto ="off"
let esqueletoStop=document.getElementById("esqueleto_quieto")
let sonido= new Audio ('./Style/sound/botonbailar2.mp3');
let sonidob=new Audio('./Style/sound/audio1.mp3')

function bailar(){
    if(esqueleto =="off"){
        esqueleto="on";
        esqueletoStop.classList.add("on")
        esqueletoStop.addEventListener('click',()=>{
            sonido.play();
        })
        esqueletoStop.addEventListener('click',()=>{
            sonidob.play()
            
        })
        console.log("on");
    }else{
        esqueleto="off"
        esqueletoStop.classList.remove("on")
        esqueletoStop.addEventListener('click',()=>{
            sonidob.pause()
        })
        console.log("off");
    }
}
