import React from 'react'
import down from '../../assets/down.svg'
import up from '../../assets/up.svg'
import noneSort from '../../assets/noneIcon.svg'


// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = noneSort

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    switch (sort) {
        case '':
            return down
        case down:
            return up
        case up:
            return ''
        default:
            return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                alt={'#'}
                id={id + '-icon-' + sort}
                src={icon}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
