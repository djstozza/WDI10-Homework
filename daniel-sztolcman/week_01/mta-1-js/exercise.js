// MTA Lab
// Objectives:

// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity

// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

 


// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."


// There are 3 subway lines:

// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th

// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st

// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.


// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)

// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.



// Hints:

// Work out how you would do it on paper first! Then start to explain that process in Javascript.

// Get the program to work for a single line before trying to tackle multiple lines.

// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.

// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.

// The key to the lab is finding the index positions of each stop. (hint: indexOf())

// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



//1. find out i fwe are on the same line
//2. 
var stations = {
	"N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
	"L": ["8th", "6th", "Union Square", "3rd", "1st"],
	"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}






var planTrip = function ( startLine, startStation, endLine, endStation ) {
	var train0 = stations[startLine];
	var train1 = stations[endLine];
	var startTrain0 = stations[startLine].indexOf(startStation);
	var endTrain0 = stations[startLine].indexOf(endStation);
	var startTrain1 = stations[endLine].indexOf(startStation);
	var endTrain1 = stations[endLine].indexOf(endStation);
	var visitedStationsArray0 = [];
	var visitedStationsArray1 = [];
	
	var journey0 = function ( startTrain0, endTrain0 ) {
		if ( startTrain0 < endTrain0 ) {
			for (var i = (startTrain0 + 1); i <= endTrain0; i++ ) {
				visitedStationsArray0.push(train0[i]);
			}
		} else {
			for ( var i = ( startTrain0 - 1 ); i >= endTrain0; i-- ) {
				visitedStationsArray0.push(train0[i]);
			}
		}
		return visitedStationsArray0;
	}

	var journey1 = function ( startTrain1, endTrain1 ) {
		if ( endTrain1 > startTrain1 ) {
			for (var j = endTrain1; j > startTrain1; j-- ){
				visitedStationsArray1.push(train1[j]);
			}
		} else {
			for ( var j = endTrain1; j < startTrain1 ; j++ ) { 
				visitedStationsArray1.push(train1[j]);
			}
		}
		return visitedStationsArray1.reverse();
	}
	
	if (startTrain0 < 0) {
		var message = "Every journey begins with a first step... unfortunately, you seem to have one."
		return message;
	}

	if ( endTrain1 < 0 ) {
		var message = "In the style of Talking Heads: We're on a road (well train line) to nowhere..."
		return message;
	}

	if ((startLine === endLine) && (startStation === endStation)){
		var message = "Well that was quick... you're already here!"
		return message;
	}

	if ( (startLine === endLine ) || (endStation === "Union Square") ) {
		journey0( startTrain0, endTrain0 );
		var message = "To travel from: " + startStation + " to: " + endStation + " on the " + startLine + " Line, you need to pass through the following stops: " + visitedStationsArray0.join(', ') + ".\nNumber of stops: " + visitedStationsArray0.length + "."
		return message;
	}else {
		endTrain0 = stations[startLine].indexOf("Union Square");
		startTrain1 = stations[endLine].indexOf("Union Sqaure");
		journey0( startTrain0, endTrain0 );
		journey1( startTrain1, endTrain1 );
		var message = "To travel from: " + startStation + " on the " + startLine + " Line to: " + endStation + " on the " + endLine + "Line, you need to pass through the following stops: " + visitedStationsArray0.join(', ') + ".\nChange at Union Square.\nYour journey then continues through: " + visitedStationsArray1.join(', ') + ".\nNumer of Stops: " + (visitedStationsArray0.length + visitedStationsArray1.length) + "."
		return message;
	}
}




console.log(planTrip("N", "Times Square", "N", "8th"));
console.log(planTrip("L", "8th", "6", "Astor Place"));
console.log(planTrip("N", "Times Square", "N", "Times Square"));
console.log(planTrip("N", "Astor Place", "N", "8th"));
console.log(planTrip("N", "Times Square", "N", "Astor Place"));
console.log(planTrip("N", "Times Square", "L", "Grand Central"));






// var lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
// var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
// var line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];



// var trainL = { 
// 	name: "L",
// 	stops: lineL 
// };
// var trainN = { 
// 	name: "N",
// 	stops: lineN 
// };
// var train6 = { 
// 	name: "6",
// 	stops: line6 
// };

// var trains = [ trainL, trainN, train6 ];

// console.log (trains);

// console.log(trains[0].stops[1]);
// console.log(trains.indexOf(trainN));

// console.log(trains.indexOf("Times Square"));



// var stations = {
// 				lineN: lineN, 
// 				lineL: lineL, 
// 				line6: line6
// 				};




// var startTrip = function ( startLine, startStation, endLine, endStation ) {
// 	var startPosition = startLine.indexOf( startStation );
// 	var endPosition;
// 	var visitedStationsArray0 = [];
// 	var visitedStationsArray1 = [];
// 	// function needs to be out of an if statement
// 	var startTripStations = function (startPosition, endPosition) {
// 		if ( startPosition < endPosition ) {
// 			for ( var i = (startPosition + 1); i < endPosition; i++ ) {
// 				visitedStationsArray0.push(startLine[i]);
// 			}
// 		} else {
// 			for ( var i = (startPosition - 1); i > endPosition; i-- ) {
// 				visitedStationsArray0.push(startLine[i]);
// 				visitedStationsArray0;
// 				console.log(visitedStationsArray0);
// 			}
// 				return visitedStationsArray0;
// 		} 
// 	}			

// 	var endTripStations = function (startPosition1, endPosition1) {
// 		if ( endPosition1 > startPosition1 ) {
// 			for (var j = endPosition1; j > startPosition1; j-- ){
// 				visitedStationsArray1.push(endLine[j]);
// 			}
// 		} else {
// 			for ( var j = endPosition1; j < startPosition1 ; j++ ) { 
// 				visitedStationsArray1.push(endLine[j]);
// 			}
// 		}
// 		return visitedStationsArray1;
// 	}	

// 	if ( startLine === endLine ) {	
// 		startTripStations( startPosition, endPosition);
// 		console
// 		var numberOfStops = visitedStationsArray0.length
// 		var message = "To get from " + startStation + " to " + endStation + ", you must travel through " + visitedStationsArray0.join(', ') + ".\nNumber of stops: " + numberOfStops + ".";
// 	} else {
// 		if (endStation === "Union Square") {
// 			var endPosition = startLine.indexOf( "Union Square" );
// 			startTripStations( startPosition, endPosition );
// 			var numberOfStops = visitedStationsArray0.length;
// 			var message = "To get from " + startStation + " to " + endStation + ", you must travel through " + visitedStationsArray0.join(', ') + ".\nNumber of stops: " + numberOfStops + ".";

// 		} else {
// 			var endPosition = startLine.indexOf( "Union Square" );
// 			startTripStations( startPosition, endPosition );
// 			var startPosition1 = endLine.indexOf( "Union Square" );
// 			var endPosition1 = endLine.indexOf( endStation );
// 			endTripStations ( startPosition1, endPosition1 );
// 			var numberOfStops = visitedStationsArray0.length + visitedStationsArray1.length;
// 			var message = "To get from " + startStation + " to " + endStation + ", you must travel through " + visitedStationsArray0.join(', ') + ".\nYour journey continues through the following stops: "+ visitedStationsArray1.join(', ') + ".\nNumber of stops: " + numberOfStops + "."; 
// 		}
			
// 	} 
// 	return message;
// }
// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

//console.log( startTrip( stations.lineN, "Times Square", stations.lineN, "Union Square" ) );
// console.log( startTrip( stations.lineN, "Times Square", stations.lineN, "8th" ) );
// console.log( startTrip( stations.lineN, "8th", stations.lineN, "Times Square" ) );
// console.log( startTrip( stations.lineN, "Times Square", stations.lineL, "8th") );
// console.log( startTrip( stations.lineN, "Times Square", stations.line6, "Grand Central"))


// var planTrip = function (startLine, startStation, endLine, endStation) {
// 	var startStationPosition = startLine.indexOf( startStation );
// 	var endStationPosition = endLine.indexOf( endStation );
// 	var visitedStationsArray1 = [];
// 	var visitedStationsArray2 = [];
// 	if (startLine === endLine) {
// 		if ( startStationPosition < endStationPosition ) {
// 				for ( var i = startStationPosition; i <= endStationPosition; i ++ ) {
// 					visitedStationsArray1.push(startLine[i]);
// 				}
// 			} else {
// 				for ( var i = startStationPosition ; i >= endStationPosition ; i-- ) {
// 					visitedStationsArray1.push(startLine[i]);
// 				}
// 			}
// 			console.log ( visitedStationsArray1 );
// 		} else {	
// 	// var startTrip = function (startLine, startStation) {
// 		var startStationPosition = startLine.indexOf( startStation );
// 		var startLineUSPosition = startLine.indexOf( "Union Square" );
// 		if ( startStationPosition < startLineUSPosition ) {
// 			for (var i = startStationPosition; i <= startLineUSPosition; i ++ ){
// 				visitedStationsArray1.push(startLine[i]);
// 			}
// 		} else {
// 			for ( var i = startStationPosition ; i >= startLineUSPosition ; i-- ) {
// 				visitedStationsArray1.push(startLine[i]);
// 			}
// 			console.log (visitedStationsArray1);
// 			console.log (visitedStationsArray1.length);
// 		}
// 	// }
	
// //startTrip(stations.lineN, "Times Square");
// //startTrip(stations.line6, "Astor Place");

// 	//var endTrip = function ( endLine, endStation ) {
// 		var endStationPosition = endLine.indexOf( endStation );
// 		var endLineUSPosition = endLine.indexOf( "Union Square" );
// 		var visitedStationsArray2 = [];
// 		if ( endStationPosition > endLineUSPosition ) {
// 			for (var j = endStationPosition; j > endLineUSPosition; j-- ){
// 				visitedStationsArray2.push(endLine[j]);
// 			}
// 		} else {
// 			for ( var j = endStationPosition ; j < endLineUSPosition ; j++ )
// 				visitedStationsArray2.push(endLine[j]);
// 			}
// 			console.log (visitedStationsArray2);
// 			console.log (visitedStationsArray2.length);
// 		}

// 		var numberOfStops = visitedStationsArray1.length + visitedStationsArray2.length;
// 		console.log ( numberOfStops );
// 		return
// }
// planTrip(stations.lineL, "1st", stations.lineN, "8th");
// // planTrip(stations.lineN, "8th", stations.lineL, "1st");
// // planTrip(stations.lineN, "Times Square", stations.lineN, "8th");
// // planTrip(stations.lineN, "8th", stations.lineN, "Times Square");
