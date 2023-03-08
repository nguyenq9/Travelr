const apiKey = '0bCEaaaQ_WVREP6Je8AakwUwqHwIQkFinL8xz_9aF5V_vqTpiF5bKhNMKUtRAuMp0-cms3DIpvfKO3gJRPHqwdd9y7eG2qFBJ7de_RqVp7QY61s2KrzsLc8fkHToY3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            if (Array.isArray(jsonResponse?.businesses) && jsonResponse?.businesses?.length) {
                return jsonResponse.businesses.map((business) => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            } else {
                return [];
            }
        })
        .catch((err) => {
            console.log(err, 'any errors')
        })
    }
}

export default Yelp;