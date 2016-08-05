export const log = (...arg) => {
    if(__DEBUG__) {
        console.log(...arg);
    }
};

export const dir = (...arg) => {
    if(__DEBUG__) {
        console.dir(...arg);
    }
};

export const error = (...arg) => {
    if(__DEBUG__) {
        console.error(...arg);
    }
};

export const group = (...arg) => {
    if(__DEBUG__) {
        console.group(...arg);
    }
};

export const groupEnd = (...arg) => {
    if(__DEBUG__) {
        console.groupEnd(...arg);
    }
};

export const groupCollapsed = (...arg) => {
    if(__DEBUG__) {
        console.groupCollapsed(...arg);
    }
};

export const trace = (...arg) => {
    if(__DEBUG__) {
        console.trace(...arg);
    }
};
