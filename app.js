
function jadwal_shalat(latitude,longitude){
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2')
    .then(response => response.json())
    .then(function(response){

        let date = new Date();
        let today = date.getDate() - 1;
        let data = response.data[today].timings;

        console.log(data);
    });
}

function succes(position){
    jadwal_shalat(position.coords.latitude,position.coords.longitude);
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



