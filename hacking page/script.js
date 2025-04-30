async function addItems(item) {
    await delay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

async function startHacking() {
   let t= setInterval(()=>{
        let last=document.body.lastElementChild;
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else{

            last.innerHTML=last.innerHTML+"."
        }

    },100)
    let text = ["initializing hacking",
         "initialized hacking now reading your data",
          "reading your files",
           "Password files detected",
            "Sending all personal files and Passwords to server", 
            "Cleaning up"];
    for(let item of text){
        await addItems(item);
    }
    await delay()
    clearInterval(t);
}
startHacking()
function delay() {
    return new Promise(resolve => {
        let timeOut = Math.random() * 5 + 1;
        setTimeout(resolve, timeOut * 1000);
    })
}