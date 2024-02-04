import moment from "moment"
import { getDateDistanceInMonthsAndYears } from "src/Utils/HF";

export const source = (User: any) => {
    return (
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                .userName {
                    color: var(--foundation-grey-grey-500, #1C1C1C);
                    text-align: left;
                    font-family: Noto Sans;
                    font-size: 29px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin: 0px;
                    margin-bottom: 7px;
                }
        
                .userJobTitle {
                    color: var(--foundation-grey-grey-500, #1C1C1C);
                    text-align: center;
                    font-family: Noto Sans;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 20px;
                }
        
                .userInfo {
                    color: var(--foundation-grey-grey-600, #191919);
                    font-family: Noto Sans;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 20px;
                }
        
                .sectionType {
                    color: var(--foundation-grey-grey-500, #1C1C1C);
                    font-family: Noto Sans;
                    font-size: 26px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin-top: 0px;
                }
        
                .titleObjective {
                    color: #000;
                    font-family: Noto Sans;
                    font-size: 15px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 20px;
                }
        
                .text1 {
                    color: var(--foundation-grey-grey-500, #1C1C1C);
                    font-family: Noto Sans;
                    font-size: 28px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin: 7px 0px;
                }
        
                .text2 {
                    color: var(--foundation-grey-grey-500, #1C1C1C);
                    font-family: Noto Sans;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 20px;
                    margin: 7px 0px;
                }
        
                .text3 {
                    color: var(--foundation-grey-grey-500, #1C1C1C);
                    font-family: Noto Sans;
                    font-size: 25px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin: 7px 0px;
                }
        
                .text4 {
                    color: var(--foundation-grey-grey-400, #494949);
                    font-family: Noto Sans;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 16px;
                    margin: 7px 0px;
                }
        
                .gradeText {
                    color: var(--foundation-grey-grey-500, #1C1C1C);
                    font-family: Noto Sans;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 22px;
                }
        
                .textExp {
                    color: var(--foundation-grey-grey-500, #1C1C1C);
                    font-family: Noto Sans;
                    font-size: 28px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    margin: 7px 0px;
                }
        
                .textSkill {
                    color: var(--foundation-grey-grey-300, #676767);
                    font-family: Noto Sans;
                    font-size: 15px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 16px;
                    margin: 5px 0px 5px 10px;
                }
        
                .titleSkill {
                    color: var(--foundation-grey-grey-500, #1C1C1C);
                    font-family: Noto Sans;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 20px;
                    margin: 10px 0px;
                }
            </style>
        </head>
        
        <body style="background-color: #fff;width: 100%;height: 100%;">
        
            <div style="display: grid;column-gap: 10px;">
                <!-- header profile section-->
                <div style="display:grid;padding: 10px 60px; margin: 0px;">
                    <div style="display: grid;background-color: #F2F2F2;
                border-radius: 20px;
                padding: 20px 70px;
                margin: 0px;
                ">
                        <div
                            style="display: flex;flex: 1; flex-direction: row;justify-content: space-around; padding-left: 40px;">
                            <div style="display: flex; flex-direction: row;align-items: center; flex: 1;">
                            ${User?.avatar == null ?
            `<img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
style="border-radius: 50%; width: 160px; height: 160px;" />`
            :
            `
<img src=${User?.avatar}
                                    style="border-radius: 50%; width: 160px; height: 160px;" />`
        }    
        <p>Click <a href=https://example.com">here</a> to visit Example</p>
                                <div style="display: flex;flex-direction: column;
                        margin-left: 10px;
                        ">
                                    <h1 class="userName">
                                        ${User?.name}
                                    </h1>
                                    <b class="userJobTitle">
                                    ${User?.job_title}
                                    </b>
                                </div>
                            </div>
        
                            <div
                                style="margin-left: 10px;display: flex;flex: 1;flex-direction: column;align-items: flex-start;justify-content: center;">
                                <b class="userInfo">${User?.area} ، ${User?.city} ${User?.country}</b>
                                <b class="userInfo">${User?.email}</b>
                                <b class="userInfo">${User?.country_code} ${User?.phone_number}</b>
        
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Objective section -->
                <div style="display:grid;padding: 10px 60px; margin: 0px;">
                    <div style="display: grid;background-color: #E8EFFC;
            border-radius: 20px;
            padding: 20px 70px;
            
            ">
                        <h1 class="sectionType">Objective</h1>
                        <b class="titleObjective">
                           ${User?.about}
                        </b>
                    </div>
                </div>
                <!-- left section -->
                <div style="display: flex;width: 92%;margin-left: auto;margin-right: auto;column-gap: 10px;margin-top: 10px;">
                    <div style="width: 50%;flex-direction: column;">
                        <!-- Education section -->
        
                        <div style="flex: 1; padding: 10px 0px; margin: 0px; background-color: #B0F0EE; border-radius: 20px;
                    padding: 15px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        margin-bottom: 15px;
                    ">
                            <h1 class="text1">Education</h1>
                            ${User?.user_data?.educations?.map((item: any) => (
            ` <h1 class="text1">${item?.university_name}</h1>
                                <h1 class="text2">${item?.level_id?.name} in ${item?.field_of_study}</h1>
                                <b class="text2">${item?.start_date?.slice(0, 4)} - ${item?.end_date?.slice(0, 4)}  ${parseInt(item?.end_date?.slice(0, 4)) - parseInt(item?.start_date?.slice(0, 4))} years  ${item?.university_name} University</b>
                                <h1 class="gradeText">Grade : <b style="font-weight: 400; ">${item?.grade}</b></h1>
                                `
        ))}
                        </div>
        
                        <!-- Experience section -->
                        <div style="flex: 1; padding: 10px 0px; margin: 0px; background-color: #F8E5B0; border-radius: 20px;
                    padding: 20px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        
                    ">
                            <h1 class="textExp">Experience</h1>
                            ${User?.user_data?.experiences?.map((item: any) => (
            ` <h1 style="font-size: 25px;" class="textExp">${item?.job_title}</h1>
                                <h1 class="text2">${item?.company_name}</h1>
                                <b class="text4">${moment(item?.start_date).format('YYYY-MM')} to ${item?.still_work_here == 1 ? `Present` : moment(item?.end_date).format('YYYY-MM')} · ${(getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.years) > 0 ? (getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.years)`years` : (getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.months)} Mos }</b>
                                <h1 class="text3">Description</h1>
                                <b class="text4">${item?.description}</b>
                                <div style="height: 10px;"></div>
                                  `
        ))}
                        </div>
        
        
        
                        <!-- end right section -->
                    </div>
        
                    <!-- rigth section -->
                    <div style="width: 50%;flex-direction: column; ">
        
                        <div style="flex: 1; padding: 10px 0px; margin: 0px; background-color: #F2F2F2; border-radius: 20px;
                    padding: 20px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
                    ">
                            <h1 class="sectionType">Achievements</h1>
                            ${User?.user_data?.achievement?.map((item: any) => (
            ` <h1 class="text2">- ${item?.text}</h1>
            <img style="border-radius: 10;margin-top: 10; width: 100px; height: 100px;"  src=${item?.certificate} />
            <a href="${item?.certificate}" targer="_blank">
            <img src="https://cdn-icons-png.freepik.com/512/9207/9207510.png"  style="width: 70px;background-size: cover; height: 70px;margin-top: 20;" />
            </a>
                                                    <div style="height: 10px;"></div>
                                                      `
        ))}
                            <h1 class="text2">- Employee of the month at O-Projects on 20/11/2023</h1>
                            <h1 class="text2">- Getting the first place in a sport on 20</h1>
                        </div>
                        <div style="flex: 1; 
                        padding: 10px 0px;
                         margin: 0px; background-color: #E8EFFC; border-radius: 20px;
                    padding: 20px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        margin-top: 20px;
                    ">
                            <h1 class="textExp">Training Courses</h1>
                            ${User?.user_data?.training_courses?.map((item: any) => (
            ` <h1 class="text3" style="font-weight: normal;">${item?.field_of_study}</h1>
                                <h1 class="text3" style="font-size: 20px; font-weight: normal;">at ${item?.institute}</h1>
                                <h1 class="text3" style="font-size: 20px; font-weight: normal;">accredited by Ain-Shams University and HRCI</h1>
                                <b class="text4">${moment(item?.start_date).format('MM-YYYY')}  ${(getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.years) > 0 ? `${(getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.years)} years` : `${(getDateDistanceInMonthsAndYears(item?.start_date, item?.end_date)?.months)} Mos `} - (35 Hours)   Cairo,Egypt</b>
                                <div style="height: 7px;"></div>
                                 `
        ))}
                        </div>
                        <div style="flex: 1; padding: 10px 0px; margin: 0px; background-color: #B0F0EE; border-radius: 20px;
                        padding: 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            align-self: stretch;
            margin-top: 20px;
        
                        ">
                            <h1 class="text1" style="
                            line-height: normal;
                            margin-top: 0px;
                            margin-bottom: 7px;
                            ">Skills</h1>
                            <div style="display: flex; flex-direction: row;justify-content: space-between;flex-wrap: wrap;">
                                <div style="display: flex;width: 50%;flex-direction: column;">
                                ${User?.user_data?.skills?.map((item: any) => (
            ` <h1 class="text4" style="color: var(--foundation-grey-grey-300, #676767);
                                    font-size: 15px;
                                    margin: 5px 0px 5px 10px;
                                    ">. ${item?.name}</h1>
                                     `
        ))}
                                </div>
        
                                <div style="display: flex;width: 50%;flex-direction: column;">
                                ${User?.user_data?.languages?.map((item: any) => (
            ` <h1 class="text4" style="color: var(--foundation-grey-grey-300, #676767);
                                    font-size: 15px;
                                    margin: 5px 0px 5px 10px;
                                    ">. ${item?.name}</h1>
                                     `
        ))}
                                </div>
        
                               
          </div>
                        </div>
                    </div>
                </div>
                <div style="display:flex;padding: 20px 60px; margin: 0px;width: 92%;margin-left: auto; margin-right: auto;">
                    <div style="display: flex;background-color: #F8E5B0;
                    width: 100%;
                border-radius: 20px;
                padding: 25px 70px;
                margin: 0px;
                ">
                        <div style="display: flex;flex: 1; flex-direction: column; padding-left: 40px;">
                            <h1 style="color: var(--foundation-grey-grey-500, #1C1C1C);
                            font-family: Noto Sans;
                            font-size: 25px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;
                            margin: 10px 0px;
                            ">Additional data</h1>
                            <div style="display: flex; width: 100%;flex-direction: row;justify-content: flex-start;">
                                <div style="display: flex; flex-direction: column; flex: 1;">
        
                                    <h1 style="color: var(--foundation-grey-grey-500, #1C1C1C);
        font-family: Noto Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        margin: 5px 0px;
        ">Date of birth</h1>
                                    <h1 class="textSkill">${User?.birthdate}</h1>
            
                                </div>
        
                                <div style="display: flex; flex-direction: column; flex: 1;">
        
                                    <h1 class="text4" style="font-size: 16px; margin: 5px 0px;">Nationality</h1>
                                    ${User?.user_data?.nationality?.map((item: any) => (
            ` <h1 class="text4" style="color: var(--foundation-grey-grey-300, #676767);
                                        font-size: 15px;
                                        margin: 5px 0px 5px 10px;
                                        ">. ${item?.name}</h1>
                                         `
        ))}
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        
        </html>`
    )

};