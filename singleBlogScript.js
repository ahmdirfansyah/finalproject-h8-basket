let cName = [];
let cEmail = [];
let cComment = [];


function onSubmit(event) {
    event.preventDefault();

    let name = document.getElementById('txtName').value;
    let email = document.getElementById('txtEmail').value;
    let comment = document.getElementById('txtComment').value;

    
        cName.unshift(name);
        cEmail.unshift(email);
        cComment.unshift(comment);
        
        let data = '';
        

        for (let i = 0 ; i < cName.length ; i++) {
            data += cName[i] + '<br>' ;
            data += cEmail[i] + '<br>' ;
            data += cComment[i] + '<br><hr>';
        }

        var counted = cName.length;
        var dataCount = "Comment : "+" " +"( "+ counted +" )" +"";

         document.getElementById("posted").innerHTML = data;
         document.getElementById("txtCount").innerHTML = dataCount;
        
    }

