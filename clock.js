let UserName=prompt("Lütfen adınızı giriniz:")
let MyName=document.querySelector("#myName")
MyName.innerHTML=`${UserName}`

let myClock =document.querySelector("#myClock") 

function tarihSaat() {
  
    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const gun = new Date();
    let day = weekday[gun.getDay()];     


    var date = new Date().toLocaleTimeString('tr-TR'); 
   
    myClock.innerHTML = `${date + day}`   
}

setInterval(tarihSaat, 1000);