import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const compareNames = (a:UserType, b:UserType):number => {
                if (action.payload === 'up') {
                    return a.name > b.name ? 1 : -1
                }
                else return a.name < b.name ? 1 : -1
            }
            return state.slice().sort(compareNames)
        }
        case 'check': {
            return state.filter(st => st.age >= action.payload)
        }
        default:
            return state
    }
}
