/*!
* 总脚本
*/var _rowNum=7;var _colNum=7;var _sexyMoviePicNum=459;_dir="default";_extName="png";_bgExtName="jpg";_UniTypeNumberMax=11;_UniTypeNumber=5;_oneSexyMovieCost=-1;_fullGameTime=100;var _gameTitle="超级英雄宝石方块";function debug(info){if(info==null||info.length==0)return;var txt0=$("#debugPanel").html();var txt1=txt0+"<br>"+info;if(txt1.length>400){txt1=txt1.substring(txt1.length-400);}
$("#debugPanel").html(txt1);}
function initContainer(){if(_UniTypeNumber>_UniTypeNumberMax)_UniTypeNumber=_UniTypeNumberMax;createAppCode();showBg(999);var tb=$("#panelTb");var html="";for(var i=0;i<_rowNum;i++){html+="<tr>";for(var j=0;j<_colNum;j++){var id="td_"+i+"_"+j;html+="<td id='"+id+"'></td>";}
html+="</tr>";}
tb.append(html);html="";var scP=$("#scorePanel");for(var i=0;i<_UniTypeNumber;i++){var N=_ucArr[i];html+="<div class='sDiv' id='sDiv"+N+"'>";html+=uniCode(N)+"x"+scoCode(N);html+="</div>";}
scP.append(html);_gameTime=_fullGameTime;animGameTimeBar(_gameTime);resizeContainer();}
function resizeContainer(){var tb=$("#panelTb");var wi=-1,hi=-1;var o=null;var WI=$(window).width();var HI=$(window).height();var minBD=Math.min(WI,HI);var hi_top=parseInt($("#topH").css("height"));var hi_btm=parseInt($("#btmH").css("height"));var tdHi=Math.round((minBD-hi_top-hi_btm*2)/_rowNum);var tdWi=tdHi;var os=tb.find("td");os.each(function(){$(this).css({width:tdWi,height:tdHi});});o=$("#scorePanel");o.css({height:tb.css("height"),fontSize:tdHi/4});o.find(".uni").css({width:tdWi*2/3,height:tdHi*2/3});$("#bgTmp1").css({width:WI,height:HI});$("#bgTmp2").css({width:WI,height:HI});o=$("#uGirl1");hi=HI*0.75;wi=hi*497/400;o.css({width:wi,height:hi,left:WI-wi,top:HI-hi});o=$("#cartoonPanel");hi=HI-20;wi=hi*1280/960;o.css({width:wi,height:hi,left:(WI-wi)/2,top:(HI-hi)/2});var minB=Math.min(WI,HI);var fSz=minB/5;var fSz2=minB/15;var pTop=(HI-fSz)/3;var pTop2=(HI-fSz)/2;$(".warn1").css({paddingTop:pTop,fontSize:fSz});$(".warn2").css({top:pTop2,fontSize:fSz2});o=$("#gameTimeBar");hi=tdHi*_rowNum;wi=tdWi/3;o.css({width:wi,height:hi,left:parseInt((WI-parseInt(tb.css("width")))/2)-wi-10,top:parseInt(tb.position().top)+5});$("#endPanel").css({height:HI,fontSize:minBD/20});$("#endPanel #btnReset2").css({fontSize:minBD/20});}
function clearContainer(){clearTimeout(_itv_run);clearTimeout(_itv_score);clearTimeout(_itv_animate);$("#panelTb .uni").remove();$("#debugPanel").html("");_sumScore=0;_ani_thread_pool=0;_focusUni=null;$("#cartoonPanel").hide(0);$("#gameTimeText").text(_fullGameTime);}
function newStuff(){var os=$("#panelTb td");os.each(function(){createUni(this);});}
function KillUnits(os){if(os==null||os.length<=0)return null;var str="";for(var i=0;i<os.length;i++){id=$(os[i]).parent()[0].id;var ss=id.split("_");str+=ss[2]+",";killUni(os[i]);}
var arr=str.split(",");var arr2=arr.unique4();return arr2;}
function DropDownUnits(dropingColArr){if(dropingColArr==null||dropingColArr=="")return;var idsArr=new Array();for(var i=0;i<dropingColArr.length;i++){var c=dropingColArr[i];if(c=="")continue;var rNArr=new Array();var deepEm=-1;var emptyNum=0;for(var r=_rowNum-1;r>=0;r--){var id="td_"+r+"_"+c;var TD=$("#"+id);var o=TD.find(".uni");if(o.length>0){if(deepEm>=0)rNArr.push(r);}else{if(deepEm<0)deepEm=r;emptyNum++;}}
var rowN=deepEm;for(var k=0;k<rNArr.length;k++){var id="td_"+rNArr[k]+"_"+c;var id2="td_"+rowN+"_"+c;var TD=$("#"+id);var TD2=$("#"+id2);copyUniFromTD(TD,TD2);rowN--;idsArr.push(id2);}
for(var k=0;k<emptyNum;k++){var id="td_"+k+"_"+c;var TD=$("#"+id);newSkyUniAtTD(TD,emptyNum);idsArr.push(id);}}
idsArr.sort();moveToZeroPlace(idsArr);}
function SortScorePanle(){clearTimeout(_itv_score);_itv_score=setTimeout(function(){var o,o1;var sbs=$("#scorePanel .scBar");var arr=new Array(sbs.length);for(var i=0;i<sbs.length;i++){var id=sbs[i].lang;var v=parseInt($(sbs[i]).text());arr[i]=new Array(id,v);}
arr.bubbleSort_Array();if(_bestUType!=null){o=$("#sDiv"+_bestUType);o.removeClass("hiScore");}
var base=$("#cLine");for(var i=0;i<arr.length;i++){o1=$("#sDiv"+arr[i][0]);o1.insertAfter(base);}
o1.addClass("hiScore");var newT=arr[arr.length-1][0];if(_bestUType!=newT){_bestUType=newT;showBg(_bestUType);showGi1(_bestUType);}},500);}
function GameDataStatisic(){var eP=$("#endPanel");var o2=eP.find("#finUni");var html="最强的超级英雄:";if(_bestUType!=null){html+="<a id='aWinner'>"+uniCode(_bestUType)+"</a>";html+="<b>进无止境！</b>";}else{html+="啊...竟然一个都没有?<br>阁下的运气真是...";}
o2.html(html);}