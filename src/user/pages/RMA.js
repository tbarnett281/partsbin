import React, { useCallback } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import './RMA.css'


const RMA = () => {

    const titleInputHandler = useCallback((id, value, isValid) => {

    }, []);

    return <form className="place-form">
        <Input 
        element="input" 
        type="text" 
        label="Host Name" 
        validators={[VALIDATOR_REQUIRE()]} //requires a hostname to be input
        onInput={[]} 
        errorText="Please enter a valid host name."
        onInput = {titleInputHandler}
        />
        <Input 
        element="input" 
        type="text" 
        label="Hardware Type" 
        validators={[VALIDATOR_REQUIRE()]} 
        onInput={[]} 
        errorText="Please enter a hardware type (nvme, motherboard, etc.)."
        onInput = {titleInputHandler}
        />
        <Input 
        element="input" 
        type="text" 
        label="RMA Number" 
        validators={[VALIDATOR_REQUIRE()]} 
        onInput={[]} 
        errorText="Please enter a valid RMA number"
        onInput = {titleInputHandler}
        />
        <Input 
        element="input" 
        type="text" 
        label="RMA ID" 
        validators={[VALIDATOR_REQUIRE()]} 
        onInput={[]} 
        errorText="Please enter a valid RMA ID."
        onInput = {titleInputHandler}
        />
        <Input 
        element="input" 
        type="text" 
        label="Status" 
        validators={[VALIDATOR_REQUIRE()]} 
        onInput={[]} 
        errorText="Please enter a valid Status (Active / Closed)."
        onInput = {titleInputHandler}
        />
    </form>
};

export default RMA;
//npm install formik --save
//formik was installed, check it out for form features.