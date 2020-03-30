
$(document).ready(function () {
    function Horns(newhornObj) {

        this.name = newhornObj.title;
        this.imgpic = newhornObj.image_url;
        this.disc = newhornObj.description;
        // this.keywords = newhornObj.keyword;
        // this.horns = newhornObj.horns;
        arrOfObj.push(this)
    }
    let arrOfObj = [];
    console.log(arrOfObj);
    

    // Horns.prototype.displayContent = function () {

    //     let $hornClone = $("#photo-template").clone();
    //     $hornClone.find('h2').text(this.name);
    //     $hornClone.find('img').attr('src', this.imgpic);
    //     $hornClone.find('p').text(this.disc);

    //     $hornClone.removeAttr("id");
    //     $hornClone.attr("id", this.name);
    //     $("main section").append($hornClone);

    // }







    const readJson = () => {
        $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(hornData => {
            hornData.forEach((imgItem,index) => {
                console.log('hey',index, hornData[2]);
                
                let newhornObj = new Horns(imgItem);
                // newhornObj.displayContent();
            });

        });
    };
    readJson();
});