enum gender{
    male = "male",
    female = "female"
}

type Animal = {
    name : string,
    fly : boolean,
    gender : gender,
    leg :number,
    swim : boolean
}

const Animal1 = {
    name: "tiger",
    fly: false,
    gender: gender.male,
    leg : 4,
    swim : true
}

const Animal2 : Animal = Animal1

console.log("\n1) ")
console.log(Animal2)

/***********************************************/

type People = {
    name : string,
    age : number,
    gender :gender,
    hobbie : string | string[],
    job? : string
}

const People1: People= {
    name: "peter",
    age: 20,
    gender: gender.male,
    hobbie: ["watch movie", "swimmimg"]
}

const People2 : People = {
    name: "alex",
    age: 18,
    gender: gender.female,
    hobbie: "play game",
    job: "doctor"
}

console.log("\n2)")
console.log(People1)
console.log(People2)

/***********************************************/

type Pokemon = {
    name : string,
    gender : string,
    height: number,
    weight: number,
    Location_area_encounters: string
    move: {
        name: string,
        effect: string
    }[]
    type: TypePokemon[] | TypePokemon
    held_item?:{
        name: string,
        stat: {
            armor: number,
            damage: number,
            hp: number,
            speed: number
        }
    }[]
}

enum TypePokemon {
    Fire = "fire",
    Flying = "flying",
    Grass = "grass"
}

const Pokemon1 : Pokemon = {
    name: "Charlizard",
    gender: "female",
    height: 200,
    weight: 200,
    Location_area_encounters: "forest",
    move:[
        {
            name: "flying",
            effect: "cannot take damage from ground"
        }
    ],
    type: [TypePokemon.Fire, TypePokemon.Flying]
}

const Pokemon2 : Pokemon = {
    name: "babalsor",
    gender: "female",
    height: 200,
    weight: 200,
    Location_area_encounters: "forest",
    move:[
        {
            name: "kick",
            effect: "deal damage 50"
        }
    ],
    type: TypePokemon.Grass,
    held_item: [
        {
            name : "glove",
            stat:{
                armor: 20,
                damage: 10,
                hp: 200,
                speed: 200
            }
        }
    ]
}

console.log("\n3)")
console.log(Pokemon1)
console.log(Pokemon2)