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

        
        $('#intro').removeClass('fadeInDown').addClass('animated fadeOutDown').css('-moz-animation-delay',_.random(0,3)*100+'ms').css('-moz-animation-duration','300ms');
        $('#objet').removeClass('fadeInDown').addClass('animated fadeOutDown').css('-moz-animation-delay',_.random(0,3)*100+'ms').css('-moz-animation-duration','300ms');
        $('#cntxt').removeClass('fadeInDown').addClass('animated fadeOutDown').css('-moz-animation-delay',_.random(0,3)*100+'ms').css('-moz-animation-duration','300ms');
        $('#chute').removeClass('fadeInDown').addClass('animated fadeOutDown').css('-moz-animation-delay',_.random(0,3)*100+'ms').css('-moz-animation-duration','300ms');
        $('#concl').removeClass('fadeInDown').addClass('animated fadeOutDown').css('-moz-animation-delay',_.random(0,3)*100+'ms').css('-moz-animation-duration','300ms');
    }); 
    return false;
};
