$(window).on('scroll', function() {
    $('.lazy')
    .each(function() {      
        var currentImg = this;
        var bounding = currentImg.getBoundingClientRect();

        if (
            bounding.top >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            var src= this.getAttribute('rsrc');
            $(this).attr('src', src);
           
        } else {
        }
    }); 
});


 
