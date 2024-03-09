interface DUser<T> {
    [index : string ]: T
}

export const users:Array<DUser<string | number>> = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "someEmail@gmail.com",
        "phone": "1-770-736-8031 x56442",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "someEmail2@gmail.com",
        "phone": "1-770-736-8031 x56442",
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "someEmail3@gmail.com",
        "phone": "1-770-736-8031 x56442",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "someEmail4@gmail.com",
        "phone": "1-770-736-8031 x56442",
    },
    {
        "id": 5,
        "name": "Chelsey Diet",
        "email": "someEmail5@gmail.com",
        "phone": "1-770-736-8031 x56442",
    }
]