# Ionic Native

Using Ionic Native tools create paytm native plugin for ionic 2

## Installation

Run following command to install Ionic Native in your project.
```bash
npm install @viraj77/paytm
```
For Yarn users
```bash
yarn add @viraj77/paytm
```
#After that In Your Project check node_module folder. you can see that @viraj77/paytm folder. copy paytm folder and paste in @ionic-native folder.

Using github 
```bash
downlaod the folder from given link - https://github.com/VIRAJ77DWIVEDI/ionic-native-paytm , and paste in @ionic-native

```

You also need to install the Ionic Native package for each plugin you want to add. Please see the link - https://github.com/isathyam/CordovaPayTM


### Basic Usage - Example for paytm plugin use.

To use a plugin, import and add the plugin provider to your `@NgModule`, and then inject it where you wish to use it.


```typescript
// app.module.ts
import { Paytm } from '@ionic-native/paytm';

...

@NgModule({
  ...

  providers: [
    ...
    Paytm
    ...
  ]
  ...
})
export class AppModule { }
```

```typescript

constructor(public navCtrl: NavController, private paytm: Paytm) {
    

  }

   this.paytm.startPayment(txn_id, customer_id, email, phone, amount, method)
   .then((res: any) => console.log(res))
   .catch((error: any) => console.error(error));


```


