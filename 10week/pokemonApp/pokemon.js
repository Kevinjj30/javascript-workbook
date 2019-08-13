'use strict';

//Urls I will be using to fetch the information on the pokemon. I declared them all as vars.
var url1= 'https://pokeapi.co/api/v2/pokemon/1/';
var url2= 'https://pokeapi.co/api/v2/pokemon/6/';
var url3= 'https://pokeapi.co/api/v2/pokemon/25/';
var url4= 'https://pokeapi.co/api/v2/pokemon/7/';
var url5= 'https://pokeapi.co/api/v2/pokemon/39/';
var url6= 'https://pokeapi.co/api/v2/pokemon/zubat/';
var url7= 'https://pokeapi.co/api/v2/pokemon/68/';
var url8= 'https://pokeapi.co/api/v2/pokemon/70/';
var url9= 'https://pokeapi.co/api/v2/pokemon/79/';
var url10= 'https://pokeapi.co/api/v2/pokemon/81/';
var url11= 'https://pokeapi.co/api/v2/pokemon/100/';
var url12= 'https://pokeapi.co/api/v2/pokemon/106/';
var url13= 'https://pokeapi.co/api/v2/pokemon/135/';
var url14= 'https://pokeapi.co/api/v2/pokemon/150/';
var url15= 'https://pokeapi.co/api/v2/pokemon/snorlax/';
var url16= 'https://pokeapi.co/api/v2/pokemon/28/';
var url17= 'https://pokeapi.co/api/v2/pokemon/12/';
var url18= 'https://pokeapi.co/api/v2/pokemon/149/';
var url19= 'https://pokeapi.co/api/v2/pokemon/moltres/';
var url20= 'https://pokeapi.co/api/v2/pokemon/zapdos/';

var btn = document.getElementById('btn');
btn.onclick = function () {
document.getElementById('pokemon1').innerHTML = " ";
document.getElementById('pokemon2').innerHTML = " ";
document.getElementById('pokesprite1').innerHTML = " ";
document.getElementById('pokesprite2').innerHTML = " ";
document.getElementById('Winner2').innerHTML = " ";
document.getElementById('Winner').innerHTML = " ";
document.getElementById('pwr2').innerHTML = " ";
document.getElementById('pwr1').innerHTML = " ";
};


//Data to shuffle pokemon im 100% sure there is way to make this function more simpler and not as long but for now until I learn more this works :)
var elem = document.querySelector('.flip-card:nth-of-type(1)');
var elem1 = document.querySelector('.flip-card:nth-of-type(2)');
var elem2 = document.querySelector('.flip-card:nth-of-type(3)');
var elem3 = document.querySelector('.flip-card:nth-of-type(4)');
var elem4 = document.querySelector('.flip-card:nth-of-type(5)');
var elem5 = document.querySelector('.flip-card:nth-of-type(6)');
var elem6 = document.querySelector('.flip-card:nth-of-type(7)');
var elem7 = document.querySelector('.flip-card:nth-of-type(8)');
var elem8 = document.querySelector('.flip-card:nth-of-type(9)');
var elem9 = document.querySelector('.flip-card:nth-of-type(10)');
var elem10 = document.querySelector('.flip-card:nth-of-type(11)');
var elem11= document.querySelector('.flip-card:nth-of-type(12)');
var elem12 = document.querySelector('.flip-card:nth-of-type(13');
var elem13 = document.querySelector('.flip-card:nth-of-type(14)');
var elem14 = document.querySelector('.flip-card:nth-of-type(15)');
var elem15= document.querySelector('.flip-card:nth-of-type(16)');
var elem16 = document.querySelector('.flip-card:nth-of-type(17)');
var elem17= document.querySelector('.flip-card:nth-of-type(18)');
var elem18 = document.querySelector('.flip-card:nth-of-type(19)');
var elem19 = document.querySelector('.flip-card:nth-of-type(20)');


var btn = document.getElementById('btn1');
btn.onclick = function () {
var myArray = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12",
"13",
"14",
"15",
"16",
"17",
"18",
"19",
"20",
];

var randompokemon= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon1= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon2= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon3= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon4= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon5= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon6= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon7= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon8= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon9= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon10= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon11= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon12= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon13= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon14= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon15= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon16= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon17= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon18= myArray[Math.floor(Math.random()*myArray.length)];
var randompokemon19= myArray[Math.floor(Math.random()*myArray.length)];


