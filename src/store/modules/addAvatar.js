import firebase from "firebase/app";

export default {
    state: {
        avatar: null,
    },

    getters: {
        avatar(state) {
            return state.avatar;
        },
    },

    mutations: {
        setAvatar(state, avatar) {
            state.avatar = avatar;
        },
    },

    actions: {
        setAvatar({ getters }, image) {
            const storageRef = firebase.storage().ref();
            storageRef.child(`${getters.accountId}.png`).put(image);
        },

        getAvatar({ commit, getters }) {
            const storageRef = firebase.storage().ref().child(getters.accountId + '.png');

            storageRef.getDownloadURL()
                .then(url => {
                    commit('setAvatar', url)
                })
        }
    },
};
