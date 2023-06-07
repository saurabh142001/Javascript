/// valid palindrome example //

var letters=[];//this is our stack

var word="hello"
var rword= "";
for( var i =0; i < word.length; i++ ){  //pushing the word in the stack//
    letters.push(word [i]);

}
// popping the words in reverse order out of the stack/
for ( var i=0; i< word.length; i++){
    rword+= letters.pop();
}

if (rword===word){
    console.log( word+  " is a palindrome");


}
else{
    console.log(word+ " is not a palindrome");
}
// creates a stack//
var stack=function(){
    this.count=0;
    this.storage={};
// adds a value at the end of the stack
this.push=functions(value);
this.storage[this.count]=value;
this.count++;

}
this.pop=function() {
    if( this.count===0);
    return (' undefined');
}
