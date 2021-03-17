/*
 * yueng.js
 * Copyright (C) 2021 yuengdelahoz <yuengdelahoz@Yueng>
 *
 * Distributed under terms of the MIT license.
 */

function readFile(input) {
	  let file = input.files[0];

	  let reader = new FileReader();

	  reader.readAsText(file);

	  reader.onload = function() {
		  var result = reader.result;
		  console.log(result.length);
		  if (result.length === 12){
			  alert(`1. File size: ${file.size}`);
		  }
		  else{
			  alert(`2. File size: ${file.size}`);
		  }

	};

	  reader.onerror = function() {
			  console.log(reader.error);
			};

}

