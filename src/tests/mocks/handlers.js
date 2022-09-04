import {rest} from 'msw'

export const handlers = [
    rest.get('http://localhost:3030/topthree', (req, res, ctx) => {
      return res(
        ctx.json([
          { name: 'Juano', img: '', ranking:1 },
          { name: 'Cande', img: '' , ranking:2},
          { name: 'Carlos', img: '' , ranking:3},
        ])
      );
    }),
    rest.get('http://localhost:3030/topten', (req, res, ctx) => {
      return res(
        ctx.json([
          { name: 'Cande', img: '' , ranking:2},
          { name: 'Carlos', img: '' , ranking:3},
          { name: 'Juano', img: '', ranking:1 },
          { name: 'Pedro', img: '', ranking:4 },
          { name: 'Maxi', img: '', ranking:7 },
          { name: 'Francisco', img: '', ranking:5 },
          { name: 'Julian', img: '', ranking:6 },
          { name: 'Michael', img: '', ranking:8 },
          { name: 'Franco', img: '', ranking:9 },
          { name: 'Santino', img: '', ranking:10 },
        ])
      );
    })
  ]