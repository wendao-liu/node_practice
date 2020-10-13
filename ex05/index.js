const { EventEmitter } = require('events')
module.exports = function Connection() {
    let callList = [];
    function onConn(call) {
        callList.push(call);
    }

    function connection(str) {
        callList.forEach((cal) => {
            cal(str);
        })
    }

    return ({
        onConn,
        connection,
    })
}
