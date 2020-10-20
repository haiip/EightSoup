import axios from 'axios';

export default  axios.create({
baseURL: 'https://api.yelp.com/v3/businesses',
headers: {
Authorization: 'Bearer Rfomh8cqlrnODeJQf3Gtvdp5GqIR0vZc-5XW7Occ-3f6TF_0bluJoOzxeQUE6jUwGU4-592FhcBVF1blfJJ0N8juKFcjpN51peuA_MPXsxw1UVUlEpvW0nnWcnyNX3Yx'
}

});

