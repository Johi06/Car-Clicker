let bildpolo = document.getElementById('polo');
let coins = 0; 
let bhaupt = document.getElementById('bhaupt'); 
let bverbesserung = document.getElementById('bverbesserung'); 
let bfortschritt = document.getElementById('bfortschritt'); 
let hauptscreen = document.getElementById('hauptscreen'); 
let verbesserungscreen = document.getElementById(''); 
let fortschrittscreen = document.getElementById(''); 


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
    document.getElementById('verbesserungscreen').hidden = true;
    document.getElementById('fortschrittscreen').hidden = true;
    document.getElementById('hauptscreen').hidden = false;
}

bfortschritt.onclick = () => {
    document.getElementById('bfortschritt').style.border = "2px solid #7CFC00"; 
    document.getElementById('bhaupt').style.border = "none";
    document.getElementById('bverbesserung').style.border = "none";
    document.getElementById('hauptscreen').hidden = true;
    document.getElementById('verbesserungscreen').hidden = true;
    document.getElementById('fortschrittscreen').hidden = false;
}

bverbesserung.onclick = () => {
    document.getElementById('bverbesserung').style.border = "2px solid #FFA500";
    document.getElementById('bhaupt').style.border = "none";
    document.getElementById('bfortschritt').style.border = "none"; 
    document.getElementById('hauptscreen').hidden = true;
    document.getElementById('fortschrittscreen').hidden = true;
    document.getElementById('verbesserungscreen').hidden = false;
}
