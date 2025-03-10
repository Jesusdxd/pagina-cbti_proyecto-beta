$(document).ready(function(){

	$(".ocultar").hide(function(evento){
	});
		$("#ocultar1").hide(function(evento){
	});

		$("#mostrar").click(function(evento){
		evento.preventDefault();
		$(".ocultar").show(2000);
	});

		$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#mostrar").hide(2000);
	});

		$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").show(2000);
	});

	$("#ocultar1").click(function(evento){
		evento.preventDefault();
		$(".ocultar").hide(2000);
	});

		$("#ocultar1").click(function(evento){
		evento.preventDefault();
		$("#mostrar").show(2000);
	});
		$("#ocultar1").click(function(evento){
		evento.preventDefault();
		$("#ocultar1").hide(2000);
	});

/*--------------------------------------------------------------------*/
	$(".ocultar1").hide(function(evento){
	});
		$("#ocultar2").hide(function(evento){
	});

		$("#mostrar1").click(function(evento){
		evento.preventDefault();
		$(".ocultar1").show(2000);
	});

		$("#mostrar1").click(function(evento){
		evento.preventDefault();
		$("#mostrar1").hide(2000);
	});

		$("#mostrar1").click(function(evento){
		evento.preventDefault();
		$("#ocultar2").show(2000);
	});

	$("#ocultar2").click(function(evento){
		evento.preventDefault();
		$(".ocultar1").hide(2000);
	});

		$("#ocultar2").click(function(evento){
		evento.preventDefault();
		$("#mostrar1").show(2000);
	});
		$("#ocultar2").click(function(evento){
		evento.preventDefault();
		$("#ocultar2").hide(2000);
	});
/*-----------------------------------------------------------------------------------*/
	$("#seis").fadeOut(1500, function (){
		$("#seis").css({'top':300, 'left':200});
		$("#seis").fadeIn(1500);
	});	
		$("#mostrar1").fadeOut(2500, function (){
		$("#mostrar1").css({'top':300, 'left':200});
		$("#mostrar1").fadeIn(2000);
	});	
});
