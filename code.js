function toPostfix (infix) {
    // create an array of each character in our input equation (chatGPT assisted)
    let infixChars = infix.split("");
    // initialize our stacks
    let stackIn = [];
    let stackPost = [];

    // setup operator precedence in key value pairs with the key being the operator and the value being the precedence
    let operatorPrec = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
    };

    // small helper function to check if character is a number by making sure not a number returns false and the character is not a space, returns boolean (chatGPT assisted)
    let isNumber = (char) => !isNaN(char) && char !== " ";

    // iterate over every character in our equation (examine the next element in the input)
    for (let i = 0; i < infixChars.length; i++) {
        // set our current character to charcter at index of current loop iterations i
        let char = infixChars[i];
        // if our current character is a number (returns true for isNumber) we will check if the next character is a number, appending it if it is, for as long as the next character is a number. This is how we will account for multidigit numbers (chatGPT assisted)
        if (isNumber(char)) {
            let num = char;
            while (i + 1 < infixChars.length && isNumber(infixChars[i + 1])) {
                num += infixChars[i + 1];
                i++
            }
            // once while condition of the next character being a number fails, push the number to our output stack (if it is an operand, output it)
            stackPost.push(num);
        } 
        // if current character is an opening parenthesis, push it on stack
        else if (char == "(") {
            stackIn.push(char);
        }
        // if it is an operator then (chatGPT assisted, only for condition statement)
        else if ("+-*/".includes(char)) {
            // for as long as the stack is not empty, and character on top of the stack is an operator with a higher precedent than our current character, pop lower precedent off the stack and push it to our output stack (else pop the operator on stack and output)
            while (stackIn.length > 0 && operatorPrec[stackIn[stackIn.length - 1]] >= operatorPrec[char]) {
                stackPost.push(stackIn.pop())
            }
            // if stack stack is empty or if current character has higher priority or if top of stack is openening parenthisis, pussh operator on stack
            stackIn.push(char);
        }
        // If current character is a closing parenthesis, pop operators from stack and push them onto output stack
        else if (char == ")") {
            // until stack is empty or open parenthesis is encountered
            while (stackIn.length > 0 && stackIn[stackIn.length - 1] != "(") { 
                stackPost.push(stackIn.pop());
            }
            // pop and discard the opening parenthesis
            stackIn.pop();
        }
    }

    // if there is no more input, pop the remaining operators to output
    while (stackIn.length > 0) {
        stackPost.push(stackIn.pop());
    }

    // assemble and return our postfix string output 
    let postfix = stackPost.join(" ");
    return postfix;
}