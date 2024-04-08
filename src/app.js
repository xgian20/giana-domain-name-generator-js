/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "raccoon"];
  let domain = [".com", ".gov"];
  let allDomains = "";

  console.log("\nThis is the method of using regular for loop method.");
  for (let index = 0; index < pronoun.length; index++) {
    for (let index1 = 0; index1 < adjective.length; index1++) {
      for (let index2 = 0; index2 < noun.length; index2++) {
        for (let index3 = 0; index3 < domain.length; index3++) {
          allDomains +=
            pronoun[index] +
            adjective[index1] +
            noun[index2] +
            domain[index3] +
            "<br>";
          console.log(
            pronoun[index] + adjective[index1] + noun[index2] + domain[index3]
          );
        }
      }
    }
  }

  console.log("\nThis is the method of using ForIn Loop with string template.");
  for (let index in pronoun) {
    for (let index1 in adjective) {
      for (let index2 in noun) {
        for (let index3 in domain) {
          console.log(
            `${pronoun[index]}${adjective[index1]}${noun[index2]}${domain[index3]}`
          );
        }
      }
    }
  }
  const browserElement = document.querySelector(".browser");
  if (browserElement) {
    browserElement.innerHTML = allDomains;
  }
};
