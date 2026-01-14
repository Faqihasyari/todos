import { Router } from "express"
import * as controller from "../controllers/todo.controller.js"

const router = Router()

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: List of todos
 */
router.get("/", controller.list)

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Belajar Swagger
 *     responses:
 *       201:
 *         description: Todo created
 */
router.post("/", controller.create)

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Todo updated
 */
router.put("/:id", controller.update)

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Delete todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Todo deleted
 */
router.delete("/:id", controller.remove)

export default router
