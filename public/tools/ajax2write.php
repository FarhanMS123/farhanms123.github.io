<?php 
	$url=isset($_GET["url"]) ? $_GET["url"] : "url_nothing";
	$save=isset($_GET["save"]) ? $_GET["save"] : "save_nothing";
	if(!isset($_GET["url"]) || !isset($_GET["save"])){exit;}
	echo $url . " & " . $save;
	$infile = file_get_contents($url);
	echo "<br><br>" . $infile;
	$fp = fopen($save, 'w+');
	fwrite($fp, $infile);
	fclose($fp);
?>