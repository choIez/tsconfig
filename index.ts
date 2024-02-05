type Partial<T> = {
  [P in keyof T]?: T[P]
}

type Required<T> = {
  [R in keyof T]-?: T[R]
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Exclude<T, K> = T extends K ? never : T
