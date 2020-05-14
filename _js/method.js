/*!
* js算法脚本
*/Array.prototype.unique2=function()
{var n={},r=[];for(var i=0;i<this.length;i++)
{if(!n[this[i]])
{n[this[i]]=true;r.push(this[i]);}}
return r;}
Array.prototype.unique4=function()
{this.sort();var re=[this[0]];for(var i=1;i<this.length;i++)
{if(this[i]!==re[re.length-1])
{re.push(this[i]);}}
return re;}
Array.prototype.bubbleSort=function(){var i=0,len=this.length,j,d;for(;i<len;i++){for(j=0;j<len;j++){if(this[i]<this[j]){d=this[j];this[j]=this[i];this[i]=d;}}}}
Array.prototype.bubbleSort_Array=function(){var i=0,len=this.length,j,d,a1,a2,v1,v2;for(;i<len;i++){for(j=0;j<len;j++){a1=this[i];a2=this[j];v1=a1[1];v2=a2[1];if(v1<v2){d=this[j];this[j]=this[i];this[i]=d;}}}}
var exchange=function(a,b){var n=a.next(),p=b.prev();b.insertBefore(n);a.insertAfter(p);};