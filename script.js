		var flag=false;
		var waitRes="";
		var curent=0;

		function writeNum(obj) 
		{
			input=document.getElementById("in1");
			var id=obj.id;
			var pathID=document.getElementById(id);
			if (flag)
			{
				input.value=pathID.value;
				flag=false;
			}
			else
			{
				if (input.value=="0") input.value = pathID.value;
				else input.value+=pathID.value;
			}
			
		}
		
		function calcRes(obj){
			var id=obj.id;
			var pathID=document.getElementById(id);
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
					waitRes=pathID.value;
			}
		}

		function addDec(){
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

		function clearInput(){
			document.getElementById("in1").value="0";
			flag=false;
			waitRes="";
			curent=0;
		}
		