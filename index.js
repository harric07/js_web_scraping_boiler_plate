// please tun below commands in your terminal:
// feel free to use npm or yarn to install dependencies;
// npm i express axios cheerio nodemon


const PORT = 8181;
const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');

const x = express();
const url = 'https://www.cp24.com/'
axios(url)
    .then(response => {
        const html = response.data
        console.log(html)
        const $ = cheerio.load(html)
        const articles = []
        $('.teaserTitle').each(function() {
            const title = $(this).text()
            const link = $(this).find('a').attr('href')
            articles.push({
                title,
                link
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))


x.listen(PORT, () => console.log(`server running on ${PORT}`));