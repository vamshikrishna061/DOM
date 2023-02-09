//console.log(document.images);

//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title')
//var headerTitle = document.getElementById('main-header');
//headerTitle.textContent = 'hello';
//headerTitle.textContent = 'ho';
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBotton = "solid 3px #000";


var items = document.getElementsByClassName('list-group-item');
console.log(items);

console.log(items[1]);
console.log(items[2],);
//items[1].textContent = 'hello2'
for(var i =0;i<items.length;i++){

    items[i].style.fontWeight = 'bold'
}
items[3].style.backgroundColor = 'green'