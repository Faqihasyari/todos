import * as todoService from "../services/todo.service.js"

export const create = async (req, res) => {
  try {
    const { title } = req.body
    const todo = await todoService.createTodo(title)
    res.status(201).json(todo)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const list = async (req, res) => {
  try {
    const todos = await todoService.getTodos()
    res.json(todos)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const update = async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todo = await todoService.updateTodo(id, req.body)
    res.json(todo)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const remove = async (req, res) => {
  try {
    const id = Number(req.params.id)
    await todoService.deleteTodo(id)
    res.json({ message: "Todo deleted" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
