// server/api/users/[id].ts
export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  return {
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`
  }
})
