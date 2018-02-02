"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasPrefix(phone) {
    var firstChar = phone[0];
    var first2Chars = phone.slice(0, 2);
    if (firstChar === '+' || first2Chars === '00') {
        return true;
    }
    else {
        return false;
    }
}
var Format = /** @class */ (function () {
    function Format() {
    }
    Format.removeSpaces = function (phone) {
        return phone.replace(/\s/g, '');
    };
    Format.isSpanish = function (phone) {
        var phoneNoSpaces = Format.removeSpaces(phone);
        if (phoneNoSpaces.slice(0, 3) === '+34' ||
            phoneNoSpaces.slice(0, 4) === '0034') {
            return true;
        }
        else {
            switch (phoneNoSpaces[0]) {
                case '6': {
                    return true;
                }
                case '9': {
                    return true;
                }
                default: {
                    return false;
                }
            }
        }
    };
    Format.isUnitedKingdom = function (phone) {
        var phoneNoSpaces = Format.removeSpaces(phone);
        if (phoneNoSpaces.slice(0, 3) === '+44' ||
            phoneNoSpaces.slice(0, 4) === '0044') {
            return true;
        }
        else {
            switch (phoneNoSpaces.slice(0, 2)) {
                case '01': {
                    return true;
                }
                case '02': {
                    return true;
                }
                case '03': {
                    return true;
                }
                case '07': {
                    return true;
                }
                default: {
                    return false;
                }
            }
        }
    };
    Format.Spanish = function (phone) {
        var phoneNoSpaces = Format.removeSpaces(phone);
        return '+34 '
            + phoneNoSpaces.slice(0, 3) + ' '
            + phoneNoSpaces.slice(3, 6) + ' '
            + phoneNoSpaces.slice(6, 9);
    };
    Format.UnitedKingdom = function (phone) {
        var phoneNoSpaces = Format.removeSpaces(phone);
        return '+44 '
            + phoneNoSpaces.slice(1, 5) + ' '
            + phoneNoSpaces.slice(5, 8) + ' '
            + phoneNoSpaces.slice(8, 11);
    };
    return Format;
}());
function formatPhone(phone) {
    if (hasPrefix(phone)) {
        // console.log(`The phone number '${phone}' has already a prefix.`);
        return phone;
    }
    else {
        // console.log(`The phone number '${phone}' doesn't have a prefix.`);
        switch (true) {
            case Format.isSpanish(phone): {
                // console.log('is spanish')
                return Format.Spanish(phone);
            }
            case Format.isUnitedKingdom(phone): {
                // console.log('is UK')
                return Format.UnitedKingdom(phone);
            }
            default: {
                // console.log('is default')
                return phone;
            }
        }
    }
}
exports.default = formatPhone;
//# sourceMappingURL=phone-formatter.js.map