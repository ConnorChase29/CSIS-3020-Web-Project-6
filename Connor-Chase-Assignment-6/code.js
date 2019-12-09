var appImg;
var choice1;
var choice2;
var choice3;
var choice4;
var nextButton;
var correctButton;
var questionCounter = 0;
var correctCounter = 0;
var wrongCounter = 0;
var firstTime = true;
var imgValue;
var inputBtn;

var usedImages = [];
var allChoices = [];

/*var images = [{
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Adobe_Photoshop_CS6_icon.svg/1041px-Adobe_Photoshop_CS6_icon.svg.png",
    question: "What computer program is this?",
    choices: ["Adobe Photoshop", "Adobe XD", "Figma", "Final Cut Pro"],
    correctAnswer: "Adobe Photoshop",
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/788px-Adobe_Illustrator_CC_icon.svg.png",  
    question: "What computer program is this?",
    choices: ["Figma", "Adobe Illustrator", "Safari", "Discord"],
    correctAnswer: "Adobe Illustrator"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Adobe_Bridge_CC_icon.svg/1050px-Adobe_Bridge_CC_icon.svg.png",  
    question: "What computer program is this?",
    choices: ["Google Chrome", "Safari", "Adobe Bridge", "Evernote"],
    correctAnswer: "Adobe Bridge"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Adobe_Dreamweaver_CC_icon.svg/1200px-Adobe_Dreamweaver_CC_icon.svg.png", 
    question: "What computer program is this?",
    choices: ["iTunes", "Microsoft PowerPoint", "Adobe Dreamweaver", "Sublime"],
    correctAnswer: "Adobe Dreamweaver"
  }, {
    image: "https://seeklogo.com/images/A/adobe-lightroom-cc-logo-8077CAE010-seeklogo.com.png",    
    question: "What computer program is this?",
    choices: ["Adobe Illustrator", "Adobe Lightroom", "Adobe Photoshop", "Mozilla Firefox"],
    correctAnswer: "Adobe Lightroom"
  }, {
      
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/492px-Adobe_XD_CC_icon.svg.png",   
    question: "What computer program is this?",
    choices: ["Dropbox", "Skype", "Figma", "Adobe XD"],
    correctAnswer: "Adobe XD"
  }, {
      
    image: "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/app-dropbox-windows@2x.png",   
    question: "What computer program is this?",
    choices: ["Microsoft Excel", "Safari", "Dropbox", "Sublime"],
    correctAnswer: "Dropbox"
  }, {
      
    image: "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png",  
    question: "What computer program is this?",
    choices: ["Sublime", "Adobe XD", "Discord", "Figma"],
    correctAnswer: "Discord"
  }, {
      
    image: "https://i.imgur.com/AGmyyOX.png",  
    question: "What computer program is this?",
    choices: ["Skype", "Sublime", "Safari", "Figma"],
    correctAnswer: "Sublime"
  }, {
      
    image: "https://assets.materialup.com/uploads/7151ca20-3c53-4c6c-bd82-d38a1916bd2f/512x512bb-85.png",  
    question: "What computer program is this?",
    choices: ["Microsoft Excel", "Evernote", "Skype", "Final Cut Pro"],
    correctAnswer: "Final Cut Pro"
  }, {
      
    image: "https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Skype-512.png",  
    question: "What computer program is this?",
    choices: ["Sublime", "Skype", "Mozilla Firefox", "Adobe Lightroom"],
    correctAnswer: "Skype"
  }, {
      
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Evernote_Icon.png",  
    question: "What computer program is this?",
    choices: ["Microsoft PowerPoint", "Adobe Lightroom", "Evernote", "iTunes"],
    correctAnswer:  "Evernote"
  }, {
      
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Microsoft_Word_2013_logo.svg/1043px-Microsoft_Word_2013_logo.svg.png",  
    question: "What computer program is this?",
    choices: ["Safari", "Microsoft Excel", "Figma", "Microsoft Word"],
    correctAnswer:  "Microsoft Word"
  }, {
      
    image: "https://www.cleverducks.com/wp-content/uploads/2018/01/Excel-Icon.png",  
    question: "What computer program is this?",
    choices: ["Adobe Illustrator", "Sublime", "Adobe Lightroom", "Microsoft Excel"],
    correctAnswer: "Microsoft Excel"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Microsoft_PowerPoint_2013_logo.svg/782px-Microsoft_PowerPoint_2013_logo.svg.png",   
    question: "What computer program is this?",
    choices: ["Microsoft PowerPoint", "Evernote", "Adobe XD", "Microsoft Word", "Mozilla Firefox"],
    correctAnswer: "Microsoft PowerPoint"
  }, {
    image: "https://i.pinimg.com/originals/a5/58/b4/a558b426cb8973523f37bbed94cf0f09.png",  
    question: "What computer program is this?",
    choices: ["Adobe Dreamweaver", "Google Chrome", "Figma", "Final Cut Pro"],
    correctAnswer:  "Figma"
  }, {
    image: "http://thetechnews.com/wp-content/uploads/2016/05/itunes_13_icon__png__ico__icns__by_loinik-d8wqjzr.png",   
    question: "What computer program is this?",
    choices: ["Sublime", "Final Cut Pro", "iTunes", "Discord"],
    correctAnswer: "iTunes"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png", 
    question: "What computer program is this?",
    choices: ["Google Chrome", "Safari", "Mozilla Firefox", "Discord" ],
    correctAnswer: "Google Chrome"
  }, {
    image: "https://s4827.pcdn.co/wp-content/uploads/2017/07/ios-7-safari-icon-pn.png",   
    question: "What computer program is this?",
    choices: ["Microsoft Word", "Safari","Adobe Dreamweaver", "Adobe XD"],
    correctAnswer:  "Safari"
      
  }, {
    image: "https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/firefox/files/2017/12/firefox-logo-300x310.png",   
    question: "What computer program is this?",
    choices: ["Figma", "Google Chrome", "Mozilla Firefox", "Adobe Lightroom"],
    correctAnswer: "Mozilla Firefox"
  }];*/

