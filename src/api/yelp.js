import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer DZpZNt-82s_mrvwCCirrcZdF00J-gc3PjP6JpUDUWXupNp48tvc3tXHm5Z_ZuO5Yo_Kdl7q5GiI0n4Fu9FbEdC1Dzu6DPns-4qbqFIJhaKjTlREr76WgaXaHtYx7YnYx'
    }
});