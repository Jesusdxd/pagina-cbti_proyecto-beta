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
		/*--------------------------------------------------------------------*/
	$(".ocultar2").hide(function(evento){
	});
		$("#ocultar3").hide(function(evento){
	});

		$("#mostrar2").click(function(evento){
		evento.preventDefault();
		$(".ocultar2").show(2000);
	});

		$("#mostrar2").click(function(evento){
		evento.preventDefault();
		$("#mostrar2").hide(2000);
	});

		$("#mostrar2").click(function(evento){
		evento.preventDefault();
		$("#ocultar3").show(2000);
	});

	$("#ocultar3").click(function(evento){
		evento.preventDefault();
		$(".ocultar2").hide(2000);
	});

		$("#ocultar3").click(function(evento){
		evento.preventDefault();
		$("#mostrar2").show(2000);
	});
		$("#ocultar3").click(function(evento){
		evento.preventDefault();
		$("#ocultar3").hide(2000);
	});
/*--------------------------------------------------------------------------------------*/	
		$(".a").fadeOut(800, function (){
		$(".a").css({'top':300, 'left':200});
		$(".a").fadeIn(2000);
	});	
		$(".b").fadeOut(900, function (){
		$(".b").css({'top':300, 'left':200});
		$(".b").fadeIn(3000);
	});	
		$(".c").fadeOut(1000, function (){
		$(".c").css({'top':300, 'left':200});
		$(".c").fadeIn(3500);
	});
		$("#l_nombres").fadeOut(2800, function (){
		$("#l_nombres").css({'top':300, 'left':200});
		$("#l_nombres").fadeIn(2800);
	});	
});