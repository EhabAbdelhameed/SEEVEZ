import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";
import { EntityKeys } from "src/redux/keys";
import { RootState } from "../store";
import { initialState } from "./types";
import thunks from "./thunks";



const slice = createSlice({
    name: EntityKeys.APP,
    initialState: initialState,
    reducers: {
        logout: () => initialState,
        changeDone: (state, action) => { state.done = action.payload },
        changeNav: (state, action) => { state.Nav = action.payload },
        changePlaceOrderData: (state, action) => { state.placeOrderData = action.payload },
        changePromoValue: (state, action) => { state.PromoValue = action.payload },
        changeSearch: (state, action) => { state.Search = action.payload },
    },
    extraReducers(builder) {
        //doGetHome
        builder.addCase(thunks.doGetHome.fulfilled, (state, action) => {
            state.HomeData = action.payload?.data;
        });
        builder.addCase(thunks.doGetHome.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",   
                    text1: action.payload.data.message,
                })
            }
        });
           //doSkills
           builder.addCase(thunks.doSkills.fulfilled, (state, action) => {
            
        });
        builder.addCase(thunks.doSkills.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doGetBranches
        builder.addCase(thunks.doGetBranches.fulfilled, (state, action) => {
            state.Branches = action.payload?.data;
        });
        builder.addCase(thunks.doGetBranches.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });


        //getMenu
        builder.addCase(thunks.getMenu.fulfilled, (state, action) => {
            state.Menu = action.payload?.data?.all_items;
        });
        builder.addCase(thunks.getMenu.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //getCategories
        builder.addCase(thunks.getCategories.fulfilled, (state, action) => {
            state.categories = action.payload?.data;
        });
        builder.addCase(thunks.getCategories.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //getFavorites
        builder.addCase(thunks.getFavorites.fulfilled, (state, action) => {
            state.Favourites = action.payload?.data;
        });
        builder.addCase(thunks.getFavorites.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //getFaqs
        builder.addCase(thunks.getFaqs.fulfilled, (state, action) => {
            state.FAQS = action.payload?.data;
        });
        builder.addCase(thunks.getFaqs.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //getAllAddresses
        builder.addCase(thunks.getAllAddresses.fulfilled, (state, action) => {
            state.Addresses = action.payload?.data;
        });
        builder.addCase(thunks.getAllAddresses.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doAddAddress
        builder.addCase(thunks.doAddAddress.fulfilled, (state, action) => {
            state.done = true
            Toast.show({
                type: "success",
                text1: 'Address added successfully',
            })
        });
        builder.addCase(thunks.doAddAddress.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doEditAddress
        builder.addCase(thunks.doEditAddress.fulfilled, (state, action) => {
            state.done = true
            Toast.show({
                type: "success",
                text1: 'Address edited successfully',
            })
        });
        builder.addCase(thunks.doEditAddress.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doGetProductDetail
        builder.addCase(thunks.doGetProductDetail.fulfilled, (state, action) => {
            state.ProductDetail = action.payload.data
        });
        builder.addCase(thunks.doGetProductDetail.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doGetMyCart
        builder.addCase(thunks.doGetMyCart.fulfilled, (state, action) => {
            state.CartItems = action?.payload?.data?.items
        });
        builder.addCase(thunks.doGetMyCart.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doAddToCart
        builder.addCase(thunks.doAddToCart.fulfilled, (state, action) => {
        });
        builder.addCase(thunks.doAddToCart.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doUpdateItemCart
        builder.addCase(thunks.doUpdateItemCart.fulfilled, (state, action) => {
            state.CartItems = action?.payload?.data?.items
        });
        builder.addCase(thunks.doUpdateItemCart.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doGetOrders
        builder.addCase(thunks.doGetOrders.fulfilled, (state, action) => {
            state.orders = action?.payload?.data
        });
        builder.addCase(thunks.doGetOrders.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doAddToOrder
        builder.addCase(thunks.doAddToOrder.fulfilled, (state, action) => {
            state.done = true
        });
        builder.addCase(thunks.doAddToOrder.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doGetAreas
        builder.addCase(thunks.doGetAreas.fulfilled, (state, action) => {
            state.Areas = action?.payload?.data
        });
        builder.addCase(thunks.doGetAreas.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doGetRewards
        builder.addCase(thunks.doGetRewards.fulfilled, (state, action) => {
            state.Rewards = action?.payload?.data
        });
        builder.addCase(thunks.doGetRewards.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });
        //doGetRewards
        builder.addCase(thunks.doRedeemReward.fulfilled, (state, action) => {
            Toast.show({
                type: "success",
                text1: 'Reward claimed successfully',
            })
        });
        builder.addCase(thunks.doRedeemReward.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doGetwheelNum
        builder.addCase(thunks.doGetwheelNum.fulfilled, (state, action) => {
            state.wheelNumbers = action?.payload?.data
        });
        builder.addCase(thunks.doGetwheelNum.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doApplyPromoCode
        builder.addCase(thunks.doApplyPromoCode.fulfilled, (state, action) => {
            state.PromoValue = action?.payload?.data
        });
        builder.addCase(thunks.doApplyPromoCode.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doGetDeals
        builder.addCase(thunks.doGetDeals.fulfilled, (state, action) => {
            state.deals = action?.payload?.data
        });
        builder.addCase(thunks.doGetDeals.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });


        //doGetWallet
        builder.addCase(thunks.doGetWallet.fulfilled, (state, action) => {
            state.points = action?.payload?.data
        });
        builder.addCase(thunks.doGetWallet.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });


        //doSearchMenu
        builder.addCase(thunks.doSearchMenu.fulfilled, (state, action) => {
            state.Search = action?.payload?.data
        });
        builder.addCase(thunks.doSearchMenu.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });

        //doGetLatestOrder
        builder.addCase(thunks.doGetLatestOrder.fulfilled, (state, action) => {
            state.order = action?.payload?.data
        });
        builder.addCase(thunks.doGetLatestOrder.rejected, (state, action: any) => {
            if (action.payload.data.message == "Validation error.") {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.error,
                })
            } else {
                Toast.show({
                    type: "error",
                    text1: action.payload.data.message,
                })
            }
        });
    },
})

export const selectBranches = (state: RootState) => state.app.Branches
export const selectCategories = (state: RootState) => state.app.categories
export const selectMenu = (state: RootState) => state.app.Menu
export const selectHomeData = (state: RootState) => state.app.HomeData
export const selectLatestOrder = (state: RootState) => state.app.order
export const selectCartItems = (state: RootState) => state.app.CartItems
export const selectProductDetail = (state: RootState) => state.app.ProductDetail
export const selectFavourites = (state: RootState) => state.app.Favourites
export const selectFAQS = (state: RootState) => state.app.FAQS
export const selectAddresses = (state: RootState) => state.app.Addresses
export const selectAreas = (state: RootState) => state.app.Areas
export const selectOrders = (state: RootState) => state.app.orders
export const selectRewards = (state: RootState) => state.app.Rewards
export const selectWheelNumbers = (state: RootState) => state.app.wheelNumbers
export const selectDone = (state: RootState) => state.app.done
export const selectNav = (state: RootState) => state.app.Nav
export const selectplaceOrderData = (state: RootState) => state.app.placeOrderData
export const selectPromoValue = (state: RootState) => state.app.PromoValue
export const selectDeals = (state: RootState) => state.app.deals
export const selectPoints = (state: RootState) => state.app.points
export const selectSearch = (state: RootState) => state.app.Search
export const selectBranchId = (state: RootState) => state.app.HomeData?.branch?.id

const AppSlice = {
    slice,
    logout: slice.actions.logout,
    changeDone: slice.actions.changeDone,
    changeNav: slice.actions.changeNav,
    changePlaceOrderData: slice.actions.changePlaceOrderData,
    changePromoValue: slice.actions.changePromoValue,
    changeSearch: slice.actions.changeSearch,
}
export default AppSlice