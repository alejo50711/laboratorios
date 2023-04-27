const bcrypt = require('bcryptjs');

const password = 'contraseña123';

// Generar un hash de la contraseña con salt generado con genSalt
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    if (err) throw err;
    console.log(`Contraseña cifrada: ${hash}`);
  });
});

// Generar un salt y un hash de la contraseña de manera síncrona
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);
console.log(`Contraseña cifrada (síncrona): ${hashedPassword}`);

// Comparar un hash con una contraseña
const otroPassword = 'contraseña123';
const otroHash = '$2a$10$LqZgQ0r3v0HkLW8fC68wEufRR44eGNCu05INz/gsTkB34lX9fLRm2';

bcrypt.compare(otroPassword, otroHash, (err, res) => {
  if (err) throw err;
  console.log(`Coinciden: ${res}`);
});

// Comparar un hash con una contraseña de manera síncrona
const resultado = bcrypt.compareSync(otroPassword, otroHash);
console.log(`Coinciden (síncrona): ${resultado}`);

