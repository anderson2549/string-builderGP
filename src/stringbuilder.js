"use strict";

const Stream = require('stream').Stream;

const StringBuilder = function StringBuilder(v) {
    this.s = [];
    this.append(v);
    Stream.call(this);

};

StringBuilder.prototype.append = function (v) {
    if (v != null) {
        this.s.push(v);
    }

    return this;
};

StringBuilder.prototype.appendLine = function (v) {
    this.s.push(this.newline);

    if (v != null) {
        this.s.push(v);
    }

    return this;
};

StringBuilder.prototype.appendFormat = function () {
    const p = /({?){([^}]+)}(}?)/g;
    let a = arguments, v = a[0], o = false;

    if (a.length === 2) {
        if (typeof a[1] == 'object' && a[1].constructor !== String) {
            a = a[1];
            o = true;
        }
    }

    const s = v.split(p);
    const r = [];

    for (let i = 0; i < s.length; i += 4) {
        r.push(s[i]);

        if (s.length > i + 3) {
            if (s[i + 1] === '{' && s[i + 3] === '}') {
                r.push(s[i + 1], s[i + 2], s[i + 3]);
            } else {
                r.push(s[i + 1], a[o ? s[i + 2] : parseInt(s[i + 2], 10) + 1], s[i + 3]);
            }
        }
    }

    this.s.push(r.join(''));
};

StringBuilder.prototype.clear = function () {
    this.s.length = 0;
};

StringBuilder.prototype.toString = function () {
    return this.s.length === 0 ? '' : this.s.join('');
};

module.exports = StringBuilder;
