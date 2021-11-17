let tablepostit = []
let numpostitselect = -1
let action= ""
let ecrirepostit = -1


document.getElementById("red").addEventListener("click",()=>{
    tablepostit.push(new Postit(600,400,300,300,"red","Scorpions",tablepostit.length))
    tablepostit[tablepostit.length-1].affichePostit()
})

document.getElementById("blue").addEventListener("click",()=>{
    tablepostit.push(new Postit(800,300,300,300,"blue","KISS",tablepostit.length))
    tablepostit[tablepostit.length-1].affichePostit()
})

document.getElementById("yellow").addEventListener("click",()=>{
    tablepostit.push(new Postit(1000,400,300,300,"yellow","Led Zeppelin",tablepostit.length))
    tablepostit[tablepostit.length-1].affichePostit()
})
// fonction deplacer

document.body.addEventListener("mousemove",(event)=>{
    let x = event.clientX
    let y = event.clientY
    if (numpostitselect>-1 && action=="deplace"){
        tablepostit[numpostitselect].deplacement(x,y)
        tablepostit[numpostitselect].affichePostit()
    }
    if (numpostitselect>-1 && action=="redim"){
        tablepostit[numpostitselect].redimensionement(event.clientX-tablepostit[numpostitselect].posX+tablepostit[numpostitselect].larg,event.clientY-tablepostit[numpostitselect].posY+tablepostit[numpostitselect].haut)
        tablepostit[numpostitselect].affichePostit()
    }

})

document.body.addEventListener("click",(event)=>{
    numpostitselect=-1
    action=""
})
// Fonction ecrire

document.body.addEventListener("keydown",(ecris)=>{
    if (ecrirepostit>-1 && action =="ecrire") {
        // Touche effacé 
        if(ecris.key=="Backspace"){
            tablepostit[ecrirepostit].changertexte(tablepostit[ecrirepostit].texte.substr(0,tablepostit[ecrirepostit].texte.length-1))
            tablepostit[ecrirepostit].affichePostit()
        }
        //Touche Majuscule
        else if (ecris.key=="Shift"){
          
        }
        //Touche Entrer
        else if (ecris.key=="Enter"){
            tablepostit[ecrirepostit].changertexte(tablepostit[ecrirepostit].texte+"<br>")
            tablepostit[ecrirepostit].affichePostit()
        }
        //  Touche Clé (ou Caps lock)
        else if (ecris.key=="CapsLock"){
            
        }
        //Touche CTRL 
        else if (ecris.key=="Control"){
            
        }
        // Touche Alt
        else if (ecris.key=="Alt"){
        
        }
        //Touche Tab
        else if (ecris.key=="Tab"){
            tablepostit[ecrirepostit].changertexte(tablepostit[ecrirepostit].texte+" ")
            tablepostit[ecrirepostit].affichePostit()
        }
        //Touche Accent circonflexe
        else if (ecris.key=="Dead"){
            tablepostit[ecrirepostit].changertexte(tablepostit[ecrirepostit].ecris.key+"^")
            tablepostit[ecrirepostit].affichePostit()
        }
        else{
            tablepostit[ecrirepostit].changertexte(tablepostit[ecrirepostit].texte+ecris.key)
            tablepostit[ecrirepostit].affichePostit()
        }
    }
})

/**
 * Fonction qui supprime un Postit
 * 
 * @param {number} numpostit numero du Postit a supprimer
 */
function supprimer(numpostit)
{
tablepostit.splice(numpostit,1)
}





