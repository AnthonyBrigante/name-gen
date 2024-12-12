//generate prefix
function genPrefix (firstName){
if(firstName.length > 5){
    return 'The Great'
} else{
return 'master'
}

}
function genFirstName (firstName){
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a'){
return 'Jeff'
    }else if (firstLetter === 'b'){
        return 'Pablo'
    }else{
return 'Jullian'
    }
    
        

}

//generate middle name

function genMiddleName (roadType, favoriteColor){
    if (roadType === 'road'){
        return '$(favoriteColor)ridge' //EX Blueridge
    }else if ( roadType === 'street'){
        return '$(favoriteColor)son'
    }else {
        return '$(favoriteColor)stone'
    }
}

//last name

fucntion genLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length-1)
    if (lastLetter === 'a') {
        return 'Storm'
    } else if (lastLetter === 'b') {
        return ''
    }
    else if (lastLetter === 'b') {
        return ''
    }else if (lastLetter === 'b') {
        return ''
    }else if (lastLetter === 'b') {
        return ''
    }else if (lastLetter === 'b') {
        return ''
    }else if (lastLetter === 'b') {
        return ''
    }else if (lastLetter === 'b') {
        return ''
    }else if (lastLetter === 'b') {
        return ''
    }else if (lastLetter === 'b') {
        return ''
    }else if (lastLetter === 'b') {
        return ''
    }
}

//gen Suffix
function genSuffix(favoriteAnimal){
return `of $(favoriteAnimal) clan.`
}

//master name building function
function genFullName(){
//get users inputs from html elements
const firstName =document.getElementById('firstName').value.trim()
const lastName =document.getElementById('firstName').value.trim()
const roadType =document.getElementById('firstName').value
const favoriteColor =document.getElementById('firstName').value.trim()
const favoriteAnimal =document.getElementById('firstName').value.trim()

//run name generating functions and store them in new varibales
const prefix = genPrefix(firstName)
const newFirstName = getFirstName(firstName)
const middleName = getMiddleName(roadType, favoriteColor)
const newLastname = getLastName(lastName)
//capitalize name variables when needed
const capitalizedPrefix = capitalize(prefix)
const capitalizedFirstName = capitalize(newFirstName)
const capitalizedMiddleName = capitalize(middleName)
const capitalizedLastName = capitalize(newLastname)
//combine all of the name variables into a full new name

//display new name

}

//capitalize
function capitalize(input){
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}