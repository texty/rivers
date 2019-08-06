/**
 * Created by yevheniia on 06.08.19.
 */

function preloadImage(url)
{
    var img1 = new Image();
    img1.src = "img/covers/01.png";

    var img2 = new Image();
    img2.src = "img/covers/02.png";

    var img3 = new Image();
    img3.src = "img/covers/03.png";

    var img4 = new Image();
    img4.src = "img/covers/04.png";

    var img5 = new Image();
    img5.src = "img/covers/05.png";

    var img6 = new Image();
    img6.src = "img/covers/06.png";

    var img7 = new Image();
    img7.src = "img/covers/07.png";

    var img8 = new Image();
    img8.src = "img/covers/08.png";

    var img9 = new Image();
    img9.src = "img/covers/09.png";

    var img10 = new Image();
    img10.src = "img/covers/10.png";

    var img11 = new Image();
    img11.src = "img/covers/11.png";

    var img12 = new Image();
    img12.src = "img/covers/12.png";

    var img13 = new Image();
    img13.src = "img/covers/13.png";

    var img14 = new Image();
    img14.src = "img/covers/14.png";

    var img15 = new Image();
    img15.src = "img/covers/15.png";

    var img16 = new Image();
    img16.src = "img/covers/16.png";

    var img17 = new Image();
    img17.src = "img/covers/17.png";

    var img18 = new Image();
    img18.src = "img/covers/18.png";

    var img19 = new Image();
    img19.src = "img/covers/19.png";

    var img20 = new Image();
    img20.src = "img/covers/20.png";
}

var picArray = [
    '<img class="child" src="img/covers/01.png"/>',
    '<img class="child" src="img/covers/02.png"/>',
    '<img class="child" src="img/covers/03.png"/>',
    '<img class="child" src="img/covers/04.png"/>',
    '<img class="child" src="img/covers/05.png"/>',
    '<img class="child" src="img/covers/06.png"/>',
    '<img class="child" src="img/covers/07.png"/>',
    '<img class="child" src="img/covers/08.png"/>',
    '<img class="child" src="img/covers/09.png"/>',
    '<img class="child" src="img/covers/10.png"/>',
    '<img class="child" src="img/covers/11.png"/>',
    '<img class="child" src="img/covers/12.png"/>',
    '<img class="child" src="img/covers/13.png"/>',
    '<img class="child" src="img/covers/14.png"/>',
    '<img class="child" src="img/covers/15.png"/>',
    '<img class="child" src="img/covers/16.png"/>',
    '<img class="child" src="img/covers/17.png"/>',
    '<img class="child" src="img/covers/18.png"/>',
    '<img class="child" src="img/covers/19.png"/>',
    '<img class="child" src="img/covers/20.png"/>',
    '<img class="child" src="img/covers/01.png"/>',
    '<img class="child" src="img/covers/02.png"/>',
    '<img class="child" src="img/covers/03.png"/>',
    '<img class="child" src="img/covers/04.png"/>',
    '<img class="child" src="img/covers/05.png"/>',
    '<img class="child" src="img/covers/06.png"/>',
    '<img class="child" src="img/covers/07.png"/>',
    '<img class="child" src="img/covers/08.png"/>',
    '<img class="child" src="img/covers/09.png"/>',
    '<img class="child" src="img/covers/10.png"/>',
    '<img class="child" src="img/covers/11.png"/>',
    '<img class="child" src="img/covers/12.png"/>',
    '<img class="child" src="img/covers/13.png"/>',
    '<img class="child" src="img/covers/14.png"/>',
    '<img class="child" src="img/covers/15.png"/>',
    '<img class="child" src="img/covers/16.png"/>',
    '<img class="child" src="img/covers/17.png"/>',
    '<img class="child" src="img/covers/18.png"/>',
    '<img class="child" src="img/covers/19.png"/>',
    '<img class="child" src="img/covers/20.png"/>',
    '<img class="child" src="img/covers/01.png"/>',
    '<img class="child" src="img/covers/02.png"/>',
    '<img class="child" src="img/covers/03.png"/>',
    '<img class="child" src="img/covers/04.png"/>',
    '<img class="child" src="img/covers/05.png"/>',
    '<img class="child" src="img/covers/06.png"/>',
    '<img class="child" src="img/covers/07.png"/>',
    '<img class="child" src="img/covers/08.png"/>',
    '<img class="child" src="img/covers/09.png"/>',
    '<img class="child" src="img/covers/10.png"/>',
    '<img class="child" src="img/covers/11.png"/>',
    '<img class="child" src="img/covers/12.png"/>',
    '<img class="child" src="img/covers/13.png"/>',
    '<img class="child" src="img/covers/14.png"/>',
    '<img class="child" src="img/covers/15.png"/>',
    '<img class="child" src="img/covers/16.png"/>',
    '<img class="child" src="img/covers/17.png"/>',
    '<img class="child" src="img/covers/18.png"/>',
    '<img class="child" src="img/covers/19.png"/>',
    '<img class="child" src="img/covers/20.png"/>'
];

var fillGrid = function() {
    $('#grid').css('opacity', 0);
    var headertitle = $("#header h1")[0].getBoundingClientRect();
    var headersubtitle = $("#header h3")[0].getBoundingClientRect();
    var credits = $("#credits")[0].getBoundingClientRect();
    var notes = $("#notes")[0].getBoundingClientRect();
    var childItem = $(".child")[0].getBoundingClientRect();
    var childItemHeight = childItem.height;
    var childItemWidth = childItem.width;

    var gridConteinerHeight;
    if(window.innerWidth > 800){
        gridConteinerHeight = window.innerHeight - headertitle.height - headersubtitle.height - 100;
    } else {
        gridConteinerHeight = window.innerHeight - headertitle.height - headersubtitle.height - credits.height - notes.height - 200;
    }

    var gridConteinerWidth = window.innerWidth;
    var pictureRows =  (gridConteinerHeight / childItemHeight).toFixed(0);
    var pictureColumns =  (gridConteinerWidth / childItemWidth).toFixed(0);
    var picAmount = (pictureRows * pictureColumns).toFixed(0);
    var gridContent = picArray.slice(0, picAmount);
    $('#grid').html(gridContent);
    $('#grid').css('opacity', 1);
};


$( document ).ready(function() {
    if(screen.width > 750){
        fillGrid();
    }

});


$(window).resize(fillGrid);


// var fillMobGrid = function() {
//     var headertitle = $(".mobHeader h1")[0].getBoundingClientRect();
//     var headersubtitle = $(".mobHeader h3")[0].getBoundingClientRect();
//     var mobCredits = $(".mobCredits")[0].getBoundingClientRect();
//     var mobNotes = $(".mobNotes")[0].getBoundingClientRect();
//     var childItem = $(".mob-child")[0].getBoundingClientRect();
//     var childItemHeight = childItem.height;
//     var childItemWidth = childItem.width;
//     var gridConteinerHeight  = window.innerHeight - headertitle.height - headersubtitle.height - mobCredits.height - mobNotes.height - 50;
//     var gridConteinerWidth = window.innerWidth;
//     var pictureRows =  (gridConteinerHeight / childItemHeight).toFixed(0);
//     var pictureColumns =  (gridConteinerWidth / childItemWidth).toFixed(0);
//     var picAmount = (pictureRows * pictureColumns).toFixed(0);
//     var gridContent = picArray.slice(0, picAmount);
//     $('#mob-grid').html(gridContent);
// };


$(window).resize(fillGrid);
