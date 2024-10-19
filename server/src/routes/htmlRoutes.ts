import { Router, Response } from 'express';

// DONE - import path from 'node:path';
import path from 'node:path';

// DONE - import { fileURLToPath } from 'node:url';
import { fileURLToPath } from 'node:url';

import { dirname } from 'path';

/*these 2 lines were in the starter code but commented out... 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
*/


const router = Router();


// DONE: Define route to serve index.html
router.get('*', (_, responseObj: Response) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    responseObj.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

export default router;
