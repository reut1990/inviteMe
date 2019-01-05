import { stat } from "fs";

export default {
    state: {
        currentIdx: null,
        currenEditing: null,
        templateCmps: null,
        generalStyle: {}
    },
    mutations: {
        setUserStyle(state, { field, css, currCmpPart }) {
            const cmp = state.templateCmps.find(cmp => cmp.id === currCmpPart)
            cmp.data.css[field] = css[field]; 
        },
        setMap(state, { field, data, currCmpPart }) {
            const cmp = state.templateCmps.find(cmp => cmp.id === currCmpPart)
            cmp.data =field.data;// check why//// 
        },
        setAddMap(state, {map}){
              state.templateCmps.push(
              map
              );
        },
        setGenralStyle(state, { field, css }) {
            state.generalStyle[field] = css[field];
        },
        setCurrTemplate(state, context) {
            state.templateCmps = context.payload.tmpData.cmps;           
            state.generalStyle = context.payload.tmpData.generalStyle;
        },
        updateUserTxt(state, newTxt, id) {
            state.templateCmps.find(cmp => {
                if (cmp.id === id) {
                    cmp.data.txt = newTxt
                }
            })
        },
        changecurrenEditing(state, { id }) {
            state.currenEditing = id
        },
        removeEditingFrame(state){
            state.currenEditing=null
        },
    },
    actions: {
        setUserStyleOfCmp(context, { field, css, currCmpPart }) {
            context.commit({ type: 'setUserStyle', field, css, currCmpPart })
        },
        setGenralStyle(context, { field, css }) {
            context.commit({ type: 'setGenralStyle', field, css })
        },
        addMap(context, {map}){
            context.commit({ type: 'setAddMap', map});
        },
        setUserMap(context, {field, data, currCmpPart}){
            context.commit({ type: 'setMap', field, data,  currCmpPart})
        },
        removeEditingFrame(context){
            context.commit({type: 'removeEditingFrame'})
        },
        updateTxt(context, { newTxt, cmpId }) {
            context.commit({ type: 'updateUserTxt', newTxt, cmpId })
        },
        setCurrTemplate(context, payload) {
            context.commit({ type: 'setCurrTemplate', payload })
        },
        changeEditingStatus(context, { id }) {
            context.commit({ type: 'changecurrenEditing', id })
        }
    },
    getters: {
        dynamicCmps: state => state.templateCmps,
        generalStyle: state => state.generalStyle,
        currenEditing: state => state.currenEditing,
        
    }
}