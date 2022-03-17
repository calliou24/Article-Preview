const iconShare = document.getElementById("share");

const cont = document.getElementById("cont");

const main = document.getElementById("main")


const sB = ()=> { 
    let shareBox = document.createElement("DIV");
    shareBox.classList.add("shareBox")

    let text = document.createElement("P")
    text.innerHTML = "SHARE"
    shareBox.appendChild(text)
    cont.appendChild(shareBox)
    
    let htmlCode = document.createElement("DIV");
    htmlCode.classList.add("socialMediaCont")
    htmlCode.innerHTML =`<i id="facebook" class="fab fa-facebook"></i> <i id="instagram" class="fab fa-instagram"></i><i id="pinterest" class="fab fa-pinterest"></i>`;
    shareBox.appendChild(htmlCode)

    
    iconShare.addEventListener("mouseover",()=> { 
        iconShare.style.backgroundColor = "hsl(214, 17%, 51%)"
        iconShare.style.color = "hsl(210, 46%, 95%)"
        shareBox.style.opacity = "1";
        shareBox.style.display = "flex"
    
})
shareBox.addEventListener("mouseover",()=> { 

    shareBox.style.opacity = "1";
    shareBox.style.display = "flex"

})
shareBox.addEventListener("mouseout",()=> { 

    shareBox.style.opacity = "0";
    shareBox.style.display = "none"

})

    iconShare.addEventListener("mouseout",()=> { 
        iconShare.style.backgroundColor = "hsl(210, 46%, 95%)"
        iconShare.style.color = "hsl(217, 19%, 35%)"
        shareBox.style.opacity = "0";
})

    
};

sB();


