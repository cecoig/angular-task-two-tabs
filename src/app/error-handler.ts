import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    errorHandlerCallback!: (error: any) => void;

    handleError(error: any) {
        if (this.errorHandlerCallback) {
            this.errorHandlerCallback(error);
        } else {
            console.error(error);
            throw new  Error('The error above is not caught.');
        }
    }

    onError(callback: (error: any) => void) {
        this.errorHandlerCallback = callback;     
    }
  }