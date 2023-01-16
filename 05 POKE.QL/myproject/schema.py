import strawberry

from pokedex.schema import Query as PokemonQuery
from pokedex.schema import Mutation as PokemonMutation


@strawberry.type
class Query(PokemonQuery):
    pass


class Mutation(PokemonMutation):
    pass


schema = strawberry.Schema(query=Query, mutation=Mutation)
