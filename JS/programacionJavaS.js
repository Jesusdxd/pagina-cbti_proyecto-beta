$(document).ready(function(){

	$("#uno_uno1").hide(function(evento){
		
	});
		$("mostrar").hide(function(evento){
	});

		$("#ocultar1").click(function(evento){
		evento.preventDefault();
		$("#uno_uno").hide(2000);
	});
		$("#ocultar1").click(function(evento){
		evento.preventDefault();
		$("#mostrar").show(2000);
	});
		$("#ocultar1").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").hide(2000);
	});
		$("#ocultar1").click(function(evento){
		evento.preventDefault();
		$("#uno_uno1").show(2000);
	});
		$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#uno_uno").show(2000);
	});
		$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").show(2000);
	});
		$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#mostrar").hide(2000);
	});	
		$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#uno_uno1").hide(2000);
	});	
		$("#programacion").fadeOut(300, function (){
		$("#programacion").css({'top':300, 'left':200});
		$("#programacion").fadeIn(2800);
	});	
		$("#img_1").fadeOut(1400, function (){
		$("#img_1").css({'top':300, 'left':200});
		$("#img_1").fadeIn(1800);
	});	
		$("#img_2").fadeOut(2100, function (){
		$("#img_2").css({'top':300, 'left':200});
		$("#img_2").fadeIn(2500);
	});	
		$("#imgdescarga").fadeOut(3000, function (){
		$("#imgdescarga").css({'top':300, 'left':200});
		$("#imgdescarga").fadeIn(3000);
	});
});