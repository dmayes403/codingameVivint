// TEST #1 //////////////////////////////////////////
var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

if(!temps.length){
    print(0)
}

var newTemps = temps.split(' ');
var closest = 5527;
var arrayPlacement = 0;

for(var i = 0; i < newTemps.length; i++){
    if(Math.abs(newTemps[i]) < closest){
        closest = Math.abs(newTemps[i]);
        arrayPlacement = i;
    }
    else if(Math.abs(newTemps[i]) === closest && newTemps[i] > 0){
        closest = newTemps[i]
        arrayPlacement = i
    }
}

print(newTemps[arrayPlacement])





// TEST #2 //////////////////////////////////////////
var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.

var mimeObj = {}

for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    mimeObj[inputs[0].toLowerCase()] = inputs[1];
    }

function findFileType(file){
    if(file.lastIndexOf('.') !== -1){
        var currentFile =  file.slice(file.lastIndexOf('.') + 1).toLowerCase()
    }
    if(mimeObj[currentFile]){
        return(mimeObj[currentFile])
    }
    return ('UNKNOWN')
}

for (var i = 0; i < Q; i++) {
    print(findFileType(readline()))
}






// TEST #3 /////////////////////////////////////////////
var message = readline();
var binary = '';

for (var i = 0; i < message.length; i++) {
      if(message[i].charCodeAt(0).toString(2).length < 7){
        binary += ('0' + message[i].charCodeAt(0).toString(2));
      } else {
        binary += message[i].charCodeAt(0).toString(2);
      }
  }

var NorrisCode = '';
var currentValue = '';

for(var j = 0; j < binary.length; j++){
    currentValue = binary[j];
        if(currentValue == 1 && j === 0){
            NorrisCode += '0 0';
        }
        else if(currentValue == 0 && j === 0){
            NorrisCode += '00 0';
        }
        else if(binary[j] === binary[j-1]){
            NorrisCode += '0';
        }
        else if(currentValue == 1 && binary[j] !== binary[j-1]){
            NorrisCode += ' 0 0';
        }
        else {
            NorrisCode += ' 00 0';
        }
}

print(NorrisCode);



// TEST #4 /////////////////////////////////////////////
var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // width of the building.
var H = parseInt(inputs[1]); // height of the building.
var N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);

var createArray = []

function findBomb(Height, Width, Turns){
    var start = 0
    var end = (W*H)-1
    while (start <= end && Turns > 0) {
        print((W*H)/2)
        var bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
        var mid = (start + end)/2;
        if(mid == bombLoc){
         print(mid)
        }
        else if (location < mid){
            end = mid -1;
            Turns--
        }
        else if (location > mid){
            start = mid +1
            Turns--
        }
    }
}

findBomb(H,W,N);

// ^^^^^^^^^^^^^^^^^^^^^^^^^ I know that this code doesn't work, but this is kind of like pseudo code of the direction my mind was going in
// to solve the problem.
