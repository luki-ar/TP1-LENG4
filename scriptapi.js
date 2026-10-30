function abrirMapa() { 
    
    let valorLat = document.getElementById("lat").value; 
    let valorLon = document.getElementById("lon").value; 
    let nombre = document.getElementById("nombreUbi").value; 
 
 
    let latArreglada = valorLat.replace(",", "."); 
    let lonArreglada = valorLon.replace(",", "."); 
 
 
    let urlGoogle = "https://www.google.com/maps?q=" + latArreglada + 
"," + lonArreglada; 
 
 
    window.open(urlGoogle, "_blank");

}