import axios from "axios"

class DiagnosisService {
  uploadAnalysis(formData: FormData)
  {
    return axios.post('http://10.29.85.73:8090/upload',
                  formData,
                  {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                  }
      )
  }
}
const diagnosisService = new DiagnosisService()
export {
  diagnosisService
}