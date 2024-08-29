function greet(language) {
	const translations = [
  ["english", "Welcome"],
  ["czech", "Vitejte"],
  ["danish", "Velkomst"],
  ["dutch", "Welkom"],
  ["estonian", "Tere tulemast"],
  ["finnish", "Tervetuloa"],
  ["flemish", "Welgekomen"],
  ["french", "Bienvenue"],
  ["german", "Willkommen"],
  ["irish", "Failte"],
  ["italian", "Benvenuto"],
  ["latvian", "Gaidits"],
  ["lithuanian", "Laukiamas"],
  ["polish", "Witamy"],
  ["spanish", "Bienvenido"],
  ["swedish", "Valkommen"],
  ["welsh", "Croeso"]
];

for (let i=0; i < translations.length;i++) {
    if (language === translations[i][0]){
        console.log(translations[i][1])
        return translations[i][1]
    }
    else if (i === translations.length - 1){
        console.log("Welcome")
        return "Welcome"
    }
  }

};

greet("spanish")