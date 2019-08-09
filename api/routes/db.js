const CONFIG = require('config');
const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entry.controller');
const lookupController = require('../controllers/lookup.controller');
const userController = require('../controllers/user.controller');
const sharedSubController = require('../controllers/sharedSub.controller');

//File upload
const multer = require('multer');
const storage = require('multer-gridfs-storage')({
  url: CONFIG.get('mongodb.uri'),
});
const upload = multer({ storage: storage });

//Entries
router.get('/entry', entryController.getAll);
router.get('/entry/:id', entryController.getOne);
router.post('/entry', entryController.create);
router.post('/entry/addMany', entryController.createMany);
router.put('/entry/:id', entryController.update);
router.delete('/entry/:id', entryController.delete);
router.put('/entry/:id/flag', entryController.flagAsDeleted);
router.put('/entry/:id/note', entryController.addNote);
router.get('/unique-submitters', entryController.getUniqueSubmitters);
router.delete('/entry/:entryId/note/:noteId', entryController.deleteNote);

router.post(
  '/entry/:id/attachment',
  upload.single('attachment'),
  entryController.writeAttachment,
);

router.get('/entry/:id/attachment', entryController.getAttachment);

//LookupValues
router.get('/lookup-value', lookupController.getValues);
router.post('/lookup-value', lookupController.addValue);
router.put('/lookup-value/:id', lookupController.updateValue);
router.delete('/lookup-value/:id', lookupController.deleteValue);

//User
router.get('/user', userController.getAll);
router.get('/user/:personId', userController.getOne);
router.get('/user/:personId/no-populate', userController.getOneNoPopulate);
router.post('/user', userController.add);
router.put('/user/:personId', userController.update);
router.delete('/user/:personId', userController.delete);
//User subscriptions
router.post('/user/:personId/sub', userController.addSub);
router.delete('/user/:personId/sub/:subId', userController.removeSub);

router.post('/user/:personId/shared-sub', userController.addSharedSub);
router.delete(
  '/user/:personId/shared-sub/:sharedSubId',
  userController.removeSharedSub,
);

//Shared subscriptions
router.get('/shared-sub/', sharedSubController.getAll);
router.get('/shared-sub/:author', sharedSubController.getAll);
router.post('/shared-sub', sharedSubController.create);
router.delete('/shared-sub/:id', sharedSubController.delete);

module.exports = router;
