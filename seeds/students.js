
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { Name: 'Thierno', Major: 'Computer Sciences' },
        { Name: 'Amadou', Major: 'Chemical Engineering' },
        { Name: 'Ibrahima', Major: 'Criminal Justice'},
        
      ]);
    });
};
