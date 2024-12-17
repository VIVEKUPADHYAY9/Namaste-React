React js interview Qustion ///

Q1-What is React?

Answer: React is a JavaScript library for building user interfaces, developed by Facebook.
and React is called a single page application ,
in a react render cycle is very fast


Q2-What is JSX?

Answer: - JSx Allow use to write a HTML in react.
-JSX make it easier to write and add HTML in react,
-brower can not understands jsx,it only understands js.JSX are transpiled before it reaches to js engine in browser,
-transpiled means it will convert our the code to understand React or Browser.




Q3-What are components in React?

Answer: Components are reusable building blocks of a React application. They can be functional or class-based.
and they are JavaScript Function but returns HTML code(jsx)
  ex-  function Component(){
    return(
      <div>
      .
      .
      </div>
    )
  }
  export default Component,
-Component are of two types
1.functional components
2.class-based components


Q4-What is the difference between state and props?

Answer:
-State: a state is a buit-in react object is use for contain the data or information about the component.
-A component`s state can change overtime;whenever it changes components re-renders,
Holds data that can change over time. Managed within the component.
Props: Passed from parent to child component as read-only data.


Q5-What is the virtual DOM in React?

Answer: The virtual DOM is a lightweight copy of the real DOM. React uses it to determine the minimum updates required, improving performance.



Q6-What is the use of the useState hook?

Answer: useState is a React hook that allows you to add state to functional components.


Q7-What is the purpose of the useEffect hook?

Answer: useEffect is used to handle side effects, such as data fetching or updating the DOM after render.



Q8-What is the difference between controlled and uncontrolled components?

Answer:
Controlled: Input values are controlled by React state.
Uncontrolled: Input values are managed by the DOM itself.



Q9-What are React fragments?

Answer: React fragments (<></> or <React.Fragment>) allow grouping of multiple elements without adding an extra DOM node.



Q10-What are keys in React lists?

Answer: Keys help React identify and update items efficiently in a list. They should be unique among siblings.



Q11-What is the difference between React and other frameworks like Angular or Vue?

Answer: React focuses on UI (component-based architecture) and uses a virtual DOM, while Angular is a full-fledged MVC framework, and Vue combines features of both.


Q12-What are props drilling and context API?

Answer:
Props Drilling: Passing props through multiple components to reach a child component.
Context API: Provides a way to share values without explicitly passing props through every level.


Q13-What is React Router?

Answer: React Router is used for client-side navigation, enabling single-page applications (SPAs) to handle routes.


Q14-What is Redux? Why is it used?

Answer: Redux is a state management library used for managing complex application states in a predictable way.
