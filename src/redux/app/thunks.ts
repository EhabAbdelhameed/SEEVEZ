import { createAsyncThunk } from "@reduxjs/toolkit";
import AppAPI from "./api";

const doGetHome: any = createAsyncThunk<any, any, any>(
    'app/Home',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.home(data);
            // alert(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doGetLatestOrder: any = createAsyncThunk<any, any, any>(
    'app/latestOrder',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.latestOrder();
            // console.log(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doGetBranches: any = createAsyncThunk<any, any, any>(
    'app/branches',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.branches(data);
            console.log(response?.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const getMenu: any = createAsyncThunk<any, any, any>(
    'app/menu',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.menu(id);
            console.warn(response.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getCategories: any = createAsyncThunk<any, any, any>(
    'app/categories',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.categories(id);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getFavorites: any = createAsyncThunk<any, any, any>(
    'app/favorites',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.favorites();
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const AddToFavorites: any = createAsyncThunk<any, any, any>(
    'app/favorites',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.favoritesAdd(id);
            // console.warn(response.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const RemovingFromFavorites: any = createAsyncThunk<any, any, any>(
    'app/favorites',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.favoritesDelete(id);
            // console.warn(response.data)
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getFaqs: any = createAsyncThunk<any, any, any>(
    'app/faqs',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.faqs();
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const getAllAddresses: any = createAsyncThunk<any, any, any>(
    'app/addresses',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.addresses();
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const getSingleAddress: any = createAsyncThunk<any, any, any>(
    'app/singleAddress',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.singleAddress(id);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doDeleteAddress: any = createAsyncThunk<any, any, any>(
    'app/deleteAddress',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.deleteAddress(id);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doAddAddress: any = createAsyncThunk<any, any, any>(
    'app/addAddress',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.addAddress(data);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doEditAddress: any = createAsyncThunk<any, any, any>(
    'app/editAddress',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.editAddress(data?.data, data?.id);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doGetProductDetail: any = createAsyncThunk<any, any, any>(
    'app/productDetail',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.productDetail(data.id, data.brancheId);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doAddToOrder: any = createAsyncThunk<any, any, any>(
    'app/addOrder',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.addOrder(data);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doGetOrders: any = createAsyncThunk<any, any, any>(
    'app/Orders',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.Orders();
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doGetMyCart: any = createAsyncThunk<any, any, any>(
    'app/getCart',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.cart();
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doDeleteItemInCart: any = createAsyncThunk<any, any, any>(
    'app/deleteItemInCart',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.deleteItemInCart(id);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doAddToCart: any = createAsyncThunk<any, any, any>(
    'app/addToCart',
    async (id, thunkApi: any) => {
        try {
            const response = await AppAPI.addToCart(id);
            console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doUpdateItemCart: any = createAsyncThunk<any, any, any>(
    'app/updateCart',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.updateCart(data.id, data.count);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doGetAreas: any = createAsyncThunk<any, any, any>(
    'app/getArea',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.areas();
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doGetRewards: any = createAsyncThunk<any, any, any>(
    'app/getRewards',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.rewards();
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doGetwheelNum: any = createAsyncThunk<any, any, any>(
    'app/getWheelNum',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.wheelNum();
            //    alert(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doSpinWheel: any = createAsyncThunk<any, any, any>(
    'app/spinWheel',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.spinWheel();
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doApplyPromoCode: any = createAsyncThunk<any, any, any>(
    'app/ApplyPromoCode',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.applypromo(data);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doGetDeals: any = createAsyncThunk<any, any, any>(
    'app/Deals',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.deals();
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doGetWallet: any = createAsyncThunk<any, any, any>(
    'app/wallet',
    async (_, thunkApi: any) => {
        try {
            const response = await AppAPI.wallet();
            console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doRedeemReward: any = createAsyncThunk<any, any, any>(
    'app/redeemReward',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.getReward(data);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doSearchMenu: any = createAsyncThunk<any, any, any>(
    'app/search',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.search(data.text,data.brancheId);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doSuccessPaymentOnline: any = createAsyncThunk<any, any, any>(
    'app/paymentOnline',
    async (data, thunkApi: any) => {
        try {
            const response = await AppAPI.paymentOnline(data);
            // console.warn(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)
const AppThunks = {
    doGetBranches,
    getMenu,
    getCategories,
    doGetMyCart,
    doAddToCart,
    doDeleteItemInCart,
    doUpdateItemCart,

    doAddToOrder,
    doGetOrders,

    getFavorites,
    AddToFavorites,
    RemovingFromFavorites,
    getFaqs,
    doGetProductDetail,

    getAllAddresses,
    getSingleAddress,
    doAddAddress,
    doEditAddress,
    doDeleteAddress,

    doGetAreas,

    doGetRewards,

    doGetwheelNum,
    doSpinWheel,
    doGetHome,
    doApplyPromoCode,
    doGetDeals,
    doGetWallet,
    doRedeemReward,
    doSearchMenu,
    doGetLatestOrder,

    doSuccessPaymentOnline
};

export default AppThunks;

