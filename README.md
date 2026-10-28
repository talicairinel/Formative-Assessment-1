# Web Refresher (CCO5104-20P)

A small responsive, interactive page built with plain HTML5, CSS and JavaScript as a refresher for Web Development II.

## Files

- `index.html` - the page structure (header, nav, main, sections, footer)
- `css/style.css` - styles, with Flexbox, Grid and a media query for wider screens
- `js/script.js` - the theme switcher, the show/hide goals and the contact form feedback
- `assets/laptop.svg` - the illustration used in the hero section

## How to run it

Open `index.html` in a browser. 

## What the page does

- **Theme switcher:** the button in the header switches between light and dark mode and remembers the choice.
- **Show/hide goals:** each goal in "What I want to get better at" opens and closes.
- **Form feedback:** the contact form checks the fields and shows an error or a thank-you message. Nothing is sent anywhere.

## Testing

I tested the page in the browser developer tools at two sizes: 390px wide (a phone) and 1280px wide (a desktop).

- **Layout:** at both sizes everything fits the screen and there is no sideways scrolling. On the phone the header, hero section and skill cards stack in one column. From 700px wide the header and hero sit side by side.
- **Theme switcher:** the button switches between light and dark mode, and its label changes to match.
- **Show/hide goals:** each goal opens and closes when it is clicked, and the + and - sign changes with it.
- **Contact form:** I tried an empty form, an invalid email address (just the word "bad") and a complete form. Each one gave the right message.
- **Console:** no errors appeared in the console during any of these tests.

I did not find any layout or JavaScript errors this time, so there was nothing to fix.



## Reflection

The structure of the page felt straightforward. Semantic tags, order of headings, and both the Flexbox and Grid layout seemed logical after checking them out. The most difficult part was JavaScript. I analyzed each part of script.js individually, paying special attention to how click events change aria-expanded and hidden for goals and how fields validate to display messages. It was quite a difficult part to visualize because of the mobile-first design.The main skill that I want to develop in Web Dev II is to learn writing JavaScript in deep.
The most important thing was to have full knowledge,test it and retest it before submitting it.




## References


MDN Web Docs (n.d. a) Basic concepts of flexbox. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts (Accessed: 18 October 2026).

MDN Web Docs (n.d. b) Basic concepts of grid layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts (Accessed: 19 October 2026).

MDN Web Docs (n.d. c) EventTarget: addEventListener() method. Available at: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener (Accessed: 21 October 2026).

MDN Web Docs (n.d. d) Structuring documents. Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure (Accessed: 22 October 2026).

MDN Web Docs (n.d. e) Using media queries. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Media_Queries/Using_media_queries (Accessed: 23 October 2026).