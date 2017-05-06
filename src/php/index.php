<?php
header('content-type:application:json;charset=utf8');  

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mysql";

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->query("set names 'utf8'");
$num=$_POST['number'];
$sql = "SELECT * FROM goods limit $num,6";
$result = $conn->query($sql);
if($result == true){
    $arr = array();
    while($row = $result->fetch_array()){
	$arr[]=array('goodsID' => $row['id'],'goodsName'=>$row['goodsName'],'goodsImg'=>$row['goodsImg'],'goodsPrice'=>$row['goodsprice'],'goodsAdd'=>$row['goodsadd'],'goodsPer'=>$row['goodsperson'],'discount'=>$row['discount']);
		}
	echo json_encode($arr);
}

$conn->close();

?>
