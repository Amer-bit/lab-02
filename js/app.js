
$(document).ready(function () {
    function Horns(newhornObj) {

        this.name = newhornObj.title;
        this.imgpic = newhornObj.image_url;
        this.disc = newhornObj.description;
        this.keywords = newhornObj.keyword;
        this.horns = newhornObj.horns;
        Horns.all.push(this)
    }
    Horns.all = [];
    let option = [];
    console.log(option);

    
    Horns.prototype.displayContent = function () {

        let $hornClone = $("#photo-template").clone();
        $hornClone.find('h2').text(this.name);
        $hornClone.find('img').attr('src', this.imgpic);
        $hornClone.find('p').text(this.disc);

        $("main").append($hornClone);
        $hornClone.removeAttr("id");
        $hornClone.attr("id", this.name);

    }


let displaySelectedItem = $('select').on('change',function(){
    console.log(displaySelectedItem.val());
    $('section').css('display','none')
    //    Horns.prototype.displaySelectedItm2= function(){
        if('unicorn' === displaySelectedItem.val()){
            console.log('match');
           let $hey= $("<p></p>").text("love ")
          $('main').append($hey)
       
   }
// }
    
})


    const readJson = () => {
        $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(hornData => {
            hornData.forEach((imgItem) => {

                let newhornObj = new Horns(imgItem);

                if (!(option.includes(imgItem.keyword))) {
                    option.push(imgItem.keyword)
                    let $newOpt = $("#opt").clone()
                    $newOpt.text(imgItem.keyword)
                    $newOpt.attr('id', imgItem.keyword)
                    $newOpt.attr('value', imgItem.keyword)
                    $('select').append($newOpt)

                }
                newhornObj.displayContent();
                // newhornObj.displaySelectedItm2()
                
                
            });
            
        });
    };
    readJson();
});