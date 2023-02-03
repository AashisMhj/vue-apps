export interface RowType {
    id: number,
    geo: string,
    gender: string,
    age: number,
    count: number,
    education: string
}

export interface FilterValue{
    value: number|string,
    label: string
}