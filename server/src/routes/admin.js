import express from 'express'
import { updateSchool, updateTeacher, updateStudent, updateClass, updatePeriod, updateSession, deleteSchool, deleteTeacher, deleteStudent, deleteClass, deletePeriod, deleteSession, getSchool, getTeacher, getStudent, getClass, getPeriod, getSession, getSchools, getTeachers, getStudents, getClasses, getPeriods, getSessions } from '../controllers/adminController.js'
import auth from '../middleware/auth.js'
import multerMiddleware from '../config/multer-cloudinary.js'
const router = express.Router()
import { check } from 'express-validator'


router.put('/school', auth, multerMiddleware.single('image'), updateSchool)
router.put('/teacher', auth, multerMiddleware.single('image'), updateTeacher)
router.put('/student', auth, multerMiddleware.single('image'), updateStudent)
router.put('/class', auth, multerMiddleware.single('image'), updateClass)
router.put('/period', auth, multerMiddleware.single('image'), updatePeriod)
router.put('/session', auth, multerMiddleware.single('image'), updateSession)

router.delete('/school', auth, deleteSchool)
router.delete('/teacher', auth, deleteTeacher)
router.delete('/student', auth, deleteStudent)
router.delete('/class', auth, deleteClass)
router.delete('/period', auth, deletePeriod)
router.delete('/session', auth, deleteSession)

router.get('/school/:id', auth, getSchool)
router.get('/teacher/:id', auth, getTeacher)
router.get('/student/:id', auth, getStudent)
router.get('/class/:id', auth, getClass)
router.get('/period/:id', auth, getPeriod)
router.get('/session/:id', auth, getSession)

router.get('/schools', auth, getSchools)
router.get('/teachers', auth, getTeachers)
router.get('/students', auth, getStudents)
router.get('/classes', auth, getClasses)
router.get('/periods', auth, getPeriods)
router.get('/sessions', auth, getSessions)

export default router