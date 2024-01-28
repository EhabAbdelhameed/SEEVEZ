interface appState {
    IndsturyData:[{
        deleted_at: any;
         id: any;
         name:any
    }]
    YearsOfExperience:[{
        deleted_at: any;
         id: any;
         name:any
    }]
    JobType:[{
        deleted_at: any;
         id: any;
         name:any
    }]
    EducationLevel:[{
        deleted_at: any;
         id: any;
         name:any
    }]
    CompaniesData:[{
        avatar: any;
         id: any;
         name:any
    }]

    
    HomeData: {
        branch: {
            id: any;
            name: any;
            image: any;
            geolocation: any;
            address: any;
            working_hours_start: any;
            working_hours_end: any;
            options: any;
            status: any;
            menu_name: any;
        },
        offers: [
            {
                id: any;
                title: any;
                description: any;
                image: any;
                discount_price: any;
                price: any;
                percentage: any;
                item: any;
            }
        ],
        popup: {
            id: any;
            text: any;
            image: any;
            price: any;
            discount_price: any;
            percentage: any;
        },
        bestsellers: [
            {
                id: any
                name: any
                image: any
            },
        ]
    }
    done: boolean;
    Nav: any;
    placeOrderData: {
        pickup_time: any;
        branch_id: any;
        type: any;
        address_id: any;
    }
    Branches: [
        {
            id: any;
            name: any;
            image: any;
            geolocation: any;
            address: any;
            working_hours_start: any;
            working_hours_end: any;
            options: any;
            status: any;
            menu_name: any;
        }
    ]
    Menu: [
        {
            id: any,
            category_id: any,
            category_name: any,
            name: any,
            image: any,
            description: any,
            rating: any,
            levels: any,
            new: any,
            price: any,
            discount_price: any,
            discount_until: any,
            favorite: any,
        }
    ]
    Search: [
        {
            id: any,
            category_id: any,
            category_name: any,
            name: any,
            image: any,
            description: any,
            rating: any,
            levels: any,
            new: any,
            price: any,
            discount_price: any,
            discount_until: any,
            favorite: any,
        }
    ]
    Favourites: [
        {
            id: any,
            category_id: any,
            category_name: any,
            name: any,
            image: any,
            description: any,
            rating: any,
            levels: any,
            new: any,
            price: any,
            discount_price: any,
            discount_until: any
        }
    ]
    categories: [
        {
            id: any;
            name: any;
            created_at: any;
        },
    ]
    FAQS: [
        {
            id: any;
            name: any;
            answer: any;
            created_at: any;
        },
    ]

    Addresses: [
        {
            id: any,
            label: any,
            address: any,
            building: any,
            floor: any,
            apartment: any,
            extra_details: any,
            branch_id: any,
            created_at: any,
            area: {
                id: any,
                name: any,
                price: any,
                active: any,
                created_at: any
            }
        }
    ]

    CartItems: [
        {
            id: any,
            item_id: any,
            category_id: any,
            category_name: any,
            name: any,
            image: any,
            description: any,
            spicy_level: any,
            new: any,
            quantity: any;
            note: any
            discount_price: any
            price: any
        }
    ]

    ProductDetail: {
        id: any,
        price: any,
        discount_until: any,
        discount_price: any,
        category_id: any,
        category_name: any,
        name: any,
        image: any,
        description: any,
        rating: any,
        levels: any,
        new: any,
        created_at: any,
        ingredients: [
            {
                id: any,
                name: any,
                image: any,
                created_at: any
                required: any
                price: any
            },
        ]
        options: [
            {
                id: any;
                headline: any;
                type: any;
                select_type: any;
                options: [],
                required: any;
                min_options: any;
                max_options: any;
            }
        ]
    }

    Areas: [
        {
            id: any,
            name: any,
            price: any,
            active: any,
            created_at: any
        }
    ]

    orders: [
        {
            id: any;
            code: any;
            total: any;
            payment_type: any;
            payment_status: any;
            status: any;
            created_at: any;
            items: [];
        }
    ]

    Rewards: [{
        id: any;
        points: any;
        status: any;
        item: {
            id: any;
            category_id: any;
            category_name: any;
            name: any;
            image: any;
            description: any;
            rating: any;
            new: any;
        }
    }]

    wheelNumbers: [
        {
            id: any,
            points: any,
            angle: any
        }
    ]
    PromoValue: {
        discount: any,
        minimum_spend: any
    }
    points: {
        orders: any;
        points: any;
        spins: any;
    }
    deals: {
        category: any;
        day: any;
        id: any;
        percentage: any;
        items: [
            {
                category_id: any;
                category_name:any;
                description:any;
                id: any;
                image: any;
                name: any;
                new: any;
                rating: any;
            },
        ]
    }
    order: {
        id: any;
        code: any;
        total: any;
        payment_type: any;
        status: any;
        items: any;
    }

}

export const initialState: appState = {
    done: false,
    Nav: "",
    HomeData: [],
    IndsturyData:[{
        deleted_at: null,
         id:null,
         name:null
    }],
    YearsOfExperience:[{
        deleted_at: null,
         id:null,
         name:null
    }],
    JobType:[{
        deleted_at: null,
         id:null,
         name:null
    }],
    EducationLevel:[{
        deleted_at: null,
         id:null,
         name:null
    }],
    CompaniesData:[{
        avatar: null,
         id: null,
         name:null,
    }],

    placeOrderData: {},
    Branches: [],
    Menu: [],
    Favourites: [],
    categories: [],
    Addresses: [],
    CartItems: [],
    ProductDetail: {},
    Areas: [],
    orders: [],
    Rewards: [],
    PromoValue: {},
    deals: [],
    points: {},
    Search: [],
    order: {},
    wheelNumbers: [{
        id: 1,
        points: 1,
        angle: 1
    }],
    FAQS: [
        {
            id: null,
            name: null,
            answer: null,
            created_at: null,
        },
    ],

}