//process.stdout.write doesn't add \n new line character after each letter

const sentence = "hello there from lighthouse labs";

let t = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, t += 100);
}

setTimeout(() => console.log(), t);