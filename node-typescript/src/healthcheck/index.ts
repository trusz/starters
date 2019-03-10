import {
    NextFunction,
    Request,
    Response,
} from "express";
import * as fs from "fs";

import { log } from "src/common/log";

export const healthCheck = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const version = await readVersion();
    res.json({
        version,
    });
    return next();
};

const readVersion = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("version", "utf8", (err, content) => {
            if (err) {
                log.error(err);
                reject(err);
            }
            resolve(content);
        });
    });
};
