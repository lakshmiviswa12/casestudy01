  var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        var response = JSON.parse(this.responseText);
        console.log(response);
        var Jtodolist = response;
        var output = "";
         for(i=0;i<Jtodolist.length;i++)
         {
           if(Jtodolist[i].completed==true)
           {
            output+="<input type='checkbox' checked class='Firstbox' style='margin-left:15px'>"
             }
           else
           {
            output+="<input type='checkbox' onchange='check()' class='Secondbox' style='margin-left:15px'>"  
             }
            output +="<div class='container'><ul>"
                     +"<li>"+"UserId :"+Jtodolist[i].userId+"</li>"
                     +"<li>"+"Id :"+Jtodolist[i].id+"</li>"
                     +"<li>"+"Title :"+Jtodolist[i].title+"</li>"
                     +"<li>"+"Completed :"+Jtodolist[i].completed+"</li>"
                     +"</ul></div>";
          }
        document.getElementById("impfile").innerHTML = output;
        console.log(output);
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
    
    function check()
    {
      var checkbox = document.querySelectorAll('input[class="Secondbox"]:checked');
      console.log(checkbox);
      
        var promise =new Promise(function(resolve,reject)
        {
          if(checkbox.length==5)
          {
            resolve("Congrats. 5 Tasks have been Successfully Completed");
            }
          else{
            reject("Please complete your tasks");
             }     
        });
        promise.then(function(success)
        {
              alert(success);
         })
        .catch(function(negative)
        {
          console.log(negative);
         })  
      
    }