// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{ id: 1, nome: 'Caneta', preco: 5.60 },
  { id: 2, nome: 'Tesoura', preco: 5.80 },
  { id: 3, nome: 'Caderno', preco: 25.60 },
  { id: 4, nome: 'Lapis', preco: 2.60 },
  { id: 5, nome: 'Borracha', preco: 3.60 }])
}
