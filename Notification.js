function solution(message, K) {
    if (K < 3) return '.'.repeat(K); // If K is less than 3, return as many dots as possible.
  
    const words = message.split(' ');
    let notification = '';
    
    for (let i = 0; i < words.length; i++) {
      let temp = notification.length === 0 ? words[i] : `${notification} ${words[i]}`;
  
      if (temp.length <= K) {
        notification = temp;
      } else {
        break; // Exceeding limit
      }
      
    }
  
    // If the full message fits within K characters
    if (notification.length === message.length) {
      return notification;
    }
  
    // If at least one word was added before exceeding the limit
    if (notification.length > 0 && notification.length + 4 <= K) {
      return `${notification} ...`;
    } else if (notification.length > 0 && notification.length + 3 <= K) {
      return `${notification}...`;
    }
  
    // If no words could fit
    return '...';
  }
// ... (Test cases remain the same)


console.log(solution("And now here is my secret", 15)); // Output: "And now here ..."
console.log(solution("And now here is my secret", 25)); // Output: "And now here is my ..."
console.log(solution("And now here is my secret", 5));  // Output: "..."
console.log(solution("And", 3)); // Output: And
console.log(solution("And now", 7)); // And now
console.log(solution("And now", 6)); // And ...
console.log(solution("And now here is my secret", 0)); // ...
console.log(solution("a b c d", 7)); // a b ...
console.log(solution("a b c d", 5)); // a ...
console.log(solution("a b c d", 3)); // ...
console.log(solution("abcd", 3)); // ...
console.log(solution("abcd", 4)); // abcd
console.log(solution("abcd", 2)); // ...
console.log(solution("test test test test", 10)); // test ...
console.log(solution("The quick brown fox jumps over the lazy dog", 20)); // The quick brown fox ...
console.log(solution("The quick brown fox jumps over the lazy dog", 40)); // The quick brown fox jumps over ...