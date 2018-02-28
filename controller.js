	var app=angular.module("voucher",[]);
		app.controller("tableController",function($scope){
		$scope.cards=[];
		$scope.cardlist=[];
		$scope.value=[100, 200, 400, 500, 1000];
		$scope.labcards;
		$("#submit").click(function(){
				v=$('#box').val();
				for(i=1; i<=v; i++){
					$scope.a=Math.round(Math.random()*Math.pow(10,18));
					$scope.b=$scope.a.toString()
					$scope.c= $scope.b.substring(0,16);
					$scope.d= $scope.c.substring(0,4)+" "+$scope.c.substring(4,8)+" "+$scope.c.substring(8,12)+" "+$scope.c.substring(12,16)
					$scope.pick=Math.floor(Math.random()*5);
					$scope.cards.push($scope.d);
					$scope.cardlist.push([$scope.c,"new",$scope.value[$scope.pick]]);
				}
				document.getElementById('display').innerHTML=$scope.cards.join("<br><br>");
				$("#display").show();
				$scope.labcards=JSON.stringify($scope.cardlist);
				localStorage.setItem("cardlist", $scope.labcards);
		});
	});
