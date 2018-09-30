module.exports = function solveSudoku(matrix){
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if (matrix[row][col] !== 0){
            	continue
            } else{
            	var num = getNum(matrix,row,col);
            }
            for (var i = 0; i < num.length; i++) {
                matrix[row][col] = num[i];
                if (solveSudoku(matrix)) {
                    return matrix;
                }
            }
            matrix[row][col] = 0;
            return false;
        }
    }
    return matrix;
};

function getNum(matrix,row,col){
    var numbers = [1,2,3,4,5,6,7,8,9];
    var r = Math.floor(row/3)*3,
        c = Math.floor(col/3)*3;
    
    for (var i = 0; i < 9; i++ ) {
        var squareR = r + (i%3);
        var squareC = c + Math.floor(i/3);
        numbers = numbers.filter((obj) => 
            obj !== matrix[row][i] && obj !== matrix[i][col] && obj !== matrix[squareR][squareC]);
    }
    return numbers;
};

// function solveSudoku(matrix) {
// 	var num = [1,2,3,4,5,6,7,8,9]; 			
// 	var x = [];
// 	for(var row = 0; row < 9 ; row++){	 
// 		for(var col = 0 ; col < 9 ; col++){
// 			if(matrix[row][col] === 0){  
// 				for(var i = 0; i < 9 ; i++){ 
// 					x.push(matrix[row][i]);  // массив строк ненужных чисел
// 					x.push(matrix[i][col]);	 // массив столбцов ненужных чисел
					
//  				function square(matrix,row,col){
//  						var c = Math.floor(col/3)*3;
// 						var r = Math.floor(row/3)*3;
// 						for(var i = 0; i<9; i++){
// 							var squareRow = r + i%3;
// 							var squareCol = c + Math.floor(i/3);
// 							num = num.filter((rty) => 
// 								rty!==matrix[r][c]);
// 						}
// 						return num;
// 						x.push(num);
//  					}
// 					var array = num.filter(function(obj) { return x.indexOf(obj) < 0; });
// 					var number = array[0];
// 				}
// 					matrix[row][col] = number;	
// 					console.log(matrix);
// 					solveSudoku(matrix);
// 			};
// 		}
// 	}
// }	