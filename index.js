function findMatching(drivers, name) {
    const matches = drivers.filter(match => match.toLowerCase() === name.toLowerCase());
    return matches
}

function fuzzyMatch(drivers, string) {
    const fuzzyMatches = drivers.filter(match => match.startsWith(string));
    return fuzzyMatches
}

function matchName(drivers, string) {
    const nameMatches = drivers.filter(match => match.name === string);
    return nameMatches
}
