function fnOpenPage(index){
    //document.getElementById("app").innerHTML = "Pagina " + index;
    fetch("./pages/page" + index + ".html")
    .then(response => response.text())
    .then(text =>{
        document.getElementById("app").innerHTML = text;
    })
}