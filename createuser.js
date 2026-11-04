import { hashSync } from 'bcryptjs';
import { prepare } from './db';

const username = process.argv[2];
const password = process.argv[3];

if(!username || !password) {
    console.log('Usage: node createuser.js <username> <password>');
    process.exit(1);
}
const hash = hashSync(password, 10);

prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)').run(username, hash);

console.log('Created user: ' + username);
console.log('Stored hash: ' + hash);