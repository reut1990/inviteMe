

export default {
    state: {
        templates: [
            {
                name: 'Cooking Lessons',
                stars: 5,
                downloadNum: 10,
                id: 1,
                image: 'Loading Image...'
            },
            {
                name: 'Meet-up',
                stars: 4,
                downloadNum: 8,
                id: 2,
                image: 'Loading Image...'
            },
            {
                name: 'Social Network',
                stars: 3,
                downloadNum: 10,
                id: 3,
                image: 'Loading Image...'
            },
            {
                name: 'Reading club',
                stars: 1,
                downloadNum: 10,
                id: 4,
                image: 'Loading Image...'
            }
        ],
        currentTemplate: null,
        currentFilterStatus: 'all',
        filterByTxt: '',
        // sorter: {
        //   by: 'name',
        //   order: 1
        // },
        // filter: {
        //   type: null,
        //   val: ''
        // }
    },
    getters: {
        getTemplatesForDisplay: (state) => state.templates,
        getCurrTemplate: (state) => state.currentTemplate,
        getCurrentFilterStatus: (state) => state.currentFilterStatus,


    },
    mutations: {

    },



}



