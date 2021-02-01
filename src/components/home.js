import React from 'react';
import Flexi from './form';
const Home = () => {
    const flexiConfig = {

        items: [

            {

                "name": "person_name",

                "label": "Person's Name",

                "type": "text",

                "values": []

            },

            {

                "name": "person_email",

                "label": "Person's Email",

                "type": "email",

                "values": []

            },

            {

                "name": "states",

                "label": "Person's state",

                "type": "select",

                "values": [

                    "Maharashtra",

                    "Kerala",

                    "Tamil Nadu"

                ]

            }

        ]

    };

    const onFlexiSubmit = (formData)=>{
       console.log("formData",formData)
    }
    return (
        <>
            <Flexi onSubmit={onFlexiSubmit} config={flexiConfig} />

        </>
    )
}
export default Home
