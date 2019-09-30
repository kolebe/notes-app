const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}


const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)


    
    if (!duplicateNotes) {
            notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))

    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }    
}


const removeNote = (title) => {
    const notes = loadNotes()
    const remaindingNotes = notes.filter((note) => 
      note.title !== title)

    // console.log(remaindingNotes)   
    // console.log(notes)

    if (remaindingNotes.length === notes.length){
        console.log(chalk.red.inverse('No note with the given title!'))
        
    } else {
        saveNotes(remaindingNotes)
        console.log(chalk.green.inverse('Note removed!'))
        
    }

}



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}


const listNotes = () => {
     const notes = loadNotes()
     console.log(chalk.bold.blue.inverse('Listing all the notes')),
     notes.forEach(note => console.log(note.title))
         
    }


const readNote = (title) => {
    const notes = loadNotes()
    const noTit = notes.find((note) => (note.title === title))

    debugger

    if (noTit) {
        console.log(chalk.bold.green(noTit.title))
        console.log(noTit.body)
       } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}    


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}