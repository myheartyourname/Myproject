/*
* @Author: lenovo
* @Date:   2017-10-01 21:54:22
* @Last Modified by:   lenovo
* @Last Modified time: 2017-10-19 12:02:53
*/
// window.addEventListener('load',function(){
// 	let banner=document.querySelector('.banner');
// 	let tu=document.querySelector('.tu');
// 	let img=document.querySelectorAll('.tu>li');
// 	let lunbo=document.querySelector('.lunbo');
// 	let lis1=document.querySelectorAll('.lunbo>li');
// 	let left=document.querySelector('.pre');
// 	let right=document.querySelector('.next');
//     let imgw=parseInt(getComputedStyle(tu,null).width);
//     let t=setInterval(move,5000);
// 	let flag=true;
// 	let now=0;
// 	let next=0;
    
//     for (let i=0;i<lis1.length;i++){
//     	lis1[i].onclick=function(){
//     		if(now==i){
//     			return;
//     		}
//     		lis1[i].style.background='#fff';
//     		lis1[now].style.background='#6B6B6B';
//     		img[i].style.left=`${imgw}px`;
// 		    animate(img[now],{left:-imgw});
// 		    animate(img[i],{left:0});
// 		    now=next=i;
//     	}
//     }
//     function move(){
// 		next++;
// 		if (next==img.length){
//             next=0;
// 		}
// 		img[next].style.left=`${imgw}px`;
// 		animate(img[now],{left:-imgw});
// 		animate(img[next],{left:0},function(){
// 			flag=true;
// 		});
// 		lis1[next].style.background='#fff';
//     	lis1[now].style.background='#6B6B6B';
// 		now=next;
// 	}
// 	function move1(){
// 		next--;
// 		if (next<0){
//             next=img.length-1;
// 		}
// 		img[next].style.left=`${-imgw}px`;
// 		animate(img[now],{left:imgw});
// 		animate(img[next],{left:0},function(){
// 			flag=true;
// 		});
// 		lis1[next].style.background='#fff';
//     	lis1[now].style.background='#6B6B6B';
// 		now=next;
// 	}
//     left.onclick=function(){
//     	if (!flag){
//     		return;
//     	}
//     	move1();
//     	flag=false;
//     }
//     right.onclick=function(){
//     	if (!flag){
//     		return;
//     	}
//     	move();
//     	flag=false;
//     }
//     banner.onmouseover=function(){
//     	clearInterval(t);
//     	left.style.display='block';
//     	right.style.display='block';
//     }
//     banner.onmouseout=function(){
//     	t=setInterval(move,5000);
//     	left.style.display='none';
//     	right.style.display='none';
//     }

//     let danpin=document.querySelector('.danpin');
//     let lis2=document.querySelectorAll('.danpin>.top>li');
//     let bottom=document.querySelectorAll('.danpin>.bottom'); 
//     let num=0;
// 	let t1=setInterval(move2,4000);
//     for (var i=0;i<lis2.length;i++){   //闭包函数+函数自调用
// 		lis2[i].onmouseover=(function(i){
// 			return function(){
// 				lis2[now].style.borderTop='none';
// 				lis2[now].style.borderBottom='1px solid #414141';
// 				animate(bottom[now],{opacity:0});
//         	    animate(bottom[i],{opacity:1});
//         	    now=i;
//         	    lis2[i].style.borderTop='3px solid #414141';
// 				lis2[i].style.borderBottom='none';
// 			}
// 		})(i);
// 	}
// 	function move2(){
// 		num++;
// 		if (num==lis2.length){
// 			num=0;
// 		}
// 		for (let i=0;i<lis2.length;i++){
// 			lis2[i].style.borderTop='none';
// 			lis2[i].style.borderBottom='1px solid #414141';
// 			animate(bottom[i],{opacity:0});
// 		}
// 	    animate(bottom[num],{opacity:1},function(){
// 			flag=true;
// 		});
// 		lis2[num].style.borderTop='3px solid #414141';
// 	    lis2[num].style.borderBottom='none';
// 	}
// 	danpin.onmouseover=function(){
//     	clearInterval(t1);
//     }
//     danpin.onmouseout=function(){
//     	t1=setInterval(move1,4000);
//     }
//     let nav=document.querySelector('nav');
//     let lis3=document.querySelectorAll('nav>ul>li');
//     let load=document.querySelectorAll('.load');
    
//     for (let i=0;i<lis3.length;i++){
//     	lis3[i].onmouseover=function(){
//     	    load[i].style.display='block';
//         }
//         lis3[i].onmouseout=function(){
//     	    load[i].style.display='none';
//         }
//     }
// })
$(function(){
    let banner=$('.banner');
    let lis=$('.tu>li');
    let lis1=$('.lunbo>li');
    let imgw=lis.width();
    let now=next=0;
    let t=setInterval(move,5000);
    let flag=true;
    let left=$('.pre');
    let right=$('.next');
    function move(){
        next++;
        if (next==lis.length){
            next=0;
        }
        lis.eq(next).css({left:imgw});
        lis.eq(next).animate({left:0});
        lis.eq(now).animate({left:-imgw},function(){
            flag=true;
        });
        lis1.eq(next).css('background','#fff');
        lis1.eq(now).css('background','#6B6B6B');
        now=next;
    }
    function move1(){
        next--;
        if (next<0){
            next=lis.length-1;
        }
        lis.eq(next).css({left:-imgw});
        lis.eq(next).animate({left:0});
        lis.eq(now).animate({left:imgw},function(){
            flag=true;
        });
        lis1.eq(next).css('background','#fff');
        lis1.eq(now).css('background','#6B6B6B');
        now=next;
    }
    left.on('click',function(){
        if (!flag){
           return;
        }
        move1();
        flag=false;
    })
    right.on('click',function(){
        if (!flag){
            return;
        }
        move();
        flag=false;
    })
    banner.on('mouseenter',function(){
        clearInterval(t);
        left.css('display','block');
        right.css('display','block');
    })
    banner.on('mouseleave',function(){
        t=setInterval(move,5000);
        left.css('display','none');
        right.css('display','none');
    })
        // lis1.each(function(i){
        //     if(now==i){
        //         return;
        //     }
        //     lis1[i].css({background:'#fff',left:imgw}).animate({left:0});
        //     lis1[now].css({background:'#6B6B6B'}).animate({left:-imgw});
        //     now=next=i; 
        // })
})