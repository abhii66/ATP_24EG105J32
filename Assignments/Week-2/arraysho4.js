// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
let filtered=movies.filter(gen => gen.genre==='Sci-Fi')
console.log(filtered)
//     2. map() to return:
//             "Inception (8.8)"
let mappp=movies.map(mov => //{mov.title,mov.rating}
    {
        if(mov.title==='Inception')
        return `${mov.title} (${mov.rating})`
    } )
console.log(mappp[0])
//     3. reduce() to find average movie rating
let reduced=movies.reduce((acc,rat)=> acc+rat.rating,0)
console.log(reduced/movies.length)
//     4. find() movie "Joker"
let findd=movies.find(mov=>mov.title==='Joker')
console.log(findd)
//     5. findIndex() of "Avengers"
let findI=movies.findIndex(mov=>mov.title==='Avengers')
console.log(findI)