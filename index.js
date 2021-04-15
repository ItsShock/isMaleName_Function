function isMaleName(name) 
{
  if (name.substr(-1) == "a"  || name.substr(-1) == "A" & name != "Bonawentura" & name != "BONAWENTURA")
  {
    return false;
  }
  else if (name.substr(-1) != "a" || name == "Bonawentura" || name == "BONAWENTURA")
  {
    return true;
  }
};

module.exports = isMaleName;
