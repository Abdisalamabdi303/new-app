const searchForm = document.querySelector(".searchForm");
const imageDisplay = document.querySelector(".images");
const keyword  = document.querySelector(".input");
const apiKey="26oTfszdu7lFhh0JN80uqBrmRmbnWzwZJcS8jCuC27U";

let word = "";
let page  = 1;

searchForm.addEventListener("submit", async event =>{
    event.preventDefault();
    page = 1;
    displayImage();
    
    displayError("Please Enter the name of the image you are searching for");
   
})
async function displayImage(){
    
        word = keyword.value;
        const apiUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${word}&client_id=${apiKey}&per_page=12`;
     

      if(word){

     
       
        try{
        const response = await fetch(apiUrl);
        const data = await response.json();
       
       
      
        if(page===1){
            imageDisplay.innerHTML = "";
        }
        
        const results = data.results;
        results.map((result)=>{
            const image = document.createElement("img");
            image.src = result.urls.small;
            imageDisplay.classList.add("images")
            imageDisplay.style.display="grid";
            imageDisplay.appendChild(image);
        })
        }
    
        catch(error){
            console.error(error);
            displayError(error);
    }
}

}


function displayError(message){
    const errorDisplay= document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    imageDisplay.textContent="";
    imageDisplay.style.display = "flex";
    imageDisplay.appendChild(errorDisplay);

}