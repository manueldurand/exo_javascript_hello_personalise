function question(){
    let nom=prompt("quel est votre nom ? ", "écrivez ici");
    let confirmation = confirm("Sûr ?");
    if(confirmation){

    alert("Hello " +nom + " !");
    }
    else{
        alert("erreur");
    }
}
