'use strict';
import hello from './modules/hello.js';

console.log(hello);

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#date');