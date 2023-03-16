import { ChangeDetectorRef, inject, ViewRef } from '@angular/core';

import { MonoTypeOperatorFunction, Subject, takeUntil } from 'rxjs';

export function untilDestroyed(): <T>() => MonoTypeOperatorFunction<T> {
  const subject = new Subject<void>();

  const viewRef = inject(ChangeDetectorRef) as ViewRef;

  Promise.resolve().then(() => {
    viewRef.onDestroy(() => {
      subject.next();
      subject.complete();
    });
  });

  return <T>() => takeUntil<T>(subject.asObservable());
}
