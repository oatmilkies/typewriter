//process.stdout.write doesn't add \n new line character after each letter

const sentence = "hello there from lighthouse labs";

let t = 0;

//Print each letter one by one on a single line
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, t += 100);
}

//Add new line at the end
setTimeout(() => console.log(), t);