var dotcreator = document.createElement("div");

//The flip dot display is segmented into 30 chunks, each chunk has the maximum to display one alphabetical letter with space towards the right and bottom. 
var overlay = document.getElementById("overlay");
var chunk1 = document.getElementById("chunk1");
var chunk1cn = chunk1.childNodes;
var chunk2 = document.getElementById("chunk2");
var chunk2cn = chunk2.childNodes;
var chunk3 = document.getElementById("chunk3");
var chunk3cn = chunk3.childNodes;
var chunk4 = document.getElementById("chunk4");
var chunk4cn = chunk4.childNodes;
var chunk5 = document.getElementById("chunk5");
var chunk5cn = chunk5.childNodes;
var chunk6 = document.getElementById("chunk6");
var chunk6cn = chunk6.childNodes;
var chunk7 = document.getElementById("chunk7");
var chunk7cn = chunk7.childNodes;
var chunk8 = document.getElementById("chunk8");
var chunk8cn = chunk8.childNodes;
var chunk9 = document.getElementById("chunk9");
var chunk9cn = chunk9.childNodes;
var chunk10 = document.getElementById("chunk10");
var chunk10cn = chunk10.childNodes;
var chunk11 = document.getElementById("chunk11");
var chunk11cn = chunk11.childNodes;
var chunk12 = document.getElementById("chunk12");
var chunk12cn = chunk12.childNodes;
var chunk13 = document.getElementById("chunk13");
var chunk13cn = chunk13.childNodes;
var chunk14 = document.getElementById("chunk14");
var chunk14cn = chunk14.childNodes;
var chunk15 = document.getElementById("chunk15");
var chunk15cn = chunk15.childNodes;
var chunk16 = document.getElementById("chunk16");
var chunk16cn = chunk16.childNodes;
var chunk17 = document.getElementById("chunk17");
var chunk17cn = chunk17.childNodes;
var chunk18 = document.getElementById("chunk18");
var chunk18cn = chunk18.childNodes;
var chunk19 = document.getElementById("chunk19");
var chunk19cn = chunk19.childNodes;
var chunk20 = document.getElementById("chunk20");
var chunk20cn = chunk20.childNodes;
var chunk21 = document.getElementById("chunk21");
var chunk21cn = chunk21.childNodes;
var chunk22 = document.getElementById("chunk22");
var chunk22cn = chunk22.childNodes;
var chunk23 = document.getElementById("chunk23");
var chunk23cn = chunk23.childNodes;
var chunk24 = document.getElementById("chunk24");
var chunk24cn = chunk24.childNodes;
var chunk25 = document.getElementById("chunk25");
var chunk25cn = chunk25.childNodes;
var chunk26 = document.getElementById("chunk26");
var chunk26cn = chunk26.childNodes;
var chunk27 = document.getElementById("chunk27");
var chunk27cn = chunk27.childNodes;
var chunk28 = document.getElementById("chunk28");
var chunk28cn = chunk28.childNodes;
var chunk29 = document.getElementById("chunk29");
var chunk29cn = chunk29.childNodes;
var chunk30 = document.getElementById("chunk30");
var chunk30cn = chunk30.childNodes;


var collectchunk = [chunk1, chunk2, chunk3, chunk4, chunk5, chunk6, chunk7, chunk8, chunk9, chunk10, chunk11, chunk12, chunk13, chunk14, chunk15, chunk16, chunk17, chunk18, chunk19, chunk20, chunk21, chunk22, chunk23, chunk24, chunk25, chunk26, chunk27, chunk28, chunk29, chunk30];
var collectchunkcn = [chunk1cn, chunk2cn, chunk3cn, chunk4cn, chunk5cn, chunk6cn, chunk7cn, chunk8cn, chunk9cn, chunk10cn, chunk11cn, chunk12cn, chunk13cn, chunk14cn, chunk15cn, chunk16cn, chunk17cn, chunk18cn, chunk19cn, chunk20cn, chunk21cn, chunk22cn, chunk23cn, chunk24cn, chunk25cn, chunk26cn, chunk27cn, chunk28cn, chunk29cn, chunk30cn];

var userlocation = 0;

