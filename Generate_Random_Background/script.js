const randomColor = function(){
            const hex = "0123456789ABCDEF";
            let color = '#';
            for(let i=0; i<6; i++){
                color += hex[Math.floor(Math.random()*16)];
            }
            return color;
        }
        let intervalId;
        const startchangingcolor = function(){
            if(!intervalId){
                intervalId = setInterval(changeBg, 2000);
            }
            function changeBg(){
                document.body.style.backgroundColor = randomColor();
            }
        }
        const stopchangingcolor = function(){
            clearInterval(intervalId);
            intervalId = null;
        }
        document.getElementById("start").addEventListener("click",startchangingcolor);

        document.getElementById("stop").addEventListener("click",stopchangingcolor);
