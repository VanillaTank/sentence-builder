import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    save(key: string, value: any):void {
        if(typeof value === 'object' ) {
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(key,value);
    }

    get(key: string) {
        const value = sessionStorage.getItem(key);
        return value;
    }

    // delete(key: string):void {

    // }

    isContain(key: string): boolean {
        if(this.get(key)) {
            return true;
        }
        return false;
    }
}
