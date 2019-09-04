const events: any = {};

export default {
    pub: pub,
    sub: sub
};


function pub(eventName: string, value: any) {
    let event = events[eventName];
    if (!event) return;

    event.callbacks.forEach(function (c: any) {
        c(value);
    });
}

function sub(eventName: string, fn: Function) {
    let event = events[eventName];
    if (!event) {
        event = events[eventName] = {};
    }

    event.callbacks = event.callbacks || [];
    event.callbacks.push(fn);
}