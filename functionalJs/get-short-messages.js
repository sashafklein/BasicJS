module.exports = function getShortMessages(messages) {
  var array = [];
  messages.forEach(function (object) {
    if (object.message.length < 50) {
      array.push(object.message);
    }
  });
  return array;
};