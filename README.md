# Cache-Red
While using any social media have you ever experienced that unless you refresh the age, the posts don't change? What's the reason behind this?

Well this is one such tutorial(more of a I learnt and built so sharing my learning experience)

Cache using Redis,hence the term *Cache-Red*
# Tech Used

<img src="https://miro.medium.com/max/1200/1*i1d88Q8NNrRv6kjf7Ssw4g.png">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/225px-Visual_Studio_Code_1.35_icon.svg.png" align=left>
<img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png">

# Explaination

We're accessing the data from [Link](https://docs.spacexdata.com/#81150545-5ab3-4552-b1f5-865b7f542033) and sending back to the user.

Now if user calls our *API* 10 times,we will be calling the *API* 10 times to access data from website,even if the data is fix.

This consumes a lot of time. Hence we use ```Redis``` to cache the data we fetched and use it for next 9 times,therby reducing the overall time to call *API* 10 times.

# What is Caching(my understanding)
Storing data that won't be changing for a while to avoid extra work.

# Why Redis though?
Because we can store the data on the redis server and remove it after a certain expiration time(meaning we don't have to use any other *API* to fetch the cached data).

# How to use this code?
```
- git clone https://github.com/shivamsouravjha/Cache-Red.git
- cd Cache-Red
- npm install
- npm start
Probably you will get an error,becasue you've not started your redis serever.
Go and install it and start it. 
- npm start
- Call the Postman APIs.
```

# Some Libraries that were used:

* Express.js
* Axios
* Promisify

# How I learnt this
~~I read the documentation and followed it~~ I followed few tutorials and understood and made this.
