/*!
* 游戏流程脚本
*/var _onceKill=0;var _sumScore=0;var _gameTime=0;var _itv_gameTime=null;var _bestUType=null;var _maxPicContainterNum=4;var _itv_run=null;var _itv_score=null;var _heroTalking=new Array("摆好姿势，闪电来了！","别用‘天’当计时单位跟我说话。听起来像下辈子","等眼前的工作干完了再考虑庆祝的事，大英雄","绝不可滥杀无辜。","嘿，小子，别把当英雄看得跟过家家似的！","激发内心的正能量！","我可不只性感那么简单","你们渺小的存在可怜得让我无法发笑","什么？超级英雄？不不不，重要的是新闻头版的照片摆出最帅的姿势","能力越大，责任越大。","年轻人，还在用别人制定的规则束缚你自己？哼...");function gameStart(){clearContainer();initContainer();newStuff();BindEvents();showGameStartInfo();}
function gameOver(){clearInterval(_itv_gameTime);showGameOverInfo();setTimeout(function(){showWinner();},2000);}
function runGameRules(delay){if(_ani_thread_pool<=0){clearTimeout(_itv_run);if(delay==null)delay=0;_itv_run=setTimeout(function(){var os=CheckAllLinkState();var dropingColArr=KillUnits(os);DropDownUnits(dropingColArr);},delay);}}
function gameTimeGoBy(){}
function addScore(n,dv){var ret=true;if(dv==null||dv=="")dv=1;var sb=$("#scBar_"+n);var v0=parseInt(sb.text());var v1=v0+dv;if(v1>=0){sb.text(v1);SortScorePanle();AddSumScore(dv);}else{ret=false;}
return ret;}
function AddSumScore(dv){_sumScore+=dv;if(_sumScore<0)_sumScore=0;$("#sumScore").text(_sumScore);$("#finSumScore").text(_sumScore);}
function HappyShoot(n){}
function StartCountTime(){var time=_gameTime*1000;$("#gameTime").text("").animate({height:0},time,function(){_gameTime=0;gameOver();})}