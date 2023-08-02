interface HumanAddress {
    firstname: string;
    lastname: string;
    zip: number;
}

type Post = {
    title: string,
    body: string
}

interface Poster extends HumanAddress {
    posts: Post[];
    lastPost: Date;
}

const poster: Poster = {
    firstname: 'sean',
    lastname: 'currie',
    zip: 34574,
    posts: [
        {title: '', body: ''},
        {title: '', body: ''},
        {title: '', body: ''}
    ],
    lastPost: new Date()
}