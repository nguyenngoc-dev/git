
var chalk=require('chalk');
function a(name,age)

{
    this.name =name;
    this.age=age;
}
a.prototype.say=function (){

    console.log(" hi my name is "+ chalk.blue(this.name) + "and i am " + chalk.red(this.age) + " years old" );
}
    ;
module.exports=a;