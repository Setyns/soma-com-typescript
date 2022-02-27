//usando o | para dizer que o uid e um numero e uma string//


//type alias//
type  Uid = number | string

function logDetails(uid:Uid, item: string){
    console.log(`o produto ${uid} com o titulo ${item}`);
}

function loginfo(uid:Uid | string, user: string){
    console.log(`o usuario ${uid} tem o ${user}.`);
}

type platform = "Windows" | "Linux" | "IOS" | "MAC OS";

function renderplatform(platform:platform){
    return platform;
}

renderplatform("Windows")


logDetails(123, "tenis")
logDetails("123","sapato")

loginfo(123,"cleiton")
loginfo("123","cleiton")
