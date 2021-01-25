import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(private zone: NgZone, private router: Router) {}

  handleError(e: object): void {
    console.error('error: ', e);

    this.zone.run(() => {
      // URLに "/500" を表示せず画面遷移する
      this.router.navigate(['/500'], { skipLocationChange: true });
    });
  }
}
