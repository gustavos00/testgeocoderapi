import { Router } from 'express';
import pingEndpoint from '../controllers/GeneralController';
import * as AC from '../controllers/AddressController';

const router = Router();
router.get('/ping', pingEndpoint)

router.post('/getAddress', AC.getAddress)
router.get('/valitadeAddress', AC.validateAddressEndpoint)

export default router;
