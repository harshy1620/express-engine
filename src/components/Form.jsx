import React from "react";

const Form = ({
  ruleType,
  setRuleType,
  operator,
  setOperator,
  value,
  setValue,
  score,
  setScore,
  index,
  deleteExpressionHandler,
}) => {

  return (
    <form className='form card mb-3 p-5 gap-3 align-items-center justify-content-center'>
      <div className="d-flex flex-wrap">
        <div className="col-md-6 mb-3">
          <label htmlFor="rule-type" className='form-label'>
            Rule Type:
            <select
              className='form-select'
              id="rule-type"
              value={ruleType}
              onChange={(e) => setRuleType(e.target.value)}
            >
              <option value="age">Age</option>
              <option value="account-balance">Account Balance</option>
              <option value="credit-score">Credit Score</option>
            </select>
          </label>
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="operator" className='form-label'>
            Operator:
            <select
              className='form-select'
              id="operator"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value=">">{`>`}</option>
              <option value="<">{`<`}</option>
              <option value=">=">{`>=`}</option>
              <option value="<=">{`<=`}</option>
              <option value="=">{`=`}</option>
            </select>
          </label>
        </div>

        <div className="col-md-6 mb-3">
          <label htmlFor="value" className='form-label'>
            Value:
            <input
              className='form-control'
              type="number"
              name="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
        </div>

        <div className="col-md-6 mb-3 ">
          <label htmlFor="score" className='form-label'>
            Score:
            <input
              className='form-control'
              type="number"
              name="score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </label>
        </div>
      </div>

      <button className='btn btn-danger btn-sm mt-3 p-2' onClick={(e) => deleteExpressionHandler(e, index)}>Delete</button>
    </form>
  );
};

export default Form;
