
function jadwal_shalat(latitude,longitude){
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2')
    .then(response => response.json())
    .then(function(response){

        let date = new Date();
        let today = date.getDate() - 1;
        let data = response.data[today].timings;

        let app = document.querySelector("#app");
        let table = document.createElement("table");
        let tBody = document.createElement("tbody");


        for(i in data){

            let row = tBody.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);
            name.textContent = i;
            time.textContent = data[i]; 
            
        }

        table.appendChild(tBody);
        app.appendChild(table);

    });
}

function succes(position){
    jadwal_shalat(position.coords.latitude,position.coords.longitude);
}

function error(){
    alert("lokasi andas tidak dapat di akses");
    jadwal_shalat(-5.432937,120.205110);

}

function userLocation(){
    if(!navigator.geolocation){
        alert("geolocation tidak di dukung oleh browser anda");
    }else{
        navigator.geolocation.getCurrentPosition(succes,error);
    }
}

function index(){
    var tanggallengkap = new String();
    var namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    var namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    var tgl = new Date();
    var hari = tgl.getDay();
    var tanggal = tgl.getDate();
    var bulan = tgl.getMonth();
    var tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " +tanggal + " " + namabulan[bulan] + " " + tahun;
    
    let app = document.querySelector("#app");
    let h3 = document.createElement("h3");
    let span = document.createElement("span");
   
    h3.textContent = "JADWAL SHALAT";
    span.textContent = tanggallengkap;

    app.appendChild(span);
    app.appendChild(h3);

    userLocation();
}


index();



