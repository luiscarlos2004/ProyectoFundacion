const {Router} = require('express');
const router = Router();
const { check } = require('express-validator');
const {postUsers,consultarEstado,resgistrarUsuarios,cargarUsuarios,cargarUsuariosdos,ingresarAnimal,mostrarAnimales,eliminaranimal,editaranimal,sacaranimalfront,solicitudes,consultarsolicitudes,solicitudaceptada,buscaranimall} = require('../controllers/users');
const {validarCampos} = require('../middlewares/validar-campos');
const {correoExiste,passwordExiste} = require('../helpers/db-validatots');

router.post('/',[
    check('correo').not().isEmpty(),
    check('password').custom(passwordExiste),
    validarCampos
],postUsers);
router.get('/:id',consultarEstado);
router.post('/register', [
    check('correo','El correo esta vacio').custom(correoExiste).not().isEmpty(),
    check('password','La contrasena no existe').not().isEmpty(),
    validarCampos
],resgistrarUsuarios);
router.get('/',cargarUsuarios);
router.get('/paginador/:numero',cargarUsuariosdos);
router.post('/registraranimal',ingresarAnimal);
// router.get('/animalesmos',sacarAnimales);
// router.get('/mostrarani', mostrarani);
router.get('/consultar/animales/:numero',mostrarAnimales);
router.delete('/eliminaranimal/:id',eliminaranimal);
router.put('/editar/editaranimal/:id',editaranimal);
router.get('/sacaranimal/animales', sacaranimalfront);
router.post('/colocando/solicitudes',solicitudes);
router.get('/solicitud/solicitudesanimales',consultarsolicitudes);
router.get('/solicituda/solicitudanimal/:id',solicitudaceptada);
router.post('/buscan/buscaranimal',buscaranimall);
module.exports = router;