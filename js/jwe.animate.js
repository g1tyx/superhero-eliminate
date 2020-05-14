/*!
* 动画效果相关脚本
*/var _ani_thread_pool=0;var _itv_animate=null;var _bgColors=new Array("3b93ce","905ba0","e24c3b","4cbce1","f1e482","248f51","3c404a","603a70","ffc51b","297eb3","eeeeee");function createUni(td){var TD=$(td);var wi=parseInt(TD.css("width"));var hi=parseInt(TD.css("height"));var html=uniCode(999);TD.append(html);var o=TD.find(".uni:first");o.css({left:wi/2,top:hi/_rowNum,width:0,height:0,opacity:0});o.animate({left:0,top:0,width:"100%",height:"100%",opacity:100},"normal");}
function killUni(e){var Obj=$(e);var TD=Obj.parent();var wi=parseInt(Obj.css("width"));var hi=parseInt(Obj.css("height"));var uHtml=TD.html();var typeN=Obj.find("img:first").attr("lang");Obj.remove();var p=TD.position();var tmpId="_sh"+Math.round(Math.random()*100000);var html="<div id='"+tmpId+"' class='tmpFlo'>"+uHtml+"</div>";$("body").append(html);var tmpO=$("#"+tmpId);Obj=tmpO.find(".uni:first");tmpO.css({left:p.left,top:p.top,width:TD.css("width"),height:TD.css("height")});Obj.animate({left:wi/2,top:hi/2,width:0,height:0},function(){tmpO.remove();addScore(typeN);});}
function moveUni2DownTD(e,n){var TD=$(e).parent();var id=TD.attr("id");var ss=id.split("_");var n2=parseInt(ss[1])+n;var destID=ss[0]+"_"+n2+"_"+ss[2];var TD2=$("#"+destID);switch2TDsUni(TD,TD2);var hi=parseInt(TD.css("height"))*n;TD2.find(".uni").css({top:-hi}).animate({top:0},"normal",function(){_ani_thread_pool--;runGameRules(0);});}
function moveUni2(e,type){var TD=$(e).parent();var TD2=getSwitcherTD(TD[0],type);if(TD2.length<=0)return false;switch2TDsUni_orgPlace(TD,TD2,true,true);moveToZero(TD,TD2,"fast");_focusUni=null;return true;}
function deform1A(Obj){Obj.animate({opacity:0.5},"fast",function(){deform1B(Obj);});}
function deform1B(Obj){Obj.animate({opacity:1},"fast",function(){deform1A(Obj);});}
function reform(Obj){Obj.stop().css({opacity:1});}
function moveToZeroPlace(idsArr){_ani_thread_pool=idsArr.length;for(var i=0;i<idsArr.length;i++){var id=idsArr[i];if(id==null||id==""){_ani_thread_pool--;}else{var TD=$("#"+id);var o=TD.find(".uni:first");o.animate({left:0,top:0},"slow",function(){_ani_thread_pool--;runGameRules(0);});}}}
function moveToZero(TD1,TD2,speed){var Obj1=TD1.find(".uni:first");var Obj2=TD2.find(".uni:first");if(Obj1.length<=0&&Obj2.length<=0)return;if(speed==null||speed=="")speed="normal";_ani_thread_pool=2;if(Obj1.length>0){Obj1.animate({left:0,top:0},speed,function(){_ani_thread_pool--;runGameRules(0);});}else{_ani_thread_pool--;}
if(Obj2.length>0){Obj2.animate({left:0,top:0},speed,function(){_ani_thread_pool--;runGameRules(0);});}else{_ani_thread_pool--;}}
function mZero(TD1,speed){var Obj1=TD1.find(".uni:first");if(Obj1.length<=0)return;if(speed==null||speed=="")speed="normal";Obj1.animate({left:0,top:0},speed);}
function showBg(typeN){$("#bgTmp1").hide().css({backgroundColor:"#"+_bgColors[typeN]}).fadeIn("normal",function(){$("body").css({backgroundColor:"#"+_bgColors[typeN]});});}
function showGi1(typeN){var o=$("#uGirl1");o.stop().hide(0);var code=giCode1(typeN);o.html(code).fadeIn(500);}
function showSexyCartoon2(n){clearTimeout(_itv_animate);var o=$("#cartoonPanel");if(n==null)n=Math.floor(Math.random()*_sexyMoviePicNum);o.html(xPCode(n)).show("fast");}
function showGameStartInfo(){$("#txtTit2").html(_gameTitle+"<br>寻找最强的英雄").fadeIn(1000).fadeOut(1000,function(){$("#txtTit").html("战斗开始").show(0).fadeOut(1000,function(){runGameRules(0);StartCountTime();});});}
function showGameOverInfo(){$("#txtTit").html("战斗结束").fadeIn(500).fadeOut(1000,function(){GameDataStatisic();$("#endPanel").fadeIn(500,function(){bindEPEvts();});});}
function showGamingTit(msg,inDelay,outDelay){if(inDelay==null)inDelay=1000;if(outDelay==null)outDelay=1000;$("#txtTit2").html(msg).fadeIn(inDelay).fadeOut(outDelay);}
function animGameTimeBar(v){var v=Math.round(100*_gameTime/_fullGameTime);var s=v+"%";$("#gameTime").animate({height:s},"fast").text(_gameTime);}
function popImg(delay){if(delay!=null&&delay>0){setTimeout(function(){var o1=$("#endPanel .cartoonPanel:first");var o2=$("#endPanel .cartoonPanel:last");o2.insertBefore(o1);popImg(delay);},delay);}}
function removePopImg(delay,v){if(v==null)v=0;else if(v>_maxPicContainterNum)return;var id="cpT"+v;var o=document.getElementById(id);if(o!=null){$(o).slideUp(300,function(){$(this).remove();});}
if(delay!=null&&delay>0){setTimeout(function(){removePopImg(delay,v+1);},delay);}}
function showWinner(){$("#endPanel").append($("#uGirl1"));showSpeech(_bestUType);}
function showSpeech(n){var o=$("#uGirl1");var left=parseInt(o.css("left"));var top=parseInt(o.css("top"));var z=parseInt(o.css("zIndex"));$("#aSpeech").text(_heroTalking[n]).css({left:left,top:top-30,zIndex:z+1}).show();}