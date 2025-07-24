import '../../css/style.css'

import { createLogger } from '../utils/logger'; // Test if Webpack is updating all src files
import { CONFIG } from '../global/config'; // Test Enviorment variables configuration is working


const log = createLogger(); 
console.log(CONFIG);



