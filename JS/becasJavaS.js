$(document).ready(function(){

	$("#pasos").hide(function(evento){
	});

	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#pasos").hide(2000);
	});

		$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#mostrar").show(2000);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#pasos").show(2000);
	});
	
		$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#mostrar").hide(2000);
	});
});
