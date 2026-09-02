const ime = 'Pero' //prompt ('Unesi ime')

console.log(ime)

console.log('ime', typeof ime, ime)

console.log(`
    Dobar dan imate li kišobran? ${ime} !!!!!!!!
    `)


     const unosBroj = '2026' // string

     const broj = Number(unosBroj)

     console.log('unosBroj', typeof unosBroj, unosBroj)
     console.log('broj', typeof broj, broj) 

     const pi = parseFloat('3.14') // float znači decimalni broj


     console.log('pi', typeof pi, pi)

     const lv = true // logička vrijednost = lv


    console.log('lv', typeof lv, lv)

    // pi = 3.126

    let x = 7

    console.log('x', typeof x, x)
    x=8
    console.log('x', typeof x, x)
    x = 'Osijek'
    console.log('x', typeof x, x)

    const vb = 325235236234623623623n // bigint

    console.log('vb', typeof vb, vb)

    // const se ne može deklarirati bez vrijednosti
    //const i; Uncaught SyntaxError: Missing initializer in const declaration

    let varijabla;

    console.log('varijabla', typeof varijabla, varijabla) // i tip i vrijednost su undefined

    varijabla = 7

    console.log('varijabla', typeof varijabla, varijabla)

    // 3. STARI način deklariranja varijable - nećemo koristiti

    var t = 5
    t = 'Osijek' //dozvoljava promjenu tipa
    var t = true // dozvoljava redeklaraciju varijable

    // tip podatka object
    // JSON -> Javascript Object Notation
    const osoba ={
        id: 1,
        ime: 'Pero',
        visina: 182.5,
        znaProgramirati: true
    }

    console.log('osoba', typeof osoba)
    console.table(osoba)


    // tip podatka Array
    // niz, polje, a JS to zove object

    const niz = [2, 3, 4, 5, 6] // alt gr + f

    console.log('niz', typeof niz)
    console.table(niz)

    const json = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

    console.table(json)

    // tip podatka function

    // Stari način definiranje funkcije
    function pozdrav (){
        console.log('Pozdrav iz stare funkcije')
    }

     console.log('pozdrav', typeof pozdrav)

     // novi način
     const pozdravi = () => console.log ('Pozdrav iz nove funkcije')

     console.log('pozdravi', typeof pozdravi)

     // izvođenje funkcija
     pozdrav()
     pozdravi()

     // tip podatka Symbol

     const id1 = Symbol('edunova')
     const id2 = Symbol('edunova')

     // = je operator dodjelivanja

     // operator uspoređivanja vrijednosti

    //  == provjerava po vrijednosti
    // === provjerava po tipu i vrijednosti

    console.log ('7' ==7) // true
    console.log ('7' ===7) //false
    console.log( 7 === 7) //true

    console.log (id1 == id2) // false
    console.log (id1 === id2) // false
    