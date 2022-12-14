# Simple-Cookie-Dealer
### Make dealing with cookies simpler.

This package was made just to learn more about how cookies worked, in a really simple way, and to make it so I and others can add cookies in a simpler way. 

The code itself is really simple and doesn't do anything too advanced. But I still thought it would be good practice to do this. 

##### Usage
```
npm i simple-cookie-dealer
```

Once it's installed you can import it such as:
```
import SimpleCookieDealer from 'simple-cookie-dealer'
```

To create a new cookie:
```
const cookie = () => SimpleCookieDealer('NameOfCookie', 'Value', {
  action: 'create',
})
```
You can then call upon this function to create a new cookie.

To delete existing cookie:
```
const cookie = () => SimpleCookieDealer('NameOfCookie', 'Value', {
  action: 'delete',
})
```

To set specific expired date and create:
```
const cookie = () => SimpleCookieDealer('NameOfCookie', 'Value', {
  expires: "December 31, 2022 23:59:00"
})
```

##### Sidenote
This uses the doc information on your website to actually gather all information onto the cookie. So it should populate the path and the domain on its own. 
