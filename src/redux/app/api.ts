import { api } from "../_axios"

const home = (data: any) => api.get(`home?${data}`)
const Skills = (data: any) => api.post(`api/skills`, data)
const latestOrder = () => api.get(`latest-order`)

const branches = (data: any) => api.get(`branches?${data}`)
const menu = (id: number) => api.get(`branches/${id}/menu`)
const categories = (id: number) => api.get(`branches/${id}/menu/categories`)
const cart = () => api.get(`cart`)
const addToCart = (data: any) => api.post(`cart`, data)
const updateCart = (id: number, count: number) => api.post(`update-cart-item-quantity/${id}`, { quantity: count })
const deleteItemInCart = (id: number) => api.delete(`cart/${id}`)

const addOrder = (data: any) => api.post(`orders`, data)
const Orders = () => api.get(`orders`)

const favorites = () => api.get(`favorites`)
const favoritesAdd = (id: number) => api.post(`favorites`, { item_id: id })
const favoritesDelete = (id: number) => api.delete(`favorites/${id}`)
const productDetail = (id: number, brancheId: number) => api.get(`branches/${brancheId}/menu/${id}`)

const faqs = () => api.get(`faqs`)

const addresses = () => api.get(`addresses`)
const singleAddress = (id: number) => api.get(`addresses/${id}`)
const addAddress = (data: any) => api.post(`addresses`, data)
const editAddress = (data: any, id: number) => api.post(`addresses/${id}`, data)
const deleteAddress = (id: number) => api.delete(`addresses/${id}`)

const areas = () => api.get(`areas`)

const rewards = () => api.get(`app-rewards`)
const getReward = (data: any) => api.post(`app-rewards`, data)

const wheelNum = () => api.get(`app-wheel-rewards`)
const spinWheel = () => api.post(`app-wheel-rewards`)
const applypromo = (data: any) => api.post(`promo-code`, data)
const paymentOnline = (data: any) => api.post(`update-orders-payment-status`, data)

const deals = () => api.get(`app-deals`)
const wallet = () => api.get(`wallet`)
const search = (text: any, brancheId: number) => api.get(`branches/${brancheId}/search-menu?search=${text}`)



const AppAPI = {
    Skills,
    home,
    branches,
    latestOrder,
    categories,
    menu,
    productDetail,
    cart,
    addToCart,
    updateCart,
    deleteItemInCart,

    addOrder,
    Orders,

    favorites,
    favoritesAdd,
    favoritesDelete,

    faqs,

    addresses,
    singleAddress,
    addAddress,
    editAddress,
    deleteAddress,

    areas,

    rewards,
    getReward,

    wheelNum,
    spinWheel,
    applypromo,
    deals,
    wallet,
    search,
    paymentOnline
};

export default AppAPI;
