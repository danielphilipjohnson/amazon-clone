<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[![Daniel Philip Johnson header](https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/banner/banner.png)](https://danielphilipjohnson.github.io/)
<br />

<p align="center">
  <a href="https://github.com/danielphilipjohnson/amazon-clone">
    <h1 align="center">Amazon Clone README</h1>
  </a>
</p>

<p align='center'>
  <a href="https://codepen.io/danielphilipjohnson/"><img height="30" src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/codepen.png"></a>&nbsp;&nbsp;
  <a href="https://twitter.com/danielp_johnson"><img height="30" src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/twitter.png"></a>&nbsp;&nbsp;
  <a href="https://www.instagram.com/danielphilipjohnson/"><img height="30" src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/instagram.jpg"></a>&nbsp;&nbsp;
  <a href="/"><img height="30" src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/dev.webp"></a>
  <a href="https://www.linkedin.com/in/daniel-philip-johnson/"><img height="30" src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/linkedin.png"></a>
</p>

  <p align="center">
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/danielphilipjohnson/amazon-clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/danielphilipjohnson/amazon-clone/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

An Amazon React clone that is responsive, accessible and performant on all devices. The state for the app is managed via a useReducer which deals with setting a user and dealing with the cart logic. It is styled using BEM and vanilla CSS. I have altered the design slightly to make it unique and also made personal improvements to the overall look. The website supports user login by using google firestore. Once logged in a user can then check out their cart and make a payment via stripe. The user can also search products which uses algolia to filter products.

### Built With

Here are some of the major framworks I used for this project.

- [React](https://reactjs.org/)
- [Firebase](https://github.com/firebase/firebase-js-sdk/)
- [Algolia](https://github.com/algolia/algoliasearch-client-javascript#readme)
- [Stripe](https://www.npmjs.com/package/@stripe/react-stripe-js)

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/danielphilipjohnson/amazon-clone.git
   ```
2. Change into React Calculator App
   ```sh
   cd "amazon-clone"
   ```
3. Install dependencies
   ```
   yarn add
   ```
4. Builds the app for production to the `build` folder.\
   It correctly bundles React in production mode and optimizes the build for the best performance.
   ```JS
   yarn build
   ```

## Project requirements

---

### Styleguide

This project uses the air bnb: https://airbnb.io/javascript/react/ style guide for react.

### Project Process

1. Create React App
2. Review the Project Structure to use
3. Run our Project
   1. npm start
4. Running Tests with React Testing Library
   1. Setup test
   2. npm run test
5. Build the project and tests: TDD
6. Installing Dependencies
7. Working with Images and other Assets
8. Changing App Meta Data
9. Build App to Publish It

### Project structure

    src
      |---adapters
      |---common
      |---components
      |---images
      |---reducer
      |---routes

#### V2 will include some changes to structure

Currently it scales okay but soon it might run into some issues.

This is a possible solution

      /src
        /shared
        /cart
          /shared
          /component
          /api
          /reducers
          /actions

### Adapters

#### File structure

    |---xhr
    |---home-page-adapter
    |---checkout-adapter`

##### Example: home-page-adapter

    export function getData(){
      return get(someUrl);
    }

### React Components

#### File structure

    |── home-component
    |── sub-card-component
    |── index.jsx
    |── component.test.tsx
    ├── utils.test.ts
    component.test.tsx
    index.jsx

### React Common

#### File structure

    |── button-component
    |── AuthForm-component
      |── index.jsx
    |── component.test.tsx
    component.test.tsx
    index.jsx

### Code Smells

Avoid Large render Methods, lots of props

- no more than 150 lines of code
  Too many props: preference no more than 6
- Refactor into smaller component
  Incompatible props
- user Prop and basket Prop
  Don't copy props into state

##### Example

    function Button({ text }) {
      const [formattedText] = useState(() => slowlyFormatText(text))

      return <button>{formattedText}</button>
    }

#### Don't Return JSX from functions

    return (
      <div>
        {topSection()}
        {middleSection()}
        {bottomSection()}
      </div>
    )

To solve it I either inline the JSX because a large return isn't that big of a problem, but more often this is a reason to break these sections into separate components instead

#### Multiple booleans for state

Avoid using multiple booleans to represent a components state.

function Component() {
const [isLoading, setIsLoading] = useState(false)
const [isFinished, setIsFinished] = useState(false)
const [hasError, setHasError] = useState(false)

    const fetchSomething = () => {
    setIsLoading(true)

        fetch(url)
          .then(() => {
            setIsLoading(false)
            setIsFinished(true)
          })
          .catch(() => {
            setHasError(true)
          })
    }

    if (isLoading) return <Loader />
    if (hasError) return <Error />
    if (isFinished) return <Success />

    return <button onClick={fetchSomething} />
    }

A better way to handle this is to manage the state with an "enum" instead.

    const [state, setState] = useState('idle')

    const fetchSomething = () => {
    setState('loading')

        fetch(url)
          .then(() => {
            setState('finished')
          })
          .catch(() => {
            setState('error')
          })

    }

    if (state === 'loading') return <Loader />
    if (state === 'error') return <Error />
    if (state === 'finished') return <Success />

#### Too many useState

A component with many useState hooks is likely doing Too Many Things™️ and probably a good candidate for breaking into multiple components

    function AutocompleteInput() {
        const [isOpen, setIsOpen] = useState(false)
        const [inputValue, setInputValue] = useState('')
        const [items, setItems] = useState([])
        const [selectedItem, setSelectedItem] = useState(null)
        const [activeIndex, setActiveIndex] = useState(-1)

        const reset = () => {
          setIsOpen(false)
          setInputValue('')
          setItems([])
          setSelectedItem(null)
          setActiveIndex(-1)
        }

        const selectItem = (item) => {
          setIsOpen(false)
          setInputValue(item.name)
          setSelectedItem(item)
        }
        ...
      }

In these cases it can be beneficial to manage our state with a useReducer hook instead:

    const initialState = {
      isOpen: false,
      inputValue: "",
      items: [],
      selectedItem: null,
      activeIndex: -1
    }
    function reducer(state, action) {
      switch (action.type) {
        case "reset":
          return {
            ...initialState
          }
        case "selectItem":
          return {
            ...state,
            isOpen: false,
            inputValue: action.payload.name,
            selectedItem: action.payload
        }
        default:
          throw Error()
      }
    }

    function AutocompleteInput() {
      const [state, dispatch] = useReducer(reducer, initialState)

      const reset = () => {
        dispatch({ type: 'reset' })
      }

      const selectItem = (item) => {
        dispatch({ type: 'selectItem', payload: item })
      }
      ...
    }

#### Large useEffect

Avoid large useEffects that do multiple things. They make your code error-prone and harder to reason about.

    useEffect(() => { // when id changes fetch the post
      fetch(`/posts/${id}`).then(/_ ... _/)
    }, [id])

    useEffect(() => { // when unlisted changes update visibility
      setVisibility(unlisted)
    }, [unlisted])

##### Prefer conditionals over ( && )Iteme tools can detect and indicate when your tests are not covering one of the branches.

    if (contacts.length) {
      contactsElements = contacts.map(contact => (

        <li key={contact.id}>
        {contact.firstName} {contact.lastName}
        </li>
      ))
    }
    return (
      <div>
        <ul>{contactsElements}</ul>
      </div>
    )

not

    {contacts.length ? contacts.map(contact => (

      <li key={contact.id}>
        {contact.firstName} {contact.lastName}
      </li>
      ))
    : null}

#### Conventions

These are the following conventions:

##### Importing

    // Prefer
    import Total from '../cart/total'
    // vs
    import CartTotal from '../cart/cart-total

##### Naming Convention

    // Prefer the jsx Extension over Capital Letters
    section-nav.jsx
    // vs
    SectionNav.js

#### Always Use prop-type

    import PropTypes from 'prop-types;

    Greeting.propTypes = {
      name: PropTypes.string
    };

## Code Review: Google's Code Review Standards

The maximum length of time for a review should be one business day.

Reviewers should generally approve a change once it definitely improves the overall code health, even if it isn't perfect.

The key point Google seem to be making is that perfect code doesn't exist. If it makes it better, that is enough.

- Design: Is the code well-designed and appropriate for your system? Does this change belong in your codebase, or in a library? Does it integrate well with the rest of your system?

- Functionality: Does the code behave as the author likely intended? Is the way the code behaves good for its users? Mostly, we expect developers to test CLs well-enough that they work correctly by the time they get to code review.

- Complexity: Could the code be made simpler? Would another developer be able to easily understand and use this code when they come across it in the future? Is it over-engineered for its current use case?

- Tests: Does the code have correct and well-designed automated tests? Will the tests actually fail when the code is broken? Will they start producing false positives? Does each test make simple and useful assertions?

- Naming: Did the developer choose clear names for variables, classes, methods, etc.?

- Comments: Are the comments clear and useful? Ensure where sensible comments explain why something is being done, rather than how.

- Style & Consistency: Does the code follow our style guides?

- Documentation: Did the developer also update relevant documentation?

## How Googlers Review Code

There is a three-stage process for code review in Google's engineering practices.

1. Get a high level overview of the changes
   1. Look at the code change's description/summary. Does it all make sense?
2. Examine the main parts of the change
   1. Find the file or files that are central to the CL. Often, there is one file that has the largest number of changes, and it’s the major piece of the CL.
   2. Spend most of your focus reviewing these pieces. This provides context to all the smaller pieces, and generally makes it faster to review.
   3. If the CL is too large for you to get a good overview and understand the flow, it's a good sign the developer should be splitting up their CL into smaller changes.
3. Look through the rest of the code, in a sensible order
   1. Review Every Line of Code
   2. Understand the Context

## How Googlers Write Code Feedback

Ask for the why: If it is unclear why the author is doing things a certain way, feel free to ask why they made a particular change.

Find an end: If you like things neat, it’s tempting to go over a code review over and over until it’s perfect, dragging it out for longer than necessary. It’s soul-deadening for the recipient, though. Keep in mind that “LGTM” does not mean “I vouch my immortal soul this will never fail”, but “looks good to me”. If it looks good, move on. (That doesn’t mean you shouldn’t be thorough. It’s a judgment call.) And if there are bigger refactorings to be done, move them to a new CL.

If your reviewer has addressed your comments, or they have done some optimisation or smart code you like, thank them. Say you like the approach / how they have solved an issue.

## Github commit standard

Adopt de facto best practices

1. Have a commit message
2. Keep a short subject line
   1. Limit the subject line to 50 characters.
3. Don’t end the subject line with a period
4. Start with a capital letter
5. Link to an issue tracker

0 – Don’t git push straight to master
1 – Don’t commit code as an unrecognized author
Don’t leak secrets into source control
Don’t commit dependencies into source control
Lock package version
Specify standard package versions
Use a branch naming convention
Delete stale branches

## Github Commit message

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"

- the first line is treated as the subject of an email
- The blank line separating the summary from the body is critical
- the rest of the text as the body.

Bullet points, Typically a hyphen or asterisk followed by a single space, with blank lines in between

If you use an issue tracker, add a reference(s) to them at the bottom, like so: Resolves: #123

Specify the type of commit:

- feat: The new feature you're adding to a particular application
- fix: A bug fix
- style: Feature and updates related to styling
- refactor: Refactoring a specific section of the codebase
- test: Everything related to testing
- docs: Everything related to documentation
- chore: Regular code maintenance.[ You can also use emojis to represent commit types]
- Separate the subject from the body with a blank line
- Your commit message should not contain any whitespace errors
- Remove unnecessary punctuation marks
- Do not end the subject line with a period
- Capitalize the subject line and each paragraph
- Use the imperative mood in the subject line
- Use the body to explain what changes you have made and why you made them.
- Do not assume the reviewer understands what the original problem was, ensure you add it.
- Do not think your code is self-explanatory

## Github branch Convention

- feature branch
- develop : amazon projects
- hotfixes
- issues
- master: with tagging

## Yarn instructions

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<!-- CONTRIBUTING -->

## Contributing

Feel free to make any contributions, if you are learning open source and want to practice this is a great place to start.
Any contributions you make are **greatly appreciated**

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Daniel Philip Johnson - [@danielp_johnson](https://twitter.com/danielp_johnson) - daniel-philip-johnson@outlook.com

Project Link: [https://github.com/danielphilipjohnson/amazon-clone](https://github.com/danielphilipjohnson/amazon-clone)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [React](https://reactjs.org/)
- [Firebase](https://github.com/firebase/firebase-js-sdk/)
- [Algolia](https://github.com/algolia/algoliasearch-client-javascript#readme)
- [Stripe](https://www.npmjs.com/package/@stripe/react-stripe-js)

[contributors-shield]: https://img.shields.io/github/contributors/danielphilipjohnson/amazon-clone.svg?style=for-the-badge
[contributors-url]: https://github.com/danielphilipjohnson/amazon-clone/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/danielphilipjohnson/amazon-clone.svg?style=for-the-badge
[forks-url]: https://github.com/danielphilipjohnson/amazon-clone/network/members
[stars-shield]: https://img.shields.io/github/stars/danielphilipjohnson/amazon-clone.svg?style=for-the-badge
[stars-url]: https://github.com/danielphilipjohnson/amazon-clone/stargazers
[issues-shield]: https://img.shields.io/github/issues/danielphilipjohnson/amazon-clone.svg?style=for-the-badge
[issues-url]: https://github.com/danielphilipjohnson/amazon-clone/issues
[license-shield]: https://img.shields.io/github/license/danielphilipjohnson/amazon-clone.svg?style=for-the-badge
[license-url]: https://github.com/danielphilipjohnson/amazon-clone/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/danielphilipjohnson
[product-screenshot]: images/screenshot.png
