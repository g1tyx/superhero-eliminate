/*!
* 键盘控制脚本
*/var _focusUni=null;function BindEvents(){$(window).resize(function(){resizeContainer();});bindKeyboardEvent();bindTableUniEvent();$("#cartoonPanel").click(function(){$(this).hide();});}
function bindTableUniEvent(){$("#panelTb .uni").each(function(){uniEvt($(this));});}
function uniEvt(Obj){Obj.mousedown(function(){if(_focusUni!=null){reform($(_focusUni));if(_focusUni!=this){var TD2=$(this).parent();var TD=$(_focusUni).parent();switch2TDsUni_orgPlace(TD,TD2,true,true);moveToZero(TD,TD2,"fast");}
_focusUni=null;}else{_focusUni=this;deform1A($(this));}});}
function bindScoreBarEvent(o){}
function unbindAllEvents(){$(".uni").unbind().css({cursor:"default"});}
function bindKeyboardEvent(){$(window).keydown(function(event){if(_focusUni!=null){reform($(_focusUni));var b;switch(event.keyCode){case 65:case 37:b=moveUni2(_focusUni,"lf");break;case 87:case 38:b=moveUni2(_focusUni,"up");break;case 68:case 39:b=moveUni2(_focusUni,"rt");break;case 83:case 40:b=moveUni2(_focusUni,"dn");break;default:;}}});}
function bindEPEvts(){}