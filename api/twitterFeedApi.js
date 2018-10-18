const processFetch = tweet => {

}

export const twitterFeed = async () => {
  const response = await fetch('https://twitter.com/HolyCityClassic?ref_src=twsrc%5Etfw')
  console.log(response)
  const results = await response.json()
  console.log(results)
  return Response.map()
}
