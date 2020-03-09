/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019    */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
        $scope.Grupo_ID ="DIU2.GMI";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/

                
				Id: 0,
				Name: "Agustín Puebla",
				Photo: "man.png",
				Quote: "No dejes para mañana lo que puedes hacer hoy.",
				Age: 78,
				Occupation: "Jubilado",
				Family: "Esposa y un hijo de 43 años",
				Location: "Valencia",
				Character: "Respetuoso, honesto y amigable.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Disfrutar de los pequeños momentos de la vida.", "Conocer nuevas personas y culturas."],
				Frustrations: ["No entiende muy bien la nuevas tecnologías."],
				Bio: "Después de una vida laboral muy estresante como abogado, esperaba que la jubilación sería un cambio para bien. Los primeros años fueron geniales, pero a día de hoy no encuentra ninguna actividad que le divierta.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 1 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }

				],
                Contextos: "Necesita encontrar alguna actividad donde conocer nuevas personas.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 0 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Alba Ibáñez",
				Photo: "woman.png",
				Quote: "Si no puedes hacer grandes cosas, haz pequeñas cosas a lo grande.",
				Age: 29,
				Occupation: "Fotógrafa",
				Family: "Hija única.",
				Location: "Granada",
				Character: "Desconfiada y tímida.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 0 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 1 }
				],
				Goals: ["Hacer una foto espectacular en cada país.", "Ser reconocida mundialmente por sus fotografías."],
				Frustrations: ["Odia a las personas que no son puntuales.", "El desconocimiento de la sociedad hacia el arte de la fotografía."],
				Bio: "La fotografía siempre fue su pasión, sus padres le regalaron una cámara en su séptimo cumpleaños y desde entonces no se ha separado de ella. Se formó en un centro de estudios de fotografía y a día de hoy vende sus imágenes a revistas locales.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 2 }

				],
                Contextos:   "Quiere visitar lugares inimaginables y tomar fotos de ellos." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
