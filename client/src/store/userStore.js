import {makeAutoObservable, runInAction} from "mobx";

class UserStore {
    user = window.localStorage.getItem('user') || ''

    constructor() {
        makeAutoObservable(this);
    }

    setUser(username) {
        runInAction(() => {
            this.user = username
        })
    }
}

const userStore = new UserStore();
export default userStore;