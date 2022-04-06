import React from 'react';
import { useFormik } from 'formik';


function Replacements() {
    const formik = useFormik({})
    return (
        <div>
            <form>
                This is working
            </form>
        </div>
    )
}

export default Replacements;