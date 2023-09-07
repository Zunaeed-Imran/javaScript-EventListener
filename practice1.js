document.querySelector("#but").onclick = function(){

    const h = document.querySelector("#h");
    const under = document.createElement("u");
    under.innerText = h;
    h.innerText = "";
    h.append(under);  

}