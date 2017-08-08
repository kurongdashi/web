<?php
	// php语法严格，必须要结束符
	//获取传递过来的方法名
	$temp=$_GET["_jsonp"];

	// 组装,返回一个调用脚本
	$param="zhangsan";
	//错误写法
	//echo $temp."(".$param.")";//返回 hello(zhangsan)
	//echo $temp."("."zhangsan".")";//返回 hello(zhangsan)
	//正确写法
	//json_encode 转换成字符串
	echo $temp."(".json_encode($param).")";//返回 hello("zhangsan")
?>