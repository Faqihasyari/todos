import prisma from "../lib/prisma.js"

export const createTodo = (title) => {
  return prisma.todo.create({
    data: { title }
  })
}

export const getTodos = () => {
  return prisma.todo.findMany({
    orderBy: { createdAt: "desc" }
  })
}

export const updateTodo = (id, data) => {
  return prisma.todo.update({
    where: { id },
    data
  })
}

export const deleteTodo = (id) => {
  return prisma.todo.delete({
    where: { id }
  })
}
