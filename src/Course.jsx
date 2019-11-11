import React from 'react';
import Curso from './Curso';
import withLoader from './HOC/withLoaderFunction';

const Course = ({data}) => (
    <>
        {
            data.map((item, key) => (
                <div className="wrapper-card" key={key}>
                    <Curso id={item.id}
                        title={item.title}
                        image={item.image}
                        categoria={item.categoria}
                    />
                </div>
            ))
        }
    </>
);

export default withLoader("data")(Course);
