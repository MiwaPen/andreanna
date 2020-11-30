let about = document.getElementById('about');
let service = document.getElementById('service');
let gallery = document.getElementById('gallery');
let dostavka = document.getElementById('dostavka');
let vakansii = document.getElementById('vakansii');
let contacts = document.getElementById('contacts');

document.onclick = function(e){
    if(e.target.className.includes("nav_p")){
        let checked =document.getElementById('checkbox').checked;
        console.log(checked);
        document.getElementById('checkbox').checked = false;
        let nav_cap= e.target.lastChild.data;
        if(nav_cap=="о компании"){
            scrollTo(0,about.offsetTop-80);
        }
        if(nav_cap=="услуги"){
            scrollTo(0,service.offsetTop-80);
        }
        if(nav_cap=="галерея"){
            scrollTo(0,gallery.offsetTop-80);
        }
        if(nav_cap=="доставка"){
            scrollTo(0,dostavka.offsetTop-80);
        }
        if(nav_cap=="вакансии"){
            scrollTo(0,vakansii.offsetTop-80);
        }
        if(nav_cap=="контакты"){
            scrollTo(0,contacts.offsetTop-80);
        }
    }
}

