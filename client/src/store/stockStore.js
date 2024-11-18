import {makeAutoObservable, runInAction} from "mobx";
import {addStock, getStocks, deleteStock, searchStocks, getStockQuote} from "../services/stockService";

class StockStore {
    loadingStocks = false
    loadingSearch = false
    stocks = []
    searchedStocks = []
    stockQuote = null
    error = null

    constructor() {
        makeAutoObservable(this);
    }

    async addStock(stock) {
        try {
            const addedStock = await addStock(stock)

            runInAction(() => {
                this.stocks.push(addedStock)
            })
        } catch (err) {
            runInAction(() => {
                this.error = 'Failed to add stock'
            })
        }
    }

    async deleteStock(stockId) {
        try {
            await deleteStock(stockId)

            const newStocks = this.stocks.filter(stock => stock._id !== stockId)

            runInAction(() => {
                this.stocks = newStocks
            })
        } catch (err) {
            runInAction(() => {
                this.error = 'Failed to delete stock'
            })
        }
    }

    async getStocks(username) {
        runInAction(() => {
            this.loadingStocks = true
        })

        try {
            const loadedStocks = await getStocks(username)

            runInAction(() => {
                this.stocks = loadedStocks
            })
        } catch (err) {
            console.error(err)

            runInAction(() => {
                this.error = 'Failed to load stocks'
            })
        } finally {
            runInAction(() => {
                this.loadingStocks = false
            })
        }
    }

    async searchStocks(query) {
        runInAction(() => {
            this.loadingSearch = true
        })

        try {
            const loadedStocks = await searchStocks(query)

            runInAction(() => {
                this.searchedStocks = loadedStocks
            })
        } catch (err) {
            runInAction(() => {
                this.error = 'Failed to search stocks'
            })
        } finally {
            runInAction(() => {
                this.loadingSearch = false
            })
        }
    }

    async getStockQuote(stockId, username) {
        try {
            const loadedQuote = await getStockQuote(stockId, username)

            runInAction(() => {
                this.stockQuote = loadedQuote
            })
        } catch (err) {
            runInAction(() => {
                this.error = 'Failed to load stock quote'
            })
        }
    }

    clearSearchedStocks() {
        runInAction(() => {
            this.searchedStocks = []
        })
    }

    clearStockQuote() {
        runInAction(() => {
            this.stockQuote = null
        })
    }

    clearStocks() {
        runInAction(() => {
            this.stocks = []
        })
    }

    clearError() {
        runInAction(() => {
            this.error = ''
        })
    }
}

const stockStore = new StockStore();
export default stockStore;