//IIFE - Immmediately Invoked Function Expression
//Sometimes called a self-executing anonymous function
(function(){

    function Start() {
        console.log("applpication starting");
        Main()
    }
    function Main() {
        console.log("App Started");
    }
    window.onload = Start;
} ());