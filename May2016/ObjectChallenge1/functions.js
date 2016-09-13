var message = '';
var student;
var search;

/*for(var info in students) {
	document.write(info);
	console.log(info);
}*/

/*for (var i=0; i<students.length; i+=1){
	//for (var info in students[i]){
		//console.log(students[i])};
	console.log(students[i]);
	document.write(students[i]);
}*/

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport( student ) {
  var report = '<h2>Student: ' + student.Name + '</h2>';
  report += '<p>Track: ' + student.Track + '</p>';
  report += '<p>Achievements: ' + student.Awards + '</p>';
  report += '<p>Points: ' + student.Points + '</p>';
  return report;
}

while (true) {
	search= prompt('Search student records: type a name [like Jody] or type "quit".');
	if (search === null || search.toLowerCase() === 'quit') {
		break;
	} else if (search === 'list') {
		message = students.join('\r\n');
		print (message);
	}
	for (var i = 0; i<students.length; i+=1) {
		student = students[i];
		if (student.Name === search) {
			message = getStudentReport( student );
			print (message);
		} else if (student.Name !== search) {
		message = "That's not the name of a student.";
		print (message);
		}
	}
}