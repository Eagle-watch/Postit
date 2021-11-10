let tablepostit = []
document.getElementById("red").addEventListener("click",()=>{
    tablepostit.push(new Postit(600,400,300,300,"red","coucou",tablepostit.length))
    tablepostit[tablepostit.length-1].affichePostit()
})
document.getElementById("blue").addEventListener("click",()=>{
    tablepostit.push(new Postit(800,300,300,300,"blue","coucou",tablepostit.length))
    tablepostit[tablepostit.length-1].affichePostit()
})
document.getElementById("yellow").addEventListener("click",()=>{
    tablepostit.push(new Postit(1000,400,300,300,"yellow","coucou",tablepostit.length))
    tablepostit[tablepostit.length-1].affichePostit()
})


