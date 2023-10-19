export type SignInRequest = {
    email: FormDataEntryValue | null
    password: FormDataEntryValue | null
}

export type SignInResponse = {
    accessToken: string
    refreshToken: string
    email: string
}
