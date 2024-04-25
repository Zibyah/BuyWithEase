export const routes = {
    landing(value='') {
        return "/landing"+value
    },
    product(){
        const landing = this.landing()
        return landing+"/product"
    }
}