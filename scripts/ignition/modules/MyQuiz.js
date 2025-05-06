// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

  // bool[5] answers= [true,false,true,false,false];
  //const questionslist = ["q1","q2","q3","q4","q5"]; 
  let answerslist = [true,false,true,false,false];
  const questionslist = ["How much is the fish?","bored?","did i pass?","Is this false?","The answer is false"]; 
module.exports = buildModule("MyQuiz", (m) => {

  const answers = m.getParameter("answer", answerslist);
  const questions = m.getParameter("questions", questionslist);
  
  const mymodule = m.contract("MyQuiz",[questions,answers],{ });


  return { mymodule };
});
