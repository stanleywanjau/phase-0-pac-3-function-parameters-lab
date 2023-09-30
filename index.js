function introduction(name){
  return `Hi, my name is ${name}.`
 // console.log(`Hi, my name is ${name}.`)
}
console.log(introduction("Aki")),(introduction("Sampi"));
//introduction("Aki");

function introductionWithLanguage(name, language){
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguage("Aki", "Ember"))

function introductionWithLanguageOptional(name,language){
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional("Sofia","JavaScript"))

function introductionWithLanguageOptional(name,language="JavaScript"){
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
console.log(introductionWithLanguageOptional("Sofia","JavaScript"))