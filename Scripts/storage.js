window.addEventListener('load' , () => {
    const firstname = localStorage.getItem('FIRSTNAME');
    // var focusToday = document.getElementById('focusToday');
    var form = document.getElementById('form');

    document.getElementById('focusToday').innerHTML = "What is your main focus Today?"
    document.getElementById('result-firstname').innerHTML = ` ${firstname}. `;
    
    const mainfocus = localStorage.getItem('MAIN');
    document.getElementById('content').innerHTML = ` ${mainfocus} <span class="icon" onclick="deleteTask2()"><i class="fas fa-times-circle"></i></span>`;

    if (mainfocus !== null){ //if mainfocus has value
        form.style.display = "none"
        document.getElementById('focusToday').innerHTML = "Today"
    }
     else{
        document.getElementById('content').innerHTML = "";
          
     }

    document.getElementById('addQuote').innerHTML = "Add Quote"
    const newquote = localStorage.getItem('NEWQUOTE');
    //document.getElementById('addnewQuote').innerHTML = ` "${newquote}" <span class="icon" onclick="deleteTask3()"><i class="fas fa-times-circle"></i></span>`;
    
    if (newquote !== null){ //if newquote has value
        document.getElementById('newquote1').style.display = "none"
        document.getElementById('addQuote').innerHTML = "My Quote for Today";
        document.getElementById('addnewQuote').innerHTML = ` "${newquote}" <span class="icon" onclick="deleteTask3()"><i class="fas fa-times-circle"></i></span>`;
    }
     else{
        document.getElementById('addnewQuote').innerHTML = " ";
  
     }
})

// for deleting the text in main focus of the day
function deleteTask2(){
    // var focusToday = document.getElementById('focusToday');
    var form = document.getElementById('form');
    localStorage.removeItem('MAIN');
    const mainfocus = localStorage.getItem('MAIN');
    document.getElementById('content').innerHTML = mainfocus;
    document.getElementById('focusToday').innerHTML = "What is your main focus Today?"
    form.style.display = "flex"
    form.style.alignItems = "center"
}

// for deleting the personal quote 
function deleteTask3(){
    var form = document.getElementById('newquote1');
    localStorage.removeItem('NEWQUOTE');
    const newquote = localStorage.getItem('NEWQUOTE');
    document.getElementById('addnewQuote').innerHTML = newquote;
    document.getElementById('addQuote').innerHTML = "Add Quote"
    form.style.display = "flex"
    form.style.alignItems = "center"
}