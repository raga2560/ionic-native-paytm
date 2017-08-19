var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Paytm
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Paytm } from '@ionic-native/paytm';
 *
 *
 * constructor(private paytm: Paytm) { }
 *
 * ...
 *
 *
 * this.paytm.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var Paytm = (function (_super) {
    __extends(Paytm, _super);
    function Paytm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Paytm.prototype.startPayment = function (txn_id, customer_id, email, phone, amount, method) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    return Paytm;
}(IonicNativePlugin));
Paytm.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Paytm.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], Paytm.prototype, "startPayment", null);
Paytm = __decorate([
    Plugin({
        pluginName: 'Paytm',
        plugin: 'com.paytm.cordova',
        pluginRef: 'plugins.paytm',
        repo: 'https://github.com/isathyam/CordovaPayTM',
        platforms: ['Android', 'iOS'],
    })
], Paytm);
export { Paytm };
//# sourceMappingURL=index.js.map