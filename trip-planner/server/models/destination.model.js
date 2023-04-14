const mongoose = require('mongoose');

/* 
{PATH} will be replaced with the field name, such as "location".
*/
const DestinationSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: [true, 'Required field.'],
      minlength: [2, 'Minimum length is {MINLENGTH}.'],
    },
    description: {
      type: String,
      required: [true, 'Required field.'],
      minlength: [5, 'Minimum length is {MINLENGTH}.'],
    },
    src: {
      type: String,
      required: [true, 'Required field.'],
    },
    srcType: {
      type: String,
      required: [true, 'Required field.'],
    },
    // Checkboxes for the season's you'd like to travel to this destination.
    summer: {
      type: Boolean,
      default: false,
    },
    winter: {
      type: Boolean,
      default: false,
    },
    spring: {
      type: Boolean,
      default: false,
    },
    fall: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // adds createdAt and updatedAt.
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Destination = mongoose.model('Destination', DestinationSchema);

// You can export this in an object like so or directly since it's we only have one thing to export.
// However, always exporting an object makes it easier to add more exports later (just add another key) and code that
// imports won't be broken by that change.
module.exports = { Destination: Destination };