elem.style.order = randompokemon;
elem1.style.order = randompokemon1;
elem2.style.order = randompokemon2;
elem3.style.order = randompokemon3;
elem4.style.order = randompokemon4;
elem5.style.order = randompokemon5;
elem6.style.order = randompokemon6;
elem7.style.order = randompokemon7;
elem8.style.order = randompokemon8;
elem9.style.order = randompokemon9;
elem10.style.order = randompokemon10;
elem11.style.order = randompokemon11;
elem12.style.order = randompokemon12;
elem13.style.order = randompokemon13;
elem14.style.order = randompokemon14;
elem15.style.order = randompokemon15;
elem16.style.order = randompokemon16;
elem17.style.order = randompokemon17;
elem18.style.order = randompokemon18;
elem19.style.order = randompokemon19;
};

// End of data to shuffle pokemon


//Function thats uses parseint on the attack power value of the two pokemon selected from a string to a number and returns the highest value "The most likely to win"
// This api had multiple stats per pokemon like attack/defense/special attack/speed a more accurate way to compare would be to parse all those values to number and get the average of them all then compare those to get the most likely to win but for now just attack power will do.
function fight(){

  

var compare1=  document.getElementById('pwr1').textContent;
var compareinteger=parseInt(compare1, 10);
var compare2= document.getElementById('pwr2').textContent;
var compareinteger2 = parseInt(compare2, 10);


    if (compareinteger < compareinteger2){
        console.log("compareinteger2 wins");
        document.getElementById('Winner2').innerHTML = "Player 2 Wins!"
    
    }
    else  
    {
        document.getElementById('Winner').innerHTML = "Player 1 Wins!"
        console.log("jenkins is the winner");
    
    }
    
    
    
    console.log(compareinteger);
    console.log(compareinteger2);
    
}

//end of fight function









//getpokemon1 - 20 is fetch information for all pokemon also if statemets to populate second box if first box contains information already.

function getPokemon1(){
fetch (url1).then(function(response){
return response.json();
})
.then (function(data){

let output = ` ` 
let output2 = ` `


var pokeID = data.order;
var pokeName = data.name.toUpperCase();
var pokeType1 = data.types[0].type.name.toUpperCase();
if (data.types.length == 2) {
var pokeType2 = data.types[1].type.name.toUpperCase();
}
else var pokeType2 = null;
var pwr = data.stats[4].base_stat;


output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;


// console.log("Number: ", pokeID);
// console.log("Name: ", pokeName);
// console.log("Move 1: ", pokeType1);
// console.log("Move 2: ", pokeType2);
// console.log("Move 2: ", pwr);

var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/1/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[1].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;











var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}





})
})
.catch(function(error) {
console.log(error);
})
}


function getPokemonpic1(){
    fetch (url1).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    
        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}



function getPokemon2(){
fetch (url2).then(function(response){
return response.json();
})
.then (function(data){

    let output = ` ` 
    let output2 = ` `
    
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
    else var pokeType2 = null;
    var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/6/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[1].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);






var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
        
       
}
else document.getElementById('pokemon1').innerHTML = output;



}

var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}



})
})
.catch(function(error) {
console.log(error);
})
}


function getPokemonpic2(){
    fetch (url2).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    
    })

.catch(function(error) {
console.log(error);
})
}




function getPokemon3(){
fetch (url3).then(function(response){
return response.json();
})
.then (function(data){
    let output2 = ` `
    let output = ` ` 
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/25/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[2].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);





var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
        
       
}
else document.getElementById('pokemon1').innerHTML = output;



}

var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}


})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic3(){
    fetch (url3).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}



function getPokemon4(){
fetch (url4).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/7/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[1].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);






var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic4(){
    fetch (url4).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}


function getPokemon5(){
fetch (url5).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/39/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[1].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);






var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})

.catch(function(error) {
console.log(error);
})
}


function getPokemonpic5(){
    fetch (url5).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}

function getPokemon6(){
fetch (url6).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `

    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/zubat/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[2].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic6(){
    fetch (url6).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}
function getPokemon7(){
fetch (url7).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/68"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[2].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic7(){
    fetch (url7).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}

function getPokemon8(){
fetch (url8).then(function(response){
return response.json();
})
.then (function(data){

let output = ` ` 
let output2 = ` `
var pokeID = data.order;
var pokeName = data.name.toUpperCase();
var pokeType1 = data.types[0].type.name.toUpperCase();
if (data.types.length == 2) {
var pokeType2 = data.types[1].type.name.toUpperCase();
}
else var pokeType2 = null;
var pwr = data.stats[4].base_stat;


output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;


console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/70/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[1].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic8(){
    fetch (url8).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}

function getPokemon9(){
fetch (url9).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `

    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
    else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;
console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/79/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[2].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}
function getPokemonpic9(){
    fetch (url9).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}

function getPokemon10(){
fetch (url10).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/81/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[2].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}
function getPokemonpic10(){
    fetch (url10).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}

