import { log } from "../common/log";
import app from "./";

app.listen(app.get("port"), () => {
    log.debug(`Server is listening on http://localhost:${app.get("port")}`);
});
