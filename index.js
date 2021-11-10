let tablepostit = []
document.getElementById("red").addEventListener("click",()=>{
    tablepostit.push(new Postit(600,400,200,200,"red","coucou",tablepostit.length))
    tablepostit[tablepostit.length-1].affichePostit()
})
document.getElementById("blue").addEventListener("click",()=>{
    tablepostit.push(new Postit(800,300,200,200,"blue","coucou",tablepostit.length))
    tablepostit[tablepostit.length-1].affichePostit()
})
document.getElementById("yellow").addEventListener("click",()=>{
    tablepostit.push(new Postit(1000,400,200,200,"yellow","coucou",tablepostit.length))
    tablepostit[tablepostit.length-1].affichePostit()
})


