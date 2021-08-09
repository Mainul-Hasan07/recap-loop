var bottleColor = 'yellow';
var waterQuantity = '23';
var isFull = false;


// Array
var item = ['bottle','mug', 'glass', 'pen', 'paper'];
console.log(item);
var itemIndex = item.indexOf('glass');
console.log(itemIndex);
console.log(item.indexOf('glass'));
item.push('envelop');
console.log(item);
item.push('watch');
console.log(item);
item.pop();
console.log(item);
item.unshift('pen');
console.log(item);
item.shift();
console.log(item);
item.splice(2,0,'sunglass','pendrive');
console.log(item);
var numbers = item.length;
console.log(numbers);

// condition
if(item.length >= 4){
    console.log('You have too many stuff your desk');
}
else if(item.length == 4){
    console.log('you only one haly');
}
else{
    console.log('wow! you have a clean desk');
}