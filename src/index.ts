import greet from "@/src/module/index.js" ;
import * as readline from "readline" ;

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }) ;

async function askName():Promise<string>{
    const ac = new AbortController() ;
    const signal = ac.signal ;
    return new Promise<string>((resolve, reject) =>{
        // prompt to standard input and read answer from standard output
        rl.question("What's your name? ",  {signal,},(name)=>{
            resolve(name) ;
        }) ;
    }) ;
}

export default async function program(): Promise<void> {
    const name = await askName() ;
    greet(name) ;
    rl.close() ;
}


