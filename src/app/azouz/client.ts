export class Client {
    name : string;
    age : number;
    isActive : boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
