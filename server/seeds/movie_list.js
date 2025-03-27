/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movies").del();
  await knex("movies").insert([
    { movie_title: "Mean Girls" },
    { movie_title: "Hackers" },
    { movie_title: "The Grey" },
    { movie_title: "Sunshine" },
    { movie_title: "Ex Machina" },
  ]);
};
