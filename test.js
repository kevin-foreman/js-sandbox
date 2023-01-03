var places = [['First', 'Second', 'Third'], [/*we want 'Fourth' here*/'Fifth', 'Sixth']];
console.log('inner places array accessed:', places[1]);

var fourthPlace = 'Fourth';
var indexOfNestedArray = 1;
places[indexOfNestedArray].unshift(fourthPlace);
console.log('nested list of places with new place added:', places);