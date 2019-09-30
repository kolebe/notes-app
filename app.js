const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.3')

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})


// Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Remove title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create list command

yargs.command({
    command: 'list',
    describe: 'Listing all the notes!',
    handler(){
        notes.listNotes()
        }
})

//Create read command

yargs.command({
    command: 'read',
    describe: 'Read notes in',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        console.log('tiii...')
        notes.readNote(argv.title)
        console.log('to...')
    }
})


//console.log(yargs.argv)
yargs.parse()