import axios from "axios"

export default class JobAdvertService {
    
    getJobAdvert() {
        return axios.get("http://localhost:8080/api/JobAdvertisements/getall")
    }
    
    addJobAdvert(values) {
        return axios({
            url: "http://localhost:8080/api/JobAdvertisements/add",
            method: "post",
            data: values,
          
          })
        //post("http://localhost:8080/api/JobAdvertisements/add", values)
    }

    confirmJobAdvert(id) {
        return axios.post("http://localhost:8080/api/JobAdvertisements/getAllConfirmedJobAdvertisements?id"+id)
    }


}
