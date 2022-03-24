Hoja de trabajo "M06_07_FT_01 - WebComponents (JS)"

	El primer y único ejercicio es un ejemplo de WebComponent, según el diseño atómico el ejemplo que he puesto es una molécula
	porque está formado por 3 átomos, una imagen y 2 botones. 
	He hecho un plato de un menú, una imagen de una hamburguesa con 2 botones encima, uno para abrir un modal que muestre más información
	sobre el plato y otro para añadir y quitar la reserva del plato. 
	  · La función cambio() se usa cuando se pulsa el botón de reservar o quitar de la reserva, sirve para comprobar si el plato está 
	    reservado o no y dependiendo de si está reservado o no poner un tick o una cruz. 
	  · Uso un addEventListener sobre el botón de cerrar el modal para que cuando se pulse el botón desaparezca el modal. 
	  · También uso un callback, pongo un addEventListener sobre el botón que muestra el modal y lo que hace es llamar a la función 
	    beginProces(), esta función llama a la función showModal() a la que le pasamos por parametro la función changeBackground(), 
	    la función showModal() muestra el modal y activa la función changeBackground() que cambia el color del body. 
	  · Finalmente el atributo personalizado data-tipo para separar los ingredientes de la hamburguesa por tipo. 