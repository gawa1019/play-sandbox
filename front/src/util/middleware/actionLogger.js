import * as debug from "../debug";

const logger = store => next => action => {
    if(action.errorData) {
        debug.groupCollapsed(`%c${action.type}`, "color:red");
        debug.error(action.errorData);
        debug.trace();
        debug.groupEnd();
    }
    next(action);

    debug.groupCollapsed(action.type);
    debug.dir(action);
    debug.groupCollapsed("State Object");
    debug.dir(store.getState());
    debug.groupEnd();
    debug.groupCollapsed("State TEXT",);
    debug.log(JSON.stringify(store.getState(), null, "  "));
    debug.groupEnd();
    debug.groupEnd();
};

export default logger;