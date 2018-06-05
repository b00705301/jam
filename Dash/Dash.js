console.log("mon javascript");

//TEST1

let moving = true;

setTimeout(function(){
    setInterval(function(){
      document.querySelector("h1").style.color="red";//cherche le h1 dans le site et le met en rouge
      if (moving)document.querySelector("h1").style.top="100px";//haut bouge de 100px
    }, 1000); // il le fait au bout de 2 secondes
}, 1500);

setInterval(function(){
    document.querySelector("h1").style.color="green";//cherche le h1 dans le site et le met en vert
    if(moving)document.querySelector("h1").style.top="200px";
}, 1000);
//tentative de faire clignoter du rouge au vert

//TEST2
function clickhere1(){
moving = !moving;
}