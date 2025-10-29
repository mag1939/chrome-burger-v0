# Learning HTML with the Chrome & Burger Landing Page

This guide will walk you through the `index.html` file created for the Chrome & Burger landing page, explaining the different HTML elements and how they are used to structure the page.

## Basic HTML Document Structure

Every HTML document has a basic structure that looks like this:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Content for the head goes here -->
</head>
<body>
    <!-- Content for the body goes here -->
</body>
</html>
```

*   `<!DOCTYPE html>`: This declaration defines that this document is an HTML5 document.
*   `<html>`: This is the root element of an HTML page.
*   `<head>`: This element contains meta-information about the HTML page, such as the title and links to stylesheets.
*   `<body>`: This element contains the visible content of the HTML page.

## The `<head>` Section

The `<head>` section of the `index.html` file contains the following elements:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chrome & Burger</title>
</head>
```

*   `<meta charset="UTF-8">`: This specifies the character encoding for the HTML document. UTF-8 is a standard character encoding that supports most characters and symbols.
*   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: This gives the browser instructions on how to control the page's dimensions and scaling. This is important for making the website responsive, meaning it will look good on different devices (desktops, tablets, and phones).
*   `<title>`: This sets the title of the page, which is displayed in the browser's title bar or in the page's tab.

## The `<body>` Section

The `<body>` section contains the visible content of the page. The `index.html` file is structured using semantic HTML5 tags, which give meaning to the content and help search engines and screen readers to understand the page's structure.

### `<header>`

The `<header>` element represents a container for introductory content or a set of navigational links. In the `index.html` file, the header contains the business name and the main navigation menu.

```html
<header>
    <h1>Chrome & Burger</h1>
    <nav>
        <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>
```

*   `<h1>`: This is a heading tag. `<h1>` is the most important heading, and it is used for the main title of the page.
*   `<nav>`: This tag defines a set of navigation links.
*   `<ul>`: This is an unordered list, which is used to group a set of items.
*   `<li>`: This is a list item.
*   `<a>`: This is an anchor tag, which is used to create hyperlinks. The `href` attribute specifies the URL of the page the link goes to. In this case, the links are internal links that point to different sections of the same page.

### `<main>`

The `<main>` tag specifies the main content of a document. The `index.html` file has a `<main>` element that contains the following sections:

*   `#hero`: A section with a heading and a short description of the business.
*   `#menu`: A section with the menu items.
*   `#about`: A section with information about the business.
*   `#contact`: A section with the contact information.

### `<section>`

The `<section>` tag defines a section in a document. Each section in the `index.html` file has a unique `id` attribute, which allows us to link to it from the navigation menu.

### `<article>`

The `<article>` tag specifies independent, self-contained content. In the menu section, each menu item is wrapped in an `<article>` tag.

### `<footer>`

The `<footer>` tag defines a footer for a document or section. The footer in the `index.html` file contains the copyright information.

```html
<footer>
    <p>&copy; 2025 Chrome & Burger</p>
</footer>
```

*   `<p>`: This is a paragraph tag, which is used for text.

By using these semantic HTML5 tags, we create a well-structured and meaningful HTML document that is easy to read, understand, and maintain.