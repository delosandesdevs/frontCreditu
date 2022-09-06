export const mockRanking = (req, res, ctx) => {
  const page = req.url.searchParams.get('page')
  const size = req.url.searchParams.get('size')
  const orderby = req.url.searchParams.get('orderby')
    return res(
        ctx.status(200),
        ctx.json([
            page,
            size,
            orderby,
            { nickname: 'Cande',      avatar: '' ,  score:2},
            { nickname: 'Carlos',     avatar: '' ,  score:3},
            { nickname: 'Juano',      avatar: '',   score:1 },
            { nickname: 'Pedro',      avatar: '',   score:4 },
            { nickname: 'Maxi',       avatar: '',   score:7 },
            { nickname: 'Francisco',  avatar: '',   score:5 },
            { nickname: 'Julian',     avatar: '',   score:6 },
            { nickname: 'Michael',    avatar: '',   score:8 },
            { nickname: 'Franco',     avatar: '',   score:9 },
            { nickname: 'Santino',    avatar: '',   score:10 },
      ])
    );
  }

  export const mockAllPlayers = (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([
            { nickname: 'Cande',      avatar: '' ,  score:2},
            { nickname: 'Carlos',     avatar: '' ,  score:3},
            { nickname: 'Juano',      avatar: '',   score:1 },
            { nickname: 'Pedro',      avatar: '',   score:4 },
            { nickname: 'Maxi',       avatar: '',   score:7 },
            { nickname: 'Francisco',  avatar: '',   score:5 },
            { nickname: 'Julian',     avatar: '',   score:6 },
            { nickname: 'Michael',    avatar: '',   score:8 },
            { nickname: 'Franco',     avatar: '',   score:9 },
            { nickname: 'Santino',    avatar: '',   score:10 },
            { nickname: 'Cande',      avatar: '' ,  score:2},
            { nickname: 'Carlos',     avatar: '' ,  score:3},
            { nickname: 'Juano',      avatar: '',   score:1 },
            { nickname: 'Pedro',      avatar: '',   score:4 },
            { nickname: 'Maxi',       avatar: '',   score:7 },
            { nickname: 'Francisco',  avatar: '',   score:5 },
            { nickname: 'Julian',     avatar: '',   score:6 },
            { nickname: 'Michael',    avatar: '',   score:8 },
            { nickname: 'Franco',     avatar: '',   score:9 },
            { nickname: 'Santino',    avatar: '',   score:10 },
      ])
    );
  }

  export const errorMock = (req, res, ctx) =>{
  const page = req.url.searchParams.get('page')
  const size = req.url.searchParams.get('size')
  const orderby = req.url.searchParams.get('orderby')
  res(
    ctx.status(500),
    ctx.json({
      page,size,orderby
    })
  
  )}
  
