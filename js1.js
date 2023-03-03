 let names = ["Lars", "Jan", "Peter", "Ian"]
 let shortNames = names.filter(n => n.length <= 3)
 let upperCaseNames = names.map(n => n.toUpperCase())
 console.log(upperCaseNames)
 const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
 };
 console.log(cb(1, 2, (n1, n2) => n1*n2+n1+n2))
 const lis = names.map(n => `<li>${n}</li>`).join("")
 console.log("<ul>" +lis+ "</ul>")