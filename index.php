
<?php
include_once 'php/IDB.php';
require_once 'php/lib.php';
require_once 'MySmarty.php';
require_once 'php/auto.php';
require_once 'php/sajam automobila.php';

        
  
  $sajam2 = DB::vratiSajam();



$smarty = new MySmarty();
$smarty->assign('sajam2',$sajam2);

$smarty->display("index.tpl");
?>