let bildpolo = document.getElementById('polo'); 
let coins = 0; 
let bhaupt = document.getElementById('bhaupt'); 
let bverbesserung = document.getElementById('bverbesserung'); 
let bfortschritt = document.getElementById('bfortschritt'); 

bildpolo.src = "polo.png";

document.getElementById('coins').textContent = coins; 

bildpolo.onclick = () => {
    coins++;
    document.getElementById('coins').textContent = coins; 
    console.log('Klick erkannt'); 
}

bhaupt.onclick = () => {
    document.getElementById('bhaupt').style.border = "2px solid #0000EE"; 
    document.getElementById('bfortschritt').style.border = "none";
    document.getElementById('bverbesserung').style.border = "none";
}

bfortschritt.onclick = () => {
    document.getElementById('bfortschritt').style.border = "2px solid #7CFC00"; 
    document.getElementById('bhaupt').style.border = "none";
    document.getElementById('bverbesserung').style.border = "none";
}

bverbesserung.onclick = () => {
    document.getElementById('bverbesserung').style.border = "2px solid #FFA500";
    document.getElementById('bhaupt').style.border = "none";
    document.getElementById('bfortschritt').style.border = "none"; 
}
