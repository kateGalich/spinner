let symbols = ['|', '/', '-', '\\', '|'];

for (let i = 0; i < symbols.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${symbols[i]}   `);
  }, (i * 200) + 100);
}

setTimeout(() => process.stdout.write('   \n'), 1900);