class Formatter {
  //add static methods here
  static capitalize(word){
    let cap = word.charAt(0).toUpperCase()
    let end = word.slice(1)
    return cap+end 
  }

  static sanitize(string){
    return string.replace(/(\W*)[^.'\-\w\s]/g, "")
  }

  static titleize(string){
    let split = string.split(" ")
    let acceptable = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleized = ""
    for(let i = 0; i < split.length; i++) {
      if( !acceptable.includes(split[i]) || split.indexOf(split[i]) === 0)
        titleized += `${this.capitalize(split[i])} `
      else 
      titleized += `${split[i]} `
    }
    return titleized.slice(0, -1)
  }
}