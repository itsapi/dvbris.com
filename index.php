<!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

		<title>Dvbris Web Design</title>

		<link rel="stylesheet" href="css/style.css">

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.js"></script>
		<script src="js/figlet.js"></script>
		<script src="js/jquery.figlet.js"></script>
		<script src="js/main.js"></script>
		
		<script src="js/snowstorm-min.js"></script>
		<script>
			snowStorm.flakesMax = 256;
			snowStorm.followMouse = false;
		</script>
	</head>
	<body>
<?
	if (isset($_GET['admin']) || isset($_COOKIE["pi_links"])){
?>
		<section>
			<nav>
<?
		if (isset($_POST['password'])){
			if (md5($_POST['password']) == 'ef9895022601b44bb112c85aea07f009'){
				$admin = 1;
			}
		}
		if (isset($_POST['logout'])){
			setcookie('pi_links', '', time()-60000);
		}
		if (isset($_COOKIE['pi_links'])){
			$admin = 1;
		}
		if (isset($admin)){
			setcookie('pi_links', 1, time()+3600*24*30);
?>
				<ul>
					<li><a href="/phpsysinfo" target="_blank">PHP system info</a></li>
					<li><a href="/webmin/" target="_blank" target="_blank">Webmin</a></li>
					<li><a href="/webalizer" target="_blank">Web usage stats</a></li>
					<li><a href="/shell" target="_blank">Shell in a box</a></li>
				</ul>
<?
		} else {
?>
			<form method="post">
				<label>Password<input type="password" name="password"></label>
				<input type="submit" value="Submit">
				<input type="submit" name="logout" value="Logout">
			</form>
<?
		}
?>
			</nav>
		</section>
<?
	}
?>
		<h1>Dvbris Web Design</h1>
<pre id="logo">
 ,-.      _.--.  .--._     .-,   ,-.     _.--.  .--._      .-, 
{ :_}  ,-'  .'.}{.'.  ',  {_: } { :_}  ,'  .'.}{.'.  '-,  {_: }
 '.__.'     '~'  '~'    '.__.'   '.__.'    '~'  '~'     '.__.' 
 ______    __       __  __ _       ______     _______   ____   
/   _  ', {  \     /  }/  '  '-, ;'  __  ',  {_     _},'    '+ 
\  | '.  \ \  ;   ;  / |  .~ .  ||  |  )  |    '| |' ;  /''',_}
|  |   \  ||  |   |  | |  |__/  /|  '--'  ;     | |  |  \___   
|  |   {  | \  \ /  /  |   __  { |   __  :      | |   \,__  '. 
|  |   /  |  \  '  /   |  |  \  \|  ;  \  \     | |   _   '\  \
/  |_,'  /    \   /    |  '~ '  ||  |   \  \  _,| |._{ '.__/  |
\______.'      \_/     \__._,,-' :__:    \__){_______}'.____.' 
  ,-.      _.--.     .-----.    .--------.     .--._      .-,  
 { :_}  ,-'  .'.}   {  WEB  }--{  DESIGN  }   {.'.  '-,  {_: } 
  '.__.'     '~'     '-----'    '--------'     '~'     '.__.'  
</pre>
		<div id="container">
			<div id="start">
				<section class="text bash advance"></section>
				<section class="text bash advance">help</section>
				<section class="text">Press enter to run each command (or click it)</section>
				<section class="text bash">cat intro.txt</section>
				<section class="text" id="intro">
					<p><em class="link" title="Grit96, Olls">2</em> programmers who craft sites for the web.</p>
					<p>We have a passion for writing well-thought out code which <em>works</em>.</p>
					<p>Responsive, sleek web apps that work across all browsers and platforms.</p>
				</section>
				<section class="text bash">cat sites.txt</section>
				<section class="text" id="sites">
					<h3>Sites We've Built...</h3>
					<h4>...For Ourselves...</h4>
					<ul>
						<li><a name="1" href="javascript:void(0)"><em>itsapi</em>.no-ip.org</a> <span>A social network, with <em>Pi</em></span></li>
						<li><a name="2" href="javascript:void(0)">dvbris.no-ip.org/<em>open_board</em></a> <span>An <em>Open Board</em> for anyone</span></li>
						<li><a name="3" href="javascript:void(0)">dvbris.no-ip.org/<em>news_feed</em></a> <span>A feed to get your <em>News</em></span></li>
					</ul>
					<h4>...And For Others</h4>
					<ul>
						<li><a name="4" href="javascript:void(0)">dvbris.no-ip.org/webDesign/MrDorph</a> <span>A gaming clan community</span></li>
						<li><a name="5" href="javascript:void(0)">dvbris.no-ip.org/webDesign/coderqi</a> <span>A second hand car search engine</span></li>
					</ul>
					<h4><a name="continue" href="javascript:void(0)">&raquo; Continue &raquo;</a></h4>
				</section>
			</div>
			<div id="site1">
				<section class="text bash advance">ping itsapi.no-ip.org</section>
				<section class="text">
					<h3>Itsapi</h3>
					<p></p>
				</section>
			</div>
			<div id="site2">
				<section class="text bash advance">ping dvbris.no-ip.org/open_board</section>
				<section class="text">
					<h3>Open board</h3>
					<p></p>
				</section>
			</div>
			<div id="site3">
				<section class="text bash advance">ping dvbris.no-ip.org/news_feed</section>
				<section class="text">
					<h3>News feed</h3>
					<p></p>
				</section>
			</div>
			<div id="site4">
				<section class="text bash advance">ping dvbris.no-ip.org/webDesign/MrDorph</section>
				<section class="text">
					<h3>MrDorph</h3>
					<p></p>
				</section>
			</div>
			<div id="site5">
				<section class="text bash advance">ping dvbris.no-ip.org/webDesign/coderqi</section>
				<section class="text">
					<h3>coderqi</h3>
					<p></p>
				</section>
			</div>
			<div id="section2">
				<section class="text bash advance">ping github.com/itsapi</section>
				<section class="text">
					<p>PING github.com (204.232.175.90) 56(84) bytes of data.</p>
					<p>64 bytes from github.com (204.232.175.90): icmp_req=1 ttl=48 time=107 ms</p>
					<p>64 bytes from github.com (204.232.175.90): icmp_req=2 ttl=48 time=108 ms</p>
					<p>64 bytes from github.com (204.232.175.90): icmp_req=3 ttl=48 time=108 ms</p>
				</section>
				<section class="text">
					<h3>Open Source</h3>
					<p>We believe in making our content freely available for everone to use. This is why all our sites are on GitHub at <a href="http://github.com/itsapi" target="_blank">github.com/itsapi</a></p>
				</section>
				<section class="text bash"></section>
				<section class="text"></section>
			</div>
		</div>
	</body>
</html>