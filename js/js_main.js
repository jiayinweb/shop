/**
 * Created by HP on 2017/5/8.
 */
$(function(){
    $(".donghua").hover(function(){
        if(!this.a){
            var index=$(this).index();
            $(".box").hide();
            $(".box").eq(index).show();
            $(".donghua a").animate({"top":-40},200,"easeOutBounce");
            $(".donghua").find("p").css("borderTop","2px solid white");
            $(this).find("p")[0].style.borderTop="2px solid red";
            $(".c_main").animate({"top":-175},200,"easeOutBounce");
        }else{this.a=false}
        },function(){
        this.a=false
    });
    $(".close").click(function(){
        $(".box").hide();
        $(".donghua a").animate({"top":0},200,"easeOutBounce");
        $(".donghua").find("p").css("borderTop","2px solid white");
        $(".c_main").animate({"top":-100},200,"easeOutBounce");
        $(".donghua").eq(3)[0].a=true
    });
    $(".nav-top .shopping").hover(function(){$(".hideche").show()},function(){$(".hideche").hide()});
    function ajex(url,fn){
        var a=new XMLHttpRequest();
        a.open("GET",url);
        a.send(null);
        a.onreadystatechange=function(){
            if(a.status==200&&a.readyState==4){
                fn(a.responseText)
            }
        }
    }
    $(".extra").click(function(){
        ajex("cc.txt",function(text){
            var a=JSON.parse(text);
            var b=parseInt(Math.random()*a.length);
            $(".p-name").html(a[b].name);
            $(".p-price").html(a[b].price)
        });
            return false
    });
    $(".shabi li").mouseover(function(){
        $(".shabi li").removeClass("ac");
        $(this).addClass("ac");
        var html=$(`<div class="category">
				<div class="c_left">
					<div class="c_left_top">
						<div class="c_left_topicon">
							<ul>
								<li><a href="#">男装</a></li>
								<li><a href="#">女装</a></li>
								<li><a href="#">内衣</a></li>
								<li><a href="#">鞋靴</a></li>
								<li><a href="#">箱包</a></li>
								<li><a href="#">奢侈品</a></li>
							</ul>
						</div>
						<ul class="types">
							<li><a href="#">潮流女装</a> <a href="#">太阳镜</a></li>
							<li><a href="#">水晶项链</a> <a href="#">菩提项链</a></li>
							<li><a href="#">潮流女装</a> <a href="#">奢侈品</a></li>
							<li><a href="#" class="active">精品男装</a> <a href="#">太阳镜</a></li>
							<li><a href="#">纯棉内裤</a> <a href="#">太阳镜</a></li>
							<li><a href="#">潮流女装</a> <a href="#" class="active">菩提项链</a></li>
							<li><a href="#" class="active">潮流女装</a> <a href="#">太阳镜</a></li>
							<li><a href="#">潮流女装</a> <a href="#">品质鞋</a></li>
						</ul>
					</div>
					<div class="c_left_bot">
						<a href="#">
							<h3>商场同款秋上新</h3>
							<p>新品8折</p>
							<div class="pic"><img src="images/woman.png"> </div>
						</a>
					</div>
				</div>
				<div class="c_mid">
					<div class="c_left_bot c_mid_top">
						<a href="#">
							<h3>商场同款秋上新</h3>
							<p>新品8折</p>
							<div class="pic"><img src="images/woman2.png"> </div>
						</a>
					</div>
					<div class="c_left_bot c_mid_top2">
						<a href="#">
							<h3>商场同款秋上新</h3>
							<p>新品8折</p>
							<div class="pic"><img src="images/woman6.png"> </div>
						</a>
					</div>
					<div class="c_left_bot c_mid_top3">
						<a href="#">
							<h3>商场同款秋上新</h3>
							<p>新品8折</p>
							<div class="pic"><img src="images/woman4.png"> </div>
						</a>
					</div>
				</div>
				<div class="c_right">
					<ul>
						<li>
							<div class="c_left_bot c_right_top1">
								<a href="#">
									<h3>商场同款秋上新</h3>
									<p>新品8折</p>
									<div class="pic"><img src="images/woman5.png"> </div>
								</a>
							</div>
						</li>
						<li>
							<div class="c_left_bot c_right_top1">
								<a href="#">
									<h3>商场同款秋上新</h3>
									<p>新品8折</p>
									<div class="pic"><img src="images/washer_03.png"> </div>
								</a>
							</div>
						</li>
						<li>
							<div class="c_left_bot c_right_top1 c_right_top2">
								<a href="#">
									<h3>商场同款</h3>
									<p>新品8折</p>
									<div class="pic"><img src="images/woman2.png"> </div>
								</a>
							</div>
						</li>
						<li>
							<div class="c_left_bot c_right_top1 c_right_top2">
								<a href="#">
									<h3>商场同款</h3>
									<p>新品8折</p>
									<div class="pic"><img src="images/watch_01_12.png"> </div>
								</a>
							</div>
						</li>
						<li>
							<div class="c_left_bot c_right_top1 c_right_top2">
								<a href="#">
									<h3>商场同款秋上新</h3>
									<p>新品8折</p>
									<div class="pic"><img src="images/woman4.png"> </div>
								</a>
							</div>
						</li>
						<li>
							<div class="c_left_bot c_right_top1 c_right_top2">
								<a href="#">
									<h3>商场同款秋上新</h3>
									<p>新品8折</p>
									<div class="pic"><img src="images/woman5.png"> </div>
								</a>
							</div>
						</li>
						<li>
							<div class="c_left_bot c_right_top1 c_right_top2">
								<a href="#">
									<h3>商场同款秋上新</h3>
									<p>新品8折</p>
									<div class="pic"><img src="images/woman.png"> </div>
								</a>
							</div>
						</li>
						<li>
							<div class="c_left_bot c_right_top1 c_right_top2">
								<a href="#">
									<h3>商场同款秋上新</h3>
									<p>新品8折</p>
									<div class="pic"><img src="images/washer_03.png"> </div>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>`);
        var html2=$(`<div class="main4-value1">
        	<div class="main4-value1-top">
            	<h4><a href="">男装潮秋新势力</a></h4>
                <span><a href="">最高满199减50</a></span>
                <div>
                	<ul>
                    	<li><a href="">男装</a></li>
                        <li><a href="">女装</a></li>
                        <li><a href="">内衣</a></li>
                        <li class="olili"><a href="">鞋靴</a></li>
                        <li class="olili"><a href="">箱包</a></li>
                        <li class="olili"><a href="">奢侈品</a></li>
                    </ul>

                </div>
        	</div>
                <div class="main4-value1-middle">
                	<div>
                    	<span><a href="">潮流女装</a></span>
                    	<span><a href="">太阳镜</a></span>
                    	<span><a href="">服装城</a></span>
                    	<span><a href="">品质男鞋</a></span>
                    	<span><a href="">时尚女鞋</a></span>
                    	<span><a href="">精品男装</a></span>
                    	<span><a href="">纯棉内裤</a></span>
                    	<span><a href="">奢侈品</a></span>
                    </div>
                    <div class="shiyidian">
						<span><a href="">菩提手串</a></span>
                    	<span><a href="">水晶手链</a></span>
                    	<span><a href="">时尚女包</a></span>
                    	<span><a href="">精品男包</a></span>
                    	<span><a href="">维氏手表</a></span>
                    	<span><a href="">奢品名表</a></span>
                    	<span><a href="">国表经典</a></span>
                        <span><a href="">潮流日表</a></span>

                    </div>
                </div>
                <div class="main4-value1-bottom"><a href=""><img src="images/wancheng_10.jpg"/></a></div>

        </div>
        <div class="main4-value2">
        	<a href=""><img src="images/ccccccccc_07.jpg"/></a>
        </div>`);
        if($(this).index()%2==0){
            $(this).parent().parent().parent().find(".main4-value").html(html2);
        }else{$(this).parent().parent().parent().find(".main4-value").html(html);}
    })
    !function floor(){
        var LocationFloorList=getByClass(document,'LocationFloorList')[0];
        var aLi=LocationFloorList.getElementsByTagName('li');
        var aFloor=getByClass(document,'main4');
        var arr=[];
        for(var i=0; i<aFloor.length; i++){
            var json={};
            json.name=i;
            json.offsetTop=aFloor[i].offsetTop;
            arr.push(json);
        }
        window.onscroll=function(){

            var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;

            if(scrolltop>1000){
                $("#goTop").show();
                $(".fixed").show();
            }else{
                $("#goTop").hide();
                $(".fixed").hide();
            }
            if(scrolltop>1300){
                LocationFloorList.style.display='block';
            }else{
                LocationFloorList.style.display='none';
            }
            var last_arr=[];
            for(var j=0; j<arr.length; j++){
                if(arr[j].offsetTop<scrolltop+400){
                    last_arr.push(arr[j].name);
                }
            }
            var li_index=last_arr[last_arr.length-1];
            for(var l=0; l<aFloor.length; l++){
                aLi[l].className='';
                if(aFloor[l].getElementsByClassName("floor")[0]){
                    aFloor[l].getElementsByClassName("floor")[0].style.background="url(images/nva_bg.png) 0 -35px"
                }
            }
            if(last_arr.length==0){
                aLi[0].className='ac';
                aFloor[0].getElementsByClassName("floor")[0].style.background="url(images/nva_bg.png) 0 0"}else{
                aLi[li_index].className='ac';
                aFloor[li_index].getElementsByClassName("floor")[0].style.background="url(images/nva_bg.png) 0 0"}
        };

        for(var i=0; i<aFloor.length; i++){
            aLi[i].index=i;
            aLi[i].onclick=function(){
                var start=document.documentElement.scrollTop || document.body.scrollTop;
                var end=arr[this.index].offsetTop;
                move(start,end)
            }
        }
        $(".lalala").click(function(){
            $("html,body").animate({"scrollTop":0},1000,"easeOutBounce")
        });
        $("#goTop").click(function(){
            $("html,body").animate({"scrollTop":0},1000,"easeOutBounce")
        });
        var timer;
        function move(start,end){
            var dis=end-start;
            var count=parseInt(1500/30);
            var n=0;
            clearInterval(timer);
            timer=setInterval(function(){
                n++;
                var a=1-n/count;
                var step_dis=start+dis*(1-a*a*a*a);
                //window.scrollTo(0,step_dis);
                document.body.scrollTop=step_dis;
                if(n==count){
                    clearInterval(timer);
                }
            },30)
        }
        function getByClass(oParent,cls){
            var arr=[];
            if(document.getElementsByClassName) return oParent.getElementsByClassName(cls);
            else{
                var aEl=oParent.getElementsByTagName('*');
                for(var i=0;i<aEl.length;i++){
                    if(aEl[i].className.indexOf(cls)!=-1) arr.push(aEl[i]);
                }
                return arr;
            }
        }
    }();
    function tab(){var oHi=document.getElementsByClassName("header-left")[0];
        var aLi=oHi.getElementsByTagName("li");
        for(let i of aLi){
            i.onclick=function(){
                oHi.getElementsByTagName("span")[0].innerHTML=this.children[0].innerHTML;
                return false
            }
        }
    }
    function setrun(obj){
        var aLi=obj[0].getElementsByTagName("li");
        var aImg= obj[0].getElementsByTagName("a");
        var oBanner=document.getElementsByClassName("banner-middle")[0];
        var a=1;
        var timer=setInterval(run,2000);
        oBanner.addEventListener("mouseover",function(ev){
            if(ev.target.tagName=="LI"){
                clearInterval(timer);
                for(let i=0;i<aLi.length;i++){
                    for(let j=0;j<aLi.length;j++){
                        aLi[j].index=j;
                        aImg[j].style.display="none";
                        aLi[j].style.background="black"
                    }
                    aImg[ev.target.index].style.display="inline-block";
                    ev.target.style.background="red";
                    a=ev.target.index==aImg.length-1?0:ev.target.index+1;
                }
            }else{clearInterval(timer);}
        },false);
        oBanner.addEventListener("mouseleave",function(ev){timer=setInterval(run,2000)},false);
        function run(){
            for(let j=0;j<aLi.length;j++){
                aImg[j].style.display="none";
                aLi[j].style.background="black"
            }
            aImg[a].style.display="inline-block";
            aLi[a].style.background="red";
            a=a==aImg.length-1?0:a+1;
        }
    }
    var aBan=document.getElementsByClassName("banner-middle");
    setrun(aBan);
    tab();
    $( ".text" ).autocomplete({
        source: [ "七夕礼品", "消暑神器", "农用物资", "鲜花99元", "电影京券", "防晒喷雾", "永生花","小米电脑" ],
        autoFocusType:true
    });
});

