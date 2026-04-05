'use strict ';

const ENTERED_NUM = String(prompt('Введіть цифру від 0 до 7')).trim();
switch (ENTERED_NUM) {
  case '0':
    console.log('Рівень прав: ---');
    break;
  case '1':
    console.log('Рівень прав: --x');
    break;
  case '2':
    console.log('Рівень прав: -w-');
    break;
  case '3':
    console.log('Рівень прав: -wx');
    break;
  case '4':
    console.log('Рівень прав: r--');
    break;
  case '5':
    console.log('Рівень прав: r-x');
    break;
  case '6':
    console.log('Рівень прав: rw-');
    break;
  case '7':
    console.log('Рівень прав: rwx');
    break;
  default:
    console.log(`${ENTERED_NUM} це некоретне значення`);
}
