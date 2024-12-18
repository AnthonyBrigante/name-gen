// Function Definitions from your code

function genPrefix(firstName) {
    if (firstName.length > 5) {
        return 'The spectacular';
    } else {
        return 'the amazing';
    }
}

function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();
    if (firstLetter === 'a') { return 'Bum'; }
    if (firstLetter === 'b') { return 'mezmaro'; }
    if (firstLetter === 'c') { return 'Superdude'; }
    if (firstLetter === 'd') { return 'Requese'; }
    if (firstLetter === 'e') { return 'Bizbo'; }
    if (firstLetter === 'f') { return 'Jugaloo'; }
    if (firstLetter === 'g') { return 'Death tyrant'; }
    if (firstLetter === 'h') { return 'Sparticus'; }
    if (firstLetter === 'i') { return 'Dirt punching'; }
    if (firstLetter === 'j') { return 'Bachanator'; }
    if (firstLetter === 'k') { return 'Evil eye'; }
    if (firstLetter === 'l') { return 'sam'; }
    if (firstLetter === 'm') { return 'Mommylover'; }
    if (firstLetter === 'n') { return 'orinnix'; }
    if (firstLetter === 'o') { return 'Brick fist'; }
    if (firstLetter === 'p') { return 'Iron gut'; }
    if (firstLetter === 'q') { return 'Stretcher'; }
    if (firstLetter === 'r') { return 'lawnmower'; }
    if (firstLetter === 's') { return 'Hornface'; }
    if (firstLetter === 't') { return 'Stoneback'; }
    if (firstLetter === 'u') { return 'Knifefingers'; }
    if (firstLetter === 'v') { return 'killgore'; }
    if (firstLetter === 'w') { return 'destroyer'; }
    if (firstLetter === 'x') { return 'Bigboi'; }
    if (firstLetter === 'y' || firstLetter === 'z') { return 'Pablo'; }
}

function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor}fighter`;
    } else if (roadType === 'street') {
        return ` master of ${favoriteColor}`;
    } else {
        return `${favoriteColor}stone`;
    }
}

function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1);
    switch(lastLetter) {
        case 'a': return 'Stormmaker';
        case 'b': return 'Von Evil';
        case 'c': return 'Dickerson';
        case 'd': return 'Johnson';
        case 'e': return 'Battlemaster';
        case 'f': return 'Turducken';
        case 'g': return 'Farticus';
        case 'h': return 'Bach';
        case 'i': return 'Murderson';
        case 'j': return 'Mcbabyhands';
        case 'k': return 'Lastname';
        case 'l': return 'Tickler';
        case 'm': return 'Frogface';
        case 'n': return 'Stickybottom';
        case 'o': return 'Dragon';
        case 'p': return 'Hashyellows';
        case 'q': return 'Apartmentbuilding';
        case 'r': return 'Shmucker';
        case 's': return 'The creator';
        case 't': return 'Son of Superman';
        case 'u': return 'Jonkler';
        case 'v': return 'Skibidi Sigma';
        case 'w': return 'Imavillain';
        case 'x': return 'nobodyhasxfortheirlastname';
        case 'y': return 'Dumbbrain';
        case 'z': return 'Feinshyt';
        default: return 'make the end of your lastname a letter pal';
    }
}

function genSuffix(favoriteAnimal) {
    return `of the ${favoriteAnimal} League.`;
}

function genFullName() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const roadType = document.getElementById('roadType').value;
    const favoriteColor = document.getElementById('favoriteColor').value.trim();
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();

    const prefix = genPrefix(firstName);
    const newFirstName = genFirstName(firstName);
    const middleName = genMiddleName(roadType, favoriteColor);
    const newLastName = genLastName(lastName);
    const suffix = genSuffix(favoriteAnimal);

    const capitalizedPrefix = capitalize(prefix);
    const capitalizedFirstName = capitalize(newFirstName);
    const capitalizedMiddleName = capitalize(middleName);
    const capitalizedLastName = capitalize(newLastName);

    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${suffix}`;
    document.getElementById('result').textContent = fullName;
}

function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

function updateRatingValue(value) {
    document.getElementById('ratingValue').textContent = value;
}

function sendFeedback() {
    alert('Thank you for your feedback!');
}
