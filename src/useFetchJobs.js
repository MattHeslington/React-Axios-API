import { useReducer } from 'react'



const ACTIONS = {
    MAKE_REQUEST:'make-request',
    GET_DATA:'get-data',
    ERROR:'error'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return{ loading:true, jobs:[] }
        case ACTIONS.GET_DATA:
            return{ ...state, loading: false, jobs: action.payload.jobs }
        case ACTIONS.ERROR:
            XXXXXXXXXXX
    }
}

export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true, })
}