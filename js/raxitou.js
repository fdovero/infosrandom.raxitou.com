function raxit() { 
    $.getJSON('raxitou.json', function(data) {
        
        $('#intro').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('#intro').html(_.sample(data.intro));
            $('#intro').removeClass('fadeOutDown').addClass('fadeInDown');
        });

        $('#objet').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('#objet').html(_.sample(data.objet));
            $('#objet').removeClass('fadeOutDown').addClass('fadeInDown');
        });

        $('#cntxt').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('#cntxt').html(_.sample(data.cntxt));
            $('#cntxt').removeClass('fadeOutDown').addClass('fadeInDown');
        });

        $('#chute').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('#chute').html(_.sample(data.chute));
            $('#chute').removeClass('fadeOutDown').addClass('fadeInDown');
        });

        $('#concl').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('#concl').html(_.sample(data.concl));
            $('#concl').removeClass('fadeOutDown').addClass('fadeInDown');
        });

        
        $('#intro').removeClass('fadeInDown').addClass('animated fadeOutDown').css('animation-delay',_.random(0,3)*100+'ms').css('animation-duration',_.random(3,10)*100+'ms');
        $('#objet').removeClass('fadeInDown').addClass('animated fadeOutDown').css('animation-delay',_.random(0,3)*100+'ms').css('animation-duration',_.random(3,10)*100+'ms');
        $('#cntxt').removeClass('fadeInDown').addClass('animated fadeOutDown').css('animation-delay',_.random(0,3)*100+'ms').css('animation-duration',_.random(3,10)*100+'ms');
        $('#chute').removeClass('fadeInDown').addClass('animated fadeOutDown').css('animation-delay',_.random(0,3)*100+'ms').css('animation-duration',_.random(3,10)*100+'ms');
        $('#concl').removeClass('fadeInDown').addClass('animated fadeOutDown').css('animation-delay',_.random(0,3)*100+'ms').css('animation-duration',_.random(3,10)*100+'ms');
    }); 
    return false;
};
