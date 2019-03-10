import {
    createLogger,
    format,
    Logger,
    LoggerOptions,
    transports,
} from "winston";

const loggerOptions: LoggerOptions = {
    format: format.json(),
    level: "info",
    transports: [
        new transports.File({ filename: "error.log", level: "error" }),
        new transports.File({ filename: "combined.log" }),
    ],
};

if (!isInProductionOrCI()) {
    loggerOptions.exceptionHandlers = [
        new transports.File({ filename: "exceptions.log" }),
    ];
}
export const log: Logger = createLogger(loggerOptions);

if (!isInProductionOrCI()) {

    log.add(
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.align(),
                format.simple(),
            ),
            level: "debug",
        }),
    );

}

function isInProductionOrCI() {
    return (
        process.env.NODE_ENV === "production" ||
        process.env.NODE_ENV === "ci"
    );
}
