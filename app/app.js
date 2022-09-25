const createButton = document.getElementById('add-new');
const noteInput = document.getElementById('note-list');
let newElement;

const addedNotes = document.getElementsByClassName('added-notes');

let notesList = [];

let counter = 0;

let idHash = 0;

createButton.addEventListener('click', () => {
    counter++;
    let note = {
        idHash: counter,
        title: "",
        description: "", 
        bold: false,
        underline: false,
        copy: false
    }

    for(let notes of notesList){
        console.log(notes)
    }

        newElement = document.createElement('div');

        newElement.innerHTML += `<div class="new-card">
        <button id="close-btn">&times;</button>
        <label for="title">Title</label>
        <input type="text" name="title" id="title">
        <label for="desc">Description</label>
        <textarea id="desc" name="desc" id="desc" col="20" rows="10"></textarea>
        <button id="add-btn">Add Note</button>
        <input type="hidden" value="`+note.idHash+`">
        <div id="format-options">
            <button id="bold-btn">Bold</button>
            <button id="underline-btn">Underline</button>
            <button id="copy-btn">Copy</button>
            <button id="delete-btn">Clear</button></div>
        </div>`;
        document.body.appendChild(newElement);


        // button functions
        const boldBtn = document.getElementById('bold-btn');
        const underlineBtn = document.getElementById('underline-btn');
        const copyBtn = document.getElementById('copy-btn');
        const addData = document.getElementById('add-btn');
        const cancelBtn = document.getElementById('close-btn');
        const clearData = document.getElementById('delete-btn');

    function textSelection() {
            let desc = document.getElementById('desc');
            let descHTML = desc.innerHTML;
            let selectionStart = 0;
            let selectionEnd = 0;
            if (desc.selectionStart) {
                selectionStart = desc.selectionStart;
            }
            if (desc.selectionEnd) {
                selectionEnd = desc.selectionEnd;
            }
            console.log("start_index:",selectionStart);
            console.log("end_index:",selectionEnd);

            return [selectionStart,selectionEnd]
            
            
            // if (selectionStart != selectionEnd) {
            //     var editorCharArray = editorHTML.split("");
            //     editorCharArray.splice(selectionEnd, 0, "</b>");
            //     editorCharArray.splice(selectionStart, 0, "<b>"); //must do End first
            //     editorHTML = editorCharArray.join("");
            //     editor.innerHTML = editorHTML;
            // }
        

        // let selectedText = '';
        // // window.getSelection
        // let wSelectedObject = window.getSelection();
        // let dSelectedObject = document.getSelection();

        // let existingObject = wSelectedObject != null ? wSelectedObject : dSelectedObject;
        // console.log("existing:",existingObject);
        // if (existingObject) {
        //     // console.log("dcument selection:",existingObject);
        //     var start_index = existingObject.anchorOffset;
        //     var end_index = existingObject.focusOffset;
        //     if (start_index >= 0 && end_index >= 0){
        //         console.log("start: " + start_index);
        //         console.log("end: " + end_index);
        //     }
        //     selectedText = existingObject.toString().trim();
        //     console.log("I am selected text: ", selectedText);
        // }

    //     var range = selection.getRangeAt(0);
    // var start = range.startOffset;
    // var end = range.endOffset;

        // document.selection
        // else if (document.selection) {
        //     selectedText = 
        //     document.selection.createRange().text;
        // } 
        // return selectedText;
    }

        // bold button
    boldBtn.addEventListener('click', () => {
        let selectedIndexArray = textSelection();
        // save bold array indexes in object 
        
        // alter html elements from this function
        // show changes in current screen



        // let selectText = textSelection()
        // console.log(selectText)
        // if(selectText.style.fontWeight == "bold"){
        //     selectText.style.fontWeight = "normal";
        //     }
        //     else{
        //     selectText.style.fontWeight = "bold";
        //     }
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
    //


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
        let classForBtn = 'note-'+idHash;

        newCard.innerHTML = 
        "<h1>"+note.title+"</h2>"+
        "<p>"+note.description+"</p>"+
        "<button class='"+classForBtn+" del-btn' id='"+idForButton+"'>"+" Delete </button>";
    

        console.log(newCard);

        noteSection.appendChild(newCard);

        console.log(notesList);
    
        
        // console.log(notesList);
        // console.log("note-"+idHash.toString())
 //        cardDelete = document.getElementById("note-"+idHash.toString());
 //        console.log(cardDelete);
 //        const deleteButton = document.querySelector('#delete-btn-'+idHash.toString());
 //        deleteButton.addEventListener('click', () => {noteSection. removeChild(cardDelete);})
    }

// delete added-notes
    

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
            appendNewNoteToSection(note);

            //delete functionality - akash
            //note delete functionality

            //optimization scope - can add this eventlistener to newly added buttons only
            const btns = document.getElementsByClassName('del-btn');
            // console.log(btns);

            for(let btn of btns){
                btn.addEventListener('click', ()=>{

                    let notesWithSameId = document.getElementsByClassName(btn.classList[0]);
                
                    for(let elem of notesWithSameId){
                        elem.remove(); //removing from DOM
                    }

                });
            }

            const addingElems = document.getElementsByClassName('new-card');
            for(let elem of addingElems)
                elem.remove();

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


//add a eventListener for div
let divs = document.getElementsByTagName('div');

for(let aDiv of divs){
    divs.addEventListener('click', (e)=>{
        console.log(e, aDiv);
    });
}


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