function getPokemon11(){
fetch (url11).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;
console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/100/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[1].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic11(){
    fetch (url11).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}


function getPokemon12(){
fetch (url12).then(function(response){
return response.json();
})
.then (function(data){

    let output = ` ` 
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/106/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[1].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);






var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic12(){
    fetch (url12).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}



function getPokemon13(){
fetch (url13).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;
output2 += `
<h1>${pwr}Name:<h1>

`;
console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/135/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[2].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);






var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic13(){
    fetch (url13).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}

function getPokemon14(){
fetch (url14).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;
output2 += `
<h1>${pwr}Name:<h1>

`;
console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/150/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[1].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic14(){
    fetch (url14).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}

function getPokemon15(){
fetch (url15).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/snorlax/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[2].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}


function getPokemonpic15(){
    fetch (url15).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}


function getPokemon16(){
fetch (url16).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/28/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[2].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic16(){
    fetch (url16).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}


function getPokemon17(){
fetch (url17).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
    else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;


output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/12/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[2].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic17(){
    fetch (url17).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}

function getPokemon18(){
fetch (url18).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/149/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[2].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);






var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic18(){
    fetch (url18).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}

function getPokemon19(){
fetch (url19).then(function(response){
return response.json();
})
.then (function(data){

	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
	else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;
console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/moltres/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[1].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}
})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic19(){
    fetch (url19).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}

function getPokemon20(){
fetch (url20).then(function(response){
return response.json();
})
.then (function(data){
    
	let output = ` ` 
	let output2 = ` `
    var pokeID = data.order;
    var pokeName = data.name.toUpperCase();
    var pokeType1 = data.types[0].type.name.toUpperCase();
    if (data.types.length == 2) {
    var pokeType2 = data.types[1].type.name.toUpperCase();
    }
    else var pokeType2 = null;
	var pwr = data.stats[4].base_stat;

output += `
<H1> Name: ${pokeName}</h1
<ul>
<li> Number: ${pokeID}</li>
<li> Move 1: ${pokeType1}</li>
<li> Move 2: ${ pokeType2}</li>
<li> Attack Power: ${pwr}</li>
</ul>
`;

output2 += `
<h1>${pwr}Name:<h1>

`;

console.log("Number: ", pokeID);
console.log("Name: ", pokeName);
console.log("Move 1: ", pokeType1);
console.log("Move 2: ", pokeType2);


var descriptionUrl = "https://pokeapi.co/api/v2/pokemon-species/zapdos/"; 

fetch (descriptionUrl).then(function(response){
return response.json();
})
.then (function(data2){




var descrip = data2.flavor_text_entries[1].flavor_text;
output += `
<p> Description: ${descrip}</p>
`;









console.log("Description: ", descrip);







var divs= document.getElementsByClassName('battletext');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        document.getElementById('pokemon2').innerHTML = output;
       
}
else document.getElementById('pokemon1').innerHTML = output;


}


var divs= document.getElementsByClassName('powers');
for (var i = 0, len = divs.length; i < len; ++i) {

    if(divs[i].innerHTML.indexOf("Name:") !== -1){
        
        document.getElementById('pwr2').innerHTML= output2;
       
}
else document.getElementById('pwr1').innerHTML= output2;



}


})
})
.catch(function(error) {
console.log(error);
})
}

function getPokemonpic20(){
    fetch (url20).then(function(response){
    return response.json();
    })
    .then (function(data){
        let output = ` `

        var pic = data.sprites.front_default;
        var pokeName = data.name.toUpperCase();
        output += `
        Go ${pokeName}!
        <img src =${pic} height= "400px" width = "400px" />
        `;
      
        
        
    

        var divs= document.getElementsByClassName('pokepics');
        for (var i = 0, len = divs.length; i < len; ++i) {
        
            if(divs[i].innerHTML.indexOf("Go") !== -1){
                document.getElementById('pokesprite2').innerHTML = output;
        }
        else document.getElementById('pokesprite1').innerHTML = output;
        
        }
    })

.catch(function(error) {
console.log(error);
})
}




const delay = 200;

const write = (el, text, i, next) => {
	if (i <= text.length) {
		el.innerHTML = text.substring(0, i);
		setTimeout(() => { write(el, text, i + 1, next) }, delay);
	} else {
setTimeout(()=> next(), delay*3);
	}
}

const erase = (el, text, i, next) => {
	if (i > -1) {
		el.innerHTML = text.substring(0, i);
		setTimeout(() => { erase(el, text, i - 1, next) }, delay/2);
	} else {
		next();
	}
}

const typewrite = () => {
	const wordsList =  ['Pokemon Kombat!!!!!!'];
	const span = document.getElementById('header');
	
const repeat = (i) => {
		const word = wordsList[i]
		const nextWord = (i + 1) % wordsList.length;
		write( span, word, 0, () => erase(span, word, word.length, () => repeat(nextWord) ) );
	}

	repeat(0);
}

typewrite();