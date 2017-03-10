(function () {
    var  text;
    
    //create string html записывается строка которая кокатенируется
    text ='<div class="container"><div class="row justify-content-md-center"><div class="col col-lg-2"></div><div class="col-12 col-md-auto"><header class="header"><h4>'
    +page.header
    +'</h4></header>'
    +'<article><div class="wrap-list"><p class="headline-list">'
    +page.article.div0.paragraph
    +'</p><ul class="list"><li><label class="form-check-label"><input class="form-check-input"type="checkbox" value=""> '
    +page.article.div0.li0
    +'</li><li><label class="form-check-label"><input class="form-check-input"type="checkbox" value=""> '
    +page.article.div0.li1
    +'</li><li><label class="form-check-label"><input class="form-check-input"type="checkbox" value=""> '
    +page.article.div0.li2
    +'</li></ul></div><div class="wrap-list"><p class="headline-list">'
    +page.article.div1.paragraph
    +'</p><ul class="list"><li><label class="form-check-label"><input class="form-check-input"type="checkbox" value=""> '
    +page.article.div1.li0
    +'</li><li><label class="form-check-label"><input class="form-check-input"type="checkbox" value=""> '
    +page.article.div1.li1
    +'</li><li><label class="form-check-label"><input class="form-check-input"type="checkbox" value=""> '
    +page.article.div1.li2
    +'</li></ul></div><div class="wrap-list"><p class="headline-list">'
    +page.article.div2.paragraph
    +'</p><ul class="list"><li><label class="form-check-label"><input class="form-check-input"type="checkbox" value=""> '
    +page.article.div2.li0
    +'</li><li><label class="form-check-label"><input class="form-check-input"type="checkbox" value=""> '
    +page.article.div1.li1
    +'</li><li><label class="form-check-label"><input class="form-check-input"type="checkbox" value=""> '
    +page.article.div1.li2
    +'</li></ul></div></article><footer class="footer"><button type="button" class="btn btn-secondary">'
    +page.footer
    +'</button></footer></div><div class="col col-lg-2"></div></div></div>'

    ;





    //add innerHTML and appendChild
    var elem = document.createElement('div');
    elem.className = 'container';
    elem.innerHTML = text;
    document.body.appendChild(elem);


})();