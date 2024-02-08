//to create/edit/change we use setCookie
function setCookie(name, value, days = 365) {
     var d = new Date();
     d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
     var expires = "expires=" + d.toUTCString();
     if (typeof value === 'object') {
          value = JSON.stringify(value);
     }

     document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;SameSite=None;Secure";
}
//to get cookies value, if cookies does not exists it returns nothing means blank ''
function getCookie(name) {
     var name = name + "=";
     var decodedCookie = decodeURIComponent(document.cookie);
     var ca = decodedCookie.split(';');
     for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
               c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
               return c.substring(name.length, c.length);
          }
     }
     return "";
}