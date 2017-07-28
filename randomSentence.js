var userInput = document.getElementById("user-input"), //holds typed response from user
    generateSentenceButton = document.getElementById("generate-sentence-button"), //generate sentence on click
    clearSentenceButton = document.getElementById("clear-sentence-button"), //clears content from display area & textbox on click
    displaySentenceDiv = document.getElementById("display-sentence-div"), //display random sentence to user
    
    randomSentencesArray1 = ["What time is it?", 
                                "After you've done all you can, Just stand!", 
                                "I am enjoying this time."],
    
    randomSentencesArray2 = ["I figured so.", 
                                "Several programming languages.", 
                                "Building web apps is fun."],
    
    randomSentencesArray3 = ["My favorite language is JavaScript", 
                                "You can make a static website interactive.", 
                                "Everyone should learn JavaScript."],
    
    randomSentencesArray4 = ["Study the data structures.", 
                                "They will make using JavaScript much easier.", 
                                "If you find you're getting frustrated, take a break."];

    //function that will pull a sentence from each array
    var generateRandomSentence = function generateRandomSentence(arraySentence){
        arrayIndex = Math.floor(Math.random() * arraySentence.length);
        return arraySentence[arrayIndex];
    }

    //on click of button, generateRandomSentence will run and a sentence will be picked from each array
    generateSentenceButton.addEventListener("click", function() {
        var finalSentence = generateRandomSentence(randomSentencesArray1) + " ";
            finalSentence += generateRandomSentence(randomSentencesArray2) + " ";
            finalSentence += userInput.value + ", ";   
            finalSentence += generateRandomSentence(randomSentencesArray3) + " ";
            finalSentence += generateRandomSentence(randomSentencesArray4);
            
            displaySentenceDiv.font = "white";
            displaySentenceDiv.innerText += finalSentence;
    });
    
    //clears textbox and div displaying sentences upon clicking the start over / clear sentence button
    clearSentenceButton.addEventListener("click", function() {
        displaySentenceDiv.innerHTML = ""; 
        userInput.value = "";      
    }); 
