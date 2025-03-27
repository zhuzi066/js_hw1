function upDate(previewPic) {
    console.log("Event triggered!");
    console.log("Image source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerText = previewPic.alt;
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerText = "Hover over an image below to display here.";
}
