import {
    compose
} from 'lodash/fp'

const slugify = compose(
    encodeURIComponent,
    join('-'),
    map(toLowerCase),
    split(' ')
)

slufigy('Hello World') // hello-world