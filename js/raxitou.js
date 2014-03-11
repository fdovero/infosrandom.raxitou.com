function raxit() {
    $.getJSON('raxitou.json', function(data) {
        $('#rax').html(_.first(_.shuffle(data.intro))+' '+_.first(_.shuffle(data.objet))+' '+_.first(_.shuffle(data.cntxt))+' '+_.first(_.shuffle(data.chute))+' '+_.first(_.shuffle(data.concl)));
    }); 
    return false;
};
