import axios from 'axios';

import CONFIG from '../Config/config';

var service = async function () {
    try {
        var API_URL = CONFIG.API_URL;
        return await axios.get(API_URL, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                return (response.data);
            })
            .catch(async function (error) {
                return (error.response.data)
            });
    } catch (err) {
        return { status: false, message: "Something went wrong." }
    }
};

module.exports = service;
