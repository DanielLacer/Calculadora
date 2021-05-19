            var number = "";
			var n1 = "";
			var mais = false;
			var menos = false;
			var vezes = false;
			var divisao = false;
			
			function deumais(n1,n2){
				total = n1 + n2;
				
				return total
			}
			
			function deumenos(n1,n2){
				total = n2 - n1;
				
				return total
			}
			
			function deuvezes(n1,n2){
				total = n2 * n1;
				
				return total
			}
			
			function deudivisao(n1,n2){
				total = n2 / n1;
				
				return total
			}
			
			document.getElementById("BtMais").onclick = function(){
				n1 = document.getElementById("display").value
                number = "";
				document.getElementById("display").value = number;
				mais = true;
			}
			
			document.getElementById("BtMenos").onclick = function(){
				n1 = document.getElementById("display").value
				number = "";
				document.getElementById("display").value = number;
				menos = true;
			}
			
			document.getElementById("BtVezes").onclick = function(){
				n1 = document.getElementById("display").value
				number = "";
				document.getElementById("display").value = number;
				vezes = true;
			}
			
			document.getElementById("BtDivisao").onclick = function(){
				n1 = document.getElementById("display").value
				number = "";
				document.getElementById("display").value = number;
				divisao = true;
			}
			
			document.getElementById("BtIgual").onclick = function(){
				if(mais == true){
					
					var a = parseFloat(number);
					var b = parseFloat(n1);
					
					var resposta = deumais(a,b);
				
					document.getElementById("display").value = resposta
					mais = false;
				}else if(menos == true){
					
					var a = parseFloat(number);
					var b = parseFloat(n1);
					
					var resposta = deumenos(a,b);
				
					document.getElementById("display").value = resposta
					menos = false;
				}else if(vezes == true){
				
					var a = parseFloat(number);
					var b = parseFloat(n1);
					
					var resposta = deuvezes(a,b);
				
					document.getElementById("display").value = resposta
					vezes = false;
				}else if(divisao == true){
				
					var a = parseFloat(number);
					var b = parseFloat(n1);
					
					var resposta = deudivisao(a,b);
				
					document.getElementById("display").value = resposta
					divisao = false;
				}
				
			}
			
			document.getElementById("BtPonto").onclick = function(){
                
                number += document.getElementById("BtPonto").value;
                document.getElementById("display").value = number;
            }
			
            document.getElementById("Bt0").onclick = function(){
                
                number += document.getElementById("Bt0").value;
                document.getElementById("display").value = number;

            }

            document.getElementById("Bt1").onclick = function(){
            
                number += document.getElementById("Bt1").value;
                document.getElementById("display").value = number;
            }

            document.getElementById("Bt2").onfocus = function(){
                
                number += document.getElementById("Bt2").value;
                document.getElementById("display").value = number;
            }

            document.getElementById("Bt3").onclick = function(){
                
                number += document.getElementById("Bt3").value;
                document.getElementById("display").value = number;
            }

            document.getElementById("Bt4").onclick = function(){
                
                number += document.getElementById("Bt4").value;
                document.getElementById("display").value = number;
            }

            document.getElementById("Bt5").onclick = function(){
                
                number += document.getElementById("Bt5").value;
                document.getElementById("display").value = number;
            }

            document.getElementById("Bt6").onclick = function(){
                
                number += document.getElementById("Bt6").value;
                document.getElementById("display").value = number;
            }

            document.getElementById("Bt7").onclick = function(){
                
                number += document.getElementById("Bt7").value;
                document.getElementById("display").value = number;
            }

            document.getElementById("Bt8").onclick = function(){
                
                number += document.getElementById("Bt8").value;
                document.getElementById("display").value = number;
            }

            document.getElementById("Bt9").onclick = function(){
                
                number += document.getElementById("Bt9").value;
                document.getElementById("display").value = number;
            }

            document.getElementById("BtBackspace").onclick = function(){
               
                number = number.slice(0,-1);                             
                document.getElementById("display").value = number;

            }

             document.getElementById("BtLimpar").onclick = function(){
    
                number = "";
                document.getElementById("display").value = number;
                mais = false;
                menos = false;
                vezes = false;
                divisao = false;

            }

            document.getElementById("BtPorcentagem").onclick = function(){
               
               number = number/100;                  
               document.getElementById("display").value = number;

            }

            document.getElementById("BtRaizQuadrada").onclick = function(){
               
               var Rnumber = number;
               Rnumber = (Math.sqrt(Rnumber));     
               var Resultado = Rnumber;
               number = Resultado;        
               document.getElementById("display").value = number;

            }
