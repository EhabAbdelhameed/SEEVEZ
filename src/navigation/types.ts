export type AuthParamsList = {
    login: undefined;
    signup: undefined;
    signup2: undefined;
    Verification: undefined;
    ForgetPassword: undefined;
    SignupWithSocail: undefined;
    ResetPassword:any;
}
export type TabParamsList = {
    Home: any;
    Connections: any;
    Calendar: any;
    Camera: any;
    Bag: any;
}
export type AppParamsList = {
    Home: undefined;
    Cv: undefined;
    Connections: undefined;
    Reels: undefined;
    TabBar: undefined;
    ProfileScreen: undefined;
    CreateVideo:undefined;
    CreateVoice:undefined;
    Analytics: undefined;
    AddPhoto:any;
    CreateVideo2:any;
    CreatePull:any;
}
export type RootParamsList = {
    auth: any;
    app: any;
    Splash: any;
    Connections: any;
    CreateShareLink:any;
}


export type PrimaryParamsList = RootParamsList & AppParamsList & TabParamsList & AuthParamsList;

export type PrimaryParamListKeys = keyof PrimaryParamsList;


declare global {
    namespace ReactNavigation {
        interface RootParamList extends PrimaryParamsList { }
    }
}