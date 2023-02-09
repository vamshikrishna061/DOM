//console.log(document.images);

//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title')
//var headerTitle = document.getElementById('main-header');
//headerTitle.textContent = 'hello';
//headerTitle.textContent = 'ho';
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBotton = "solid 3px #000";


var items = document.getElementsByClassName('list-group-item');
//console.log(items);

//console.log(items[1]);
console.log(items[2],);
//items[1].textContent = 'hello2'
//for(var i =0;i<items.length;i++){

   // items[i].style.fontWeight = 'bold'

items[2].style.backgroundColor = 'green'

//QUERy SELECTOR//

//var header = document.querySelector('#main-header')
//header.style.borderBottom = 'soild 40px blue ';

//var input = document.querySelector('input')
//input.value='hello world';

var item = document.querySelector('.list-group-item')
item.style.color ='red';

var lastItem = document.querySelector
('.list-group-item:last-child');
lastItem.style.color = 'blue';

var lastItem = document.querySelector
('.list-group-item:last-child(2)');
lastItem.style.color = 'coral';


var titles = document.querySelectorAll('.title');
console.log(titles);

var odd = document.querySelectorAll('li:nth-child(odd');
var odd = document.querySelectorAll('li:nth-child(odd');

for(var i=0; i<onloadeddata.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    Even[i].style.backgroundColor = '#f4f4f4';

}