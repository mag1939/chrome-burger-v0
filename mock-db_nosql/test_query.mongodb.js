use('sample_mflix');

// db.movies.find();

// Example - Quick filter + sort + limit
// db.movies.aggregate([
// 	{$match: {directors: "Christopher Nolan"}},
// 	{$sort: {year: -1}},
// 	{$limit: 5},
// 	{$project: {_id: 0, title: 1, year: 1}}
// ])

// Example - Grouping & counting
// db.movies.aggregate([
//   { $match: { year: { $gte: 2000, $lte: 2010 } } },
//   { $group: { _id: "$year", totalMovies: { $sum: 1 } } },
//   { $sort: { _id: 1 } },
//   { $project: { _id: 0, year: "$_id", totalMoives: "$totalMovies"}}
// ])


// example - Exploding arrays + frequency ranking
// db.movies.aggregate([
//   { $unwind: "$genres" },
// //   { $group: {
// //     _id: "$genres",
// //     totalMovies: { $sum: 1 }
// //   }},
// //   { $sort: { totalMovies: -1 } },
//   { $sortByCount: "$genres" },   // groups + counts + sorts, all in one
//   { $limit: 10 }
// ])

// Example - $lookup
db.comments.aggregate([
  {
    $lookup: {
      from: "movies",          // right-hand collection
      localField: "movie_id",  // value present in comments
      foreignField: "_id",     // matching field in movies
      as: "movie"              // new array field to hold matches
    }
  },
  { $unwind: "$movie" },       // flatten the single match
  {
    $project: {                // keep it tidy
      _id: 0,
      text: 1,
      movieTitle: "$movie.title"
    }
  },
  { $limit: 3 }
])
