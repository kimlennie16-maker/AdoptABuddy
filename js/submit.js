const owner= document.getElementById("owner");
const petinformation= document.getElementById("petinformation");
const pethealth= document.getElementById("pethealth");
const btnowner= document.getElementById("btnowner");
const btnPetInfo= document.getElementById("btnPetInfo");
// const submit= document.getElementById("submit");

btnowner.addEventListener("click",function(){
    owner.style.display = "none";
    petinformation.style.display = "block";
});

btnPetInfo.addEventListener("click",function(){
    petinformation.style.display = "none";
    pethealth.style.display = "block";
});

