# Upcoming Video Game Realease Wishlist

This a minimal TypeScript/React web application that may be used to view upcoming video game releases and track users’ wishlists. The web application will power four workflows:

- View the list of upcoming video game releases
- Add a video game to the wishlist
- Remove a video game from the wishlist
- View the list of video games added to the wishlist

This application was built on top of the awesome [RAWG dataset](https://rawg.io). It uses the RAWG API to search for and retrieve data about video games. 

# Getting Started

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

```sh
npm start
```

This starts the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


# Specs

---

### Design

When a user opens the web application, render a responsive page that includes the following:

- Header
    - Label: “Wishlist Maker”
    - Label: “Items: X” where “X” is the number of video games added to the wishilist
    - Checkbox: “Show all”
- Body
    - Table
        - Table Items
            - Image: a video game’s cover image
            - Label: a video game’s title
            - Label: a video game’s release date

Here is a low-fidelity wireframe of the responsive page in a wider format (i.e. for desktop screens):

![Desktop_Wireframe](https://user-images.githubusercontent.com/312335/174677505-1c14df42-91ef-4322-8ac3-d8e2d394e0c5.png)

![Mobile_Wireframe](https://user-images.githubusercontent.com/312335/174677526-8e855847-eae9-4e42-8a26-66921dd8e13a.png)
