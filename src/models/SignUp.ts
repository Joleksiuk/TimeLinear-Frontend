export type SignUpRequest = {
    username: string
    email: string
    password: string
    role: string
}

export type SignUpResponse = {
    accessToken: string
    refreshToken: string
}
