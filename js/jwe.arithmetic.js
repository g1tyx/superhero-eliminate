/*!
* 游戏算法脚本
*/function chkLink(e,direct,count){if(count==null)count=0;if(e==null)return 0;var v=$(e).find("img:first").attr("lang");var TD=$(e).parent();var id=TD.attr("id");var ss=id.split("_");var row=parseInt(ss[1]);var col=parseInt(ss[2]);var row2,col2;if(direct=="up"){row2=row-1;col2=col;}else if(direct=="dn"){row2=row+1;col2=col;}else if(direct=="lf"){row2=row;col2=col-1;}else if(direct=="rt"){row2=row;col2=col+1;}else{alert("error direct");return 0;}
var id2="td_"+row2+"_"+col2;var td2=document.getElementById(id2);if(td2==null)return 0;var o2=$(td2).find(".uni:first")[0];var v2=$(o2).find("img:first").attr("lang");if(v2==v){count+=1+chkLink(o2,direct,count);}
return count;}
function CheckAllLinkState(){var unis=$("#panelTb .uni");var os=new Array();unis.each(function(){var nUp=chkLink(this,"up");var nDn=chkLink(this,"dn");var nLf=chkLink(this,"lf");var nRt=chkLink(this,"rt");if(nUp+nDn>=2||nLf+nRt>=2){os.push(this);}});return os;}
function getUpperTDID(id){var fin="";var ss=id.split("_");var r=parseInt(ss[1]);for(var i=r-1;i>=0;i--){fin+=ss[0]+"_"+i+"_"+ss[2];if(i>0)fin+=",";}
return fin;}
function getLowerTDID(id){var fin="";var ss=id.split("_");var r=parseInt(ss[1]);for(var i=r+1;i<_rowNum;i++){fin+=ss[0]+"_"+i+"_"+ss[2];if(i<_rowNum-1)fin+=",";}
return fin;}
function getUniDownNum(e){var TD=$(e).parent();var id=TD.attr("id");var sss=getLowerTDID(id);if(sss=="")return 0;var n=0;var ids=sss.split(",");for(var i=0;i<ids.length;i++){if(ids[i]==null||ids[i]=="")continue;var uNum=$("#"+ids[i]+" .uni").length;if(uNum<=0)n++;else break;}
return n;}