function upDate(previewPic) {
    console.log("Event triggered!");
    console.log("Image source:", previewPic.src);
    
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerText = ""; // Очищаем текст
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Hover over an image below to display here.";
}
