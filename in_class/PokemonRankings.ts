class PokemonRankings {
    [pokemonName: string]: number
}

const poke = new PokemonRankings()

poke.snorlax = 10
poke.psyduck = 5
poke.stunky = 1

console.table(poke);