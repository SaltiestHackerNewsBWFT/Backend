module.exports = {
    isValid,
  };
  
  function isValid(profile) {
    return Boolean(profile.username && profile.email && profile.password && typeof profile.password === "string");
  }