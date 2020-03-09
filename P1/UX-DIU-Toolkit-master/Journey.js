/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.GMI";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Agustín Puebla",
                Photo: "man.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Ofrece su casa a viajeros de todo el mundo.",
                touch1: "Pensamientos",
                feel1: "3",
                con1: "No saben como hacerlo.",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Le pregunta a su hijo que busque en internet algo que organice estas actividades.",
                touch2: "Familia",
                feel2: "3",
                con2: "Su hijo está ocupado y tarda en buscar.",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Su hijo le enseña couchsurfing.",
                touch3: "Navegador",
                feel3: "2",
                con3: "Le cuesta enterder la interfaz y como ofrecer su casa.",
                ima3: "cartoon-PCcrying.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca usuarios que quieran ir a su ciudad.",
                touch4: "Navevgador",
                feel4: "3",
                con4: "No quiere que el viajero que entre en su casa no sea de fiar.",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Un usuario con buena reputación está interesado.",
                touch5: "Navegador",
                feel5: "1",
                con5: "No se da cuenta del mensaje de este usuario y lo ignora.",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Su hijo le ayuda y acepta otra solicitud de otro usuario",
                touch6: "Navegador",
                feel6: "3",
                con6: "Si su hijo no hubiera venido, no podría haber recibido un viajero.",
                ima6: "cartoon-shaking.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Alba Ibáñez",
                Photo: "woman.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere ir a Italia",
                touch1: "agenda",
                feel1: "5",
                con1: "No se puede permitir gastar mucho dinero",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet páginas de viaje low-cost.",
                touch2: "Navegador",
                feel2: "2",
                con2: "Cuesta distinguir entre información y publicidad.",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Se crea un perfil en la web de couchsurfing.",
                touch3: "Navegador",
                feel3: "2",
                con3: "Le piden demasiada información en el registro.",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca un usuario con buenas críticas.",
                touch4: "Navegador",
                feel4: "2",
                con4: "Para hospedarte en la casa de un buen usuario debes ganarte una reputación en la aplicación.",
                ima4: "cartoon-PCcrying.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Cosigue contactar con un usuario italiano que ofrece un sofá en su casa.",
                touch5: "Navegador (mensaje texto)",
                feel5: "4",
                con5: "El usuario tardó dos días en contactar.",
                ima5: "cartoon-phone.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "El billete de avión lo tiene que comprar en otra web.",
                touch6: "Navegador",
                feel6: "1",
                con6: "No encuentra buenas ofertas y el dinero que se ahorra en la estancia lo compensa con el vuelo.",
                ima6: "cartoon-deciding2.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



