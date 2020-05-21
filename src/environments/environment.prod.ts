export const environment = Object.seal({
  production: true,
  items: Object.seal({
    host: 'http://localhost:3000',
    path: Object.seal({
      all: '/items',
      byId: '/items/:id'
    })
  })
});
