#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1000;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your Pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");

  let operationAnswer = await inquirer.prompt([
    {
      name: "Operation",
      message: "Please select option",
      type: "list",
      choices: ["Withdraw", "Check Balance"],
    },
  ]);

  if (operationAnswer.Operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    myBalance -= amountAns.amount;
    if (myBalance< 0){
        console.log("Insufficient Balance.")
    } else
    console.log(`Your remaining Balance is: ${myBalance}`);
  } 
  
  else if (operationAnswer.Operation === "Check Balance") {
    console.log(`Your Balance is: ${myBalance}`);
  }
} 

else {
  console.log("Incorrect Pin Code");
};
