console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.getElementById("submitSearch");
const searchInput = document.querySelector("#searchWord");
const giphyImage= document.querySelector("img");
const contentContainer=document.querySelector("#content");

const feedbackEle = document.createElement("p");
contentContainer.appendChild(feedbackEle);

function displayImage(text){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=O3m4ZNTSV27NEmGKtUIC50DMh0SFieMk&s=${searchInput.value}`,{mode:"cors"})
    .then((res)=>{
        return res.json();
    })
    .then((resBodyData)=>{
        giphyImage.src=resBodyData.data.images.original.url;
        searchInput.value="";
        feedbackEle.textContent="";
    })
    .catch((err)=>{
        console.log(err);
        feedbackEle.textContent=err.message;
    })
}

searchButton.addEventListener("click", displayImage);

