//generate prefix
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return 'The Great'
    } else {
        return 'master'
    }

}
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Bum'
    } else if (firstLetter === 'b') {
        return 'Pablo'
    } else if (firstLetter === 'c') {
        return 'Frank'
    } else if (firstLetter === 'd') {
        return 'Requese'
    } else if (firstLetter === 'e') {
        return 'Demarcus'
    } else if (firstLetter === 'f') {
        return 'Jugaloo'
    } else if (firstLetter === 'g') {
        return 'Panda'
    } else if (firstLetter === 'h') {
        return 'Carrot'
    } else if (firstLetter === 'i') {
        return 'Dirt'
    } else if (firstLetter === 'j') {
        return 'Sam'
    } else if (firstLetter === 'k') {
        return 'Jeff'
    } else if (firstLetter === 'l') {
        return 'Hornface'
    } else if (firstLetter === 'm') {
        return 'Mommylover'
    } else if (firstLetter === 'n') {
        return 'orinnix'
    } else if (firstLetter === 'o') {
        return 'Pablo'
    } else if (firstLetter === 'p') {
        return 'Pablo'
    } else if (firstLetter === 'q') {
        return 'Pablo'
    } else if (firstLetter === 'r') {
        return 'Pablo'
    } else if (firstLetter === 's') {
        return 'Pablo'
    } else if (firstLetter === 't') {
        return 'Pablo'
    } else if (firstLetter === 'u') {
        return 'Pablo'
    } else if (firstLetter === 'v') {
        return 'Pablo'
    } else if (firstLetter === 'w') {
        return 'Pablo'
    } else if (firstLetter === 'x') {
        return 'Pablo'
    } else if (firstLetter === 'y') {
        return 'Pablo'
    } else if (firstLetter === 'z') {
        return 'Pablo'
    }



}

//generate middle name

function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor}ridge`; // Example: Blueridge
    } else if (roadType === 'street') {
        return `${favoriteColor}son`; // Example: Bluedeson
    } else {
        return `${favoriteColor}stone`; // Example: Bluestone
    }
}

//last name

function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1)
    if (lastLetter === 'a') {
        return 'Storm'
    } else if (lastLetter === 'b') {
        return 'Von Evil'
    }
    else if (lastLetter === 'c') {
        return 'Dickerson'
    } else if (lastLetter === 'd') {
        return 'Ivan'
    } else if (lastLetter === 'e') {
        return 'Johnson'
    } else if (lastLetter === 'f') {
        return 'Turducken'
    } else if (lastLetter === 'g') {
        return 'Fartcus'
    } else if (lastLetter === 'h') {
        return 'Bach'
    } else if (lastLetter === 'i') {
        return 'Murderson'
    } else if (lastLetter === 'j') {
        return 'Mcbabyhands'
    } else if (lastLetter === 'k') {
        return 'Lastname'
    } else if (lastLetter === 'l') {
        return 'Tickler'
    } else if (lastLetter === 'm') {
        return 'Frogface'
    } else if (lastLetter === 'n') {
        return 'Stickybottom'
    } else if (lastLetter === 'o') {
        return 'Dragon'
    } else if (lastLetter === 'p') {
        return 'Hashyellows'
    } else if (lastLetter === 'q') {
        return 'Apartmentbuilding'
    } else if (lastLetter === 'r') {
        return 'Shmucker'
    } else if (lastLetter === 's') {
        return 'The creator'
    } else if (lastLetter === 't') {
        return 'Son of Superman'
    } else if (lastLetter === 'u') {
        return 'Jonkler'
    } else if (lastLetter === 'v') {
        return 'Skibidi Sigma'
    } else if (lastLetter === 'w') {
        return 'Imavillain'
    } else if (lastLetter === 'x') {
        return 'nobodyhasxfortheirlastname'
    } else if (lastLetter === 'y') {
        return 'Dumbbrain'
    } else if (lastLetter === 'z') {
        return 'Feinshyt'
    }
}

//gen Suffix
function genSuffix(favoriteAnimal) {
    return `of ${favoriteAnimal} clan.`
}

//master name building function
function genFullName() {
    //get users inputs from html elements
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favoriteColor = document.getElementById('favoriteColor').value.trim()
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()

    //run name generating functions and store them in new varibales
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastname = genLastName(lastName)
    const suffix = genSuffix(favoriteAnimal)
    //capitalize name variables when needed
    const capitalizedPrefix = capitalize(prefix)
    const capitalizedFirstName = capitalize(newFirstName)
    const capitalizedMiddleName = capitalize(middleName)
    const capitalizedLastName = capitalize(newLastname)
    //combine all of the name variables into a full new name
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`
    //display new name
    document.getElementById('result').textContent = fullName
}

//capitalize
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}