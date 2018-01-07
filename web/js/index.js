//top
{
    let flag=true;

    $(".course").click(function(){
     if(flag){
         $(this).css({height:85,background:"#ff986a"});
         $(".top-sec-nav").show();
         $(".top-sec-nav li").each(function(index){

             $(this).css({
                 opacity:0,
                 transform:"rotate(90deg)",
                 animation:"slideDown 0.3s ease-in "+index*0.3+"s forwards"

             })

         });

     }else{

         $(".top-sec-nav li").each(function(index) {
             $(this).css({
                    opacity:1,
                    transform:"rotate(0)",
                 animation: "slideUp 0.3s ease-in " + (0.6-index * 0.3) + "s forwards"
             })

         });
         setTimeout(function(){
             $(".course").css({height:80,background:""});
             $(".top-sec-nav").hide();
         },800)
     }
    flag=!flag;
    });
}
//banner
{
    $(".banner-prev").click(function(){
        $(".banner-box").css("rotateY","+=60");
    });

    $(".banner-next").click(function(){
        $(".banner-box").css("rotateY","-=60");
    });
}
//mask
{
    $(".mask").html("视频时长：45分钟");
    let startx = 0, starty = 0;
    let n = 0;
    $(".content-thumb").data("hover", false);
    $(".content-thumb").data("dir", "");
    $(".content-thumb").mousemove(function (e) {
        let [ox, oy] = [e.offsetX, e.offsetY];
        let dir = Math.abs(ox - startx) > Math.abs(oy - starty) ? "hon" : "ver";
        if (dir === "hon") {
            if (ox > startx) {
                $(".content-thumb").data("dir", "right");
            } else {
                $(".content-thumb").data("dir", "left");
            }
        } else {
            if (oy > starty) {
                $(".content-thumb").data("dir", "bottom");
            } else {
                $(".content-thumb").data("dir", "top");
            }
        }
        let index = $(this).index(".content-thumb");
        if (!$(this).data("hover")) {
            n++;
            if (n === 3) {
                $(this).data("hover", true);
                if (dir === "hon") {
                    if (ox > startx) {
                        $(".mask").eq(index).addClass("leftIn");
                    } else {
                        $(".mask").eq(index).addClass("rightIn");
                    }
                } else {
                    if (oy > starty) {
                        $(".mask").eq(index).addClass("topIn");
                    } else {
                        $(".mask").eq(index).addClass("bottomIn");
                    }
                }
                n = 0;
            }
        }
        startx = ox;
        starty = oy;
    });
    $(".content-thumb").mouseleave(function(){
        var index=$(this).index(".content-thumb");
        $(this).data("hover",false);
        switch($(this).data("dir")){
            case "left":$(".mask").eq(index).addClass("leftOut");break;
            case "right":$(".mask").eq(index).addClass("rightOut");break;
            case "top":$(".mask").eq(index).addClass("topOut");break;
            case "bottom":$(".mask").eq(index).addClass("bottomOut");break;
        }
    });
    $(".mask").on("animationend",function(){
        if(!$(this).parent().parent().data("hover")){
            $(this).attr("class","mask");
        }
    })
}
//news fly
{
    let flag=true;
    let breakpoint = $(".new-title").offset().top;
    $(window).scroll(function(){
        let top=$(this).scrollTop();

        if(top+800>breakpoint){
            if(flag){
                flag=false;
                $(".news-list").each(function(index){
                    $(this).delay(index*400).animate({top:0});
                });
            }

        }else{
            flag=true;
            $(".news-list").each(function(index){
                $(this).css({top:1000});

            });
        }
    });
}
//wave
{

    $(".content-name p:nth-child(2)").each(function() {
        let content = $(this).text();
        let obj = this;
        let spans = [];
        $(this).html("").css({"position": "relative"});
        Array.from(content).forEach(function (word, index) {
            let newspan = $("<span>").html(word).css({
                position: "relative",
                left: 0,
                top: 0
            }).appendTo(obj);
            spans.push(newspan);
        });
        $(this).mousemove(function (e) {

            let x = e.offsetX;
            spans.forEach(function (ele) {

                let ox = ele.position().left;

                ele.css({
                    top: Math.abs((ox - x) / 5 - 15)-6 <10 ? -Math.abs((ox - x) / 5 - 15)+6 : 0
                })
            })

        });
        $(this).mouseleave(function () {
            spans.forEach(function (ele, index) {
                ele.css("transition", "all .3s")
                ele.css("top", 0);
                ele.on("transitionend", function () {
                    $(this).css("transition", "none");
                })
            })

        })
    })
    $(".content-name p:first-child ").each(function() {
        let content = $(this).text();
        let obj = this;
        let spans = [];
        $(this).html("").css({"position": "relative"});
        Array.from(content).forEach(function (word, index) {
            let newspan = $("<span>").html(word).css({
                position: "relative",
                left: 0,
                top: 0
            }).appendTo(obj);
            spans.push(newspan);
        });
        $(this).mousemove(function (e) {

            let x = e.offsetX;
            spans.forEach(function (ele) {

                let ox = ele.position().left;

                ele.css({
                    top: Math.abs((ox - x) / 5 - 15)-6 <10 ? -Math.abs((ox - x) / 5 - 15)+5 : 0
                })
            })

        });
        $(this).mouseleave(function () {
            spans.forEach(function (ele, index) {
                ele.css("transition", "all .3s")
                ele.css("top", 0);
                ele.on("transitionend", function () {
                    $(this).css("transition", "none");
                })
            })

        })
    })
}
//totop
{
    $(".totop").click(function() {

        $("html,body").animate({scrollTop:0}, 500);
    });
}
{
    createsnow();
}

