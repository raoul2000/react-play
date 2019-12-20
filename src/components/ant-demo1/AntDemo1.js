import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import locale from 'antd/es/date-picker/locale/fr_FR';

const AntDemo1 = () => {
    const handleOnChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <>
            <h1>Ant Demo 1</h1>
            <hr />
            <DatePicker locale={locale} onChange={handleOnChange} />
        </>
    );
};

export default AntDemo1;