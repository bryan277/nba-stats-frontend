function pctComparator(p1, p2, key) {
    p1 = p1.stats[key].split('/');
    p2 = p2.stats[key].split('/');
    if (p2[1] === '0') {
        return -1;
    }
    if (p1[1] === '0') {
        return 1;
    }
    const diff = p2[0]/p2[1] - p1[0]/p1[1];
    return diff === 0 ? p2[0] - p1[0] : diff;
}
function jerseyComparator (p1, p2, key) {
    return p1.info.jersey - p2.info.jersey;
}

function nameComparator(p1, p2) {
    return p2.info.lastName.localeCompare(p1.info.lastName);
}

function descComparator(p1, p2, key) {
    return p2.stats[key] - p1.stats[key];
}

function minComparator(p1, p2) {
    p1 = p1.stats.MIN.split(':');
    p2 = p2.stats.MIN.split(':');
    const p1Sec = p1[0] * 60 + p1[1];
    const p2Sec = p2[0] * 60 + p2[1];
    return p2Sec - p1Sec
}

export default function playerComparator(key) {
    return (p1,p2) => {
        if (key === 'NAME') {
            return nameComparator(p2, p1);
        } else if (key === '#') {
            return jerseyComparator(p1, p2);
        } else if (key === 'MIN') {
            return minComparator(p1, p2);
        } else if (['FG', '3PT', 'FT'].includes(key)) {
            return pctComparator(p1, p2, key);
        }
        return descComparator(p1, p2, key)
    }
}