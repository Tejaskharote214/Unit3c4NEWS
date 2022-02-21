async function apiCall(url) {

    try {

        let res = await fetch(url);

        let data = await res.json();
        // console.log(data);

        return data;


    } catch (error) {
        console.log(error);
    }


    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach(elem =>{

        let div = document.createElement("div");
        div.setAttribute("id","content");

        let div1 = document.createElement("div");
        div1.setAttribute("id","index-div");


        let img = document.createElement("img");
        img.src = elem.urlToImage;
        img.setAttribute("id","img");


        div1.append(img);

        let title = document.createElement("p");
        title.innerHTML = elem.title;

        let des  = document.createElement("p");
        des.innerText = elem.description;

        let div2 = document.createElement("div");
        div2.append(title,des);
        div.append(div1,div2);

        main.append(div);


        div.onclick=()=>{
            let a = [];
            a.push(elem);

            localStorage.setItem("article",JSON.stringify(a));

            window.location.href = "news.html";
        }
        main.append(div);
    });

}

export { apiCall, appendArticles }