const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];

console.log(movies.sort(byProperty('releaseYear', '>')));
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '<')));
// виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
    return function (a, b) {
        if (direction === ">") {
            if(typeof(a[property]) === "string") {
                if (a[property] < b[property]) {
                    return -1
                } else {
                    return 1;
                }
            } else {
                return a[property] - b[property];
            }
        } else {
            if(typeof(a[property]) === "string") {
                if (a[property] > b[property]) {
                    return -1
                } else {
                    return 1;
                }
            } else {
                return b[property] - a[property];
            }
        }
    }
}
