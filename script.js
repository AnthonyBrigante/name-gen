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
