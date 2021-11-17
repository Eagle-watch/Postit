class Postit{
    x
    y
    largeur
    hauteur
    couleur 
    texte
    supprimer
    id
/**
 * C'est la fonction de construction de postit
 * @param {number} x  est la position sur mon absycce (Horizontale)
 * @param {number} y est la position sur l'ordonée (Verticale)
 * @param {number} largeur largeur en px du postit
 * @param {number} hauteur hauteur du postit en px
 * @param {string} couleur la couleur choise red = rouge , blue = bleu , yellow = jaune
 * @param {string} texte le texte que l'on ecris sur le Postit
 * @param {number} id Numero du Postit
 */
    constructor(x,y,largeur,hauteur,couleur,texte,id){
        this.x=x
        this.y=y
        this.largeur=largeur
        this.hauteur=hauteur
        this.couleur=couleur
        this.texte=texte
        this.id=id
    }
    /**
     * Elle deplace le Postit
     * @param {number} x est la position sur mon absycce (Horizontale)
     * @param {number} y est la position sur l'ordonée (Verticale)
     */
    deplacement(x,y){
        this.x=x
        this.y=y  
    }
    /**
     * Elle redimensionne un Postit
     * @param {number} largeur largeur en px du postit
     * @param {number} hauteur hauteur du postit en px
     */
    redimensionement(largeur, hauteur) {
        this.largeur=largeur
        this.hauteur=hauteur
    }
    /**
     * Pour Changer le texte
     * @param {string} texte le texte que l'on ecris sur le Postit
     */
    changertexte(texte){
        this.texte=texte
    }
    /**
     * Sert as changer la couleur
     * @param {string} couleur la couleur choise red = rouge , blue = bleu , yellow = jaune
     */
    changercouleur(couleur){
        this.couleur=couleur
    }
    /**
     * Elle Affiche le Postit
     */
    affichePostit(){
        let postit= document.getElementById("postit"+ this.id)
        if(postit== null){
            postit = document.createElement("div")
            document.body.appendChild(postit)
        }
        postit.id = "postit"+ this.id
        postit.style.top=this.y+"px"
        postit.style.left=this.x+"px"
        postit.style.backgroundColor = this.couleur
        postit.style.position="fixed"
        postit.style.width=this.largeur+"px"
        postit.style.height=this.hauteur+"px"
        postit.innerHTML=this.texte
        postit.className = "Ombre"
        //postit.style.transform = "rotate(0deg)"
        //setTimeout(()=>{
        //    postit.style.transform = "rotate(360deg)"
        //},200)
        let menu = document.createElement("div")
        postit.appendChild(menu)
        menu.className = "bas"
        
        let bouton1= document.createElement("div")
        menu.appendChild(bouton1)
        bouton1.className = "fa-solid fa-pencil"    //Ecris
        bouton1.addEventListener("click",(event)=> 
        {
            action="ecrire"
            ecrirepostit=this.id
            event.stopPropagation()
        })
        

        let bouton2= document.createElement("div")
        menu.appendChild(bouton2)
        bouton2.className = "fa-solid fa-down-left-and-up-right-to-center"  // Redimensionner
        bouton2.addEventListener("click",(event)=>{
            this.posX = event.clientX
            this.posY = event.clientY
            this.larg= this.x
            this.haut= this.y
            numpostitselect= this.id
        action="redim"
        event.stopPropagation()

           
        })
        
    
        let bouton3= document.createElement("div")
        menu.appendChild(bouton3)
        bouton3.className = "fa-solid fa-up-down-left-right"    // Deplacer
        bouton3.addEventListener("click",(event)=>{
            action="deplace"
          numpostitselect= this.id
          event.stopPropagation()
        })

        let bouton4 = document.createElement("div")
        menu.appendChild(bouton4)
        bouton4.className = "fa-solid fa-droplet"    //Change couleur 
        bouton4.addEventListener("click", ()=>{
            if (this.couleur=="red") {
                this.couleur= "blue"
            }
            else if(this.couleur=="blue"){
                this.couleur="yellow"
            }
            else {
                this.couleur="red"
            }
            this.affichePostit()
        })
        
        let bouton5= document.createElement("div")
        menu.appendChild(bouton5)
        bouton5.className = "fa-solid fa-trash-can"     // Suprimer
        bouton5.addEventListener("click",(event) =>{
        postit.parentNode.removeChild(postit)
        supprimer(this.id)
        })
    }
}

