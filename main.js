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
    var remove = document.getElementById('removeButton');
    var add = document.getElementById('addButton');
    var login = document.querySelector('.btnBtnLogin');
    var shopShow = document.querySelector('.shoppingShow');
    var shopDel = document.querySelector('.shoppingDel');

    signUpBtn.addEventListener('mouseover', addShadowed, false);
    pickOneBtn.addEventListener('mouseover', addShadowed, false);
    showAllBtn.addEventListener('mouseover', addShadowed, false);
    hideAllBtn.addEventListener('mouseover', addShadowed, false);
    clear.addEventListener('mouseover', addShadowed, false);
    remove.addEventListener('mouseover', addShadowed, false);
    add.addEventListener('mouseover', addShadowed, false);
    login.addEventListener('mouseover', addShadowed, false);
    shopShow.addEventListener('mouseover', addShadowed, false);
    shopDel.addEventListener('mouseover', addShadowed, false);

    signUpBtn.addEventListener('mouseout', removeShadowed, false);
    pickOneBtn.addEventListener('mouseout', removeShadowed, false);
    showAllBtn.addEventListener('mouseout', removeShadowed, false);
    hideAllBtn.addEventListener('mouseout', removeShadowed, false);
    clear.addEventListener('mouseout', removeShadowed, false);
    remove.addEventListener('mouseout', removeShadowed, false);
    add.addEventListener('mouseout', removeShadowed, false);
    login.addEventListener('mouseout', removeShadowed, false);
    shopShow.addEventListener('mouseout', removeShadowed, false);
    shopDel.addEventListener('mouseout', removeShadowed, false);

    showAllBtn.addEventListener('click', addAllData_Clickhandler, false);
    hideAllBtn.addEventListener('click', hideAllData_ClickHandler, false);
    clear.addEventListener('click', window_LoadHandler, false);
    shopShow.addEventListener('click', show_shopping, false);
    shopDel.addEventListener('click', delete_shopping, false);

    var tblCsoport = document.querySelector('#tblCsoport');
    tblCsoport.style.display = 'none';

    var tblCsoportAll = document.querySelector('#tblCsoportAll');
    tblCsoportAll.style.display = 'none';

    var tblShoppingTable = document.querySelector('#tblShoppingTable');
    tblShoppingTable.style.display = 'none';

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

function RemoveColorMouseOut() {
    var changenavColor = document.querySelector('.globalNavBar');
    changenavColor.setAttribute('style', 'background-color: hsl(52, 100%, 55%)');

}
function changeColorMouseOver() {
    var changenavColor = document.querySelector('.globalNavBar');
    changenavColor.setAttribute('style', 'background-color: white')
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
    tblCsoportAll.style.display = 'block'
    buildTableAll(coffeeArray);
}
function hideAllData_ClickHandler() {
    tblCsoportAll.style.display = 'none';

}

function showMoreFilter_ClickHandler() {
    var hideAndShow = document.querySelector('.hideAndShow');
    hideAndShow.style.display = 'block';
}


//erősségek szerint

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

//shopping items show and delete
function show_shopping() {
    tblShoppingTable.style.display = 'block';
    
  //  buildShopping(basket);
}

var thx = document.querySelector('.thx');
thx.style.display = 'none';


