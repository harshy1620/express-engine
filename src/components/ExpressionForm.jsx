import React, { useState } from "react";
import Form from "./Form";
import JSONView from "react-json-view";

const ExpressionForm = () => {
  // main state for all the rules and the combinator in json format.
  const [expressions, setExpressions] = useState({
    rules: [
      {
        ruleType: "",
        operator: "",
        value: 0,
        score: 0,
      },
    ],
    combinator: "",
  });

  // state to manage the json view 
  const [showJSON, setShowJSON] = useState(false);

  // form submit button handler dunction
  const formSubmitHandler = (e) => {
    if(expressions.rules.length > 0) {

    }
    e.preventDefault();
    // setting the show json to true to show the json output
    setShowJSON(true);
  };

  // function to add a new expression 
  const handleAddExpression = () => {
    setExpressions((prevExpressions) => ({
      ...prevExpressions,
      rules: [
        ...prevExpressions.rules,
        {
          ruleType: "age",
          operator: ">",
          value: 0,
          score: 0,
        },
      ],
    }));
  };

  // function to store the selected combinator value
  const handleCombinatorChange = (e) => {
    const newCombinator = e.target.value;
    // setting the value to the expression state here only when the combinator value is changed
    setExpressions((prevExpressions) => ({
      ...prevExpressions,
      combinator: newCombinator,
    }));
  };

  // function to delete an expression
  const deleteExpressionHandler = (e,index) => {
    e.preventDefault();
    const newRules = expressions.rules.filter((rule, i) => i !== index);
    // updating the expression value after filtering the expression to delete
    setExpressions((prevExpressions) => ({
      ...prevExpressions,
      rules: newRules,
    }));
  };

  return (
    <div className='form-wrapper d-flex flex-column align-items-center justify-content-center p-5'>
     <h1 className="heading mb-3">Expression Engine UI</h1>
      <div>
        {expressions.rules.map((expression, index) => (
          // Form component ( adding new form component when ever the user clicks on add expression by mapping on the expression's rules array)
          // here we have passed all the props to handle the input change in the form component since all the states are created here only we have to pass it to the child component
          <Form
            key={index}
            index={index}
            ruleType={expression.ruleType}
            setRuleType={(value) => {
              // here we are updating the expression state as the user selects a rule type
              setExpressions((prevExpressions) => {
                const newExpressions = { ...prevExpressions };
                newExpressions.rules[index].ruleType = value;
                return newExpressions;
              });
            }}
            operator={expression.operator}
            setOperator={(value) => {
              // here we are updating the expression state as the user selects the operator
              setExpressions((prevExpressions) => {
                const newExpressions = { ...prevExpressions };
                newExpressions.rules[index].operator = value;
                return newExpressions;
              });
            }}
            value={expression.value}
            setValue={(value) => {
              // here we are updating the expression state as the user enters a value in the input field
              setExpressions((prevExpressions) => {
                const newExpressions = { ...prevExpressions };
                newExpressions.rules[index].value = value;
                return newExpressions;
              });
            }}
            score={expression.score}
            setScore={(value) => {
              // here we are updating the expression state as the user enters a score in the input field
              setExpressions((prevExpressions) => {
                const newExpressions = { ...prevExpressions };
                newExpressions.rules[index].score = value;
                return newExpressions;
              });
            }}
            deleteExpressionHandler={deleteExpressionHandler}
          />
        ))}
      </div>

      {/* COMBINATOR SECTION STARTS HERE */}
      <label htmlFor="combinator form-label">
      <h3>
      Combinator
      </h3>
        
        <select
        className='form-select'
          id="combinator"
          value={expressions.combinator}
          onChange={handleCombinatorChange}
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
      </label>
      {/* COMBINATOR SECTION ENDS HERE */}
          <br />
          <div className="d-flex justify-content-between mt-3 gap-5 ">
                 {/* Button to add a new expression/rule */}
      <button className='btn btn-primary' onClick={handleAddExpression}>Add Expression</button>

       {/* Button to finally submit after adding all the expressions and the combinator */}
       <button className='btn btn-primary ' onClick={(e) => formSubmitHandler(e)}>Submit</button>
          </div>
  

      {/* JSON OUTPUT SECTION STARTS HERE */}
      {showJSON && (
  <div className='card mt-5 p-3 w-100'>
    <h3 className='card-title mb-3'>JSON OUTPUT:</h3>
    <JSONView
      src={expressions}
      name={null}
      displayDataTypes={false}
      displayObjectSize={false}
      enableClipboard={false}
      style={{ background: "none", fontSize: "14px", color: "#fff" }}
    />
  </div>
)}
      {/* JSON OUTPUT SECTION ENDS HERE */}
    </div>
  );
};

export default ExpressionForm;
