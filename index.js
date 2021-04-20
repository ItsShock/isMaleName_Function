function isMaleName(name) 
{
  name.toLowerCase();

  if(name === "bonawentura")
  {
    return true;
  }
  else if(name.endsWith("a"))
  {
    return false;
  }
};

module.exports = isMaleName;
