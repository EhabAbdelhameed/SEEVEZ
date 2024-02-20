interface appState {
  IndsturyData: [
    {
      deleted_at: any;
      id: any;
      name: any;
    },
  ];
  FollowingList: any[];
  listUsers: any[];
  YearsOfExperience: [
    {
      deleted_at: any;
      id: any;
      name: any;
    },
  ];
  JobType: [
    {
      deleted_at: any;
      id: any;
      name: any;
    },
  ];
  photoData: {
    image: any;
    addonesCaption: any;
    location: any;
    pdf: any;
    tagPepoles: any;
    key: any;
    names: any;
    market:any;
    exterinalLinks:any;
  };

  EducationLevel: [
    {
      deleted_at: any;
      id: any;
      name: any;
    },
  ];
  CompaniesData: [
    {
      avatar: any;
      id: any;
      name: any;
    },
  ];
  searchPeopelData: {
    current_page: any;
    data: any;
    first_page_url: any;
    from: any;
    last_page: any;
    last_page_url: any;
    links: any;
    next_page_url: any;
    path: any;
    per_page: any;
    prev_page_url: any;
    to: any;
    total: any;
  };

  done: boolean;
  Nav: any;
  placeOrderData: {
    pickup_time: any;
    branch_id: any;
    type: any;
    address_id: any;
  };

  postsData:[ {
    _id:any;
    path:any;
    sharedCount:any;
    targetType:any;
    dataType:any;
    metadata:{
       attachments:[
          {
             file:{
                fileId:any;
                fileUrl:any;
                type:any;
                createdAt:any;
                updatedAt:any;
                attributes:{
                   name:any;
                   extension:any;
                   size:any;
                   mimeType:any;
                   metadata:{
                      exif:{
                         DateTimeOriginal:any;
                      };
                      gps:{
                         lat:any;
                         lng:any;
                      };
                      height:any;
                      width:any;
                      isFull:boolean
                   }
                }
             };
             type:any
          }
       ];
       pollId:any;
       addonCaption:any;
       pdfData:any;
       externalLinks:any;
       location:any;
       background_photo:any;
    };
    commentsCount:any;
    editedAt:any;
    createdAt:any;
   updatedAt:any;
    isDeleted:boolean;
    hasFlaggedComment:boolean;
    hasFlaggedChildren:boolean;
    data:{
       text:any;
       streamId:any;
       pollId:any
    },
    postId:any;
    postedUserId:any;
    postedUserPublicId:any;
    postedUserInternalId:any;
    targetId:any;
    targetPublicId:any;
    targetInternalId:any;
    flagCount:any;
    hashFlag:null;
    reactions:any;
    reactionsCount:any;
    myReactions:any;
    comments:any;
    children:any;
    mentionees:any;
    tags:any;
    reach:any;
    impression:any
 }]
 like: boolean;
}

export const initialState: appState = {
  done: false,
  Nav: '',

  FollowingList: [],
  listUsers: [],
  IndsturyData: [
    {
      deleted_at: null,
      id: null,
      name: null,
    },
  ],
  photoData: {
    image: null,
    addonesCaption: null,
    location: null,
    pdf: null,
    tagPepoles: null,
    key: null,
    names: null,
    market:null,
    exterinalLinks:null,
  },
  searchPeopelData: {
    current_page: null,
    data: null,
    first_page_url: null,
    from: null,
    last_page: null,
    last_page_url: null,
    links: null,
    next_page_url: null,
    path: null,
    per_page: null,
    prev_page_url: null,
    to: null,
    total: null,
  },
  YearsOfExperience: [
    {
      deleted_at: null,
      id: null,
      name: null,
    },
  ],
  JobType: [
    {
      deleted_at: null,
      id: null,
      name: null,
    },
  ],
  EducationLevel: [
    {
      deleted_at: null,
      id: null,
      name: null,
    },
  ],
  CompaniesData: [
    {
      avatar: null,
      id: null,
      name: null,
    },
  ],

  placeOrderData: {
      pickup_time: null,
      branch_id: null,
      type: null,
      address_id: null
  },
  postsData:[ {
    _id:null,
    path:null,
    sharedCount:null,
    targetType:null,
    dataType:null,
    metadata:{
       attachments:[
          {
             file:{
                fileId:null,
                fileUrl:null,
                type:null,
                createdAt:null,
                updatedAt:null,
                attributes:{
                   name:null,
                   extension:null,
                   size:null,
                   mimeType:null,
                   metadata:{
                      exif:{
                         DateTimeOriginal:null,
                      },
                      gps:{
                         lat:null,
                         lng:null,
                      },
                      height:null,
                      width:null,
                      isFull:false
                   }
                }
             },
             type:null
          }
       ],
       pollId:null,
       addonCaption:null,
       pdfData:null,
       externalLinks:null,
       location:null,
       background_photo:null,
    },
    commentsCount:null,
    editedAt:null,
    createdAt:null,
   updatedAt:null,
    isDeleted:false,
    hasFlaggedComment:false,
    hasFlaggedChildren:false,
    data:{
       text:null,
       streamId:null,
       pollId:null
    },
    postId:null,
    postedUserId:null,
    postedUserPublicId:null,
    postedUserInternalId:null,
    targetId:null,
    targetPublicId:null,
    targetInternalId:null,
    flagCount:null,
    hashFlag:null,
    reactions:null,
    reactionsCount:null,
    myReactions:null,
    comments:null,
    children:null,
    mentionees:null,
    tags:null,
    reach:null,
    impression:null
 }],
 like: false,

//   Search: [],
 
};
