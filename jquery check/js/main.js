function fct(e){
	var val=e.currentTarget.value;
	if (val=="bold"){
		var fontWeightStyle = $("p").css("font-weight");
		if( fontWeightStyle == 400){
			$("p").css("font-weight",700);
		} else {
			$("p").css("font-weight", 400);
		}
   
}
   else if(val=="italic"){
   var fontstylestyle=$('p').css("font-style");
   if(fontstylestyle=="normal"){
   	$('p').css("font-style",val);
   }else{
   	$('p').css("font-style","normal");
   }

}
else{
var textdec=$('p').css("text-decoration-line");
if(textdec!="underline"){$('p').css("text-decoration-line",val);}else{$('p').css("text-decoration-line","none");}
}
}
function fctf(e){
	var x=e.currentTarget.value;
	$('p').css("font-family",x);
}
function fcts(e){
    var y=e.currentTarget.value;
	$('p').css("font-size",y);
}
$('button').click(fct);
$('#selection').change(fctf);
$('#selection2').change(fcts);