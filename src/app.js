let article = ["The", "A", "My"];
let adjective = ["Quiet", "Happy", "Crappy"];
let name = ["Man", "Cat", "Town", "Dude"];
let extension = [".com", ".net", ".cat"];
let domains = [];

for (let i = 0; i < article.length; i++) {
  for (let j = 0; j < adjective.length; j++) {
    for (let k = 0; k < name.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        let domainNameGenerator =
          article[i] + adjective[j] + name[k] + extension[l];
        console.log(domainNameGenerator);
        domains.push(domainNameGenerator);
      }
    }
  }
}

window.onload = function() {
  document.getElementById("domainNameGenerator").innerHTML = domains;
  console.log(domains);
};
