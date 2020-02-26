
document.onload(function () {
    var u = document.getElementsByTagName("ul");
    var inp = document.getElementsByTagName("input")
    var lis = document.createElement("li");
    u.add(lis, null);
    if (inp.placeholder === "red") {
        lis.className = "red"
        lis.text = "red"
    }
    else if (inp.placeholder === "yellow") {
        lis.className = "yellow"
    }
    else if (inp.placeholder === "blue") {
        lis.className = "blue"
    }
})