import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
})

export const modelsAPI = {
    getModels() {
        return instance.get('models')
            .then(res => {
                return res.data
            })
    }
}

export const modelAPI = {
    getModel(id) {
        return instance.get('models/' + id)
            .then(res => {
                return res.data
            })
    }
}

export const detailsAPI = {
    getDetails(id) {
        return instance.get('models/' + id + '/details')
            .then(res => {
                return res.data
            })
    }
}

export const detailAPI = {
    getDetail(id, detailId) {
        return instance.get('models/' + id + '/details/' + detailId)
            .then(res => {
                return res.data
            })
    }
}