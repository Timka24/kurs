		var flag=false;
		var waitRes="";
		var curent=0;

		function clearInput() {
			input.value="0";
			flag=false;
			waitRes="";
			curent=0;
		}

		function addDec() {
			if (flag)
			{
				input.value="0.";
				flag=false;
			}
			else
			{
				if (input.value.indexOf(".")== -1) input.value+=".";
			}
		}

		function calcRes() {
					if (flag && waitRes != "=")
			{
				input.value=curent;
			}
			else
			{
				flag=true;
				if ("+" == waitRes) curent+=parseFloat(input.value);
				else if ("-" == waitRes) curent-=parseFloat(input.value);
				else if ("/" == waitRes) curent/=parseFloat(input.value);
				else if ("*" == waitRes) curent*=parseFloat(input.value);
				else
					curent=parseFloat(input.value);
					input.value=curent;
					waitRes=event.target.value;
			}
		}

		var numbers = document.querySelectorAll('.but');
		var butfunc = document.querySelectorAll('.butfunc');
		var input = document.getElementById('in1');
		var result = document.querySelector('.butravno');
		
		for (var i = 0; i < numbers.length; i++) {
			//добавление каждому элементу but события click
				numbers[i].addEventListener("click", function(event){
			//очистка
			if (event.target.value==="C"){
				clearInput();
				return;
			}
			// ввод точки
			if (event.target.value===".") {
				addDec();
				return;
			}
			//ввод числа
			if (flag)
			{
				input.value=event.target.value;
				flag=false;
			}
			else
			{
				if (input.value=="0") input.value = event.target.value;
				else input.value+=event.target.value;
			}
			});
		}
		//Добавление события на кнопки операций
		for (var i = 0; i < butfunc.length; i++) {
			butfunc[i].addEventListener("click", function(event){
				calcRes();
				return;
			});
		}
		//добавление события на кнопку "="
		result.addEventListener("click", function(event){
			calcRes();
			return;
		});