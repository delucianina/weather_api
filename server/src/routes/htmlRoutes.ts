import { Router, Response } from 'express';

// DONE - import path from 'node:path';
import path from 'path';

// DONE - import { fileURLToPath } from 'node:url';
import { fileURLToPath } from 'url';

import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


const router = Router();


// TODO: Define route to serve index.html
router.get('*', (_, responseObj: Response) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    responseObj.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

export default router;
