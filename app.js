function succes(position){
    console.log(position);
}

function error(){
    alert("lokasi andas tidak dapat di akses");
}

function userLocation(){
    if(!navigator.geolocation){
        alert("geolocation tidak di dukung oleh browser anda");
    }else{
        navigator.geolocation.getCurrentPosition(succes,error);
    }
}

function index(){

    let app = document.querySelector("#app");
    let h3 = document.createElement("h3");
    h3.textContent = "Jadwal Shalat";

    app.appendChild(h3);

    userLocation();
}

index();


