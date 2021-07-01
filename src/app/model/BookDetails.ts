export interface Created {
    type: string;
    value: Date;
}

export interface LastModified {
    type: string;
    value: Date;
}

export interface Type {
    key: string;
}

export interface Author2 {
    key: string;
}

export interface Author {
    type: Type;
    author: Author2;
}

export interface Type2 {
    key: string;
}

export interface RootObject {
    created: Created;
    title: string;
    covers: number[];
    subject_places: string[];
    last_modified: LastModified;
    subject_people: string[];
    key: string;
    authors: Author[];
    latest_revision: number;
    subject_times: string[];
    type: Type2;
    subjects: string[];
    revision: number;
}
export interface Created {
    type: string;
    value: Date;
}

export interface LastModified {
    type: string;
    value: Date;
}

export interface Type {
    key: string;
}

export interface Author2 {
    key: string;
}

export interface Author {
    type: Type;
    author: Author2;
}

export interface Type2 {
    key: string;
}

export interface BookDetails {
    created: Created;
    title: string;
    covers: number[];
    subject_places: string[];
    last_modified: LastModified;
    subject_people: string[];
    key: string;
    authors: Author[];
    latest_revision: number;
    subject_times: string[];
    type: Type2;
    subjects: string[];
    revision: number;
}
