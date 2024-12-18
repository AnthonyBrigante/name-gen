//generate prefix
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return 'The spectacular'
    } else {
        return 'the amazing'
    }

}
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Bum'
    } else if (firstLetter === 'b') {
        return 'mezmaro'
    } else if (firstLetter === 'c') {
        return 'Superdude'
    } else if (firstLetter === 'd') {
        return 'Requese'
    } else if (firstLetter === 'e') {
        return 'Bizbo'
    } else if (firstLetter === 'f') {
        return 'Jugaloo'
    } else if (firstLetter === 'g') {
        return 'Death tyrant'
    } else if (firstLetter === 'h') {
        return 'Sparticus'
    } else if (firstLetter === 'i') {
        return 'Dirt punching'
    } else if (firstLetter === 'j') {
        return 'Bachanator'
    } else if (firstLetter === 'k') {
        return 'Evil eye'
    } else if (firstLetter === 'l') {
        return 'sam'
    } else if (firstLetter === 'm') {
        return 'Mommylover'
    } else if (firstLetter === 'n') {
        return 'orinnix'
    } else if (firstLetter === 'o') {
        return 'Brick fist'
    } else if (firstLetter === 'p') {
        return 'Iron gut'
    } else if (firstLetter === 'q') {
        return 'Stretcher'
    } else if (firstLetter === 'r') {
        return 'lawnmower'
    } else if (firstLetter === 's') {
        return 'Hornface'
    } else if (firstLetter === 't') {
        return 'Stoneback'
    } else if (firstLetter === 'u') {
        return 'Knifefingers'
    } else if (firstLetter === 'v') {
        return 'killgore'
    } else if (firstLetter === 'w') {
        return 'destroyer'
    } else if (firstLetter === 'x') {
        return 'Bigboi'
    } if (firstLetter === 'y' || firstLetter === 'z') {
        return 'Pablo';
    }



}

//generate middle name

function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor}fighter`; // Example: Blueridge
    } else if (roadType === 'street') {
        return ` master of ${favoriteColor}`; // Example: Bluedeson
    } else {
        return `${favoriteColor}stone`; // Example: Bluestone
    }
}

//last name

function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1);
    
    switch(lastLetter) {
        case 'a':
            return 'Stormmaker';
        case 'b':
            return 'Von Evil';
        case 'c':
            return 'Dickerson';
        case 'd':
            return 'Johnson';
        case 'e':
            return 'Battlemaster';
        case 'f':
            return 'Turducken';
        case 'g':
            return 'Farticus';
        case 'h':
            return 'Bach';
        case 'i':
            return 'Murderson';
        case 'j':
            return 'Mcbabyhands';
        case 'k':
            return 'Lastname';
        case 'l':
            return 'Tickler';
        case 'm':
            return 'Frogface';
        case 'n':
            return 'Stickybottom';
        case 'o':
            return 'Dragon';
        case 'p':
            return 'Hashyellows';
        case 'q':
            return 'Apartmentbuilding';
        case 'r':
            return 'Shmucker';
        case 's':
            return 'The creator';
        case 't':
            return 'Son of Superman';
        case 'u':
            return 'Jonkler';
        case 'v':
            return 'Skibidi Sigma';
        case 'w':
            return 'Imavillain';
        case 'x':
            return 'nobodyhasxfortheirlastname';
        case 'y':
            return 'Dumbbrain';
        case 'z':
            return 'Feinshyt';
        default:
            return 'make the end of your lastname a letter pal';
    }
}

//gen Suffix
function genSuffix(favoriteAnimal) {
    return `of the ${favoriteAnimal} League.`
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
function updateRatingValue(value) {
    document.getElementById('ratingValue').textContent = value;
}
