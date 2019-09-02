import { any } from "prop-types";
import http from './http';


var connection = (function () {
    return {
        download: download,
        upload: upload,
        authenticate: authenticate,
        signout: signout,
        registerUser: registerUser,

        setTokenHeader: setTokenHeader
    };

    function registerUser(firstname: any, lastname: any, username: any, password: any) {
        var data = {
            "username": username,
            "password": password,
            "firstName": firstname,
            "lastName": lastname
        }
        return http.post('register', JSON.stringify(data), [{ name: 'Content-Type', value: 'application/json' }])
    }

    function authenticate(username: any, password: any) {
        var headers = [
            { name: 'Content-Type', value: 'application/json' },
            { name: 'username', value: username },
            { name: 'password', value: password }
        ];
        return http.post('auth', null, headers);
    }

    function download() {
        return http.get('read', []);
    }

    function upload(data: any) {
        return http.post('write', JSON.stringify(data), [{ name: 'Content-Type', value: 'application/json' }]);
    }

    function signout() {
        setTokenHeader('');
    }

    function setTokenHeader(token: any) {
        http.setDefaultHeader('token', token);

    }

}());

export default connection; 