<html><head>
<title>Horror LLC</title>
<style>
  body {
    background: linear-gradient(253deg, #4a040d, #3b0b54, #3a343b);
    background-size: 300% 300%;
    -webkit-animation: Background 10s ease infinite;
    -moz-animation: Background 10s ease infinite;
    animation: Background 10s ease infinite;
  }
  
  @-webkit-keyframes Background {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  @-moz-keyframes Background {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  @keyframes Background {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  
  .full-screen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column
    /* works with row or column */
    
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    text-align: center;
  }
  
  h1 {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 4em;
    letter-spacing: -2px;
    text-align: center;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, .6);
  }
  
  h3 {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 2em;
    letter-spacing: -2px;
    text-align: center;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, .6);
  }
  
  h2 {
    color: #fff;
    font-weight: 10;
    letter-spacing: 1px;
    text-align: center;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, .6);
  }
 
 h4 {
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 1em;
    letter-spacing: -1px;
    text-align: center;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, .6);  
 }
  
  .button-line {
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    text-align: center;
    font-size: 1.4em;
    opacity: .8;
    padding: 20px 40px;
    text-decoration: none;
    transition: all .5s ease;
    margin: 0 auto;
    display: block;
    width: 100px;
  }
  
  .button-line:hover {
    opacity: 1;
  }

  </style>
</head>
<body>
	<div class="full-screen">
  <div>
    <h1>Horror LLC</h1>
    <h4>Built with Nodejs</h4>
    <br>
    <h3>We'll keep you updated at: shanujindal48@gmail.</h3>
    <br>
    <h2>Email address:</h2>
    <input type="text" id="fname" name="fname"><br><br>
    <a class="button-line" id="signup">Submit</a> 
    <script>
    document.getElementById("signup").addEventListener("click", function() {
	var date = new Date();
    	date.setTime(date.getTime()+(-1*24*60*60*1000));
    	var expires = "; expires="+date.toGMTString();
    	document.cookie = "session=foobar"+expires+"; path=/";
    	const Http = new XMLHttpRequest();
        console.log(location);
        const url=window.location.href+"?email="+document.getElementById("fname").value;
        Http.open("POST", url);
        Http.send();
	setTimeout(function() {
		window.location.reload();
	}, 500);
    }); 
    </script>
  </div>
</div>


</body></html>