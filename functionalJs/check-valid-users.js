module.exports = function checkUsersValid(goodUsers) {
  return function (submittedUsers) {
    function oneInList(users, compUser) {
      var anyIn = users.some(function (user) {
        return user.id === compUser.id;
      });
      if (anyIn) {
        return true;
      }
      return false;
    }

    var allIn = submittedUsers.every(function (submittedUser) {

      if (oneInList(goodUsers, submittedUser)) {
        return true;
      }
      return false;
    });
    return allIn;
  };
};