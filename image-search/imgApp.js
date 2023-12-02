console.log("Welcome to behind the scenes of Image Search App!! ")
const accessKey = "XE0W9ytopdGaxsRAEkcg4m8mJvfOD5q8LZ1PYh8rzcQ" // access key -> from the app created in unsplash.com
//console.log(accessKey)
//getting elements from the html page
const searchBtn = document.getElementById('search-btn')
const searchEle = document.getElementById("search-input")
const searchRes = document.querySelector(".search-results")
const showMore = document.getElementById("showmore-btn")
console.log(searchBtn, searchEle, searchRes, showMore)

let inputData = ""
let page = 1

document.addEventListener('DOMContentLoaded', function(){
    console.log("inside domcontentloaded")
    //adding event listenter to the form -> button inside the form
    searchBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        page = 1;
        searchImg()
        console.log("added event listerner to search")
    })
    //showing more images when button is clicked
    showMore.addEventListener("click", ()=>{
        searchImg()
    })
})

async function searchImg(){
    console.log("inside searchImg function")
    inputData = searchEle.value;
    //the url to fetch the images from the unsplash acc to the inputData provided at the given page 
    const url = `https://api.unsplash.com/search/photo?page=${page}&query=${inputData}&client_id=${accessKey}` 
    //fetches the response
    const response = await fetch(url)
    const data = await response.json() //converts the response to json 
    const results = data.results 
    console.log("Fetched results..", results)

    if (page===1){
        searchRes.innerHTML=""
        console.log("What's the point in this")
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
        searchRes.appendChild(imgWrap)
        console.log("at the end of mapping function")
    });

    page++
    if (page>1){
        showMore.style.display="block"
    }
}