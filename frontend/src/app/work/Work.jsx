import React from 'react';
import PT from 'prop-types';

const Work = ({ work }) => {
    if (!work) {
        return <noscript />;
    }
    const workRows = work ?
        Object.values(work).map((elm, inc) => (
            <tr className="table-row justify-content-between" key={`work-row-${inc}`}>
                <td>{elm.yearFrom} - {elm.yearTo}</td>
                <td>{elm.place}</td>
                <td>{elm.comment}</td>
            </tr>
        )) :
        <norcript />;
    return (
        <div className="work">
            <h2>Invoices</h2>
            <table>
                <thead>
                    <tr>
                        <th>For period</th>
                        <th>Responsible</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {workRows}
            </table>
        </div>
    );
};

Work.propTypes = {
    work: PT.arrayOf(PT.object)
};

export default Work;
