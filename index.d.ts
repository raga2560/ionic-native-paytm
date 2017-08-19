import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class Paytm extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    startPayment(txn_id: string, customer_id: string, email: string, phone: string, amount: string, method: string): Promise<any>;
}
