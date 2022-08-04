
export interface PhotoI {
    id: number;
    url: string;
}

export interface UserI {
    id: number;
    username: string;
    password: string;
    role: string;
    createdAt: Date;
    updateAt: Date;
    photos: PhotoI[];
}

