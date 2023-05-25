import type {Configuration,} from "log4js" ;
import log4js from "log4js" ;

export default function initLogger():void {
    const logConfig: Configuration = {
        appenders: {
            console: {
                type: "console",
            },
        },
        categories: {
            default: {
                appenders: ["console",],
                level: "DEBUG",
                enableCallStack: true,
            },
        },
    } ;
    log4js.configure(logConfig) ;
}

