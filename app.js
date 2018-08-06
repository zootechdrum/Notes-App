console.log('starting app');

const _ = require('lodash');
const fs = require('fs');
const notes = require('./notes.js')

let command = process.argv[2];
console.log("Command " , command);

if (command === 'add') {
    console.log("Adding new note");
}else if (command === "list") {
    console.log("Listing all notes");
}