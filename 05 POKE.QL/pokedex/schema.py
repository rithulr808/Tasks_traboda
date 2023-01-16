import typing
import strawberry
from strawberry.types import Info
from .models import Pokemon


@strawberry.type
class PokemonInputType:
    name: typing.Optional[str]
    height: typing.Optional[int]
    weight: typing.Optional[int]
    species: typing.Optional[str]
    types: typing.Optional[typing.List[str]]
    abilities: typing.Optional[typing.List[str]]
    base_experience: typing.Optional[int]
    order: typing.Optional[int]
    stats: typing.Optional[typing.List[str]]
    moves: typing.Optional[typing.List[str]]


@strawberry.input
class PokemonInput:
    name: typing.Optional[str]
    height: typing.Optional[int]
    weight: typing.Optional[int]
    species: typing.Optional[str]
    types: typing.Optional[typing.List[str]]
    abilities: typing.Optional[typing.List[str]]
    base_experience: typing.Optional[int]
    order: typing.Optional[int]
    stats: typing.Optional[typing.List[str]]
    moves: typing.Optional[typing.List[str]]


@strawberry.type
class Query:
    @strawberry.field
    def pokemon(self, info: Info, ID: int, name: str) -> PokemonInputType:
        return Pokemon.objects.get(id=ID, name=name)

    @strawberry.field
    def pokemons(self, info: Info) -> typing.List[PokemonInputType]:
        return Pokemon.objects.all()

    @strawberry.field
    def types_pokemon(self, info: Info, search: str) -> typing.List[PokemonInputType]:
        return Pokemon.objects.filter(types__icontains=search)

@strawberry.type
class Mutation:
    @strawberry.mutation
    def add_pokemon(self, info: Info,
                    name: typing.Optional[str] = None,
                    height: typing.Optional[int] = None,
                    weight: typing.Optional[int] = None,
                    species: typing.Optional[str] = None,
                    types: typing.Optional[typing.List[str]] = None,
                    abilities: typing.Optional[typing.List[str]] = None,
                    base_experience: typing.Optional[int] = None,
                    order: typing.Optional[int] = None,
                    stats: typing.Optional[typing.List[str]] = None,
                    moves: typing.Optional[typing.List[str]] = None,
                    ) -> PokemonInputType:
        pokemon = Pokemon.objects.create(
            name=name,
            height=height,
            weight=weight,
            species=species,
            types=types,
            abilities=abilities,
            base_experience=base_experience,
            order=order,
            stats=stats,
            moves=moves,
        )
        return pokemon

    @strawberry.mutation
    def delete_pokemon(self, info: Info, ID: int) -> bool:
        pokemon = Pokemon.objects.get(id=ID)
        pokemon.delete()
        return True

    @strawberry.mutation
    def update_pokemon(self, ID: int,
                       name: typing.Optional[str] = None,
                       height: typing.Optional[int] = None,
                       weight: typing.Optional[int] = None,
                       species: typing.Optional[str] = None,
                       types: typing.Optional[typing.List[str]] = None,
                       abilities: typing.Optional[typing.List[str]] = None,
                       base_experience: typing.Optional[int] = None,
                       order: typing.Optional[int] = None,
                       stats: typing.Optional[typing.List[str]] = None,
                       moves: typing.Optional[typing.List[str]] = None,
                       ) -> PokemonInputType:
        pokemon = Pokemon.objects.get(id=ID)
        pokemon.name = name
        pokemon.height = height
        pokemon.weight = weight
        pokemon.species = species
        pokemon.types = types
        pokemon.abilities = abilities
        pokemon.base_experience = base_experience
        pokemon.order = order
        pokemon.stats = stats
        pokemon.moves = moves
        pokemon.save()
        return pokemon





    
