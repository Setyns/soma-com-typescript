//account info
//char info
//player info

type accountinfo = {
    id:number
    name:string
    //usar a '?' pode colocar o objeto como undefined sem precisar escrever EX: email: string | undefined
    email?:string
}

const account: accountinfo = {
    id:1234,
    name:"cleiton",
    email:"cleiton123@email.com",

}

type charinfo = {
    nickname:string
    level:number

}
const char: charinfo = {
    nickname:"brago",
    level: 99,

}
//intersection
type playerinfo = accountinfo & charinfo;

const player: playerinfo = {
    id:123,
    name:"cleiton",
    nickname:"brago",
    level:99,

}