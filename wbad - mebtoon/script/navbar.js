$(document).ready(function(){

    $(".categ").hover(function(){
        if(window.location.name !== "category"){
            $(".panah-bawah").removeClass('kelasPanahBawah');
            $(".panah-bawah").removeClass('panah-bawah-warna');
            $(".panah-bawah").addClass('kelasPanahBawahHover');
        }
    }, function(){
        if(window.location.name !== "category"){
            $(".panah-bawah").removeClass('kelasPanahBawahHover');
            $(".panah-bawah").addClass('kelasPanahBawah');
        }
    });
    
    $(".categ").click(function(){
        if($(".drop-down").css('display') == 'grid'){
            $(".drop-down").css('display', 'none');
        }else{
            $(".drop-down").css('display', 'grid');
        }
    });
    
    $('.left').click(function(){
        window.location.name = "home"
        $('#root').load('home.html');
        window.scrollTo(0, 0);
    });

    $('.navbar-home').click(function(){
        window.location.name = "home"
        $('#root').load('home.html');
        window.scrollTo(0, 0);
    });

    $('.navbar-top-author').click(function(){
        window.location.name = "topAuthor"
        $('#root').load('topAuthor.html');
        window.scrollTo(0, 0);
    });

    $('.navbar-top-mebtoon').click(function(){
        window.location.name = "topMebtoon"
        $('#root').load('topMebtoon.html');
        window.scrollTo(0, 0);
    });

    $('.navbar-subscribe').click(function(){
        window.location.name = "subscribe"
        $('#root').load('subscribe.html');
        window.scrollTo(0, 0);
    });

    $('.navbar-category-show-all').click(function(){
        window.location.name = "category"
        $('#root').load('category.html');
        window.scrollTo(0, 0);
    });

    $('#burgerMenu').click(function (){
        const navRight = $('#navRight');
        if(navRight.hasClass('nav-responsive') === true){
            navRight.removeClass('nav-responsive');
        }else{
            navRight.addClass('nav-responsive');
        }
    })

    loadTopMebtoon =(index)=>{
        window.location.name = "topMebtoon"
        $('#root').load('topMebtoon.html');
        currentCategory = index;
        window.scrollTo(0, 0);
    }

    loadDetailMebtoon =(id)=>{
        window.location.name = "detail-mebToon"
        window.location.id = id
        $('#root').load('detailMebtoon.html');
        window.scrollTo(0, 0);
    }
});