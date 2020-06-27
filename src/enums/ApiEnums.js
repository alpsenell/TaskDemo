/**
 * @class ApiEnums
 */
class ApiEnums {
    constructor () {
        this.BASE_URL = 'http://31.3.0.185:88/api';
        this.REGISTER = `${this.BASE_URL}/register`;
        this.LOGIN = `${this.BASE_URL}/login?`;
        this.USER_UPDATE = `${this.BASE_URL}/user/update`;
        this.FORGOT_PASSWORD = `${this.BASE_URL}/forgotPassword`;
        this.RESET_PASSWORD = `${this.BASE_URL}/resetPassword/`;
    }
}

export default new ApiEnums();
