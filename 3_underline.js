document.querySelector("#myButton").onclick = function(){

    const h1 = document.querySelector("#myH1");        // this will call id from h1
    const underline = document.createElement("u");     // this will undewrline the text
    underline.innerText = "By by tata";                // this will change the world to "By by tata"
    h1.innerText = "";
    h1.append(underline);

    const p = document.querySelectorAll(".para");
    p[1].innerText = "Wooo oo";                        // this will change 2nd text
    p.forEach(element => element.innerText = "Woo");   // this foreach  will change all class paragraph
}