/**
 * Created by yevheniia on 06.08.19.
 */
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
    '<img class="child" src="img/covers/20.png"/>'
];

var fillGrid = function() {
    var headertitle = $("#header h1")[0].getBoundingClientRect();
    var headersubtitle = $("#header h3")[0].getBoundingClientRect();
    var childItem = $(".child")[0].getBoundingClientRect();
    var childItemHeight = childItem.height;
    var childItemWidth = childItem.width;
    console.log(childItemHeight);
    console.log(childItemWidth);


    var gridConteinerHeight = window.innerHeight - headertitle.height - headersubtitle.height - 50;
    var gridConteinerWidth = window.innerWidth;

    console.log(gridConteinerHeight);
    var pictureRows =  (gridConteinerHeight / childItemHeight).toFixed(0);
    var pictureColumns =  (gridConteinerWidth / childItemWidth).toFixed(0);

    var picAmount = (pictureRows * pictureColumns).toFixed(0);

    var gridContent = picArray.slice(0, picAmount);
    console.log(gridContent);
    $('#grid').html(gridContent);
};

fillGrid();


$( window ).resize(fillGrid);