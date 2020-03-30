'use strict';
$(document).ready(function () {
    
    function Horns(newhornObj) {
        
        this.name = newhornObj.title;
        this.imgpic = newhornObj.image_url;
        this.disc = newhornObj.description;
        this.keywords = newhornObj.keyword;
        this.horns = newhornObj.horns;
        arrOfObj.all.push(this)
    }
    arrOfObj = [];
    console.log(arrOfObj);
    

    Horns.prototype.displayContent = function () {

        let $hornClone = $("#photo-template").clone();
        $hornClone.find('h2').text(this.name);
        $hornClone.find('img').attr('src', this.imgpic);
        $hornClone.find('p').text(this.disc);

        $hornClone.removeAttr("id");
        $hornClone.attr("id", this.name);
        $("main section").append($hornClone);

    }

    const readJson = () => {
        $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(hornData => {
            hornData.forEach((imgItem,index) => {
                // console.log('hey',index, hornData[2]);
                
                let newhornObj = new Horns(imgItem);

                newhornObj.displayContent();
                newhornObj.runderOptions();

            });

        });
    };
    readJson();


    let arrKey =[];
    Horns.prototype.runderOptions = function () {
    if (!arrKey.includes(this.keywords)){
        arrKey.push(this.keywords)
        let optionlHorne = $('<option></option>').text(this.keywords);
        optionlHorne.attr('value',this.keywords)
        $('select').append(optionlHorne);    
        }
    }


    let arrJson = [];
    $('select').on('change',function(){
        let choosHorne = this.value;
        arrJson = [];
        for (let i=0; i<arrOfObj.all.length;i++){
            if (arrOfObj.all[i].keywords == choosHorne) {
                arrJson.push(arrOfObj.all[i]);
            }
        }
    });



    // function filterOptions (){
    //     $('#photo-template').empty();
    //     arrJson.forEach((value) => )
    // }

});


