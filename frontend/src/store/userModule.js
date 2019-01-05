import userService from '../services/userService.js';
import authService from '../services/authService.js';

export default {
    state: {
        user: { 
            loggedinUser: null,
            nickname: '',
            _id: '',
            password: ''
        },

    },

    getters: {
        // getUser(state) {
        //     return state.loggedinUser;
        // },
        // isUserLoggedIn: state => !!state.user._id,
        user: state => state.user
    },

    mutations: {
        setUser(state, { userDetails, id }) {
            console.log(id);
            state.user = userDetails;
            state.user.id=id;  
            console.log('in set user', state.user);

            // userService.login(user);
        },
    },

    // mutations: {
    //     setUser(state, { user }) {
    //         state.user = user
    //     }
    // },

    actions: {
        getUserById(context, userId) {
            return userService.getById(userId);
        },
        signup(context, { user }) {
            return authService.signup(user)
                .then(user => {
                    context.commit({ type: 'setUser', user });
                })
        },
        // login(context, { user, rememberPref }) {
        //     authService.getLoggedInUser()
        //         .then(sessionUser => {
        //             if (sessionUser) {
        //                 context.commit({ type: 'setUser', user: sessionUser, rememberPref })
        //             } else {
        //                 authService.checkUser(user)
        //                     .then(loggedInUser => {
        //                         context.commit({ type: 'setUser', user: loggedInUser, rememberPref })
        //                     });
        //             }
        //         })
        //         .catch(err => {
        //             console.log('DEBUG::err', err);
        //         })

        // },


        login(context, { userDetails }) {
            // console.log(userDetails);
            return authService.login(userDetails.nickname, userDetails.password, )
                .then(user => {
                    console.log('from service', user[0]._id)
                   context.commit({ type: 'setUser', userDetails, id:user[0]._id })
                    localStorage.setItem('loggedInUser', JSON.stringify(user))
                    // }
                    return user
                })
        },


        logout(context) {
            context.commit({ type: 'setUser', user: null })
            authService.logout()
        }


    },

}