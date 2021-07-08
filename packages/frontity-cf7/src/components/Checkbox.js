import React, { useContext } from "react";
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

/**
 * Select Dropdown.
 *
 * @param {Object} state Frontity state.
 * @param {Object} actions Actions.
 * @param {Object} inputProps Input props.
 *
 * @return {*}
 */
const Checkbox = ({ state, actions, inputProps }) => {
    // Context is used so that we can pass the form id to different components.
    const id = useContext(FormIdContext);
    const inputName = inputProps.name;
    let checked = false;

    if ("undefined" === typeof state.cf7.forms[id].inputVals[inputName]) {
        actions.cf7.changeInputValue({
            id,
            inputName,
            value: inputProps.value,
        });
    }

    /**
     * OnChange handler for input.
     *
     * @param {Object} event Event.
     *
     * @return {void}
     */
     const onChange = (event) => {
        actions.cf7.changeInputValue({
            id,
            inputName,
            value: event.target.checked,
        });
    };

    return (
        <span
            name={inputProps.name}
            className={inputProps.className}
            id={inputProps.id}
            aria-invalid={inputProps.ariaInvalid}
            aria-required={inputProps.ariaRequired}
            onChange={onChange}
            value={state.cf7.forms[id].inputVals[inputName]}
        >
            {inputProps.options.map((item, index) => (
                <span key={ index }>
                    <input type={ item.type } name={ item.name } value={ item.value } onChange={ onChange } checked={item.checked} />
                    <span>{ item.label }</span>
                </span>
            ))}
        </span>
    );
};

export default connect(Checkbox);
