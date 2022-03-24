let isim = document.getElementById("myName"); //isim elemneti
let tamsaat = document.getElementById("myClock"); //saat elementi

//Kullanıcıdan ismini aldık ve html sayfasında, id'si "myName" olan etiket içerisine yazdırdık.
var ad = prompt("Adınız nedir?");
isim.innerHTML = ad;

//saat bilgisini html sayfasında, id'si "myClock" olan etiket içerisinde yazdırdık.
var tarih = new Date();
var saat=tarih.getHours();
var dakika=tarih.getMinutes();
var saniye=tarih.getSeconds();
var tamtarih = saat + ":" + dakika +":"+ saniye;
tamsaat.innerHTML = tamtarih;
