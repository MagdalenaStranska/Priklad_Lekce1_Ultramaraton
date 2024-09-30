// Představte si, že jste pořadatelé ultramaratonského závodu. Závod začíná ve tři hodiny odpoledne, což ve 24hodinovém formátu zapíšeme jako 15. Nejlepší běžec zvládne vaši brutální trasu za 10 hodin. Doběhne tedy v jednu hodinu ráno, v našem formátu zapsáno jako 1.

// Založte si JavaScriptový program a uložte čas startu závodu do proměnné start.
// Do proměnné delka uložte délku závodu pro nějakého běžce. Klidně může být pomalejší než náš šampion.
// Do proměnné konec spočítejte, v kolik hodin závod pro našeho běžce skončí a vypište její obsah do stránky.
// Vyzkoušejte různé délky a ověřte, že váš postup funguje.

let startZavodu = 15
let delka = 12
let konecZavodu = startZavodu + delka

if (konecZavodu > 24) {
    konecZavodu = konecZavodu - 24
}

document.body.innerHTML += konecZavodu