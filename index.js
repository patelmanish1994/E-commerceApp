// // to fetch the data from an api

function fetchData() {
  console.log("hello1");

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {

      console.log(data);


    });
}

// const url = "https://fakestoreapi.com/products";  //this is for fakestoreAPI
// const container = document.getElementById("container");
// fetch(url)
// .then(function(res){
//     return res.json();
// })
//     .then(function(res)
//     {
//         appendData(res);
//        // console.log("res", res) // .data is not necessary as url is different
//     }).catch(function(e)
// {
//     console.log("error", e);
// });


// function appendData(data)
// {
//    data.forEach(function(el)
//    {
//        let div = document.createElement("div");
//        let title = document.createElement("p")
//        title.innerText = el.title;

//        let price = document.createElement("p");
//        price.innerText = el.price;
//        let image = document.createElement("img");
//        image.src = el.image;

//        div.append(image,title,price);
//        container.append(div);
//    });
// }

// Example 2:
const container = document.getElementById("container");

const url = "https://fakestoreapi.com/products"; //this is for fakestoreAPI
//this is for fakestoreAPI

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    appendData(res.data);
    // console.log("res", res) // .data is not necessary as url is different
  })
  .catch(function (e) {
    console.log("error", e);
  });

function appendData(data) {
  data.forEach(function (el) {
    let div = document.createElement("div");
    let first_name = document.createElement("p");
    first_name.innerText = el.first_name;

    let last_name = document.createElement("p");
    last_name.innerText = el.last_name;
    let avatar = document.createElement("img");
    avatar.src = el.avatar;

    div.append(avatar, first_name, last_name);
    container.append(div);
  });
}
// fetchData();

//

// // to associate a button with a function

// const button = document.querySelector('btn');

// btn.onclick = function fetchData() {
//     // alert("ALERT THIS FUNCTION HAS RUNNED");

//     fetch('https://fakestoreapi.com/products')
//     .then((response) => response.json())
//     .then((data) => console.log(data))

// }

// // // Make cards using javascript

// // function fetchAndShowDogImage(breedName) {
// //     console.log(breedName);
// //     const url = "https://dog.ceo/api/breed/" + breedName + "/images/random";

// //     fetchJsonData(url).then((data) => {
// //       console.log("response", data);

// //       const output = document.querySelector("#output");
// //       output.innerHTML = `<div>
// //       <img src="${data.message}" alt="random dog image is here"/>
// //       <p>${breedName.toUpperCase()}</p>
// //       </div>`;
// //     });
// //   }



function hello() {
    
    console.log("hello")
}

hello();

