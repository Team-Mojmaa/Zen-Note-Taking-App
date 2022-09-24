const createButton = document.getElementById('add-new');
const noteInput = document.getElementById('note-list');
let newElement;
const addedNotes = document.getElementsByClassName('added-notes');

let idHash = 0;

let notesList = [];

createButton.addEventListener('click', () => {
    let note = {
        title: "",
        description: "", 
        bold: false,
        underline: false,
        copy: false
    }
        newElement = document.createElement('div');

        newElement.innerHTML += `<div class="new-card">
        <button id="close-btn">&times;</button>
        <label for="title">Title</label>
        <input type="text" name="title" id="title">
        <label for="desc">Description</label>
        <textarea id="desc" name="desc" id="desc" col="20" rows="10"></textarea>
        <button id="add-btn">Add Note</button>
        
        <div id="format-options">
            <button id="bold-btn">B</button>
            <button id="underline-btn">U</button>
            <button id="copy-btn">COPY</button>
            <button id="delete-btn">DELETE</button></div>
        </div>`;
        document.body.appendChild(newElement);


        // button functions
        const boldBtn = document.getElementById('bold-btn');
        const underlineBtn = document.getElementById('underline-btn');
        const copyBtn = document.getElementById('copy-btn');
        const addData = document.getElementById('add-btn');
        const cancelBtn = document.getElementById('close-btn');
        const clearData = document.getElementById('delete-btn');


        // bold button
    boldBtn.addEventListener('click', () => {
        var selectedText = '';
        // window.getSelection
        if (window.getSelection) {
            selectedText = window.getSelection();
        }
        // document.getSelection
        else if (document.getSelection) {
            selectedText = document.getSelection();
        }
        // document.selection
        else if (document.selection) {
            selectedText = 
            document.selection.createRange().text;
        } 
        console.log("selected text:::",selectedText)
        
        if(document.getElementById("desc").style.fontWeight == "bold"){
            document.getElementById("desc").style.fontWeight = "normal";
            }
            
            else{
            document.getElementById("desc").style.fontWeight = "bold";
            }
    });

    // underline button
    underlineBtn.addEventListener('click', () => {

        if(document.getElementById("desc").style.textDecoration == "underline"){
        document.getElementById("desc").style.textDecoration = "none";
        }
        
        else{
        document.getElementById("desc").style.textDecoration = "underline";
        }
    });

    // copy button
    copyBtn.addEventListener('click', () => {
        document.getElementById("desc").select();
        document.execCommand("copy");
    });

    document.getElementById('bold-btn').addEventListener("click", function(){
        note.bold = true;
    });

    document.getElementById('underline-btn').addEventListener("click", function(){
        note.underline = true;
    });

    // Logic for bold and underline
    // function 1. write bold and underline text after click of button
    // function 2. grab selected text on button click and apply changes
    // saving it for later review again in note object: note.bold = "string selected"
    // 😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱


    document.getElementById('copy-btn').addEventListener("click", function(){
        note.copy = true;
    });

    function appendNewNoteToSection(note) {
        idHash++;   //for unique id everytime for every notes

        let noteSection = document.getElementById('notes-list');
        let newCard = document.createElement('div');
        newCard.classList.add('added-notes');
        newCard.classList.add('note-'+idHash);

        let idForButton = "delete-btn-"+idHash;

        newCard.innerHTML = 
        "<h1>"+note.title+"</h2>"+
        "<p>"+note.description+"</p>"+
        "<button id='"+idForButton+"'>"+" Delete </button>";
    

        console.log(newCard);
        noteSection.appendChild(newCard);
        console.log(notesList);
    }

    addData.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        let desc = document.getElementById('desc').value;
        console.log('title:',title);
        console.log('desc:',desc);
        if ((title.length > 0) && (desc.length > 0)) {
            note.title = title;
            note.description = desc;
            // Add note to array
            notesList.push(note);
            console.log(notesList);

            //appending new note in notes-list section 
            appendNewNoteToSection(note)
        }
        else if (( title.length === 0) && (desc.length === 0)){
            alert("Please enter Title and Description")
        } else if (title.length === 0){
            alert("Please enter Title for the note")
        } else {
            alert("Please enter Description for the note")
        }
        
    }

);

// add button
// function add(){
//     const title = document.getElementById("title").value;
//     const desc = document.getElementById("desc").value;

//     const newNote = document.createElement('div');
//     newNote.innerHTML += `<div class="note">
//     <h3>${title}</h3>
//     <p>${desc}</p>
//     </div>`;
//     noteInput.appendChild(newNote);
    
//     document.getElementById("title").value = "";
//     document.getElementById("desc").value = "";
// }
// addData.addEventListener('click', () => {
//     add();
// });

    // cancel button
    cancelBtn.addEventListener('click', () => {
        document.body.removeChild(newElement);
    });

    // clear button
    clearData.addEventListener('click', () => {
        let userChoice = prompt("Are you sure Buddy?", 'Yes');

        if(userChoice != 'Yes'){
            return;
        }
        
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    });

});




// document.addEventListener("DOMContentLoaded", function(){
    // document.getElementById('bold-btn').addEventListener("click", function(){
    //     note.bold = true;
    // });
    
    // document.getElementById('underline-btn').addEventListener("click", function(){
    //     note.underline = true;
    // });
    
    // document.getElementById('copy-btn').addEventListener("click", function(){
    //     note.copy = true;
    // });
    
    // addData.addEventListener('click', () => {
    //     const title = document.getElementById('title').value;
    //     const desc = document.getElementById('desc').value;
    //     note.title = title;
    //     note.description = desc;
    
    //     notesList.push(note);
    
    //     console.log(notesList);
    // });
    
// });





/// /UI UPDATES////
// Function: Create new note in UI
// function addNoteToList(note) {
//     const newUINote = document.createElement('div');
//     newUINote.classList.add('note');
//     newUINote.innerHTML = `
//       <span hidden>${note.id}</span>
//       <h2 class="note__title">${note.title}</h2>
//       <p class="note__body">${note.body}</p>
//                                     <div class="note__btns">
//                                         <button class="note__btn note__view">View Detail</button>
//                                         <button class="note__btn note__delete">Delete Note</button>
//                                     </div>
//     `;
//     noteContainer.appendChild(newUINote);
//   }