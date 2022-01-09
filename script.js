 
        setInterval(()=>{
            a=new Date();
            options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let time = a.toLocaleTimeString();
       let date=a.toLocaleDateString(undefined,options);
        document.getElementById("time").innerHTML= time+"<br>On "+ date

       },1000)