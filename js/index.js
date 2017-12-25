/**
 * Created by Administrator on 2017/11/7 0007.
 */
//ÂÖ²¥js
var ds=document.getElementById("lbul");
function task(){
    var lis=document.querySelector(".active");
    lis.className="";
    if(lis.nextElementSibling!=null){
        lis.nextElementSibling.className="active";
    }else{
        ds.firstElementChild.className="active";
    }
}
var timer=setInterval(task,3000);

function next(){
    clearInterval(timer);
    task();
    timer=setInterval(task,3000);
}

function task1(){
    var lil=document.querySelector(".active");
    lil.className="";
    if(lil.previousElementSibling!=null){
        lil.previousElementSibling.className="active";
    }else{
        ds.lastElementChild.className="active";
    }
}
function last(){
    clearInterval(timer);
    task1();
    timer=setInterval(task,3000);
}


var list1=document.querySelectorAll("#fdct>ul>li");
var uls1=document.querySelectorAll("#fd-content>div");
for(var x= 0;x<list1.length;x++){
    list1[x].onmouseover=function(){
        for(var j=0;j<uls1.length;j++){
            uls1[j].className="nr";
            list1[j].className="tap";
        }
        this.className="hover";
        var s=this.id.slice(1)
        var n="nr"+s;
        document.getElementById(n).className="nr dsp";
    }
}


var lb2=document.getElementById("lbu2");
function run(){
    var li2=document.querySelector(".active3");
    li2.className="";
    if(li2.nextElementSibling!=null){
        li2.nextElementSibling.className="active3";
    }else{
        lb2.firstElementChild.className="active3";
    }
}
var timer2=setInterval(run,2000);

function newnext(){
    clearInterval(timer2);
    run();
}
var srg=document.getElementsByClassName("smrg");
srg.onmouseout= function () {
    timer2=setInterval(run,2000);
}

function run1(){
    var li3=document.querySelector(".active3");
    li3.className="";
    if(li3.previousElementSibling!=null){
        li3.previousElementSibling.className="active3";
    }else{
        lb2.lastElementChild.className="active3";
    }
}
function newlast(){
    clearInterval(timer2);
    run1();
}
var slf=document.getElementsByClassName("smlf");
slf.onmouseout= function () {
    timer2=setInterval(run1,2000);
}

//¹ö¶¯×ÊÑ¶
var toplet=0;
function movetop(){
    if(toplet<=-325){
       toplet=0;
    }
    else{
        toplet-=38;
    }
    $('.sszx').css("top",toplet);
}
var timermover=setInterval(movetop,2000);

$('.sszx').hover(e=>{clearInterval(timermover)},e=>{timermover=setInterval(movetop,2000)});