import './css/style.css'

import { createLogger } from './js/utils/logger'; // Test if Webpack is updating all src files
import { CONFIG } from './js/global/config'; // Test Enviorment variables configuration is working


const log = createLogger(); 
console.log(CONFIG);



