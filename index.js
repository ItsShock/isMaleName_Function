function isMaleName(name) 
{
  var _name = name.toLowerCase();

  if(_name === "bonawentura")
  {
    return true;
  }
  else if(_name.endsWith("a"))
  {
    return false;
  }
  return true
  
};

module.exports = isMaleName;
