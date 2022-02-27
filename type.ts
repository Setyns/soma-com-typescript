//boolean true/false
let isOpen: boolean
isOpen = true

//string 'foo', "foo", `foo`
let message: string
message = `foo ${isOpen}`


//number int,float,hex,binary
let total: number
total = 0xff0
//array (tipo [])
let items: string []
items = ["foo", "bau"]

let value: Array<number>
value = [1,2,3]

//tuple
let title: [number, string]
title = [1, "foo"]

//enum
enum colors{
    white = '#fff',
    black = '#000'
}

//any qualquer porra RESUMINDO NAO PRESTA!!!! 
let coisa: any
coisa = [1]
coisa = "foo"


//void vazio nao retorna nada!
function logger() {
    console.log('foo')
}

//null / undefined
type bla = string | undefined

//never
function error() {
throw new Error("error");
}

//objeto
let cart: object
cart = {
    key: "f1"
}
