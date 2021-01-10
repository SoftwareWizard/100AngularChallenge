import { style, transition, trigger, animate } from '@angular/animations';

export const slideRightAnimation = trigger('slideRightAnimation', [
  transition(':enter', [
    style({ display: 'block', transform: 'translateX(-100%)' }),
    animate('0.3s ease-out'),
  ]),
]);

export const slideLeftAnimation = trigger('slideLeftAnimation', [
  transition(':enter', [
    style({ display: 'block', transform: 'translateX(+100%)' }),
    animate('0.3s ease-out'),
  ]),
]);
