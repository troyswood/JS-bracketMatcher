//Troy S. Wood
//06-11-2015
//
//Coderbyte Challenge - BracketMatcher
//
//Using the JavaScript language, have the function BracketMatcher(str) take the
//str parameter being passed and return 1 if the brackets are correctly
//matched and each one is accounted for. Otherwise return 0. For example:
//if str is "(hello (world))", then the output should be 1, but if str is
//"((hello (world))" the the output should be 0 because the brackets do not
//correctly match up. Only "(" and ")" will be used as brackets. If str
//contains no brackets return 1.

function bracketMatcher(str) {

  var leftCount = 0,
      rightCount = 0;

  leftCount = (str.match(/\(/g)||[]).length;
  rightCount = (str.match(/\)/g)||[]).length;

  if (leftCount === rightCount) {
      return 1;
  } else {
      return 0;
    }
}

console.log('(coder)(byte)) = ', bracketMatcher("(coder)(byte))"));
console.log('(c(oder)) b(yte) = ', bracketMatcher("(c(oder)) b(yte)"));