//Standard is a variable to be included in with each keypress, this essentially discounts the pixels assigned to be space between each letter (chunk). 
var standard = 'i != 3 && i != 4 && i != 8 && i != 9 && i != 13 && i != 14 && i != 18 && i != 19 && i != 20 && i != 21 && i != 22 && i != 23 && i != 24';

dotcreator.classList.add("off");

//Creates 750 flip dot pixels. 25 dots in each chunk. 
function creation () {
    for (let x=0; x<30; x++){  
        for(let i=0; i<25; i++){
            collectchunk[x].appendChild(dotcreator.cloneNode(true));
        }
    }
}

//This function wipes the whole display of all animation classes, in order to add it back shall the user backspace and want to re-write something. 
function wipe() {
    var dots = document.querySelectorAll("div");
    for(let i=0; i<750; i++){
    dots[i].classList.remove("animate"); 
    }
    }

addEventListener("load",
addEventListener("keydown", (e)=>{
    setTimeout(wipe(),1000);
    var reckon = e.key;
    if(reckon=="Backspace"){    
        for (let i=0; i<24; i++) {
            if(eval(standard)){
                collectchunkcn[userlocation][i].classList.add("animate");
                collectchunkcn[userlocation][i].classList.remove("on");
                collectchunkcn[userlocation][i].classList.add("off");
            }
        }
        userlocation--;
        if (userlocation<0){userlocation=0}};
    //Each of the next 34 'if statements' create the respective letters associated to them by method of discounting specific pixles when a function is called that fills in the chunk with 'on' or 'white' pixels. 
    if(reckon=="q"){reckon = 'i != 6 && i != 15 && i != 16'};
    if(reckon=="w"){reckon = 'i != 1'};
    if(reckon=="e"){reckon = 'i != 7 && i != 11 && i != 12'};
    if(reckon=="r"){reckon = 'i != 12 && i != 16'};
    if(reckon=="t"){reckon = 'i != 5 && i != 7 && i != 10 && i != 12 && i != 15 && i != 17'};
    if(reckon=="y"){reckon = 'i != 1 && i != 10 && i != 12 && i != 15 && i != 17'};
    if(reckon=="u"){reckon = 'i != 1 && i != 6 && i != 11'};
    if(reckon=="i"){reckon = 'i != 5 && i != 7 && i != 10 && i != 12'};
    if(reckon=="o"){reckon = 'i != 6 && i != 11'};
    if(reckon=="p"){reckon = 'i != 6 && i != 16 && i != 17'};
    if(reckon=="a"){reckon = 'i != 6 && i != 16'};
    if(reckon=="s"){reckon = 'i != 6 && i != 7 && i != 10'};
    if(reckon=="d"){reckon = 'i != 2 && i != 6 && i != 11 && i != 17'};
    if(reckon=="f"){reckon = 'i != 6 && i != 7 && i != 12 && i != 16 && i != 17'};
    if(reckon=="g"){reckon = 'i != 6 && i != 7 && i != 11'};
    if(reckon=="h"){reckon = 'i != 1 && i != 11 && i != 16'};
    if(reckon=="j"){reckon = 'i != 5 && i != 7 && i != 10 && i != 12 && i != 17'};
    if(reckon=="k"){reckon = 'i != 1 && i != 7 && i != 12 && i != 16'};
    if(reckon=="l"){reckon = 'i != 1 && i != 2 && i != 6 && i != 7 && i != 11 && i != 12'};
    if(reckon=="z"){reckon = 'i != 5 && i != 11 && i != 12'};
    if(reckon=="x"){reckon = 'i != 1 && i != 7 && i != 10 && i != 16'};
    if(reckon=="c"){reckon = 'i != 6 && i != 7 && i != 11 && i != 12'};
    if(reckon=="v"){reckon = 'i != 1 && i != 6 && i != 11 && i != 15 && i != 17'};
    if(reckon=="b"){reckon = 'i != 2 && i != 11'};
    if(reckon=="n"){reckon = 'i != 6 && i != 11 && i != 16'};
    if(reckon=="m"){reckon = 'i != 16'};

    for (let i=0; i<24; i++) {
        if (eval(standard) && eval(reckon)) {
        collectchunkcn[userlocation][i].classList.add("animate");
        collectchunkcn[userlocation][i].classList.add("on");
        collectchunkcn[userlocation][i].classList.remove("off");
    }
}
userlocation++;
}))

creation();

