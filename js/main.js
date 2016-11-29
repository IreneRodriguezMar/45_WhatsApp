/*dropdown*/
$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
    $('.dropdown-button').dropdown('open');
    $('.dropdown-button').dropdown('close');
  );
/*añadir texto*/
function añadir() {
	var guardar = 	guardar.onclick = function (e){

//al dar click en guardar me guarda lo que escribi en un h3
			var divGuardaLista=e.target.parentElement;
			console.log(divGuardaLista);
			var divLista = document.createElement("div");
				divLista.setAttribute("class", "bg-gris tamañotarjetas ");

			var divExtra = document.createElement("div");
				divExtra.setAttribute("class", "bg-gris tamañotarjetas ");

			var añadirtitulo = document.createElement("h3");
			var textoContenido = document.createTextNode(añadeInputs.value);

//lo que escriba me lo guarde en un nodo de texto y y esto me lo guarde como hijo de nuevoDiv
				añadirtitulo.appendChild(textoContenido);
				divLista.appendChild(añadirtitulo);

//que mi input creado lo deje en blanco cada se le da click
				añadeInputs.value ="";

//me cree un link
			var añadirTarjeta = document.createElement("a");
				añadirTarjeta.setAttribute("href", "#"),

				añadirTarjeta.setAttribute("class","white");
			var textañadeTarjeta = document.createTextNode("Añadir una tarjeta");
				añadirTarjeta.appendChild(textañadeTarjeta);
				divLista.appendChild(añadirTarjeta);

//al papa de mi nuevoDiv le agregue un hijo que sera mi input

				divExtra.appendChild(añadeInputs);
				divExtra.appendChild(guardar);
				divGuardaLista.parentElement.replaceChild(divLista,divGuardaLista);
				divLista.parentElement.appendChild(divExtra);

//añade input para añadir texto de tajeta
			añadirTarjeta.onclick = añadirTar;

				function añadirTar (e){

			var divInputlista = document.createElement("div");
			var inputAñadetarjeta = document.createElement("input");
				añadeInputs.setAttribute("placeholder","Añadir una lista");
			var btnAñadeLista = document.createElement("button");
				btnAñadeLista.setAttribute("class", "btn-success");
			var textbtnAñadeTarjeta = document.createTextNode("Guardar");

				btnAñadeLista.appendChild(textbtnAñadeTarjeta);
    			divInputlista.appendChild(btnAñadeLista);
				divInputlista.appendChild(inputAñadetarjeta);
				e.target.parentElement.replaceChild(divInputlista, e.target);


				btnAñadeLista.onclick = function (e){
				var textLista = document.createElement("div");
				var textTarjeta = document.createTextNode(inputAñadetarjeta.value);
				var cajaTexto = document.createElement("p");
					cajaTexto.appendChild(textTarjeta);
					textLista.setAttribute("class", "textLista");
					textLista.appendChild(cajaTexto);
					e.target.parentElement.parentElement.replaceChild(textLista, e.target.parentElement);
				var nuevoLink = document.createElement("a");
					nuevoLink.setAttribute("href", "#"),
					nuevoLink.setAttribute("class","white");
				var textañadeTarjeta = document.createTextNode("Añadir una tarjeta");
					nuevoLink.appendChild(textañadeTarjeta);
					nuevoLink.onclick = añadirTar;
					textLista.parentElement.appendChild(nuevoLink);
								}
						}
			}
	}
