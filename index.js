var first = document.getElementsByClassName("first");
var last = document.getElementsByClassName("last");
var count = 0;


fetch('data.json').then(function (response){
    return response.json();
}).then(function (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];
            firstImg = first[count].querySelector("img");
            firstTitle = first[count].querySelector("h4");
            lastTitle = last[count].querySelector("h4");
            firstImg.src = value.icon;
            firstTitle.innerHTML = value.category;
            lastTitle.innerHTML = value.score + "<span> / 100</span>";
            count += 1;
        }}
}).catch(function (error) {
    console.error("Something went wrong");
    console.error(error);
});