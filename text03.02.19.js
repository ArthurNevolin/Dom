//ADD ELEMENTS
    const forM = document.forms[1].addEventListener('submit', function (e) {
        e.preventDefault();
        const inputText =document.forms[1].querySelector(".justwentlazy").value;
        //creating needed elements
        if (inputText.length>0){
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteButton = document.createElement('span');
        //append to DOM
        li.appendChild(bookName);
        li.appendChild(deleteButton);
      const newElem =  document.querySelector('ul').appendChild(li);
        //Fill with content
            bookName.textContent = inputText;
            deleteButton.textContent = 'delete';
        //Set css styles
            bookName.classList.add('name');
            deleteButton.classList.add('delete');
        };
    });
    //DELETE BUTTON IN ACTION
document.querySelector("ul").addEventListener('click', function (e) {
             const ul = document.querySelector("ul");
        if (event.target.className == 'delete'){
            const trash = event.target.parentElement;
            ul.removeChild(trash)
        }
    });


// HIDE BOOKS
const hideElem=document.querySelector('#add-book #hide');
hideElem.addEventListener('change', function (e) {
    document.querySelectorAll('li').forEach(function(element) {
       element.classList.toggle('display');
    });

});

//SEARCH FIELD

const searchElem=document.forms[0].firstElementChild.addEventListener('keyup', function (e) {
    const searchValue = event.target.value.toLowerCase();
console.log(searchValue);
    document.querySelectorAll('li').forEach(function (parentLi) {
        console.log(parentLi.firstElementChild.textContent);
        if ( parentLi.firstElementChild.textContent.toLowerCase().indexOf(searchValue) ===-1) {
            parentLi.classList.add('display')
        }
        else{
            parentLi.classList.remove('display')
        }



    })
});
//tab content
 const tabs = document.querySelector('.tabs');
 const panels = document.querySelectorAll('.panel');
 
 tabs.addEventListener('click', function (e) {
     if (e.target.tagName.toLowerCase() == 'li'){
         const targetPanel = document.querySelector(e.target.dataset.target); // Это есть элемент с id="about";
              console.log(targetPanel);
          panels.forEach(function (panel) {
              if (targetPanel == panel){
                  panel.classList.add('active')
              }
              else{
                  panel.classList.remove('active')
              }
          })
     }

 });

