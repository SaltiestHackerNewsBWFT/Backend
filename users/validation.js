module.exports = {
    isValid,
  };
  
  function isValid(profile) {
    return Boolean( profile.email && profile.password && typeof profile.password === "string" || profile.provider === input.provider);
  }