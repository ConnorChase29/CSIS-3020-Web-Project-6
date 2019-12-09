<!DOCTYPE html>

<!-- November 16, 2019 -->
<!-- Connor-Chase-Assignment-5-2.html -->
<!-- Tested with Google Chrome -->

<!-- SQL Statements -->

<!-- CREATE DATABASE images; -->
<!-- INSERT INTO images(name, url) VALUES('Adobe Photoshop', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Adobe_Photoshop_CS6_icon.svg/1041px-Adobe_Photoshop_CS6_icon.svg.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Adobe Illustrator', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/788px-Adobe_Illustrator_CC_icon.svg.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Adobe Bridge', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Adobe_Bridge_CC_icon.svg/1050px-Adobe_Bridge_CC_icon.svg.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Adobe Dreamweaver', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Adobe_Dreamweaver_CC_icon.svg/1200px-Adobe_Dreamweaver_CC_icon.svg.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Adobe Lightroom', 'https://seeklogo.com/images/A/adobe-lightroom-cc-logo-8077CAE010-seeklogo.com.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Adobe XD', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/492px-Adobe_XD_CC_icon.svg.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Dropbox', 'https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/app-dropbox-windows@2x.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Discord', 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Sublime', 'https://i.imgur.com/AGmyyOX.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Final Cut Pro', 'https://assets.materialup.com/uploads/7151ca20-3c53-4c6c-bd82-d38a1916bd2f/512x512bb-85.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Skype', 'https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Skype-512.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Evernote', 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Evernote_Icon.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Microsoft Word', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Microsoft_Word_2013_logo.svg/1043px-Microsoft_Word_2013_logo.svg.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Microsoft Excel', 'https://www.cleverducks.com/wp-content/uploads/2018/01/Excel-Icon.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Microsoft PowerPoint', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Microsoft_PowerPoint_2013_logo.svg/782px-Microsoft_PowerPoint_2013_logo.svg.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Figma', 'https://i.pinimg.com/originals/a5/58/b4/a558b426cb8973523f37bbed94cf0f09.png'); -->
<!-- INSERT INTO images(name, url) VALUES('iTunes', 'http://thetechnews.com/wp-content/uploads/2016/05/itunes_13_icon__png__ico__icns__by_loinik-d8wqjzr.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Google Chrome', 'https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Safari', 'https://s4827.pcdn.co/wp-content/uploads/2017/07/ios-7-safari-icon-pn.png'); -->
<!-- INSERT INTO images(name, url) VALUES('Mozilla Firefox', 'https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/firefox/files/2017/12/firefox-logo-300x310.png'); -->

<html>
   <head>
      <meta charset = "utf-8">
      <title>Computer Applications Quiz</title>
   </head>

   <body>
   <style type = "text/css">
   		@import url('https://fonts.googleapis.com/css?family=Michroma&display=swap');
		#appImg {
			display: block;
			margin-left: auto;
			margin-right: auto;
			width: 20%;
			height: 40%;
		}
		#choiceButtons {
			margin-top: 30px;
		}
		h1, h5 {
			text-align: center;
		}
		#footertext {
			text-align: center;
			margin-top: 30px;
			font-size: 15px;
		}
		.container {
			display: block;
			text-align: center;
		}
		body {
			background-image: url("https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg");
			font-family: 'Michroma', sans-serif;
			color: white;
			font-size: 25px;
		}
   	</style>

	<script src="code.js"></script>

	<h1>Computer Applications Quiz</h1>
	
	<h5><em>Test your knowledge on computer software. Can you name them all?</em></h5>

    <div class ="container">

    <?php
		$user = "root";
	    $pword = "root";
	    $dbase = "images";
	    $table = "images";
	    print ("  <h1>$table</h1>\n");
	    print ("  <div>\n");
	    $mydb = new mysqli('localhost', $user, $pword, $dbase);
	    if ($mydb->connect_error) {
	      die( "Failed to connect to MySQL: " . $mydb->connect_error);
	    }
	    $query = "SELECT name, url FROM $table ORDER BY rand() LIMIT 4;";
	    $result = $mydb->query($query);
	    $mydb->close();
	    $row = $result->fetch_assoc();
	    print ("    <img id=\"appImg\" src=\"$row[url]\">\n");
	    $correct_name = $row["name"];

	    print ("  </div>\n");
	    print ("  <form id='choiceButtons'>\n");
	    print ("    <div id='buttonsRow'>\n");
	    print ("      <input class=\"correct inputBtn\" type=\"button\" onclick = \"checkAns(this)\" value=\"$correct_name\">\n");
	    while ($row = $result->fetch_assoc()) {
	      print ("      <input class=\"wrong inputBtn\" type=\"button\" onclick = \"checkAns(this)\" value=\"$row[name]\">\n");
	    }
	    print ("</div>");
	    print ("<script>\n");
	    print ("  answer = \"$correct_name\";\n");
	    print ("</script>\n");
	?>

    	<p id = "correctCounter">Correct Answer Counter: </p>
    	<p id = "questionCounter">Question Counter: </p>
    	<p id = "wrongCounter">Wrong Answer Counter: </p>

    	<form action = "#">

    		<input id = "nextButton" type = "submit" onclick = "startQuiz()" value = "Next">
    		<input id = "correctButton" type = "button" onclick = "correctAns()" value = "Reveal Answer">

    	</form>

    </div>
    <br>

    <footer>

    	<p id = "footertext">Created By Connor Chase</p>

    </footer>

   </body>

</html>