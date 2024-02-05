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
    CompleteProfileScreen:undefined;
    CompleteCompanyProfileScreen:undefined;
    UpdateAchievementCard:undefined;
    UpdateOneAchievements:undefined;
    UpdateSkillsCard:undefined;
    UpdateOneSkills:undefined;
    UpdateOneRefernceCheck:undefined;
    UpdateReferenceCheckCard:undefined;
    UpdateCompanyAbout:undefined;
    UpdateRecordVideoCompany:undefined;
    UpdateLanguageCard:undefined;
    UpdateOneLanguage:undefined;
    UpdateTrainingCard:undefined;
    UpdateOneTraining:undefined;
    CV:undefined;
    SaveVideoCompany:undefined;
    ProfileCompanyScreen:undefined;
    UpdateAboutCard:undefined;
    UpdateEducationCard:undefined;
    UpdateOneEducation:undefined;
    UpdateInfoCard:undefined;
    AddNewExperience:undefined;
    UpdateOneExperience:undefined;
    UpdateExperienceCard:undefined;
    SaveVideo:undefined;
    UpdateCompanyInfo:undefined;
    UpdateRecordVideo:undefined;
    UpdateAbout:undefined;
    MyVideoCV:undefined;
    UpdateLanguages:undefined;
    SearchPeople:undefined;
    TagPeople:undefined;
    CreatePollLink:undefined;
    UpdateInfo:undefined;
    UpdateEducation:undefined;
    UpdateAchievements:undefined;
    UpdateRefernceCheck:undefined;
    UpdateExperience:undefined;
    UpdateSkills:undefined;
    UpdateTraining:undefined;
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