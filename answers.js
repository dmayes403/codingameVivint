// TEST #1
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





// TEST #2
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




// TEST $3
var message = readline();
var binary = "";

for (var i = 0; i < message.length; i++) {
      binary += message[i].charCodeAt(0).toString(2);
  }

var currentValue = '';
var consecutive = 0;
var NorrisCode = '';

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

// print(binary);
print(NorrisCode);


// TEST $4
