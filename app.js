function sample(){
   // let numbers = [1,2,3,4,5,6,7,8,9,10]
    // number2 = [] 
     // numbers.map(val => {
        // let val2 = val % 3
        // console.log(val2)
        // if(val2 != 0){
            // number2.push(val)
        
        //}
    
   // })
    
    // console.log(number2)


//}
// sample()

var number_list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


function sumArray(array){
    let sum = 0; 
    array.forEach(val => {
        sum += Number(val);
      });
    
      console.log(sum); 
      return sum;
    }

sumArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])

function evenOdd(numbers){
    let oddArray = []
    let evenArray = []
    numbers.map(val => {
        let val2 = val % 2
        if(val2 == 0){
            evenArray.push(val)
        }
        else{
            oddArray.push(val)
        }
        
    })
    console.log(oddArray)
    console.log(evenArray)
}
evenOdd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])



function concatenate(name,age){
    var para1 = "My name is " + name + " but generally called by everyone as Gudia"
    var para2 = " I am " + Number(age) + " years old."
    var para3 = " read in class 7th standard"
    let sent = null;
    sent = para1 + para2 + para3
    console.log(sent)
    }
concatenate("Didum", 16)

function reverseString(str){
    str.split("").reverse()
    console.log(str.join(""))
}


// Change first Letter to Upper Case and Concatenate
function stringJoin(){
    var para1 = "My name is Didum but generally called by everyone as Gudia"
    splitFirst = para1.split(" ")
    splitFirst.map(val => {
        var upper = val.charAt(0).toUpperCase() + val.slice(1)
        console.log(upper)
    })
    

}


// Method 1 Array to String
function arrayTostring(){
    const num = ["My", "name", "is", "Didum", "but", "generally", "called", "by", "everyone","as", "Guida"]
    var string = num.toString()
    var output = ''
    splitString = string.split(",")
    splitString.map(val => {
        output += val + " "
        

    })
    console.log(output)
}

// Method 2 Array to String
function arrayTostring2(){
    const num = ["My", "name", "is", "Didum", "but", "generally", "called", "by", "everyone","as", "Guida"]
    var joinArray = num.join(' ')
    console.log(joinArray)

    

}


// M3 Array to String
function arrayTostring3(){
    const num = ["My", "name", "is", "Didum", "but", "generally", "called", "by", "everyone","as", "Guida"]
    var string = num.toString()
    replaceComma = string.replaceAll(","," ") 
    console.log(replaceComma)

}
arrayTostring3()

// How to check for empty array
if(num.length == 0)
    



