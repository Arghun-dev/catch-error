"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchErrorTyped = catchErrorTyped;
function catchErrorTyped(promise, errorsToCatch) {
    return promise
        .then(function (data) {
        return [undefined, data];
    })
        .catch(function (error) {
        if (errorsToCatch == undefined) {
            return [error];
        }
        if (errorsToCatch.some(function (errorType) { return error instanceof errorType; })) {
            return [error];
        }
        throw error;
    });
}
