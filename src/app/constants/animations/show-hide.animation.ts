import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const showHideAnimation = (duration = 300) =>
  trigger('showHide', [
    state('true', style({ transform: 'none', opacity: 1 })),
    state('false', style({ transform: 'translateY(-150%)', opacity: 0 })),
    transition('false <=> true', [animate(duration)])
  ]);
