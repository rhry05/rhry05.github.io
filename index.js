var diary_num = 3;
var diary_idx = 1;


window.onload = function () {
    var desc = [document.getElementById('book1_desc').innerText,"ㄹㅇㅋㅋ","ㅋㅋ"];
    var index = 0;

    var interval = setInterval(function() {
        $('#book1_desc').fadeOut(500, function() {
            index++;
            if(index === desc.length)
                index= 0;
        $(this).text(desc[index]).fadeIn(500);
        });
    }, 4000);

var leftarrow = document.getElementById('left-arrow');
var rightarrow = document.getElementById('right-arrow');

leftarrow.onclick = function () {
    $('#book1_desc').fadeOut(500,function() {
        index--;
        if (index === -1)
            index = 2;
        $(this).text(desc[index]).fadeIn(500);
        clearInterval(interval);
        interval = setInterval(function() {
            $('#book1_desc').fadeOut(500, function() {
                index++;
                if(index === desc.length)
                    index= 0;
            $(this).text(desc[index]).fadeIn(500);
            });
        }, 4000);
    
    })
    }

rightarrow.onclick = function () {
    $('#book1_desc').fadeOut(500,function() {
        index++;
        if (index === desc.length)
            index = 0;
        $(this).text(desc[index]).fadeIn(500);
        clearInterval(interval);
        interval = setInterval(function() {
            $('#book1_desc').fadeOut(500, function() {
                index++;
                if(index === desc.length)
                    index= 0;
            $(this).text(desc[index]).fadeIn(500);
            });
        }, 4000);
    
    })
    }
    replaceDiary('/diary/diary1.html');

    var diary_left_arrow = document.getElementById("diary_left_arrow");
    var diary_right_arrow = document.getElementById("diary_right_arrow");

    diary_left_arrow.onclick = diaryLeftClick;
    diary_right_arrow.onclick = diaryRightClick;
}

function replaceDiary(filename) {
    $.get(filename, function(result){
        var obj = $(result).find('p');
        document.getElementById("diary_text").innerText = obj.html();

    });
    $.get(filename, function(result){
        var obj = $(result).find('h2');
        document.getElementById("diary_title").innerText = obj.html();

    });
    $.get(filename, function(result){
        var obj = $(result).find('img');
        document.getElementById("diary_img").src = obj[0].src;

    });
}


function diaryRightClick(){
    $('.diary').fadeOut(500, function(){
        diary_idx++;
        if (diary_idx > diary_num) diary_idx = 1;
        var html = "/diary/diary" +diary_idx + ".html";
        replaceDiary(html);
        $(this).fadeIn(500);
    });
}
function diaryLeftClick(){
    $('.diary').fadeOut(500, function(){
        diary_idx--;
        if (diary_idx < 1) diary_idx = diary_num;
        var html = "/diary/diary" +diary_idx + ".html";
        replaceDiary(html);
        $(this).fadeIn(500);
    });
}