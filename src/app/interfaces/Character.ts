export interface Character {
    id: number
    name: string 
    status: string 
    species: string 
    image: string
    gender: string
    created: Date
    location:{
        name: string
        url: string
    } 
    episode: []
}