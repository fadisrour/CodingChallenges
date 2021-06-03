const path = (tickets) => {
    var paths = [];

    firstPoint(tickets, paths);

    for (let i = 0; i < tickets.length; i++) {
        nextPath(paths,tickets);
    }
    return paths;
}

const firstPoint = (tickets, paths) => {
    for (let i = 0; i < tickets.length; i++) {
        if (check(i, tickets)) {
            paths.push(tickets[i].from);
            paths.push(tickets[i].to);
            return
        }
    }
}

const check = (i, tickets) => {
    for (let j = 0; j < tickets.length; j++) {
        if (tickets[i].from == tickets[j].to) {
            return false;
        }
    }
    return true;
}

const nextPath = (paths, tickets) => {
    for (let j = 0; j < tickets.length; j++) {
        if (paths[paths.length-1] == tickets[j].from) {
            paths.push(tickets[j].to);
            return;
        }
    }
}

console.log(path([{ from: 'Aleppo', to: 'Montreal YUL' },
{ from: 'Turkey', to: 'Ibiza Airport' },
{ from: 'Ibiza Airport', to: 'Aleppo' },
{ from: 'Beirut', to: 'Turkey' }]));