function startQuiz () {
    nextButton = document.getElementById("nextButton");
    // Hides the next button on the last question to avoid going over
    if (questionCounter >= 19) {
        nextButton.disabled = true;
    }
    else {
        nextButton.disabled = false;
    }

    inputBtn = document.getElementsByClassName("inputBtn");
    inputBtn = shuffle(inputBtn);
    var buttonsContainer = document.getElementById("buttonsRow");
    for (i = 0; i < inputBtn.length; i++) {
        inputBtn[i].style.cssText = "background: white";
        inputBtn[i].disabled = false;
    }
    var btnArray = [0, 1, 2, 3];
    btnArray = shuffle(btnArray);
    for (i = 0; i < btnArray.length; i++) {
        var btnIndex = btnArray[i];
        var randomBttn = inputBtn[btnIndex];
        buttonsContainer.removeChild(randomBttn);
        buttonsContainer.appendChild(randomBttn);
    }
}

/*function setImage (appImg) {
	imgValue = Math.floor(Math.random() * 20 );
    
    if (usedImages.indexOf(images[imgValue].image) != -1) {
        setImage(images[imgValue].image);
    }
    else {
        appImg = images[imgValue].image;
        document.getElementById("appImg").src = appImg;
        // Pushing to empty array to keep track of images used
        usedImages.push(appImg);
    }
}

for (i = 0; i < images.length; i++) {
    allChoices.push(images[i].correctAnswer);
}

function setChoice () {
	randomBtn = Math.floor(Math.random() * 4);
    var correctAnswer;
    var alt = document.getElementById("appImg").src;
    for (i = 0; i < 4; i++) {
        var buttonNum = i+1;
        if (i == randomBtn) {
            
            for (j = 0; j < images.length; j++) {
                
                if (images[j].image == alt) {
                    correctAnswer = images[j].correctAnswer;
                    console.log(correctAnswer);
                    document.getElementById("choice" + buttonNum).value = correctAnswer;
                }
            }
        }
        else {
            randomAnsIndex = Math.floor(Math.random() * images.length);
            if (allChoices[randomAnsIndex] == correctAnswer) {
                randomAnsIndex = Math.floor(Math.random() * images.length);
            }
            else {
                document.getElementById("choice" + buttonNum).value = allChoices[randomAnsIndex];
            }
        }
    }
}*/

function shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
    randomIndex = Math.floor ( Math.random() * currentIndex );
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
	}
	return array;
}

function correctAns () {
	firstTime = false;
	alert("Answer is highlighted in green");
	var alt = document.getElementById("appImg").src;
	var correctAnswer;
    document.getElementsByClassName("correct")[0].style.cssText = "background: green";
}

function checkAns (element) {
	var image = document.getElementById("appImg").src;
	var correctAnswer;
    console.log("checkAns");
	
    questionCounter++;
	if (element.classList.contains("correct")) {
		correctCounter++;
		alert ("You got it right!");
	}
    else {
        wrongCounter++;
        alert ("You got it wrong!");
    }
    for (i = 0; i < inputBtn.length; i++) {
        inputBtn[i].disabled = true;
    }
    document.getElementById("questionCounter").innerHTML = "Questions: " + questionCounter;
    document.getElementById("correctCounter").innerHTML = "Correct Answer Counter: " + correctCounter;
    document.getElementById("wrongCounter").innerHTML = "Wrong Answer Counter: " + wrongCounter;
}

window.addEventListener( "load", startQuiz, false );