export type StateThemeType = {
    themeId: string
}

const initState = {
    themeId: '1',
}

export const themeReducer = (state: StateThemeType = initState, action: changeThemeIdType): StateThemeType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: string
}

export const changeThemeId = (id: string): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
