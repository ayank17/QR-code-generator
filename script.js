let btn = document.querySelector("button");
let qrText = document.getElementById("qrText");
let qrImage = document.querySelector("#qrImage"); // Removed extra space
let imgBox = document.getElementById("imgBox");

btn.addEventListener("click", ()=> { // Removed function name
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=" + qrText.value;
        imgBox.classList.add("show-img") ;
    }
    else{
        qrText.classList.add("shake")
    }
   
});
