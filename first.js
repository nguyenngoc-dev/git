
var chalk=require('chalk');
function sayhi(name,age)

{
    this.name =name;
    this.age=age;
}
sayhi.prototype.say=function (){

    console.log(" hi my name is "+ chalk.blue(this.name) + "and i am " + chalk.red(this.age) + " years old" );
}
    ;
module.exports=sayhi;