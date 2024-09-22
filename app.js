const zoomBtn = document.getElementById("zoom-in");
const zoomableImage = document.getElementById("zoomable-image");

zoomBtn.addEventListener("click", function(){
    const zoomableImage = document.getElementById("zoomable-image");
    let srcLazyLoad = zoomableImage.getAttribute("src");
    const zoomModal = document.querySelector(".modal");
    let modalImage = document.createElement("img");
    const arr = ["src", `${srcLazyLoad}`, "id", "modal-img", "alt", "Zoomed Image"];
    modalImage.setAttribute(`${arr[0]}`, `${arr[1]}`)
    modalImage.setAttribute(`${arr[2]}`, `${arr[3]}`)
    modalImage.setAttribute(`${arr[4]}`, `${arr[5]}`)
    
    zoomModal.appendChild(modalImage);
    zoomModal.style.display = "flex";
   

     document.addEventListener("keydown", function(event){
        if(event.key === "Escape" || event.key === "Backspace"){
            zoomModal.style.display = "none"; 
            zoomModal.removeChild(zoomModal.firstElementChild);  
            console.log(modalImage);
        }
    })
})
       

      
        function toggleMenu() {  
            const navbarLinks = document.getElementById('navbar-links');  
            navbarLinks.classList.toggle('active');  
        }  

