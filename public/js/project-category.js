// Get the category collection
var collection = db.collection('PROJECT_CATEGORIES_COLLECTION');

collection.insert(
  [
    {
      name: 'environment',
      icon_class: 'fa-envira'
    },

    {
      name: 'education',
      icon_class: 'fa-graduation-cap'
    },

    {
      name: 'community',
      icon_class: 'fa-users'
    },

    {
      name: 'facilities & infrastructures',
      icon_class: 'fa-building'
    },

    {
      name: 'fitness & health',
      icon_class: 'fa-heart'
    },

    {
      name: 'safety',
      icon_class: 'fa-life-ring'
    }
    {
      name: 'technology'
      icon_class: 'fa-science'
    }

  ], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
    }
    //Close connection
    db.close();
  });