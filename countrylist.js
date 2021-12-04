function getlangbycountry(country){
    alert(country)
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            //console.log()
            for(i=0;i<JSON.parse(this.responseText).length;i++){
            //console.log(JSON.parse(this.responseText)[i].name.common)
            if(JSON.parse(this.responseText)[i].name.common == country ){
            console.log(JSON.parse(this.responseText)[i].languages.bar)
            }
            }
          }
        };
        xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
        xhttp.send();
    }
    getlangbycountry("Austria")


    //currencies

    function getcurbycountry(country){
        /* alert(country) */
        var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                //console.log()
                for(i=0;i<JSON.parse(this.responseText).length;i++){
                //console.log(JSON.parse(this.responseText)[i].name.common)
                if(JSON.parse(this.responseText)[i].name.common == country ){
                 /* console.log(JSON.parse(this.responseText)[i].currencies) */
                 /* var cur =Object.keys(JSON.parse(this.responseText)[i].currencies)[0] */
                 console.log(Object.keys(JSON.parse(this.responseText)[i].currencies)[0])
                //console.log(JSON.parse(this.responseText)[i].currencies.cur);
                }
                }
              }
            };
            xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
            xhttp.send();
        }
        getcurbycountry("Austria")
    