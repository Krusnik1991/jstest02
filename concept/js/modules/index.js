/* import MyLog, {COLOR, compute} from './module';

compute(1, 2);
console.log(COLOR);

MyLog.log(); */

import * as Module from './module';

Module.default.log();
Module.COLOR;
Module.compute(1, 2);