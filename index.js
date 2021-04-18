function isMaleName(name) 
{
  if ((name.substr(-1) == "a"  || name.substr(-1) == "A") & name != "Bonawentura" & name != "BONAWENTURA" & name != "bonawentura")
  {
    return false;
  }
  else 
  {
    return true;
  }
};

module.exports = isMaleName;
