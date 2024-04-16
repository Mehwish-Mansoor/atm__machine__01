#! /usr/bin/env node

import inquirer from "inquirer";

 import chalk from "chalk";

let myBalance = 20000;
let myPin = 1234

let pinAns = await inquirer.prompt(

[

      {
        name: "pin",
        type: "number",
        message: "enter your pin code",
    
      }

]

);

if(pinAns.pin === myPin){
    console.log("pin is correct ");
   }  else
   {console.log(" your pin code is incorrect");

    }


let operationAns =  await inquirer.prompt(
    [
        {
            name: "operation",
            type: "list",
            message: chalk.blue("select an operation"),
            choices: ["withdraw amount","check balance"],
        }
    ]
);

if(operationAns.operation === "withdraw amount"){
    let withdrawAns = await inquirer.prompt(
    [
        {
            name: "withdrawMethod",
            type: "list",
            message:chalk.green("select a withdraw method"),
            choices: [ "fastCash","enter amount"],
        }
    ]
    );
    if(withdrawAns.withdrawMethod === "fastCash"){
        let fastCashAns = await inquirer.prompt(
            [
                {
                    name: "fastCash",
                    type: "list",
                    message: "select amount",
                    choices:[ 1000, 3000 ,5000,10000],
                }
            ]
        );
        if(fastCashAns.fastCash> myBalance){
            console.log("insuffishant balance");
        }
        else{
            myBalance -= fastCashAns.fastCash
        
            console.log(chalk.black("withdraw successfully"));
        }
     } else if(withdrawAns.withdrawMethod === "enter amount"){

     let amountAns = await inquirer.prompt(
           [
              {
                name: "amount",
              type: "number",
                message: "enter amount to withdraw",
             }
          ]
     );
     if(amountAns.amount > myBalance){
        console.log( chalk.red("insufficient balance"));
        console.log(`your remaining is ${myBalance}`)
     }else{
        myBalance -=  amountAns.amount 
         console.log(chalk.yellow("withdraw successfully"));

      }   
     }
      }
          if(operationAns.operation ==="check balanc"){
        
           } else{
            
             console.log(`your remaining is ${myBalance}`)
          }
        
        
          
        
         
        




