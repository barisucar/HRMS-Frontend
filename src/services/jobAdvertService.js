import axios from "axios"

export default class JobAdvertService {
    
    getJobAdvert() {
        return axios.get("http://localhost:8080/api/JobAdvertisements/getall")
    }
    
    addJobAdvert() {
        return axios.post("http://localhost:8080/api/JobAdvertisements/add" )
    }

    confirmJobAdvert(id) {
        return axios.post("http://localhost:8080/api/JobAdvertisements/getAllConfirmedJobAdvertisements?id"+id)
    }


}