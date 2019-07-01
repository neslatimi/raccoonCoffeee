window.addEventListener('load', window_LoadHandler, false);

function window_LoadHandler() {

    //change color nav
    var changenavColor = document.querySelector('.globalNavBar');
    changenavColor.addEventListener('mouseover', changeColorMouseOver, false);
    changenavColor.addEventListener('mouseout', RemoveColorMouseOut, false);

    //buttons with shadow
    var signUpBtn = document.querySelector('.a5');
    var pickOneBtn = document.querySelector('.pickOne');
    var showAllBtn = document.querySelector('.showAll')
    var hideAllBtn = document.querySelector('.hideAll')
    var clear = document.querySelector('.clear');

    signUpBtn.addEventListener('mouseover', addShadowed, false);
    pickOneBtn.addEventListener('mouseover', addShadowed, false);
    showAllBtn.addEventListener('mouseover', addShadowed, false);
    hideAllBtn.addEventListener('mouseover', addShadowed, false);
    clear.addEventListener('mouseover', addShadowed, false);

    signUpBtn.addEventListener('mouseout', removeShadowed, false);
    pickOneBtn.addEventListener('mouseout', removeShadowed, false);
    showAllBtn.addEventListener('mouseout', removeShadowed, false);
    hideAllBtn.addEventListener('mouseout', removeShadowed, false);
    clear.addEventListener('mouseout', removeShadowed, false);


    showAllBtn.addEventListener('click', addAllData_Clickhandler, false);
    hideAllBtn.addEventListener('click', hideAllData_ClickHandler, false);
    clear.addEventListener('click', window_LoadHandler,false);

    var tblCsoport = document.querySelector('#tblCsoport');
    tblCsoport.style.display = 'none';

    //filter section
    var moreFilterShow = document.querySelector('.moreFilterShow');
    moreFilterShow.addEventListener('click', showMoreFilter_ClickHandler, false);

    var hideAndShow = document.querySelector('.hideAndShow');
    hideAndShow.style.display = 'none';

    //radio button
    var light = document.querySelector('#light');
    light.addEventListener('click', addAllLight, false);

    var medium = document.querySelector('#medium');
    medium.addEventListener('click', addAllMedium, false);

    var strong = document.querySelector('#strong');
    strong.addEventListener('click', addAllStrong, false);

    //checkbox
    var expensive = document.querySelector('#expensive');
    expensive.addEventListener('onclick', calculateExpensive, false);



}

//nav bar szineinek változtatása
function RemoveColorMouseOut() {

    event.target.style.backgroundColor = 'hsl(52,100%,55%)';
    event.target.children.styles.backgroundColor = 'inherit';

}
function changeColorMouseOver() {
    event.target.style.backgroundColor = 'white';
    event.target.children.style.backgroundColor = 'inherit';

}


//gombok függvény
function addShadowed() {
    event.target.style.boxShadow = '10px 5px 5px grey';

}
function removeShadowed() {
    event.target.style.boxShadow = 'none';
}


//Hide and show all coffee

function addAllData_Clickhandler() {
    tblCsoport.style.display = 'block'
    buildTable(coffeeArray);
}
function hideAllData_ClickHandler() {
    tblCsoport.style.display = 'none';

}

function showMoreFilter_ClickHandler() {
    var hideAndShow = document.querySelector('.hideAndShow');
    hideAndShow.style.display = 'block';
}


function addAllLight() {
    tblCsoport.style.display = 'block';
    tblCsoport.style.backgroundColor = '#25691b';
    buildTable(light);
}

function addAllMedium() {
    tblCsoport.style.display = 'block';
    tblCsoport.style.backgroundColor = '#d66e1e';
    buildTable(medium);
}

function addAllStrong() {
    tblCsoport.style.display = 'block';
    tblCsoport.style.backgroundColor = ' tomato';
    buildTable(strong);
}
//kavék generálása létrehozása
var coffeeArray = [];

var names = ["Affogato", "Americano", "Bicerin", "Breve", "Café Bombón", "Café au lait", "Café Crema", "Caffé Latte", "Caffé macchiato", "Café mélange", "Coffee milk"];
var country = ['HU', 'DE', 'USA', 'BA', 'BR', 'CA', 'CL'];
var intensitity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var instock = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

for (let i = 0; i < 100; i++) {
    var coffee = {};

    coffee.name = names[Math.floor(Math.random() * names.length)] + ' ' + names[Math.floor(Math.random() * names.length)];
    coffee.country = country[Math.floor(Math.random() * country.length)];
    coffee.intensitity = intensitity[Math.floor(Math.random() * intensitity.length)];
    coffee.instock = instock[Math.floor(Math.random() * instock.length)];
    coffee.pricePerKilo = Math.round(Math.random() * 5000) + 500;
    coffee.pricePerCup = parseInt(coffee.pricePerKilo / 3);
    coffee.add = '🛒';
    coffee.id = i + 1;
    coffeeArray.push(coffee);

}

function buildTable(tomb) {

    var nodeTbody = document.querySelector('#tblCsoport>TBODY');

    nodeTbody.innerText='';  
    for (var row = 0; row < tomb.length; row++) {
        var nodeTR = document.createElement('TR');
        var coffeeAll = tomb[row];
        nodeTbody.appendChild(nodeTR);
        for (var propName in tomb[row]) {
            var nodeTD = document.createElement('TD');
            nodeTD.innerText = tomb[row][propName];
            nodeTR.appendChild(nodeTD);
        }

    }
}
//search by name



var startSearch = document.querySelector('.startSearch');
startSearch.addEventListener('click', search_click, false);

function search_click() {
     var result = [];
    var search = document.querySelector('.inputSearch');
    search = search.value.toLowerCase();
    console.log(search);
    for (var k in coffeeArray) {
        if (coffeeArray[k].name.toLowerCase().indexOf(search) !=- 1) {
            result.push(coffeeArray[k]);
        }
    } 
   
    tblCsoport.style.display = 'block';
    buildTable(result);
}



//Search by intensity

var light = [];
var medium = [];
var strong = [];

for (var k in coffeeArray) {
    if (coffeeArray[k].intensitity <= 3) {
        light.push(coffeeArray[k]);

    }
    else if (coffeeArray[k].intensitity <= 7) {
        medium.push(coffeeArray[k])
    }
    else {
        strong.push(coffeeArray[k])
    }
}

//search by price
//ez még sántít!!!!Elégéé

var expensive = document.querySelector('#expensive');
expensive.addEventListener('click', calculateExpensive, false);

function calculateExpensive() {
    var mostExpensive = coffeeArray[0].name + ' ' + coffeeArray[0].pricePerCup + 'Ft';
    for (var k in coffeeArray) {
        if (coffeeArray[k].pricePerCup > mostExpensive.pricePerCup) {
            mostExpensive = coffeeArray[k].name;
        }
    } var str = JSON.stringify(mostExpensive, null, 4);
    fillPre(str);
}
function fillPre(content1) {
    document.querySelector('.outputExpensive').innerHTML = content1;
}




var cheap = document.querySelector('#cheap');
cheap.addEventListener('click', calculateCheap, false);

function calculateCheap() {
    var mostcheap = coffeeArray[0].name + ' ' + coffeeArray[0].pricePerCup + 'Ft';
    for (var k in coffeeArray) {
        if (coffeeArray[k].pricePerCup < mostcheap.pricePerCup) {
            mostcheap = coffeeArray[k].name;
        }
    } var sr = JSON.stringify(mostcheap, null, 4);
    fillPre1(sr);
}

function fillPre1(content2) {
    document.querySelector('.outputcheap').innerHTML = content2;
}




