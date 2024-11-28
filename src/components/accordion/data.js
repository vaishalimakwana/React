const data = [
  {
    id: '1',
    question:
      '1. What is the role of the useState hook in the accordion component?',
    answer:
      "Answer: The useState hook is used to manage the state of the currently selected accordion item. It initializes with a value of null, meaning no item is selected by default. When an accordion item is clicked, the selected state is updated to either the clicked item's ID (if it's not already selected) or null (if the clicked item is already selected).",
  },
  {
    id: '2',
    question:
      '2. How does the accordion component determine which item is expanded?',
    answer:
      "Answer: The component uses the selected state to track the currently expanded item. Each item has an id, and when an item is clicked, its id is passed to the handlesingleSelection function. If the clicked item's id matches the current selected state, the corresponding item's content is shown. Otherwise, the content is hidden.",
  },
  {
    id: '3',
    question:
      '3. What does the handlesingleSelection function do in the accordion?',
    answer:
      "Answer: The handlesingleSelection function handles the logic for expanding or collapsing an accordion item. It compares the id of the clicked item (getCurrentid) with the current selected state. If the clicked item is the same as the currently selected one, it collapses the item by setting selected to null. If it's a different item, it sets the selected state to the clicked item's id, expanding that item.",
  },
  {
    id: '4',
    question: '4. What happens when no data is provided in the data array?',
    answer:
      'Answer: If the data array is empty or null, the component renders a message: "No data found!" This is handled by the conditional rendering inside the return statement. If data exists and has length greater than 0, the accordion items are rendered; otherwise, the "No data found!" message is displayed.',
  },
  {
    id: '5',
    question:
      '5. Why does the span inside the div with the className="title" have a + symbol?',
    answer:
      'Answer: The + symbol inside the span tag serves as a visual indicator for the user. It could be used as a part of the accordion toggle mechanism to represent that the section can be expanded. However, there is no functionality currently associated with it in the code provided. Typically, it could be replaced with a - symbol when the accordion item is expanded, showing that the item can be collapsed. But in this case, the + symbol is static and does not change.',
  },
];
export default data;
