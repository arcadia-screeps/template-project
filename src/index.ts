import greet from "@/src/module/index.js" ;
import * as readline from "readline" ;

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }) ;

export default function program(): void {
    rl.question("What's your name", greet) ;
}


