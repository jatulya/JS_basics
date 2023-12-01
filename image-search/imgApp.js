console.log("Welcome to behind the scenes of Image Search App!! ")
const accessKey = "XE0W9ytopdGaxsRAEkcg4m8mJvfOD5q8LZ1PYh8rzcQ" // access key -> from the app created in unsplash.com

//getting elements from the html page
const formEle = document.querySelector("form")
const searchEle = document.getElementById("search-input")
const searchRes = document.querySelector(".search-results")
const showMore = document.getElementById("showmore-btn")

let inputData = ""
let page = 1

async function searchImg(){
    inputData = searchEle.value;
    //the url to fetch the images from the unsplash acc to the inputData provided at the given page 
    const url = `https://api.unsplash.com/search/photo?page=${page}&query=${inputData}&client_id=${accessKey}` 
    //fetches the response
    const response = await fetch(url)
    const data = await response.json() //converts the response to json 
    const results = data.results 

    if (page===1){
        searchRes.innerHTML=""
    }
    //mapping the results to the div element
    results.map((res) => {
        //creating the innerhtml elements
        const imgWrap = document.createElement('div')
        imgWrap.classList.add("search-result")
        const img = document.createElement('img')
        img.src = res.urls.small
        img.alt = res.alt_description
        const imgLink = document.createElement('a')
        imgLink.hreg = res.links.html
        imgLink.target = "_blank"
        imgLink.textContent = res.alt_description
        //pushing it to the div 
        imgWrap.appendChild(img)
        imgWrap.appendChild(imgLink)
        imgWrap.appendChild(imgWrap)
    });

    page++
    if (page>1){
        showMore.style.display="block"
    }
}