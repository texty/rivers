

/*-- modal window ---*/
var modal = $('#myModal');
var modalImg = $("#img01");

// Get the modal
$('.popup').click(function() {
    var theClass = $(this).closest(".slide")[0];
    var slideArray = $('.slide');
    var index = $(slideArray).index(theClass);
    var src = $(theClass).attr("rsrc");
    modalImg.attr("src", src);


    $('#next').click(function() {
        index = index + 1;
        var nextSlise = slideArray[index];
        var newSrc = $(nextSlise).attr("rsrc");
        if(index < slideArray.length) {
            modalImg.attr("src", newSrc);
        }
        if(index === slideArray.length) {
            index = 0;
            modalImg.attr("src", $(slideArray[index]).attr("rsrc"));
        }
    });

    $('#myModal').css("display","flex");

});

var span = $("#close");

$(".close").click(function() {
    $('#myModal').css("display","none");
});





/*---слайдер -----*/
// tippy "Гортайте слайдер" версія екрани
var instance_d;
const popper_d = document.querySelector('#next-btn');
instance_d = tippy(popper_d);

if(window.innerWidth >= 815) {
    instance_d.show();
}





// desktop слайдер
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;


//  гортання стрілками
$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
            $("#range").val(slideNow);

            prevSlide();
            if(slideNow != 1) {
                $("#prev-btn").css("display", "block")
            } else {
                $("#prev-btn").css("display", "none")
            }

            if(slideNow != 22) {
                $("#next-btn").css("display", "block")
            } else {
                $("#next-btn").css("display", "none")
            }

            break;

        case 39:
            instance_d.destroy();
            $("#range").val(slideNow);

            nextSlide();

            // стрілки на 1 та останньому слайдах
            if(slideNow != 1) {
                $("#prev-btn").css("display", "block")
            } else {
                $("#prev-btn").css("display", "none")
            }

            if(slideNow != 22) {
                $("#next-btn").css("display", "block")
            } else {
                $("#next-btn").css("display", "none")
            }

            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


//  гортання по кліку
$(document).ready(function() {

    $('#next-btn').click(function() {
        //прибираємо тултіп "Гортейте, після першого кліку на стрілку
        instance_d.destroy();
        $("#range").val(slideNow);
        nextSlide();
        //повертаємо стрілку "назад", якщо не перший слайд
        if(slideNow != 1) {
            $("#prev-btn").css("display", "block")
        } else {
            $("#prev-btn").css("display", "none")
        }

        if(slideNow != 22) {
            $("#next-btn").css("display", "block")
        } else {
            $("#next-btn").css("display", "none")
        }


    });

    $('#prev-btn').click(function() {
        $("#range").val(slideNow);
        prevSlide();
        if(slideNow != 1) {
            $("#prev-btn").css("display", "block")
        } else {
            $("#prev-btn").css("display", "none")
        }

        if(slideNow != 22) {
            $("#next-btn").css("display", "block")
        } else {
            $("#next-btn").css("display", "none")
        }

    });

});

/*-- функції гортання вперед і назад --*/


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
        $("#range").val(0);
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        $("#range").val(slideCount);
        slideNow = slideCount;

    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
        });
        slideNow--;
        $("#range").val(slideNow-1);

    }
}


/*-- input range behavior --*/

$("#range").on("change", function(){   
    slideNow = $("#range").val();
    console.log(slideNow);
    nextSlide();
    if(slideNow === 1) {
        $("#prev-btn").css("display", "none")
    } else {
        $("#prev-btn").css("display", "block")
    }

    if(slideNow === 22) {
        $("#next-btn").css("display", "none")
    } else {
        $("#next-btn").css("display", "block")
    }
});


$( window ).on("resize", function(){
    translateWidth = -$('#viewport').width() * (slideNow);
    $('#slidewrapper').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
    });
});


