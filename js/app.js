let switchScreen = (screenName) => {
    document.querySelectorAll(".userscreen").forEach(a => {
        a.style.display = "none";
    })
    document.getElementById(screenName).style.display = "block";
}
document.querySelectorAll("button[ac]").forEach(a => {
    a.addEventListener("click", btn => {
        switch(btn.currentTarget.getAttribute("ac")){
            case "loadscreen":
                let targetscreen = btn.currentTarget.getAttribute("screen")
                if (targetscreen == "iguserinputname"){
                    switchScreen("loadingscreen");
                    setTimeout(() => {switchScreen(targetscreen);}, 1000);
                }else switchScreen(targetscreen);
                break;
            case "sendstuff":
                document.querySelector("#igusersuccess > h3").innerText = `25 follower has been sent to @${iguname.value}`
                switchScreen("loadingscreen");
                setTimeout(() => {switchScreen("igusersuccess");}, 4000);
                setTimeout(() => {switchScreen("mainscreen");}, 9000);
                break;
        }
    })
})
document.querySelector("#iguserinputname > form").addEventListener("submit", a => {
    a.preventDefault()
    switchScreen("loadingscreen");
    document.querySelectorAll("#iguserconfirmation > *")[1].innerText = `@${iguname.value} ID: ${Math.floor(Math.random() * 99999999999)}`
    setTimeout(() => {switchScreen("iguserconfirmation");}, 1000);
})