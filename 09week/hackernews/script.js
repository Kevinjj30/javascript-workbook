'use strict';
// document.getElementById("getText").addEventListener('click', getText)
// document.getElementById("getJson").addEventListener('click', getJson)
document.getElementById("getAPI").addEventListener('click', getAPI)


// function getText(){
//     fetch("text.txt")
//     .then(function(data) {
//         // console.log(data.text())
//         Return data.text()
//     }).then(function(res)){
//         document.getElementById("input").innerHTML= output;
//     })


// function getJson(){
//     fetch("color.json")
//     .then((res)=> res.json())
//     .then((data)=>{
//         let output = '<h2> Color </h2>'
//         data.forEach(function(color){
//             output += '
            
//             <ul>
//             <li>col</li>
            
            
            
//             ';
//         });
//    }
//    }
//    }

function getAPI(){
    fetch("https://randomuser.me/api/")
    .then((res)=> res.json())
    .then((data)=>{
        let output = '<h2> Api Posts </h2>'
        data.forEach(function(post){
            output += '
            
            <ul>
            <li>col</l}){

document.getElementById("getAPI").innerHTML= output;

            })


