"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = Object.is || (function (a, b) { return (a === b ? a !== 0 || 1 / a == 1 / b : a != a && b != b); });
