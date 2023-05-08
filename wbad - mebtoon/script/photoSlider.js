$(document).ready(function(){

    indexPhotoSlider = 0;
    fungsiBerjalan = false;

    sourcePhotoSlider = [
        'assets/image/gambarWibu1.jpg',
        'assets/image/gambarWibu3.jpg',
        'assets/image/gambarWibu2.jpg',
        'assets/image/gambarWibu4.jpg',
        'assets/image/gambarWibu5.jpg',
        'assets/image/gambarWibu6.jpg'
    ];

    sourcePhotoSlider.forEach((src, index)=>{
        const parentTitik = document.getElementById("parentTitik");

        let titik = document.createElement('span');
        titik.setAttribute('id', `titik${index}`);
        titik.setAttribute('class', 'titik');
        try {
            parentTitik.appendChild(titik);
        } catch (e) {
        }
        
        $(`#titik${index}`).click(()=>klikTitik(index));
    });

    function renderImageSlider(index){
        src = sourcePhotoSlider[index]
        let image = document.createElement('img');
        image.setAttribute('src', src);
        image.setAttribute('class', 'img-photo-slider')
        image.setAttribute('id', `imageSlidePhoto${index}`);
        image.setAttribute('style', 'display: inline');
        try {
            document.getElementById('parentPhotoSlider').appendChild(image);
        } catch (e) {
            
        }
    }
    
    function changeClassTitik(beforeIndex, nextIndex){
        $(`#titik${beforeIndex}`).removeClass('titik-lebar');
        $(`#titik${beforeIndex}`).addClass('titik');
        $(`#titik${nextIndex}`).removeClass('titik');
        $(`#titik${nextIndex}`).addClass('titik-lebar');
    }

    function klikTitik(index){

        if(fungsiBerjalan == false){
            if(indexPhotoSlider < index){
                clearInterval(intervalSlider);
                nextIndexPhotoSlideChoose(index);
                intervalSlider = setInterval(()=> nextIndexPhotoSlide(), 3000);
            }else if(indexPhotoSlider > index){
                clearInterval(intervalSlider);
                prevIndexPhotoSlideChoose(index);
                intervalSlider = setInterval(()=> nextIndexPhotoSlide(), 3000);
            }else if(indexPhotoSlider == index){
                
            }
            indexPhotoSlider = index;
        }
    }

    function nextIndexPhotoSlide(){
        if(fungsiBerjalan == false){
            clearInterval(intervalSlider);
            let nextIndex = `${(indexPhotoSlider == sourcePhotoSlider.length-1)?0 :indexPhotoSlider+1}`;
            renderImageSlider(nextIndex);
            changeClassTitik(indexPhotoSlider, nextIndex);
            fungsiBerjalan = true;

            $(`#imageSlidePhoto${indexPhotoSlider}`).animate({'margin-left':'-107%'},1000, function(){
                $(this).remove();
            });
            $(`#imageSlidePhoto${nextIndex}`).animate({'margin-left':'-107%'},1000, function(){
                $(this).css('margin-left', '0');
                fungsiBerjalan = false;
            });
            if(indexPhotoSlider == sourcePhotoSlider.length-1){
                indexPhotoSlider = 0;
            }else{
                indexPhotoSlider++;
            }
            intervalSlider = setInterval(()=> nextIndexPhotoSlide(), 3000);
        }
    }

    function nextIndexPhotoSlideChoose(index){
        if(fungsiBerjalan == false){
            clearInterval(intervalSlider);
            let nextIndex = index;
            renderImageSlider(nextIndex);
            changeClassTitik(indexPhotoSlider, nextIndex);
            fungsiBerjalan = true;
            
            $(`#imageSlidePhoto${indexPhotoSlider}`).animate({'margin-left':'-107%'},1000, function(){
                $(this).remove();
            });
            $(`#imageSlidePhoto${nextIndex}`).animate({'margin-left':'-107%'},1000, function(){
                $(this).css('margin-left', '0');
                fungsiBerjalan = false;
            });
            indexPhotoSlider = index;
            intervalSlider = setInterval(()=> nextIndexPhotoSlide(), 3000);
        }
    }

    function prevIndexPhotoSlideChoose(index){
        if(fungsiBerjalan == false){
            clearInterval(intervalSlider);
            let prevIndex = index;
            changeClassTitik(indexPhotoSlider, prevIndex);
            fungsiBerjalan = true;

            $(`#imageSlidePhoto${indexPhotoSlider}`).remove();

            renderImageSlider(prevIndex);
            renderImageSlider(indexPhotoSlider);

            $(`#imageSlidePhoto${indexPhotoSlider}`).css('margin-left', '-108%');
            $(`#imageSlidePhoto${prevIndex}`).css('margin-left', '-107%');
            
            $(`#imageSlidePhoto${indexPhotoSlider}`).animate({'margin-left':'+0%'},1000, function(){
            $(this).remove();
            }); 
            $(`#imageSlidePhoto${prevIndex}`).animate({'margin-left':'0'},1000, function(){
                $(this).css('margin-left', '0');
                fungsiBerjalan = false;
            });
            indexPhotoSlider = index;
            intervalSlider = setInterval(()=> nextIndexPhotoSlide(), 3000);
        }
    }
    renderImageSlider(indexPhotoSlider);
    $(`#titik${indexPhotoSlider}`).removeClass('titik');
    $(`#titik${indexPhotoSlider}`).addClass('titik-lebar');

    intervalSlider = setInterval(()=> nextIndexPhotoSlide(), 3000);

    $('.left-slide').click(()=>{
        if(indexPhotoSlider == 0){
            prevIndexPhotoSlideChoose(sourcePhotoSlider.length-1);
        }else{
            prevIndexPhotoSlideChoose(indexPhotoSlider-1);
        }
    });

    $('.right-slide').click(()=>{
        if(indexPhotoSlider == sourcePhotoSlider.length-1){
            nextIndexPhotoSlideChoose(0);
        }else{
            nextIndexPhotoSlideChoose(indexPhotoSlider+1);
        }
    })
});