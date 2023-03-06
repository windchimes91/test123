import getStartPage from "./getStartPage.js";

window.onload = function(){
    const root = document.getElementById("root")
    root.innerHTML = getStartPage()
    const name = document.getElementById("name")
    name.onkeyup = function(){
        let data = {
            "name":name.value
        }
        axios.post("./sayHello.php",Qs.stringify(data))
        .then(res=>{
            let response = res['data']
            const content = document.getElementById("content")
            content.innerHTML = response
        })
        .catch(err =>{
            console.error(err)
        })
    }
}