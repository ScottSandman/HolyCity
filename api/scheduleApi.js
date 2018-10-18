import { SQLite } from 'expo'

const processGames = game => ({
  gameNum: game.gameNum,
  gameTime: game.gameTime,
  homeTeam: game.homeTeam,
  awayTeam: game.awayTeam,
  fieldName: game.fieldName,
})

const db = SQLite.openDatabase('https://github.com/ScottSandman/scheduler/blob/master/data/master')

export const fetchGames = async () => {
  let results = await db.transaction(tx =>{
      tx.executeSql('select * from teams', [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      )
  })
  console.log(results)
}

// export const fetchGames = () => {
//   const {results} = {
//     results: [
//       {
//         gameNum: 1,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//       {
//         gameNum: 2,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//       {
//         gameNum: 3,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//       {
//         gameNum: 4,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//       {
//         gameNum: 5,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//       {
//         gameNum: 6,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//       {
//         gameNum: 7,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//       {
//         gameNum: 8,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//       {
//         gameNum: 9,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//       {
//         gameNum: 10,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//       {
//         gameNum: 11,
//         gameTime: '9:00',
//         homeTeam: 'Carolina Prospects',
//         awayTeam: 'Middle Tennessee Outlaws',
//         fieldName: 'Dennis Park',
//       },
//     ]
//   }
//   return results.map(processGames)
// }
