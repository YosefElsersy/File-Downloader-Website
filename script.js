const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");



downloadBtn.addEventListener("click", (e)=>{
    e.preventDefault(); // preventing form from submitting
    downloadBtn.innerText = "Downloading file..."
    fetchFile(fileInput.value);
})

function fetchFile(url){
    // fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        // URL.createObjectURL Creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl; // passing tempUrl as href value of <a> tag
        // passing file last name & extension as download value of <a>tag
        // aTag.download = url.replace(/^.*[\\\/]/, '');
        aTag.download = 'filename';
        document.body.appendChild(aTag); // adding <a> tag inside body
        aTag.click(); // clicking <a> tag so the file donwload
        aTag.remove(); // removing <a> tag once file downloaded 
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innertext = "Download File";
    }).catch(() => {
        // catch method will call if any error comes during downloading
        downloadBtn.innerText = "Download File";
        alert("Failed To Download File ")
    })
}

// Get the current year

const currentYear = new Date().getFullYear();

//Set the current year in the HTML element
document.getElementById('year').textContent = '©' + currentYear;