function delete_shopping() {
    tblShoppingTable.style.display = 'none'
    thx.style.display = 'block';

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


function buildShopping(tomb) {

    var nodeTbody = document.querySelector('#tblShoppingTable>TBODY');

    nodeTbody.innerText = '';
    for (var row = 0; row < tomb.length; row++) {
        var nodeTR = document.createElement('TR');
        nodeTR.setAttribute('data-coffeesid', tomb[row].id)
        var coffeeAll = tomb[row];
        nodeTbody.appendChild(nodeTR);
        for (var propName in tomb[row]) {
            var nodeTD = document.createElement('TD');
            nodeTD.innerText = tomb[row][propName];
            nodeTR.appendChild(nodeTD);
        }
        


        nodeTD = document.createElement('TD');
        nodeTD.innerText = '⌫';
        nodeTR.appendChild(nodeTD);
        nodeTR.addEventListener('click', Kosar_torles_ClickHandler, false);
        nodeTbody.appendChild(nodeTR);
    }
}


//basket törlése

function Kosar_torles_ClickHandler() {
    var nodeTD = event.target
    var nodeTR = nodeTD.parentNode;
    var coffeeId = parseInt(nodeTR.getAttribute('data-coffeesid'));

    for (var i = 0; i < basket.length; i++) {
        if (basket[i].id === coffeeId) {
            basket.splice(i, 1);
            break;
        }
    }
    buildShopping(basket);
}



function buildTable(tomb) {

    var nodeTbody = document.querySelector('#tblCsoport>TBODY');

    nodeTbody.innerText = '';
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
function buildTableAll(tomb) {

    var nodeTbody = document.querySelector('#tblCsoportAll>TBODY');

    nodeTbody.innerText = '';
    for (var row = 0; row < tomb.length; row++) {
        var coffeeAll = tomb[row];
        var nodeTR = document.createElement('TR');
        nodeTR.setAttribute('data-coffeesid', coffeeAll.id)
        nodeTbody.appendChild(nodeTR);
        for (var propName in coffeeAll) {
            if (propName === 'add') {

                var nodeTD = document.createElement('TD');
                nodeTD.addEventListener('click', ShoppingTRolley_clickHandler);
                nodeTD.innerText = coffeeAll[propName];
                nodeTR.appendChild(nodeTD);
            } else {
                var nodeTD = document.createElement('TD');
                nodeTD.innerText = coffeeAll[propName];
                nodeTR.appendChild(nodeTD);
            }
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
    for (var i = 0; i < coffeeArray.length; i++) {
        if (coffeeArray[i].name.toLowerCase().indexOf(search) != - 1) {
            result.push(coffeeArray[i]);
            buildTableAll(result);
            tblCsoportAll.style.display = 'block';
        }

    }

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

//search by price-legdrágább, legolcsóbb és az átlag


var mostExpensive = document.getElementById('expensive');
mostExpensive.addEventListener('click', calculateExpensive, false);

function calculateExpensive() {
    var mostExpensive = coffeeArray[0];
    var coffeeString = '';
    for (var i = 0; i < coffeeArray.length; i++) {
        if (mostExpensive.pricePerCup < coffeeArray[i].pricePerCup) {
            mostExpensive = coffeeArray[i];
        }
    }
    coffeeString = '☕' + mostExpensive.name + ' :' + mostExpensive.pricePerCup + ' Ft';


    mostExpensive.innerHTML = coffeeString;
    fillOutputExpensiveCoffee(coffeeString)
}
function fillOutputExpensiveCoffee(expensive) {
    document.querySelector('.outputExpensive').innerHTML = expensive;
}


var mostCheapest = document.getElementById('cheap');
mostCheapest.addEventListener('click', calculateCheap, false);

function calculateCheap() {
    var mostCheapestCoffee = coffeeArray[0];
    var coffeeStringcheap = '';
    for (var i = 0; i < coffeeArray.length; i++) {
        if (mostCheapestCoffee.pricePerCup > coffeeArray[i].pricePerCup) {
            mostCheapestCoffee = coffeeArray[i];
        }
    }
    coffeeStringcheap = '☕' + mostCheapestCoffee.name + ' :' + mostCheapestCoffee.pricePerCup + ' Ft';

    mostCheapestCoffee.innerHTML = coffeeStringcheap;
    fillOutputCheapCoffee(coffeeStringcheap)
}
function fillOutputCheapCoffee(expensive) {
    document.querySelector('.outputcheap').innerHTML = expensive;
}

var avarage = document.getElementById('avg');
avarage.addEventListener('click', calculateAverage, false)

function calculateAverage() {
    var AverageCoffee = 0;
    var count = 0;
    var sumCoffee = 0;
    var coffeeStringcheap = '';
    for (var i = 0; i < coffeeArray.length; i++) {
        count++;
        sumCoffee += coffeeArray[i].pricePerCup;
    }

    AverageCoffee = parseInt(sumCoffee / count);

    coffeeStringcheap = '👛' + AverageCoffee + ' Ft' + ' 👛';

    AverageCoffee.innerHTML = coffeeStringcheap;
    fillOutputAvgCoffee(coffeeStringcheap)
}
function fillOutputAvgCoffee(avg) {
    document.querySelector('.avg').innerHTML = avg;
}


//shopping list

//li elemek generálása

var list = document.querySelector('#list');

var shoppinglist = [
    'RC_DE01',
    'Americano Coffee milk']

shoppinglist.forEach(function (coffee) {
    var item = document.createElement('li');
    item.innerHTML = coffee;
    list.appendChild(item);
});

//shopping list gombok

var btnAdd = document.querySelector('#addButton');
var btnRemove = document.querySelector('#removeButton');
var inputName = document.querySelector('#newName');


btnAdd.addEventListener('click', addName_ClickHandler, false);
btnRemove.addEventListener('click', removeName_ClickHandler, false);

function addName_ClickHandler() {
    if (inputName.value !== "") {
        var newLi = document.createElement('li');
        newLi.innerHTML = inputName.value;
        list.appendChild(newLi);
        function clearInputValue() {
            inputName.value = "";
        }
        clearInputValue();
    }
}

function removeName_ClickHandler() {
    if (list.childElementCount !== 0) {
        var lastChild = list.lastElementChild;
        list.removeChild(lastChild);
    }
}


//shopping list eseménykezelő
var basket = [];

function ShoppingTRolley_clickHandler() {

    var nodeTD = event.target;
    var nodeTR = nodeTD.parentNode;
    var kavesid = parseInt(nodeTR.getAttribute('data-coffeesid'));
    for (var i = 0; i < coffeeArray.length; i++) {
        if (coffeeArray[i].id === kavesid) {
            basket.push(coffeeArray[i]);
            break;
        }
    }
    buildShopping(basket);
    console.log(basket)
}


//login

function sendForm() {
    var username = document.querySelector('#username');
    var password = document.querySelector('#password');
    var result = document.querySelector('#result');


    if (username.value == "raccoon" && password.value == "42") {
        result.innerHTML = "Succesful login 🤩"
    } else {
        result.innerHTML = "Wrong username or password 😝";
        username.value = " ";
        password.value = " ";

    };


}

