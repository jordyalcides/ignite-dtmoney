import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          value: 14000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date ("2021-06-5 16:00:00")
        },
        {
          id: 2,
          title: 'Internet',
          value: 300,
          type: 'withdraw',
          category: 'Moradia',
          createdAt: new Date ("2021-06-15 08:00:00")
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', {
        ...data,
        createdAt: new Date()
      })
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
