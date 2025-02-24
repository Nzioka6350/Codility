//This file solves the binary gap question in javascript
// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].

function solution(N){
    //Change N to a binary number
    const binN = N.toString(2);
    //Now let's decrete variables to deal with gaps
    let maxGap =0;
    let currentGap = 0;
    let isCounting = false

    //Implimenting the count of the gap
    for(let i = 0;i < binN.length; i++){
     //Check if the first character is one
     if(binN[i] === '1'){
        if(isCounting){
            maxGap = Math.max(maxGap,currentGap);
            currentGap = 0;
        }
        isCounting = true;
     }else if(isCounting){
        currentGap++;
     }
    }
    return maxGap;
}
console.log(solution(9));    // Output: 2
console.log(solution(529));  // Output: 4
console.log(solution(20));   // Output: 1
console.log(solution(15));   // Output: 0
console.log(solution(32));   // Output: 0
console.log(solution(1041)); // Output: 5
console.log(solution(20));   // Output: 1 (Now correct)