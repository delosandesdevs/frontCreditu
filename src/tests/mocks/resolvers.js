export const mockRanking = (req, res, ctx) => {
  return res(
      ctx.json({
          "total":3001,
          "players":[
              {
                  "id": 2238,
                  "nickname": "Nyssa",
                  "avatar": "/images/avatar-02.png",
                  "status": "oro",
                  "score": 9997,
                  "ranking": 1
              },
              {
                  "id": 1257,
                  "nickname": "Dorothy",
                  "avatar": "/images/avatar-05.png",
                  "status": "oro",
                  "score": 9991,
                  "ranking": 2
              },
              {
                  "id": 854,
                  "nickname": "Velma",
                  "avatar": "/images/avatar-01.png",
                  "status": "oro",
                  "score": 9991,
                  "ranking": 3
              },
              {
                  "id": 2403,
                  "nickname": "Daquan",
                  "avatar": "/images/avatar-01.png",
                  "status": "oro",
                  "score": 9986,
                  "ranking": 4
              },
              {
                  "id": 896,
                  "nickname": "Josiah",
                  "avatar": "/images/avatar-05.png",
                  "status": "oro",
                  "score": 9986,
                  "ranking": 5
              },
              {
                  "id": 1718,
                  "nickname": "Kieran",
                  "avatar": "/images/avatar-07.png",
                  "status": "oro",
                  "score": 9975,
                  "ranking": 6
              },
              {
                  "id": 2301,
                  "nickname": "Zephania",
                  "avatar": "/images/avatar-07.png",
                  "status": "oro",
                  "score": 9972,
                  "ranking": 7
              },
              {
                  "id": 1226,
                  "nickname": "Aaron",
                  "avatar": "/images/avatar-07.png",
                  "status": "oro",
                  "score": 9965,
                  "ranking": 8
              },
              {
                  "id": 243,
                  "nickname": "Beau",
                  "avatar": "/images/avatar-06.png",
                  "status": "oro",
                  "score": 9963,
                  "ranking": 9
              },
              {
                  "id": 2909,
                  "nickname": "Rigel",
                  "avatar": "/images/avatar-08.png",
                  "status": "oro",
                  "score": 9961,
                  "ranking": 10
              }
          ]
      })
  )
}

export const errorMock = (req, res, ctx) => {
  return res(ctx.status(500))
}