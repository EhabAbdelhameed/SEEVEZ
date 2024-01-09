interface userState {
    signedUp: boolean
    reset: boolean;
    changed: boolean;
    rememberMe: boolean,
    isAuth: boolean,
    verified: boolean,
    isGuest: boolean,
    Token: any,
    currentUser: {
        id: any,
        token: any,
        name: any,
        gender: any
        dob: any
        email: any,
        mobile: any,
        created_at: any,
        status: any
        email_verified: any;
        code: any;
        points: any;
    },
}

export const initialState: userState = {
    signedUp: false,
    reset: false,
    changed: false,
    rememberMe: true,
    isAuth: false,
    isGuest: true,
    verified: false,
    Token: "",
    currentUser: {
        id: null,
        token: null,
        name: null,
        gender: null,
        dob: null,
        email: undefined,
        mobile: undefined,
        created_at: undefined,
        status: null,
        email_verified: null,
        code: null,
        points: null
    },
}