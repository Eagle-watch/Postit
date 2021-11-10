class Postit{
    x
    y
    largeur
    hauteur
    couleur 
    texte
    supprimer
    id

    constructor(x,y,largeur,hauteur,couleur,texte,id){
        this.x=x
        this.y=y
        this.largeur=largeur
        this.hauteur=hauteur
        this.couleur=couleur
        this.texte=texte
        this.id=id
    }
    supprimer(){
        this.supprimer
    }
    deplacement(x,y){
        this.x=x
        this.y=y
       
    }
    redimensionement(largeur, hauteur) {
        this.largeur=largeur
        this.hauteur=hauteur
    }
    changertexte(texte){
        this.texte=texte
    }
    changercouleur(couleur){
        this.couleur=couleur
    }
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
        postit.style.transform = "rotate(0deg)"
        setTimeout(()=>{
            postit.style.transform = "rotate(360deg)"
        },200)
        let menu = document.createElement("div")
        postit.appendChild(menu)
        menu.className = "bas"

        let bouton1= document.createElement("div")
        menu.appendChild(bouton1)
        bouton1.className = "fa-solid fa-pencil"    //Ecris
        bouton1.addEventListener("click",()=> 
        {this.changertexte(),this.affichePostit()})
        

        let bouton2= document.createElement("div")
        menu.appendChild(bouton2)
        bouton2.className = "fa-solid fa-down-left-and-up-right-to-center"  // Redimensionner
        bouton2.addEventListener("click",()=> {
        this.redimensionement(),this.affichePostit()})
        
    
        let bouton3= document.createElement("div")
        menu.appendChild(bouton3)
        bouton3.className = "fa-solid fa-up-down-left-right"    // Deplacer
        bouton3.addEventListener("click",()=>{
            console.log("test")
            this.deplacement(500,500)
            this.affichePostit()
        })

        let bouton4= document.createElement("div")
        menu.appendChild(bouton4)
        bouton4.className = "fa-solid fa-trash-can"     // Suprimer
        bouton4.addEventListener("click",this.supprimer)
        //this.affichePostit()

        let bouton5 = document.createElement("div")
        menu.appendChild(bouton5)
        bouton5.className = "fa-solid fa-droplet"    //Change couleur 
        bouton5.addEventListener("click", ()=>{
            this.changercouleur("red","blue","yellow")
            ,this.affichePostit()})
        }
    }
