const restaurants = [
{
"Id": 1,
"Location": "Dubai",
"Name": "Social House",
"Price": "$$$",
"Ratings": "4 Stars",
"Type": "Chinese",
"Image": "https://fryingpanadventures.com/wp-content/uploads/2020/10/image-131.jpeg",
"Precautions": "Outdoor Dining",
"Website": "https://www.alabbarenterprises.com/brands/social-house"
},
{
"Id": 2,
"Location": "Dubai",
"Name": "Texas De Brazil",
"Price": "$$",
"Ratings": "5 Stars",
"Type": "Brazilian",
"Image": "https://d1bv4heaa2n05k.cloudfront.net/user-images/1460016524839/shutterstock-309267611_main_1460016531797.jpeg",
"Precautions":  "No Outdoor Dining",
"Website": "gourmetgulf.com" 
},
{
"Id": 3,
"Location": "Dubai",
"Name": "Tresind Dubai",
"Price": "$$$$",
"Ratings": "5 stars",
"Type": "Indian",
"Image": "https://www.onceuponachef.com/images/2012/09/Chicken-Kebabs.jpg",
"Precautions":  "No Outdoor Dining",
"Website":"tresind.com"
},
{
"Id": 4,
"Location": "Dubai",
"Name": "Amazonico Dubai",
"Price": "$$$",
"Ratings": "5 Stars",
"Type": "Spanish",
"Image": "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160929095729-essential-spanish-dish-fideua-brindisa.jpg",
"Precautions": "Outdoor Dining",
"Website": "amazonicorestaurant.com"
},
{
"Id": 5,   
"Location": "Dubai",
"Name": "Hakkasan Dubai",
"Price": "$$",
"Ratings": "5 Stars",
"Type": "Chinese",
"Image":"https://i.ndtvimg.com/i/2017-08/noodles-620x350_620x350_41502436420.jpg",
"Precautions": "Outdoor Dining",
"Website": "https://www.atlantis.com/dubai/restaurants/hakkasan?utm_source=googleplaces&utm_medium=location&utm_content=listings&utm_campaign=hakkasan"
},
{
"Id": 6,
"Location": "Tokyo",
"Name": "Sakuratei",
"Price": "$$$",
"Ratings": "4.5 Stars",
"Type": "Japanese, Asian, Grill",
"Image": "https://media-cdn.tripadvisor.com/media/photo-s/18/96/ca/94/caption.jpg",
"Precautions": "No Outdoor Dining",
"Website": "https://www.sakuratei.co.jp/en/"
},
{
"Id": 7,
"Location": "Tokyo",
"Name": "Gyopao Gyoza Shinjuku",
"Price": "$$",
"Ratings": "5 Stars",
"Type": "Chinese, Asian, Taiwanese",
"Image": "https://media-cdn.tripadvisor.com/media/photo-s/1b/e3/b4/a1/caption.jpg",
"Precautions": "No Outdoor Dining",
"Website": "https://gyopao-shinjuku.com/"
},
{
"Id": 8,
"Location": "Tokyo",
"Name": "Yakumo Saryo",
"Price": "$$$$",
"Ratings": "4.5 Stars",
"Type": "Japanese, Japanese-Traditional Cuisine, Kaiseki",
"Image": "https://media.timeout.com/images/102827727/630/472/image.jpg",
"Precautions":  "Outdoor Dining",
"Website": "https://yakumosaryo.jp/e/"
},
{
"Id": 9,
"Location": "Tokyo",
"Name": "Kobe Beef 511",
"Price": "$$$$",
"Ratings": "4.5 Stars",
"Type": "Japanese, Steakhouse, Asian",
"Image":"https://cdn-japantimes.com/wp-content/uploads/2014/10/cg-restaurants-5112.jpg",
"Precautions":  "No Outdoor Dining",
"Website": "https://kobebeef511.jp/en/"
},
{
"Id": 10,
"Location": "Tokyo",
"RName": "Han no Daidokoro Honten",
"Price": "$$$$",
"Ratings": "5 Stars",
"Type": "Japanese, Steakhouse, Barbeque",
"Image": "https://media.cntraveler.com/photos/5c928d05bf833e107935b53e/16:9/w_2560%2Cc_limit/Han-no-Daidokoro_Mark-Parren-Taylor_2019-_TCO2998_MPT_HR.jpg",
"Precautions": "No Outdoor Dining",
"Website": "https://gurunavi.com/en/a143503/rst/?__ngt__=TT11cb87643005ac1e4a5a19UHtMMvxrhL_rrarwYvdejE"
},
{
"Id": 11,
"Location": "NYC",
"Name": "Vestry",
"Price": "$$$$",
"Ratings":" 5 Stars",
"Type": "Seafood, American",
"Image": "https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/the-vestry-full-site/media/the-vestry-restaurant-gallery-7-5f7c8ddc6562b.jpg",
"Precautions": "Outdoor Dining" ,
"Website": "https://www.vestrynyc.com/"
},
{
"Id": 12,
"Location": "NYC",
"Name": "abriel Kreuther",
"Price": "$$$$",
"Ratings": "4.6 Stars",
"Type": "French, Contemporary, Vegetarian-Friendly",
"Image": "https://resizer.otstatic.com/v2/photos/wide-huge/1/25852906.jpg",
"Website": "https://www.gabrielkreuthernyc.com/"
},
{
"Id": 13,
"Name": "Le Bernardin",
"Price": "$$$$",
"Ratings": "4.7 Stars",
"Type": "Seafood, French, Vegetarian-Friendly",
"Image": "https://www.shawmut.com/assets/images/back_end/portfolio/1_1423232488_LeBernardin-NYC_4.jpg",
"Precautions":  "No Outdoor Dining",
"Website": "https://www.le-bernardin.com/"
},
{
"Id": 14,
"Name": "Momofuku Ko",
"Price": "$$$$",
"Ratings": "4.5 Stars",
"Type": "International, Asian, Fusion", 
"Image": "https://rs.wescover.com/c_limit,f_auto,q_auto,w_500/v1/wescover-image-store/kqjtfw8k7ivufwuqyza0",
"Precautions":  "Outdoor Dining",
"Website": "https://ko.momofuku.com/"
},
{
"Id": 15,
"Name": "ISODI",
"Price": "$$$",
"Ratings": "4.5 Stars",
"Type": "Italian",
"Image": "https://media.timeout.com/images/100262129/630/472/image.jpg",
"Precautions":  "No Outdoor Dining",
"Website": "https://www.isodinyc.com/"
}
]